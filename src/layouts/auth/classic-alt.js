import PropTypes from "prop-types";
// @mui
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
// auth
import { keyframes } from "@emotion/react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "src/auth/hooks";
// routes
import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";
// hooks
import { useResponsive } from "src/hooks/use-responsive";
// theme
import bgGradient from "src/assets/images/tools.png";
import Logo from "src/components/logo";
// components

// ----------------------------------------------------------------------

export default function AuthClassicAltLayout({ children, text, title, show }) {
  const { method } = useAuthContext();

  const theme = useTheme();

  const [animate, setAnimate] = useState(false);

  const upMd = useResponsive("up", "md");
  const navigate = useNavigate();

  const handleNavigation = () => {
    setAnimate(true);

    setTimeout(() => {
      navigate(paths.auth.jwt.login);
    }, 1000);
  };

  const widthAnimation = keyframes`
   0% {
    width: 30%;
    right:0
  }
  100% {
    width: 80%;
    right:50%
  }
`;

  const contentAnimation = keyframes`
0% {
 left:0
}
100% {
 left:40%
}
`;

  const positionAnimation = keyframes`
0% {
    right: 0;
    opacity: 1;
  }
  100% {
    right: -100%;
    opacity: 0;
  }
`;

  const renderLogo = (
    <Logo
      sx={{
        zIndex: 9,
        position: "absolute",
        m: { xs: 2, md: 5 },
        mb: { md: 3 },
        mt: { md: 3 },
        display: { xs: "block", md: "none" },
      }}
    />
  );

  const renderContent = (
    <Stack
      sx={{
        // width: 1,
        flex: "70%",
        display: "flex",
        // justifyContent: 'center',
        alignItems: "center",
        mx: "auto",
        px: { xs: 2, md: 2 },
        py: { xs: 15, md: 15 },
      }}
    >
      <Logo
        sx={{
          zIndex: 9,
          position: "absolute",
          left: "0",
          top: "0",
          m: { xs: 2 },
          my: { md: 2 },
          display: { xs: "none", md: "block" },
          // mt: { md: 3 },
        }}
      />
      <Box
        sx={{
          position: "relative",
          animation: animate && `${contentAnimation} 5s 1`,
          width: "500px",
          "@media (max-width: 600px)": {
            width: "425px",
          },
          "@media (max-width: 500px)": {
            width: "100%",
          },
        }}
      >
        {children}
      </Box>
    </Stack>
  );

  const renderSection = (
    <Stack
      sx={{
        width: "30%",
        height: "100vh",
        flexDirection: "row",
        position: "fixed",
        right: "0",
        animation: animate && `${widthAnimation} 2s 1`,
        zIndex: 999,
        "@media (max-width: 1350px)": {
          width: "35%",
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${bgGradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          // width: '100vw',
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
      <Box
        sx={{
          width: "100%",
          background:
            theme.palette.mode === "light"
              ? "linear-gradient(253deg, #022b5e 0, #033585 100%)"
              : "linear-gradient(253deg, #1a6194 0, #021d4b 100%)",

          zindex: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            // justifyContent: 'center',
            alignItems: "center",
            marginTop: "30vh",
          }}
        >
          <Typography
            variant="h2"
            color="#f8f8f8"
            my="15px"
            sx={{
              fontSize: "48px",
              position: "relative",
              animation: animate && `${positionAnimation} 1s 1`,
              "@media (max-width: 1024px)": {
                fontSize: "35px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            color="#f8f8f8"
            my="5px"
            sx={{
              fontSize: "22px",
              maxWidth: "80%",
              textAlign: "center",
              position: "relative",
              animation: animate && `${positionAnimation} 1s 1`,
              "@media (max-width: 1024px)": {
                fontSize: "18px",
                maxWidth: "85%",
              },
            }}
          >
            {text}
          </Typography>

          {show && (
            <Button
              variant="contained"
              sx={{
                background: "#fff",
                color: "#000",
                width: "250px",
                marginTop: "25px",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  color: "#333",
                },
              }}
              onClick={handleNavigation}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Box>
    </Stack>
  );

  return (
    <>
      {upMd && renderSection}
      <Stack
        component="main"
        direction="row"
        sx={{
          minHeight: "100vh",
        }}
      >
        {renderContent}
        {/* {renderLogo} */}
        {upMd && <Box sx={{ flex: "30%" }} />}
      </Stack>
    </>
  );
}

AuthClassicAltLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
  show: PropTypes.bool,
};
