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
import { format } from "date-fns";
import { Table, TableBody, TableContainer, TableHead } from "@mui/material";

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
    appointmentDate,
    providerContact,
    patientContact,
    providerName,
    labItems,
  } = row;

  const dateTime = new Date(dateOrdered);

  const options = { day: "2-digit", month: "2-digit", year: "numeric" };

  const formattedDate = dateTime.toLocaleDateString("en-US", options);
  const totalCost = labItems.reduce((acc, lab) => acc + lab.cost, 0);
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
              <Box sx={{ color: "text.disabled" }}>Appointment Date</Box>

              {format(new Date(dateOrdered), "dd/MM/yyyy")}
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

            {/* <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Fee Paid</Box>
              {row.feeAmount}
            </Stack> */}
            {/* <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            /> */}

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Message</Box>
              {row.description}
            </Stack>

            <Divider
              sx={{ borderStyle: "dashed", my: 1, borderColor: "primary.main" }}
            />

            <Stack spacing={0.5}>
              <Box sx={{ color: "text.disabled" }}>Category and Test Type</Box>
              {/* {labItems.map((lab, index) => {
                return ( */}
              {/* // <Typography key={index}>
                  //   <Label color={"success"}>{lab.category}</Label> -{" "}
                  //   <Label color={"default"}>{lab.test}</Label>
                  // </Typography> */}
              <TableContainer
                sx={{ border: "0.5px solid #bdbdbd", borderRadius: "10px" }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Category</TableCell>{" "}
                      <TableCell>Test</TableCell>
                      <TableCell>Price (GH₵)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {labItems.map((lab, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ borderBottomStyle: "solid" }}>
                          <Typography>{lab.category}</Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottomStyle: "solid" }}>
                          <Typography sx={{ color: "primary.main" }}>
                            {lab.test}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottomStyle: "solid" }}>
                          <Typography sx={{ color: "primary.main" }}>
                            {lab.cost}
                          </Typography>
                        </TableCell>
                        {/* <TableCell sx={{ borderBottomStyle: "solid" }}>
                          <Typography>{lab.test}</Typography>
                        </TableCell> */}
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Typography variant="h6">Total Cost:</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">{totalCost}</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              {/* ); */}
              {/* })} */}
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
