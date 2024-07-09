import PropTypes from "prop-types";
import { format } from "date-fns";
// @mui
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// utils
import { fCurrency } from "src/utils/format-number";
// components
import Label from "src/components/label";
import Iconify from "src/components/iconify";
import { ConfirmDialog } from "src/components/custom-dialog";
import CustomPopover, { usePopover } from "src/components/custom-popover";

// ----------------------------------------------------------------------

export default function PayoutHistoryTableRow({
  row,
  selected,
  onSelectRow,
  onViewRow,
  onEditRow,
  onDeleteRow,
}) {
  const {
    type,
    appointmentDate,
    total,
    charges,
    amount,
    status,
    requestDate,
    // status,
    // invoiceTo,
    // totalAmount,
  } = row;

  const confirm = useBoolean();

  const popover = usePopover();

  return (
    <>
      <TableRow hover selected={selected}>
        {/* <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell> */}

        <TableCell sx={{ display: "flex", alignItems: "center" }}>
          {/* <Avatar alt={patientName} sx={{ mr: 2 }}>
            {patientName.charAt(0).toUpperCase()}
          </Avatar> */}

          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="body2"
                noWrap
                sx={{ textTransform: "capitalize" }}
              >
                {type}
              </Typography>
            }
          />
        </TableCell>

        <TableCell>
          <ListItemText
            primary={format(new Date(requestDate), "dd MMM yyyy")}
            // appointmentDate
            // secondary={format(new Date(createDate), "p")}
            primaryTypographyProps={{ typography: "body2", noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: "span",
              typography: "caption",
            }}
          />
        </TableCell>
        <TableCell>{fCurrency(total)}</TableCell>
        <TableCell>{fCurrency(charges)}</TableCell>
        <TableCell>{fCurrency(amount)}</TableCell>
        <TableCell>
          <Label
            variant="soft"
            color={
              (status === "approved" && "success") ||
              (status === "pending" && "warning") ||
              (status === "cancelled" && "error") ||
              "default"
            }
          >
            {status}
          </Label>
        </TableCell>
      </TableRow>
    </>
  );
}

PayoutHistoryTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
