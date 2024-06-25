import PropTypes from "prop-types";
import { forwardRef } from "react";
// @mui
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
// routes
import { RouterLink } from "src/routes/components";
import LogoTelical from "./Official-Telical-Logo-alt.png";

// ----------------------------------------------------------------------

const LogoWhite = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  // using local (public folder)
  // -------------------------------------------------------
  const logo = (
    <Box
      component="img"
      // src="/logo/2.png"
      src={LogoTelical}
      sx={{
        width: 150,
        height: 40,
        cursor: "pointer",
        filter: "grayscale(100%) saturate(100%) contrast(55%) brightness(200%)",
        ...sx,
      }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

LogoWhite.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default LogoWhite;
