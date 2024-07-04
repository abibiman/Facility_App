import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useEffect, useContext, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// routes
import { useLocation } from "react-router";
import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";
import { useSearchParams, useRouter } from "src/routes/hooks";
import { AuthContext } from "src/auth/context/jwt";

// config
import { PATH_AFTER_LOGIN } from "src/config-global";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
import { useSnackbar } from "src/components/snackbar";

// auth
import { useAuthContext } from "src/auth/hooks";
// components
import FormProvider, { RHFTextField } from "src/components/hook-form";
import customAxios from "src/utils/customAxios";

// ----------------------------------------------------------------------

// ... (imports)

export default function JwtOTPVerifyView() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const location = useLocation();
  const isFromLoginPage =
    new URLSearchParams(location.search).get("fromLoginPage") === "true";
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo");

  const STORAGE_EMAIL = "email-temporary";
  const STORAGE_PHONE = "user_phone";
  const STORAGE_NAME = "user_name";

  const email = sessionStorage.getItem(STORAGE_EMAIL);
  const phone = sessionStorage.getItem(STORAGE_PHONE);
  const name = sessionStorage.getItem(STORAGE_NAME);

  // Create refs for each input field
  const firstDigitRef = useRef();
  const secondDigitRef = useRef();
  const thirdDigitRef = useRef();
  const fourthDigitRef = useRef();

  const LoginSchema = Yup.object().shape({
    // firstDigit: Yup.string().required('Please enter digit'),
    // secondDigit: Yup.string().required('Please enter digit'),
    // thirdDigit: Yup.string().required('Please enter digit'),
    // fourthDigit: Yup.string().required('Please enter digit'),
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    setValue,
  } = methods;

  const handleInput = (fieldName, e) => {
    const { value } = e.target;
    // Use setValue to update the form value for the specific field
    switch (fieldName) {
      case "firstDigit":
        setValue("firstDigit", value);
        if (value.length === 1) {
          secondDigitRef.current.focus();
        }
        break;
      case "secondDigit":
        setValue("secondDigit", value);
        if (value.length === 1) {
          thirdDigitRef.current.focus();
        } else if (value.length === 0) {
          firstDigitRef.current.focus();
        }
        break;
      case "thirdDigit":
        setValue("thirdDigit", value);
        if (value.length === 1) {
          fourthDigitRef.current.focus();
        } else if (value.length === 0) {
          secondDigitRef.current.focus();
        }
        break;
      case "fourthDigit":
        setValue("fourthDigit", value);
        if (value.length === 1) {
          firstDigitRef.current.focus();
        } else if (value.length === 0) {
          thirdDigitRef.current.focus();
        }
        break;
      default:
        break;
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const { firstDigit, secondDigit, thirdDigit, fourthDigit } = data;

    try {
      const res = await customAxios.post("/users/tests/verify-otp", {
        email,
        otp: `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`,
      });

      router.push(returnTo || paths.auth.jwt.login);
    } catch (error) {
      console.error(error);
      setErrorMsg(
        typeof error === "string" ? error : error.response.data.message
      );
      enqueueSnackbar("There seem to be an issue verifying your account", {
        variant: "error",
      });
      reset();
    }
  });

  const resendFunc = async () => {
    const reqObject = {
      email,
      phoneNumber: phone,
      name,
    };
    try {
      const res = await customAxios.post(`/users/tests/resend-otp`, reqObject);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isFromLoginPage) {
      resendFunc();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, px: 1 }}>
      <Typography variant="h4">Verify Your Account</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" sx={{ width: "100%" }}>
          We sent you a four-digit code. Enter the code to confirm your email.
        </Typography>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <Stack
        sx={{ display: "flex", flexDirection: "row", gap: "10px", mb: "15px" }}
      >
        <RHFTextField
          name="firstDigit"
          type="number"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]",
            maxLength: 1,
            style: {
              textAlign: "center",
              fontSize: "16px",
              border: "1px solid #00000040",
              borderRadius: "8px",
            },
            ref: firstDigitRef,
          }}
          onChange={(e) => handleInput("firstDigit", e)}
          required
        />
        <RHFTextField
          name="secondDigit"
          type="number"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]",
            maxLength: 1,
            style: {
              textAlign: "center",
              fontSize: "16px",
              border: "1px solid #00000040",
              borderRadius: "8px",
            },
            ref: secondDigitRef,
          }}
          onChange={(e) => handleInput("secondDigit", e)}
          required
        />
        <RHFTextField
          name="thirdDigit"
          type="number"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]",
            maxLength: 1,
            style: {
              textAlign: "center",
              fontSize: "16px",
              border: "1px solid #00000040",
              borderRadius: "8px",
            },
            ref: thirdDigitRef,
          }}
          onChange={(e) => handleInput("thirdDigit", e)}
          required
        />
        <RHFTextField
          name="fourthDigit"
          type="number"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]",
            maxLength: 1,
            style: {
              textAlign: "center",
              fontSize: "16px",
              border: "1px solid #00000040",
              borderRadius: "8px",
            },
            ref: fourthDigitRef,
          }}
          onChange={(e) => handleInput("fourthDigit", e)}
          required
        />
      </Stack>

      <LoadingButton
        fullWidth
        color="primary"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        aria-label="Verify"
      >
        Verify
      </LoadingButton>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">Didn&apos;t receive a code?</Typography>

        <Link component={RouterLink} onClick={resendFunc} variant="subtitle2">
          Resend
        </Link>
      </Stack>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}
