// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// theme
import { hideScroll } from "src/theme/css";
// hooks
import { useMockedUser } from "src/hooks/use-mocked-user";
import { useTheme } from "@mui/material/styles";
// components
import LogoAlt from "src/components/logo/logo-alt";
import { NavSectionMini } from "src/components/nav-section";
//
import { NAV } from "../config-layout";
import { useNavData } from "./config-navigation";
import { NavToggleButton } from "../_common";
import { height, width } from "@mui/system";

// ----------------------------------------------------------------------

export default function NavMini() {
  const { user } = useMockedUser();
  const theme = useTheme();

  const navData = useNavData();

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_MINI },
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(to right top, #1b2c68, #1b2969, #1c2669, #1e236a, #20206a)"
            : theme.palette.background.paper,
      }}
    >
      <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: "fixed",
          width: NAV.W_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScroll.x,
        }}
      >
        <LogoAlt sx={{ mx: "auto", my: 2, width: 35, height: "auto" }} />

        <NavSectionMini
          data={navData}
          config={{
            currentRole: user?.role || "admin",
          }}
        />
      </Stack>
    </Box>
  );
}
