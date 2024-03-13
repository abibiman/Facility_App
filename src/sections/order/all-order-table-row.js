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
import DetailsPopup from "./components/details-popup";
import AppointmentPopup from "./components/appointment-popup";
import { format } from "date-fns";

// ----------------------------------------------------------------------

export default function AllOrderTableRow({
  row,
  selected,
  onViewRow,
  onSelectRow,
  onDeleteRow,
  fetchAllOrders,
}) {
  const {
    orderNo,
    doctor,
    reqDate,
    labItems,
    priority,
    photo,
    status,
    appointmentTime,
    _id,
    providerID,
    userID,
    patientName,
    facilityID,
    description,
    appointmentID,
    dateOrdered,
    result,
    feeAmount,
    paid,
    labOrderId,
  } = row;

  const confirm = useBoolean();

  const popover = usePopover();

  const [openDialogBox, setOpenDialogBox] = useState(false);

  const [openAppointmentBox, setOpenAppointmentBox] = useState(false);

  console.log(row);
  const uniqueCategories = [...new Set(labItems.map((lab) => lab.category))];

  const renderPrimary = (
    <TableRow hover selected={selected}>
      <TableCell>
        <Box
          onClick={onViewRow}
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {`${labOrderId}`}
        </Box>
      </TableCell>

      <TableCell>
        {/* <Avatar
          alt={patientName}
          src={
            patientName ||
            "https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
          }
          sx={{ mr: 2 }}
        /> */}

        <ListItemText
          primary={patientName}
          // secondary="0234521425"
          primaryTypographyProps={{ typography: "body2" }}
          secondaryTypographyProps={{
            component: "span",
            color: "text.disabled",
          }}
          sx={{ whiteSpace: "nowrap" }}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          // primary={format(new Date(dateOrdered), "dd MMM yyyy")}
          // primary={formattedDate}
          primary={format(new Date(dateOrdered), "dd/MM/yyyy")}
          // primary={format(new Date(dateOrdered), "dd/MM/yyyy")}
          primaryTypographyProps={{ typography: "body2", noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: "span",
            typography: "caption",
          }}
        />
      </TableCell>

      <TableCell align="center">{uniqueCategories.join(", ")}</TableCell>

      <TableCell>
        <Label
          variant="soft"
          color={
            (status === "approved" && "success") ||
            (status === "pending" && "warning") ||
            "default"
          }
        >
          {status}
        </Label>
      </TableCell>

      <TableCell>
        <Label
          variant="soft"
          color={
            (priority === "regular" && "success") ||
            (priority === "urgent" && "warning") ||
            (priority === "emergency" && "error") ||
            "default"
          }
        >
          {priority}
        </Label>
      </TableCell>

      <TableCell align="right" sx={{ px: 1, whiteSpace: "nowrap" }}>
        <IconButton
          color={popover.open ? "inherit" : "default"}
          onClick={popover.onOpen}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {renderPrimary}

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 160 }}
      >
        <MenuItem
          onClick={() => {
            setOpenDialogBox(true);
            // onViewRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View Order
        </MenuItem>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          onClick={() => {
            alert("Cancel Order");
          }}
        >
          <Iconify icon="flat-color-icons:cancel" />
          Cancel Order
        </MenuItem>
      </CustomPopover>
      <DetailsPopup
        row={row}
        openDialogBox={openDialogBox}
        setOpenDialogBox={setOpenDialogBox}
        setOpenAppointmentBox={setOpenAppointmentBox}
      />

      <AppointmentPopup
        openAppointmentBox={openAppointmentBox}
        setOpenAppointmentBox={setOpenAppointmentBox}
        row={row}
        fetchAllOrders={() => fetchAllOrders()}
      />

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}

AllOrderTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
  fetchAllOrders: PropTypes.func,
};
