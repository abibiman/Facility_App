import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
// auth
import { GuestGuard } from "src/auth/guard";
// layouts
import CompactLayout from "src/layouts/compact";
import AuthClassicLayout from "src/layouts/auth/classic";
import AuthClassicAltLayout from "src/layouts/auth/classic-alt";

// components
import { SplashScreen } from "src/components/loading-screen";

// Illustrations

import LoginIllustration from "src/assets/illustrations/login-min.png";
import SignupIllustration from "src/assets/illustrations/signup.png";
import OTPIllustration from "src/assets/illustrations/otp-illustration-min.png";
import ForgotPasswordIllustration from "src/assets/illustrations/forgot-illustration-min.png";
import ResetIllustration from "src/assets/illustrations/reset-illustration-min.png";
import MainImg from "src/assets/illustrations/register-alt.jpg";

// ----------------------------------------------------------------------

// AMPLIFY
const AmplifyLoginPage = lazy(() => import("src/pages/auth/amplify/login"));
const AmplifyRegisterPage = lazy(() =>
  import("src/pages/auth/amplify/register")
);
const AmplifyVerifyPage = lazy(() => import("src/pages/auth/amplify/verify"));
const AmplifyNewPasswordPage = lazy(() =>
  import("src/pages/auth/amplify/new-password")
);
const AmplifyForgotPasswordPage = lazy(() =>
  import("src/pages/auth/amplify/forgot-password")
);

// JWT
const JwtLoginPage = lazy(() => import("src/pages/auth/jwt/login"));
const JwtRegisterPage = lazy(() => import("src/pages/auth/jwt/register"));
const JwtForgotPasswordView = lazy(() =>
  import("src/pages/auth/jwt/forgot-password")
);
const JwtVerifyPage = lazy(() => import("src/pages/auth/jwt/verify"));
const JwtResetPasswordPage = lazy(() =>
  import("src/pages/auth/jwt/reset-password")
);
const JwtOTPVerifyPage = lazy(() => import("src/pages/auth/jwt/otp-verify"));

// FIREBASE
const FirebaseLoginPage = lazy(() => import("src/pages/auth/firebase/login"));
const FirebaseRegisterPage = lazy(() =>
  import("src/pages/auth/firebase/register")
);
const FirebaseVerifyPage = lazy(() => import("src/pages/auth/firebase/verify"));
const FirebaseForgotPasswordPage = lazy(() =>
  import("src/pages/auth/firebase/forgot-password")
);

// AUTH0
const Auth0LoginPage = lazy(() => import("src/pages/auth/auth0/login"));
const Auth0Callback = lazy(() => import("src/pages/auth/auth0/callback"));

// ----------------------------------------------------------------------

const authAmplify = {
  path: "amplify",
  element: (
    <GuestGuard>
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    </GuestGuard>
  ),
  children: [
    {
      path: "login",
      element: (
        <AuthClassicLayout>
          <AmplifyLoginPage />
        </AuthClassicLayout>
      ),
    },
    {
      path: "register",
      element: (
        <AuthClassicLayout title="Manage the job more effectively with Minimal">
          <AmplifyRegisterPage />
        </AuthClassicLayout>
      ),
    },
    {
      element: (
        <CompactLayout>
          <Outlet />
        </CompactLayout>
      ),
      children: [
        { path: "verify", element: <AmplifyVerifyPage /> },
        { path: "new-password", element: <AmplifyNewPasswordPage /> },
        { path: "forgot-password", element: <AmplifyForgotPasswordPage /> },
      ],
    },
  ],
};

const authJwt = {
  path: "jwt",
  element: (
    <GuestGuard>
      <Suspense>
        <Outlet />
      </Suspense>
    </GuestGuard>
  ),
  children: [
    {
      path: "login",
      element: (
        <AuthClassicLayout
          show
          title="New Here?"
          text="Join us on a comprehensive journey to better health."
        >
          <JwtLoginPage />
        </AuthClassicLayout>
      ),
    },
    {
      path: "register",
      element: (
        <AuthClassicAltLayout
          show
          title="One of Us?"
          text=" If you have an account, sign in to make the most of our health services."
        >
          <JwtRegisterPage />
        </AuthClassicAltLayout>
      ),
    },
    {
      path: "forgot-password",
      element: (
        <AuthClassicAltLayout
          show={false}
          title="Lost Password?"
          text="It happens to the best of us. Don't worry, we've got you covered"
        >
          <JwtForgotPasswordView />
        </AuthClassicAltLayout>
      ),
    },
    {
      path: "reset-password",
      element: (
        <AuthClassicLayout
          show={false}
          title="New Password?"
          text="Create a secure and unique password for your account."
        >
          <JwtResetPasswordPage />
        </AuthClassicLayout>
      ),
    },
    {
      path: "verify",
      element: (
        <AuthClassicLayout
          show={false}
          text="Reset your password by following the instructions on the right."
          title=""
        >
          <JwtVerifyPage />
        </AuthClassicLayout>
      ),
    },
    {
      path: "otp-verify",
      element: (
        <AuthClassicLayout
          text="Enter the One Time Password (OTP) you received from Telical"
          title=""
        >
          <JwtOTPVerifyPage />
        </AuthClassicLayout>
      ),
    },
  ],
};

const authFirebase = {
  path: "firebase",
  element: (
    <GuestGuard>
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    </GuestGuard>
  ),
  children: [
    {
      path: "login",
      element: (
        <AuthClassicLayout>
          <FirebaseLoginPage />
        </AuthClassicLayout>
      ),
    },
    {
      path: "register",
      element: (
        <AuthClassicLayout title="Manage the job more effectively with Minimal">
          <FirebaseRegisterPage />
        </AuthClassicLayout>
      ),
    },
    {
      element: (
        <CompactLayout>
          <Outlet />
        </CompactLayout>
      ),
      children: [
        { path: "verify", element: <FirebaseVerifyPage /> },
        { path: "forgot-password", element: <FirebaseForgotPasswordPage /> },
      ],
    },
  ],
};

const authAuth0 = {
  path: "auth0",
  element: (
    <GuestGuard>
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    </GuestGuard>
  ),
  children: [
    {
      path: "login",
      element: (
        <AuthClassicLayout>
          <Auth0LoginPage />
        </AuthClassicLayout>
      ),
    },
    {
      path: "callback",
      element: <Auth0Callback />,
    },
  ],
};

export const authRoutes = [
  {
    path: "auth",
    children: [authAmplify, authJwt, authFirebase, authAuth0],
  },
];
