import PropTypes from "prop-types";
// @mui
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
// auth
import { useAuthContext } from "src/auth/hooks";
// routes
import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";
// hooks
import { useResponsive } from "src/hooks/use-responsive";
// theme
import { bgGradient } from "src/theme/css";
// components
import Logo from "src/components/logo";

// ----------------------------------------------------------------------

const METHODS = [
  {
    id: "jwt",
    label: "Patient Login",
    path: paths.auth.jwt.login,
    icon: "/assets/icons/auth/examination.png",
  },
  {
    id: "firebase",
    label: "Doctor Login",
    path: "#",
    icon: "/assets/icons/auth/doctor.png",
  },
  {
    id: "amplify",
    label: "Pharmacy Login",
    path: "#",
    icon: "/assets/icons/auth/pharmacy.png",
  },
  {
    id: "auth0",
    label: "Hospital Login",
    path: "#",
    icon: "/assets/icons/auth/hospital.png",
  },
];

export default function AuthClassicLayout({ children, image, title }) {
  const { method } = useAuthContext();

  const theme = useTheme();

  const upMd = useResponsive("up", "md");

  const renderLogo = (
    // <Logo
    //   sx={{
    //     zIndex: 9,
    //     position: 'absolute',
    //     m: { xs: 2, md: 5 },
    //     mb: { md: 0 },
    //     mt: { md: 0 },
    //     width: 100,
    //     height: 100,
    //   }}
    // />
    <Logo
      sx={{
        zIndex: 9,
        position: "absolute",
        m: { xs: 2, md: 5 },
        mb: { md: 1 },
        mt: { md: 3 },
        display: { xs: "block", md: "none" },
      }}
    />
  );

  const renderContent = (
    <Stack
      sx={{
        width: 1,
        mx: "auto",
        maxWidth: 500,
        px: { xs: 2, md: 2 },
        py: { xs: 15, md: 3 },
      }}
    >
      <Logo
        sx={{
          zIndex: 9,
          // position: 'absolute',
          m: { xs: 2, md: "0 auto" },
          mb: { md: 5 },
          display: { xs: "none", md: "block" },
          // mt: { md: 3 },
        }}
      />
      {children}
    </Stack>
  );

  const renderSection = (
    <Stack
      flexGrow={0.95}
      alignItems="center"
      justifyContent="center"
      spacing={10}
      sx={{
        // position: 'relative',
        height: "100vh",
        maxWidth: "90%",
        zIndex: 8,
        position: "sticky",
        top: 0,
        "@media (max-width: 1200px)": {
          maxWidth: "60%",
        },
        // ...bgGradient({
        //   color: alpha(
        //     theme.palette.background.default,
        //     theme.palette.mode === 'light' ? 0.88 : 0.94
        //   ),
        //   // imgUrl: '/assets/background/overlay_3.jpg',
        //   imgUrl: 'src/assets/illustrations/phone-pills-collection.jpg',
        // }),
        backgroundImage: `url(${image})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h3" sx={{ maxWidth: 480, textAlign: "center" }}>
        {title}
      </Typography>

      <Stack
        sx={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "100%",
          backgroundColor:
            theme.palette.mode === "light" ? "transparent" : "#0000000d",
        }}
      />

      {/* <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        {METHODS.map((option) => (
          <Tooltip key={option.label} title={option.label}>
            <Link component={RouterLink} href={option.path}>
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{
                  width: 32,
                  height: 32,
                  ...(method !== option.id && {
                    filter: 'grayscale(0%)',
                  }),
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Stack> */}
    </Stack>
  );

  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        minHeight: "100vh",
      }}
    >
      {renderLogo}

      {upMd && renderSection}

      {renderContent}
    </Stack>
  );
}

AuthClassicLayout.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.string,
};
