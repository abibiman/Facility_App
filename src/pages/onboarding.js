import { Helmet } from "react-helmet-async";
// sections
import OnboardingView from "../sections/onboarding/view";

// ----------------------------------------------------------------------

export default function OnboardingPage() {
  return (
    <>
      <Helmet>
        <title> Onboarding: Welcome to Telical</title>
      </Helmet>

      <OnboardingView />
    </>
  );
}
