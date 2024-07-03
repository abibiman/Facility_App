import PropTypes from "prop-types";
import { useCallback, useContext, useEffect } from "react";
import { useRouter, useSearchParams } from "src/routes/hooks";
import { AuthContext } from "src/auth/context/jwt";
import { paths } from "src/routes/paths";
import { useAuthContext } from "../hooks";

export default function OnboardingGuard({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo") || paths.dashboard.root;
  const loginPage = paths.auth.jwt.login;
  const { authenticated } = useAuthContext();
  const { user } = useContext(AuthContext) || {};
  const { onBoarding } = user || {};

  const check = useCallback(() => {
    if (!authenticated) {
      router.replace(loginPage);
    } else if (onBoarding !== "complete") {
      router.replace(paths.onboarding);
    } else {
      router.replace(returnTo);
    }
  }, [authenticated, onBoarding, router, loginPage, returnTo]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}

OnboardingGuard.propTypes = {
  children: PropTypes.node,
};
