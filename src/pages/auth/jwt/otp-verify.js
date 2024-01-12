import { Helmet } from 'react-helmet-async';
// sections
import { JwtOTPVerifyView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function JwtOTPVerifyPage() {
  return (
    <>
      <Helmet>
        <title> Jwt: OTP-Verify</title>
      </Helmet>

      <JwtOTPVerifyView />
    </>
  );
}
