import PropTypes from "prop-types";
// @mui

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

// hooks

// utils
import { fCurrency } from "src/utils/format-number";

// ----------------------------------------------------------------------

export default function TotalTableRow({ total }) {
  return (
    <>
      <TableRow>
        <TableCell sx={{ display: "flex", alignItems: "center" }}></TableCell>

        <TableCell></TableCell>

        <TableCell></TableCell>

        <TableCell>{fCurrency(total)}</TableCell>

        <TableCell align="center"></TableCell>

        <TableCell></TableCell>

        <TableCell align="right" sx={{ px: 1 }}></TableCell>
      </TableRow>
    </>
  );
}

TotalTableRow.propTypes = {
  total: PropTypes.string,
};
