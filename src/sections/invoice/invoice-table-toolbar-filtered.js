import PropTypes from "prop-types";
import { useCallback } from "react";
// @mui
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import DialogActions from "@mui/material/DialogActions";
import CircularProgress from "@mui/material/CircularProgress";
// components
import Iconify from "src/components/iconify";
import CustomPopover, { usePopover } from "src/components/custom-popover";
import { useBoolean } from "src/hooks/use-boolean";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./invoice-pdf";
import { _invoices } from "src/_mock";
import { shortDateLabel } from "src/components/custom-date-range-picker";
import Chip from "@mui/material/Chip";
import { Paper } from "@mui/material";
import { fDate } from "src/utils/format-time";

// ----------------------------------------------------------------------

export default function InvoiceTableToolbar({
  filters,
  onFilters,
  total,
  startDate,
  endDate,
}) {
  const popover = usePopover();

  const shortLabel = shortDateLabel(startDate, endDate);

  const handleFilterName = useCallback(
    (event) => {
      onFilters("name", event.target.value);
    },
    [onFilters]
  );

  const handleFilterService = useCallback(
    (event) => {
      onFilters(
        "service",
        typeof event.target.value === "string"
          ? event.target.value.split(",")
          : event.target.value
      );
    },
    [onFilters]
  );

  const handleFilterStartDate = useCallback(
    (newValue) => {
      onFilters("startDate", newValue);
    },
    [onFilters]
  );

  const handleFilterEndDate = useCallback(
    (newValue) => {
      onFilters("endDate", newValue);
    },
    [onFilters]
  );

  const view = useBoolean();

  const currentInvoice = _invoices.filter(
    (invoice) => invoice.id === "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b20"
  )[0];

  return (
    <>
      <Stack
        spacing={2}
        alignItems={{ xs: "flex-end", md: "center" }}
        direction={{
          xs: "column",
          md: "row",
        }}
        sx={{
          p: 2.5,
          pr: { xs: 2.5, md: 1 },
        }}
      >
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          spacing={2}
          flexGrow={1}
          sx={{ width: 1 }}
        >
          <Block label="Date:">
            <Chip
              size="small"
              label={shortLabel}
              icon={<Iconify icon="lets-icons:date-range-fill" />}
              // color="primary"
              // variant="outlined"
              sx={{
                padding: "15px !important",
              }}
            />
          </Block>

          <Block label="Total:">
            <Chip
              size="small"
              label={`GH₵ ${total.toFixed(2)}`}
              // color="primary"
              // variant="outlined"
              sx={{
                padding: "15px !important",
              }}
            />
          </Block>

          <IconButton onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </Stack>
      </Stack>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: "auto" }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
            view.onTrue();
          }}
        >
          <Iconify icon="carbon:view-filled" />
          View
        </MenuItem>

        <PDFDownloadLink
          document={
            <InvoicePDF invoice={currentInvoice} currentStatus="paid" />
          }
          fileName={currentInvoice.invoiceNumber}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="vscode-icons:file-type-pdf2" />
            Download PDF
          </MenuItem>
        </PDFDownloadLink>
      </CustomPopover>

      <Dialog fullScreen open={view.value}>
        <Box sx={{ height: 1, display: "flex", flexDirection: "column" }}>
          <DialogActions
            sx={{
              p: 1.5,
            }}
          >
            <Button color="inherit" variant="contained" onClick={view.onFalse}>
              Close
            </Button>
          </DialogActions>

          <Box sx={{ flexGrow: 1, height: 1, overflow: "hidden" }}>
            <PDFViewer width="100%" height="100%" style={{ border: "none" }}>
              <InvoicePDF invoice={currentInvoice} currentStatus="paid" />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

InvoiceTableToolbar.propTypes = {
  dateError: PropTypes.bool,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  serviceOptions: PropTypes.array,
};

// ----------------------------------------------------------------------

function Block({ label, children, sx, ...other }) {
  return (
    <Stack
      component={Paper}
      variant="outlined"
      spacing={1}
      direction="row"
      sx={{
        p: 1,
        borderRadius: 1,
        overflow: "hidden",
        borderStyle: "dashed",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      {...other}
    >
      <Box component="span" sx={{ typography: "subtitle2" }}>
        {label}
      </Box>

      <Stack spacing={1} direction="row" flexWrap="wrap">
        {children}
      </Stack>
    </Stack>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  sx: PropTypes.object,
};
