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
  loading: true,
  userID: null,
  facilityID: null,
  onboardingData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.data,
        userID: action.payload.data.userID,
        facilityID: action.payload.data.facilityID,
      };
    case "REGISTER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        user: null,
        userID: null,
        facilityID: null,
      };
    case "ONBOARDING":
      return {
        ...state,
        onboardingData: action.payload.user,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const STORAGE_KEY = "accessToken";
const STORAGE_EMAIL = "email-temporary";

export function AuthProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = sessionStorage.getItem(STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if (userInfo) {
          dispatch({
            type: "INITIAL",
            payload: {
              user: userInfo,
            },
          });
        } else if (state.userID) {
          console.log("working");
          const onboardingInfo = JSON.parse(
            localStorage.getItem("onboardingInfo")
          );
          const response = await customAxios.get(
            `/facility/fetch/${onboardingInfo.facilityID}`
          );

          console.log(response);

          const userInfo = response.data.data;
          const data = { ...userInfo, token: accessToken };
          localStorage.setItem("userInfo", JSON.stringify(data));

          dispatch({
            type: "INITIAL",
            payload: {
              user: userInfo,
            },
          });

          // dispatch({
          //   type: "ONBOARDING",
          //   payload: onboardingInfo,
          // });
        }
      } else {
        setSession(null);
        localStorage.removeItem("userInfo");
        dispatch({ type: "LOGOUT" });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "LOGOUT" });
    }
  }, [state.userID]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const login = useCallback(async (email, password) => {
    try {
      let data = { email, password };
      const response = await customAxios.post("/auth/facility/login", data);
      const { token, firstName, lastName, phoneNumber, userID, facilityID } =
        response.data.data;

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
      localStorage.setItem("onboardingInfo", JSON.stringify(data));

      dispatch({
        type: "LOGIN",
        payload: { data },
      });

      dispatch({
        type: "ONBOARDING",
        payload: { user: response.data.data },
      });

      return response;
    } catch (error) {
      enqueueSnackbar("Login error:", error);
      throw error;
    }
  }, []);

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

        dispatch({
          type: "REGISTER",
          payload: { user },
        });

        return response;
      } catch (error) {
        enqueueSnackbar(error.response.data.message || "An error has occurred");
        throw error;
      }
    },
    []
  );

  const logout = useCallback(() => {
    setSession(null);
    localStorage.removeItem("userInfo");
    dispatch({ type: "LOGOUT" });
    // window.location.reload(); // Refresh page after logout
  }, []);

  // UPDATE
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);
  const updateUser = useCallback(async () => {
    console.log("Working");
    try {
      const response = await customAxios.get(
        `/facility/fetch/${userInfo.facilityID}`
      );
      console.log(response);
      const updatedUser = response.data.data;
      localStorage.setItem("userInfo", JSON.stringify(updatedUser));

      dispatch({
        type: "UPDATE_USER",
        payload: { user: updatedUser },
      });
      // }
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  }, [userInfo]);

  const status = state.loading
    ? "loading"
    : state.user
    ? "authenticated"
    : "unauthenticated";

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      userInfo: state.userInfo,
      method: "jwt",
      loading: status === "loading",
      authenticated: status === "authenticated",
      unauthenticated: status === "unauthenticated",
      onboardingData: state.onboardingData,
      login,
      register,
      logout,
      updateUser,
    }),
    [
      login,
      logout,
      register,
      state.user,
      state.userInfo,
      status,
      state.onboardingData,
      updateUser,
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

// "use client";

// import PropTypes from "prop-types";
// import { useEffect, useReducer, useCallback, useMemo } from "react";
// // utils
// import axios, { endpoints } from "src/utils/axios";
// import customAxios from "src/utils/customAxios";
// import { useSnackbar } from "src/components/snackbar";
// //
// import { paths } from "src/routes/paths";
// import { AuthContext } from "./auth-context";
// import { isValidToken, setSession } from "./utils";

// const initialState = {
//   user: null,
//   // userInfo: null,
//   loading: true,
//   userID: null,
//   facilityID: null,
//   onboardingData: null, // Add this line
// };

// const reducer = (state, action) => {
//   if (action.type === "INITIAL") {
//     return {
//       ...state,
//       loading: false,
//       user: action.payload.user,
//     };
//   }
//   if (action.type === "LOGIN") {
//     return {
//       ...state,
//       user: action.payload.data,
//       userID: action.payload.data.userID,
//       facilityID: action.payload.data.facilityID,
//     };
//   }
//   if (action.type === "REGISTER") {
//     return {
//       ...state,
//       user: action.payload.user,
//     };
//   }
//   if (action.type === "LOGOUT") {
//     return {
//       ...state,
//       loading: false,
//       user: null,
//     };
//   }
//   if (action.type === "ONBOARDING") {
//     return {
//       ...state,
//       onboardingData: action.payload.user,
//     };
//   }
//   return state;
// };

// // ----------------------------------------------------------------------

// const STORAGE_KEY = "accessToken";
// const STORAGE_EMAIL = "email-temporary";

// export function AuthProvider({ children }) {
//   const { enqueueSnackbar } = useSnackbar();

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const initialize = useCallback(async () => {
//     try {
//       const accessToken = sessionStorage.getItem(STORAGE_KEY);

//       if (accessToken && isValidToken(accessToken)) {
//         if (state.userID) {
//           setSession(accessToken);

//           const response = await customAxios.get(
//             `/facility/fetch/${state.facilityID}`
//           );

//           console.log(response);

//           const userInfo = response.data.data;

//           // const data = { ...userInfo, token: accessToken };

//           console.log("working");
//           window.localStorage.setItem("userInfo", JSON.stringify(userInfo));

//           dispatch({
//             type: "INITIAL",
//             payload: {
//               user: userInfo,
//             },
//           });
//         } else {
//           const userInfo = JSON.parse(localStorage.getItem("userInfo"));

//           dispatch({
//             type: "INITIAL",
//             payload: {
//               user: userInfo,
//             },
//           });
//         }
//       } else {
//         setSession(null);
//         localStorage.removeItem("userInfo");
//         // window.location.href = paths.auth.jwt.login;

//         dispatch({
//           type: "LOGOUT",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       dispatch({
//         type: "LOGOUT",
//         // payload: {
//         //   user: null,
//         // },
//       });
//     }
//   }, [state.userID, state.facilityID]);

//   useEffect(() => {
//     initialize();
//   }, [initialize]);

//   // LOGIN
//   const login = useCallback(async (email, password) => {
//     try {
//       let data = {
//         email,
//         password,
//       };

//       const response = await customAxios.post("/auth/facility/login", data);
//       const { token, firstName, lastName, phoneNumber, userID, facilityID } =
//         response?.data?.data;
//       console.log(response);
//       data = {
//         ...data,
//         firstName,
//         lastName,
//         phoneNumber,
//         userID,
//         facilityID,
//         token,
//       };

//       setSession(token);
//       dispatch({
//         type: "LOGIN",
//         payload: {
//           data,
//         },
//       });

//       dispatch({
//         type: "ONBOARDING",
//         payload: {
//           user: response?.data?.data,
//         },
//       });

//       return response;
//     } catch (error) {
//       enqueueSnackbar("Login error:", error);
//       throw error;
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // REGISTER
//   const register = useCallback(
//     async (email, password, firstName, lastName, phoneNumber) => {
//       try {
//         const data = {
//           email,
//           password,
//           firstName,
//           lastName,
//           phoneNumber,
//           role: "Facility",
//           facilityUserRole: "Admin",
//         };

//         const response = await customAxios.post(
//           "/auth/facility/register",
//           data
//         );

//         const { accessToken, user } = response.data;

//         sessionStorage.setItem(STORAGE_KEY, accessToken);
//         sessionStorage.setItem(STORAGE_EMAIL, email);

//         // if (response.status !== 200) {
//         //   throw new Error(`Request failed with status ${response.status}`);
//         // }

//         dispatch({
//           type: "REGISTER",
//           payload: {
//             user,
//           },
//         });
//         return response;
//         // return true;
//       } catch (error) {
//         enqueueSnackbar(error.response.data.message || "An error has occurred");
//         throw error;
//       }
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     []
//   );

//   // LOGOUT
//   const logout = useCallback(async () => {
//     setSession(null);
//     localStorage.removeItem("userInfo");
//     dispatch({
//       type: "LOGOUT",
//     });
//   }, []);

//   // ----------------------------------------------------------------------

//   const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";

//   const status = state.loading ? "loading" : checkAuthenticated;

//   const memoizedValue = useMemo(
//     () => ({
//       user: state.user,
//       userInfo: state.userInfo,
//       method: "jwt",
//       loading: status === "loading",
//       authenticated: status === "authenticated",
//       unauthenticated: status === "unauthenticated",
//       onboardingData: state.onboardingData,
//       //
//       login,
//       register,
//       logout,
//     }),
//     [
//       login,
//       logout,
//       register,
//       state.user,
//       state.userInfo,
//       status,
//       state.onboardingData,
//     ]
//   );

//   return (
//     <AuthContext.Provider value={memoizedValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// AuthProvider.propTypes = {
//   children: PropTypes.node,
// };
