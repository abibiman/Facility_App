import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
// @mui
import { Box, Button, Stack, Typography } from "@mui/material";
import Logo from "src/components/logo/logo-icon.png";

// ----------------------------------------------------------------------

export default function WelcomeScreen({ carousel }) {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",

        "@media (min-width: 500px)": {
          width: "500px",
          margin: "0 auto",
        },
      }}
    >
      <Box
        component="img"
        src={Logo}
        sx={{
          width: 100,
          height: 100,
          cursor: "pointer",
          borderRadius: "50%",
          padding: "10px",
          // boxShadow: ' rgba(0, 0, 0, 0.15) 0px 5px 10px',
          animation:
            "2s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal both running spin",
          "@keyframes spin": {
            "0%": {
              opacity: 0,
              transform: "scale(40) translate(0px, 945px)",
            },
            "100%": {
              opacity: 1,
              transform: "scale(1) translate(0px, 0px)",
            },
          },
        }}
      />

      <Box sx={{ marginTop: "20px" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "800", textAlign: "center" }}
        >
          Welcome To Telical
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            fontSize: "15px",
            marginTop: "10px",
            fontWeight: "400",
          }}
        >
          👋 Hello there! We&apos;re thrilled to have you on board. The next few
          screens will help us understand you better, ensuring a seamless and
          enjoyable journey. Your privacy matters to us.
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "250px", md: "400px" } }}>
        <Button
          color="primary"
          variant="contained"
          sx={{
            marginTop: "30px",
            border: `1px solid ${theme.palette.background.default}`,
            boxShadow: `0px 0px 0px 2px ${theme.palette.primary.main}`,
            width: "100%",
            padding: "10px",
          }}
          onClick={() => carousel.onNext()}
        >
          Get Started
        </Button>
      </Box>
      {/* <Typography
        variant="subtitle1"
        sx={{ textAlign: 'center', fontSize: '12px', marginTop: '20px' }}
      >
        Rest assured, any information you provide will be handled with the utmost care. Let&apos;s
        get started!
      </Typography> */}
    </Stack>
  );
}
