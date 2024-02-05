import PropTypes from "prop-types";
import { useState } from "react";

// @mui
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// components
import Label from "src/components/label";
import Iconify from "src/components/iconify";
import { ConfirmDialog } from "src/components/custom-dialog";
import CustomPopover, { usePopover } from "src/components/custom-popover";
import { LoadingButton } from "@mui/lab";
import customAxios from "src/utils/customAxios";

// ----------------------------------------------------------------------

export default function DetailsPopup({
  row,
  openDialogBox,
  setOpenDialogBox,
  setOpenAppointmentBox,
}) {
  const {
    dateOrdered,
    labOrderId,
    providerContact,
    patientContact,
    providerName,
    labItems,
  } = row;

  const dateTime = new Date(dateOrdered);

  const options = { day: "2-digit", month: "2-digit", year: "numeric" };

  const formattedDate = dateTime.toLocaleDateString("en-US", options);
  console.log(row);
  return (
    <>
      <Dialog
        open={openDialogBox}
        onClose={() => setOpenDialogBox(false)}
        sx={{
          "& .MuiDialog-paper": {
            width: "50%", // Increase to 90% for a wider dialog
            maxWidth: "none", // Optional: Remove the maximum width constraint
            maxHeight: "90vh", // Keeping the max height as before
          },
        }}
      >
        <DialogTitle align="center">
          <ListItemText
            // primary={format(new Date(dateOrdered), "dd MMM yyyy")}
            // secondary={format(new Date(createdAt), 'p')}
            // primary={formattedDate}
            primary={labOrderId}
            secondary="General Laboratory Request Form"
            primaryTypographyProps={{ typography: "body2", noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: "span",
              typography: "caption",
            }}
          />
        </DialogTitle>

        {/* <DialogContent>
          <Typography sx={{ mb: 3 }}>Please find details of your appointment below</Typography>
        </DialogContent> */}

        <DialogContent>
          <Stack
            spacing={2}
            component={Paper}
            variant="outlined"
            sx={{
              p: 2.5,
              minWidth: 300,
              flexShrink: 0,
              borderRadius: 5,
              typography: "body1",
              borderStyle: "dashed",
            }}
          >
            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Patient Name</Box>
              {row.patientName}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Patient Phone Number</Box>
              {row?.patientContact.phoneNumber}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Patient Email</Box>
              {row?.patientContact.email}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Category and Test Type</Box>
              {labItems.map((lab, index) => {
                return (
                  <Typography key={index}>
                    <Label color={"success"}>{lab.category}</Label> -{" "}
                    <Label color={"default"}>{lab.test}</Label>
                  </Typography>
                );
              })}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Provider Name</Box>
              {row.providerName}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Provider Phone Number</Box>
              {row?.providerContact.phoneNumber}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Provider Email</Box>
              {row?.providerContact.email}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Request Date</Box>
              {row.dateOrdered}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Priority</Box>
              {row.priority}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Fee Paid</Box>
              {row.feeAmount}
            </Stack>
            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Message</Box>
              {row.description}
            </Stack>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setOpenAppointmentBox(true)}
            variant="outlined"
            color="inherit"
          >
            {row.status === "pending" ? "Schedule" : "Reschedule"}
          </Button>

          <Button
            onClick={() => setOpenDialogBox(false)}
            variant="outlined"
            color="inherit"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

DetailsPopup.propTypes = {
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
  fetchAllOrders: PropTypes.func,
  setOpenAppointmentBox: PropTypes.func,
};
