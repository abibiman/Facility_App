import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Autocomplete, Select, Grid, MenuItem } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

// assets
import { countries } from "src/assets/data";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// routes
import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";
import { useSearchParams, useRouter } from "src/routes/hooks";
// config
import { PATH_AFTER_LOGIN } from "src/config-global";
import { useSnackbar } from "src/components/snackbar";

// auth
import { useAuthContext } from "src/auth/hooks";
// components
import Iconify from "src/components/iconify";
import FormProvider, { RHFTextField } from "src/components/hook-form";

// ----------------------------------------------------------------------

export default function JwtRegisterView() {
  const { register } = useAuthContext();

  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState("");

  const searchParams = useSearchParams();

  const returnTo = searchParams.get("returnTo");

  const navigate = useNavigate();

  const password = useBoolean();

  const { enqueueSnackbar } = useSnackbar();

  const [selectedCountry, setSelectedCountry] = useState("");

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm Password is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\+\d+(\s\d+)*$/, "Invalid phone number"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    const selectedCountryData = countries.find(
      (country) => country.code === selectedCountry
    );
    if (selectedCountryData) {
      methods.setValue("phone", `+${selectedCountryData.phone} `);
    }
  }, [selectedCountry, methods]);

  // const onSubmit = handleSubmit(async (data) => {
  //   try {
  //     if (data.password === data.confirmPassword) {
  //       await register?.(data.email, data.password, data.firstName, data.lastName, data.phone);
  //       // enqueueSnackbar('Update success!');
  //       navigate(paths.auth.jwt.otpVerify);
  //     } else {
  //       setErrorMsg('Passwords do not match');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     reset();
  //     setErrorMsg(typeof error === 'string' ? error : error.response.data.message);
  //     // enqueueSnackbar('Update success!');
  //   }
  // });

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data.password === data.confirmPassword) {
        const res = await register?.(
          data.email,
          data.password,
          data.firstName,
          data.lastName,
          data.phone
        );

        if (res) {
          enqueueSnackbar("Registration successful");
          navigate(paths.auth.jwt.otpVerify);
        } else {
          setErrorMsg("Registration failed");
        }
      } else {
        setErrorMsg("Passwords do not match");
      }
    } catch (error) {
      reset();
      // const errorMessage =
      //   typeof error === 'string' ? error : error.response?.data?.message || 'An error occurred';
      // setErrorMsg(errorMessage);
      enqueueSnackbar(error.response?.data?.message);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">Get started absolutely free</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2"> Already have an account? </Typography>

        <Link
          href={paths.auth.jwt.login}
          component={RouterLink}
          variant="subtitle2"
        >
          Sign in
        </Link>
      </Stack>
    </Stack>
  );

  const renderTerms = (
    <Typography
      component="div"
      sx={{
        color: "text.secondary",
        mt: 2.5,
        typography: "caption",
        textAlign: "center",
      }}
    >
      {"By signing up, I agree to "}
      <Link underline="always" color="text.primary">
        Terms of Service
      </Link>
      {" and "}
      <Link underline="always" color="text.primary">
        Privacy Policy
      </Link>
      .
    </Typography>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2.5}>
        {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="phone"
          label="Phone Number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  sx={{
                    padding: "8px",
                    display: "flex",
                    flexDirection: "row",
                    height: "40px",
                    border: "none",
                  }}
                  renderValue={(value) => {
                    // Use the value (which is the selected country code) to find the corresponding country
                    const selectedCountryOption = countries.find(
                      (country) => country.code === value
                    );
                    if (selectedCountryOption) {
                      const { code } = selectedCountryOption;
                      return (
                        <Stack
                          container
                          alignItems="center"
                          sx={{
                            display: "flex",
                            // justifyContent: 'center',
                            // alignItems: 'center',
                            flexDirection: "row !important",
                          }}
                        >
                          <Grid item>
                            <Iconify
                              icon={`circle-flags:${code.toLowerCase()}`}
                              width={28}
                              sx={{ mr: 1 }}
                            />
                          </Grid>
                          {/* <Grid item>{`${code}`}</Grid> */}
                        </Stack>
                      );
                    }
                    return null;
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Country
                  </MenuItem>
                  {countries.map((country) => {
                    const { code, label, phone } = country;
                    return (
                      <MenuItem key={code} value={code}>
                        <Stack
                          container
                          alignItems="center"
                          sx={{
                            display: "flex",
                            // justifyContent: 'center',
                            // alignItems: 'center',
                            flexDirection: "row !important",
                          }}
                        >
                          <Grid item>
                            <Iconify
                              icon={`circle-flags:${code.toLowerCase()}`}
                              width={28}
                              sx={{ mr: 1 }}
                            />
                          </Grid>
                          <Grid item>{`${label} +${phone} `}</Grid>
                        </Stack>
                      </MenuItem>
                    );
                  })}
                </Select>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="password"
          label="Password"
          type={password.value ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify
                    icon={
                      password.value
                        ? "solar:eye-bold"
                        : "solar:eye-closed-bold"
                    }
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label="Confirm Password"
          type={password.value ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify
                    icon={
                      password.value
                        ? "solar:eye-bold"
                        : "solar:eye-closed-bold"
                    }
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Create account
        </LoadingButton>
      </Stack>
    </FormProvider>
  );

  return (
    <>
      {renderHead}

      {renderForm}

      {renderTerms}
    </>
  );
}
