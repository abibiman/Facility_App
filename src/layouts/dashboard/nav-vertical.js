import PropTypes from "prop-types";
import { useEffect } from "react";
// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
// hooks
import { useResponsive } from "src/hooks/use-responsive";
// hooks
import { useMockedUser } from "src/hooks/use-mocked-user";

// components
import Logo from "src/components/logo";
import { useTheme } from "@mui/material/styles";
import Scrollbar from "src/components/scrollbar";
import { usePathname } from "src/routes/hooks";
import { NavSectionVertical } from "src/components/nav-section";
//
import { NAV } from "../config-layout";
import { useNavData } from "./config-navigation";
import { NavToggleButton, NavUpgrade } from "../_common";
import { Divider, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function NavVertical({ openNav, onCloseNav }) {
  const { user } = useMockedUser();
  const theme = useTheme();

  const pathname = usePathname();

  const lgUp = useResponsive("up", "lg");

  const navData = useNavData();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* <Logo sx={{ mt: 15, ml: 4, mb: 1 }} /> */}
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "#bdbec7", margin: "15px" }}
      >
        Laboratory App
      </Typography>

      {/* <Box sx={{ flexGrow: 0.5 }} /> */}
      <NavSectionVertical
        data={navData}
        config={{
          currentRole: user?.role || "admin",
        }}
        sx={{ flexGrow: 1 }}
      />

      <NavUpgrade />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(to right top, #1b2c68, #1b2969, #1c2669, #1e236a, #20206a)"
            : theme.palette.background.paper,
      }}
    >
      <NavToggleButton />

      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.W_VERTICAL,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

NavVertical.propTypes = {
  onCloseNav: PropTypes.func,
  openNav: PropTypes.bool,
};
