import { useContext, useEffect, useState } from "react";
// @mui
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
// hooks
import { AuthContext } from "src/auth/context/jwt";
// _mock
import { _appFeatured, _appointments } from "src/_mock";
// components
import { useSettingsContext } from "src/components/settings";
import customAxios from "src/utils/customAxios";
// assets
import { SeoIllustration } from "src/assets/illustrations";
//
import AppWelcome from "../welcome";
import AppAppointments from "../appointments";
import FromOurBlog from "../from-our-blog";
import DeviceUsage from "../device-usage";
import BloodPressureCard from "../blood-pressure-card";
import AppWidgetSummary from "../app-widget-summary";
import { useTheme } from "@mui/material/styles";
import newOrder from "src/assets/images/checklist.png";
import pendingOrder from "src/assets/images/clockwise.png";
import emergency from "src/assets/images/alarm.png";
import delayed from "src/assets/images/clock.png";
import completed from "src/assets/images/checked.png";
import waitOrder from "src/assets/images/wait.png";
import { de } from "date-fns/locale";
import { Box, Stack, Typography } from "@mui/material";
import { CalendarView } from "src/sections/calendar copy/view";
import HomeImageTwo from "src/assets/illustrations/facility-home-image.jpg";

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const theme = useTheme();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const settings = useSettingsContext();

  const getAllUserAppointments = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await customAxios.get(`/appointments/user/${user?.userID}`);

      setTableData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUserAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth={settings.themeStretch ? false : "xl"}>
      <Stack sx={{ width: "100%", height: "80px" }} />

      <Grid container spacing={3}>
        <Grid xs={12} md={12}>
          <Stack
            sx={{
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              padding: "25px 35px",
              backgroundImage: `url(${HomeImageTwo})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Stack
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, #1b3968, #1b3069, #1c266980, #1e236a5e, #20206a24)",
                borderRadius: "10px",
              }}
            />
            <Box
              sx={{
                zIndex: 5,
                width: "475px",
                "@media (max-width: 475px)": {
                  width: "100%",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ marginBottom: "10px", color: "#fff" }}
              >
                {`Welcome  👋 \n ${user?.title || ""} ${
                  user?.firstName || ""
                } ${user?.lastName || ""}`}
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                🌿 Here, you can effortlessly meet and monitor your patients,
                ensuring their health and well-being. 🌿
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* <Grid container spacing={3}> */}
        {/* <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="New Orders"
            percent={2.6}
            background="#C2CDF2"
            total={17}
            im={newOrder}
            chart={{
              series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Order In Progress"
            im={waitOrder}
            percent={0.2}
            background="#ff6c6c"
            total={12}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            im={completed}
            title="Completed Orders"
            percent={-0.1}
            background="#93d8d0"
            total={34}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Awaiting Results"
            im={pendingOrder}
            percent={-0.1}
            background="#6e9ce4"
            total={11}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
            }}
          />
        </Grid>

        <Grid xs={12} sx={{ my: 4 }}>
          <CalendarView />
        </Grid>

        {/* <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Delayed Orders"
            im={delayed}
            percent={-0.1}
            background="#c2e5f2"
            total={9}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Urgent Orders"
            im={emergency}
            percent={-0.1}
            background="#ffc7fc"
            total={5}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} lg={12}>
          <AppAppointments
            title="Emergency Orders"
            tableData={demoAPI}
            tableLabels={[
              { id: "id", label: "OrderID" },
              { id: "pat", label: "Patient" },
              { id: "dat", label: "Date (YYYY-MM-DD)" },
              { id: "typ", label: "Order Type" },
              { id: "prio", label: "Priority" },
            ]}
          />
        </Grid> */}

        {/* <Grid xs={12} lg={12}>
          <AppAppointments
            title="New Orders"
            tableData={demoAPI}
            tableLabels={[
              { id: "id", label: "Order ID" },
              { id: "pat", label: "Patient" },
              { id: "dat", label: "Date (YYYY-MM-DD)" },
              { id: "typ", label: "Order Type" },
              { id: "prio", label: "Priority" },
              { id: "prio", label: "" },
            ]}
          />
        </Grid> */}
      </Grid>
      {/* </Grid> */}
    </Container>
  );
}
