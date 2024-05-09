import PropTypes from "prop-types";
// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// utils
import { fShortenNumber, fCurrency } from "src/utils/format-number";
// components
import Iconify from "src/components/iconify";
import Image from "src/components/image";

// ----------------------------------------------------------------------

export default function TransactionAnalytic({
  title,
  total,
  icon,
  color,
  percent,
  price,
}) {
  return (
    <Stack
      spacing={2.5}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: 1, minWidth: 200 }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative" }}
      >
        {/* <Iconify icon={icon} width={32} sx={{ color, position: "absolute" }} /> */}
        {/* <Box variant="img" src={icon} height={25} width={25} /> */}
        <Image
          alt={title}
          src={icon}
          height={45}
          width={45}
          // sx={{ borderRadius: 2 }}
        />

        {/* <CircularProgress
          variant="determinate"
          value={percent}
          size={56}
          thickness={2}
          // sx={{ color, opacity: 0.48 }}
          sx={{
            top: 0,
            left: 0,
            opacity: 0.48,
            position: "absolute",
            color,
          }}
        /> */}

        {/* <CircularProgress
          variant="determinate"
          value={100}
          size={56}
          thickness={3}
          sx={{
            top: 0,
            left: 0,
            opacity: 0.48,
            position: "absolute",
            color: (theme) => alpha(theme.palette.grey[500], 0.16),
          }}
        /> */}
      </Stack>

      <Stack spacing={0.5}>
        <Typography variant="subtitle1">{title}</Typography>

        <Box
          component="span"
          sx={{ color: "text.disabled", typography: "body2" }}
        >
          {fShortenNumber(total)} lab orders
        </Box>

        <Typography variant="subtitle2">GH₵ {fCurrency(price)}</Typography>
      </Stack>
    </Stack>
  );
}

TransactionAnalytic.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  percent: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  total: PropTypes.number,
};
