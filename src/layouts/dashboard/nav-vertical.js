import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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
import { Avatar, Divider, IconButton, Typography } from "@mui/material";
import { useAuthContext } from "src/auth/hooks";
import { useUserDetails } from "src/context/user-context";
import customAxios from "src/utils/customAxios";

// ----------------------------------------------------------------------

export default function NavVertical({ openNav, onCloseNav }) {
  const theme = useTheme();

  const pathname = usePathname();

  const lgUp = useResponsive("up", "lg");

  const navData = useNavData();

  const { user } = useAuthContext();

  const { setUserDetails, userDetails } = useUserDetails();

  const { token, facilityID } = user || {};

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const [userData, setUserData] = useState({});
  const getOneUser = async () => {
    const {
      data: { data },
    } = await customAxios.get(`/facility/fetch/${facilityID}`);
    setUserData(data);
    setUserDetails(data);
  };

  useEffect(() => {
    if (!userDetails?.photo) getOneUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(userData, userDetails);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
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

      <Stack flex flexDirection="column" alignItems="center" m="15px">
        <Avatar
          src={userDetails?.photo || userData?.photo}
          alt={`${userData?.faciltyName || ""} `}
          sx={{
            width: 50,
            height: 50,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        />
        <Typography color="#fff" mt="10px">
          {userDetails?.faciltyName || userData?.faciltyName || ""}
        </Typography>

        <NavUpgrade />
      </Stack>
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
