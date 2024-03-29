import PropTypes from "prop-types";
// @mui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
// utils
import { fNumber, fPercent } from "src/utils/format-number";
// components
import Iconify from "src/components/iconify";
import Chart from "src/components/chart";
import newOrder from "src/assets/images/checklist.png";
import pendingOrder from "src/assets/images/work-in-progress.png";
import emergency from "src/assets/images/alarm.png";
import delayed from "src/assets/images/clock.png";
import completed from "src/assets/images/checked.png";
import waitOrder from "src/assets/images/wait.png";

// ----------------------------------------------------------------------

export default function AppWidgetSummary({
  title,
  percent,
  total,
  chart,
  im,
  sx,
  background,
  ...other
}) {
  const theme = useTheme();

  const {
    colors = [theme.palette.primary.light, theme.palette.primary.main],
    series,
    options,
  } = chart;

  const chartOptions = {
    colors: colors.map((colr) => colr[1]),
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          { offset: 0, color: colors[0] },
          { offset: 100, color: colors[1] },
        ],
      },
    },
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "68%",
        borderRadius: 2,
      },
    },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (value) => fNumber(value),
        title: {
          formatter: () => "",
        },
      },
      marker: { show: false },
    },
    ...options,
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 3,
        color: background,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{title}</Typography>

        <Stack direction="row" alignItems="center" sx={{ mt: 2, mb: 1 }}>
          <Typography component="div" variant="subtitle2">
            {percent > 0 && ""}
          </Typography>
        </Stack>

        <Typography variant="h3">{fNumber(total)}</Typography>
      </Box>

      <img alt="im" src={im} width={40} height={36} />
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  chart: PropTypes.object,
  percent: PropTypes.number,
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
