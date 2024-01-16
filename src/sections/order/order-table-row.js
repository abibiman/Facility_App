import PropTypes from "prop-types";
import { useState } from "react";

// @mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// components
import Label from "src/components/label";
import Iconify from "src/components/iconify";
import { ConfirmDialog } from "src/components/custom-dialog";
import CustomPopover, { usePopover } from "src/components/custom-popover";
import DetailsPopup from "./components/details-popup";
import AppointmentPopup from "./components/appointment-popup";
import UploadPopup from "./components/upload-popup";
import customAxios from "src/utils/customAxios";

// ----------------------------------------------------------------------

export default function OrderTableRow({
  row,
  selected,
  onViewRow,
  onSelectRow,
  onDeleteRow,
  fetchAllOrders,
}) {
  const {
    orderType,
    priority,
    status,
    // appointmentTime,
    // _id,
    // providerID,
    // userID,
    patientName,
    _id,
    // facilityID,
    // description,
    // appointmentID,
    // dateOrdered,
    // result,
    // feeAmount,
    // paid,
    labOrderId,
  } = row;

  const confirm = useBoolean();

  const popover = usePopover();

  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [openUploadBox, setOpenUploadBox] = useState(false);
  const [openAppointmentBox, setOpenAppointmentBox] = useState(false);

  const markAsCompletedFunc = async () => {
    try {
      const res = await customAxios.patch(
        `/medical-labs/facility/result/complete/${_id}`
      );
      if (res) {
        fetchAllOrders();
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const renderPrimary = (
    <TableRow hover selected={selected}>
      {/* <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell> */}

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

      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt={patientName}
          src={
            patientName ||
            "https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
          }
          sx={{ mr: 2 }}
        />

        <ListItemText
          primary={patientName}
          secondary="0234521425"
          primaryTypographyProps={{ typography: "body2" }}
          secondaryTypographyProps={{
            component: "span",
            color: "text.disabled",
          }}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          // primary={format(new Date(createdAt), 'dd MMM yyyy')}
          // secondary={format(new Date(createdAt), 'p')}
          primary="2023-08-21"
          secondary="14:32"
          primaryTypographyProps={{ typography: "body2", noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: "span",
            typography: "caption",
          }}
        />
      </TableCell>

      <TableCell align="center"> {orderType} </TableCell>

      <TableCell sx={{ textTransform: "capitalize" }}> {status} </TableCell>

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
        sx={{ maxWidth: 200 }}
      >
        <MenuItem
          onClick={() => {
            setOpenDialogBox(true);
            // onViewRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View
        </MenuItem>

        <MenuItem
          onClick={() => {
            setOpenUploadBox(true);
            // onViewRow();
            popover.onClose();
          }}
        >
          <Iconify icon="material-symbols-light:upload-sharp" />
          Upload Results
        </MenuItem>

        <MenuItem
          onClick={() => {
            // setOpenDialogBox(true);
            // onViewRow();
            // popover.onClose();
            markAsCompletedFunc();
          }}
        >
          <Iconify icon="fluent-mdl2:completed-solid" />
          Mark as completed
        </MenuItem>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          onClick={() => {
            alert("Cancel Order");
          }}
        >
          <Iconify icon="flat-color-icons:cancel" />
          Cancel
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
        id={row?._id}
      />

      <UploadPopup
        openUploadBox={openUploadBox}
        handleClose={() => setOpenUploadBox(false)}
        id={row?._id}
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

OrderTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  fetchAllOrders: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
