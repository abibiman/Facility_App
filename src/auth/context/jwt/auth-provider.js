"use client";

import PropTypes from "prop-types";
import { useEffect, useReducer, useCallback, useMemo } from "react";
// utils
import axios, { endpoints } from "src/utils/axios";
import customAxios from "src/utils/customAxios";
import { useSnackbar } from "src/components/snackbar";
//
import { paths } from "src/routes/paths";
import { AuthContext } from "./auth-context";
import { isValidToken, setSession } from "./utils";

const initialState = {
  user: null,
  userInfo: null,
  loading: true,
  userID: null,
  onboardingData: null, // Add this line
};

const reducer = (state, action) => {
  if (action.type === "INITIAL") {
    return {
      ...state,
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      user: action.payload.data,
      userID: action.payload.data.userID,
      facilityID: action.payload.data.facilityID,
    };
  }
  if (action.type === "REGISTER") {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      loading: false,
      user: null,
    };
  }
  if (action.type === "ONBOARDING") {
    return {
      ...state,
      onboardingData: action.payload.user,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

const STORAGE_KEY = "accessToken";
const STORAGE_EMAIL = "email-temporary";

export function AuthProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();

  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = sessionStorage.getItem(STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        if (state.userID) {
          setSession(accessToken);

          const response = await customAxios.get(
            `/facility/fetch/${state.facilityID}`,
            {
              headers: {
                Authorization: `Basic ${accessToken}`,
              },
            }
          );

          console.log(response);

          const userInfo = response.data.data;

          const data = { ...userInfo, token: accessToken };
          localStorage.setItem("userInfo", JSON.stringify(data));

          dispatch({
            type: "INITIAL",
            payload: {
              userInfo,
            },
          });
        } else {
          const userInfo = JSON.parse(localStorage.getItem("userInfo"));

          dispatch({
            type: "INITIAL",
            payload: {
              user: userInfo,
            },
          });
        }
      } else {
        setSession(null);
        localStorage.removeItem("userInfo");
        // window.location.href = paths.auth.jwt.login;

        dispatch({
          type: "LOGOUT",
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "LOGOUT",
        // payload: {
        //   user: null,
        // },
      });
    }
  }, [state.userID, state.facilityID]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email, password) => {
    try {
      let data = {
        email,
        password,
      };

      const response = await customAxios.post("/auth/facility/login", data);
      const { token, firstName, lastName, phoneNumber, userID, facilityID } =
        response?.data?.data;
      console.log(response);
      data = {
        ...data,
        firstName,
        lastName,
        phoneNumber,
        userID,
        facilityID,
        token,
      };

      setSession(token);
      dispatch({
        type: "LOGIN",
        payload: {
          data,
        },
      });

      dispatch({
        type: "ONBOARDING",
        payload: {
          user: response?.data?.data,
        },
      });

      return response;
    } catch (error) {
      enqueueSnackbar("Login error:", error);
      throw error;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // REGISTER
  const register = useCallback(
    async (email, password, firstName, lastName, phoneNumber) => {
      try {
        const data = {
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
          role: "Facility",
          facilityUserRole: "Admin",
        };

        const response = await customAxios.post(
          "/auth/facility/register",
          data
        );

        const { accessToken, user } = response.data;

        sessionStorage.setItem(STORAGE_KEY, accessToken);
        sessionStorage.setItem(STORAGE_EMAIL, email);

        // if (response.status !== 200) {
        //   throw new Error(`Request failed with status ${response.status}`);
        // }

        dispatch({
          type: "REGISTER",
          payload: {
            user,
          },
        });
        return response;
        // return true;
      } catch (error) {
        enqueueSnackbar(error.response.data.message || "An error has occurred");
        throw error;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // LOGOUT
  const logout = useCallback(async () => {
    setSession(null);
    localStorage.removeItem("userInfo");
    dispatch({
      type: "LOGOUT",
    });
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";

  const status = state.loading ? "loading" : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      userInfo: state.userInfo,
      method: "jwt",
      loading: status === "loading",
      authenticated: status === "authenticated",
      unauthenticated: status === "unauthenticated",
      onboardingData: state.onboardingData,
      //
      login,
      register,
      logout,
    }),
    [
      login,
      logout,
      register,
      state.user,
      state.userInfo,
      status,
      state.onboardingData,
    ]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
