// import PropTypes from "prop-types";
// import { useState } from "react";

// // @mui

// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// // hooks
// import { useBoolean } from "src/hooks/use-boolean";
// // components

// import { ConfirmDialog } from "src/components/custom-dialog";
// import { LoadingButton } from "@mui/lab";
// import customAxios from "src/utils/customAxios";

// // ----------------------------------------------------------------------

// export default function AppointmentPopup({
//   row,
//   onDeleteRow,
//   fetchAllOrders,
//   setOpenAppointmentBox,
//   openAppointmentBox,
// }) {
//   const { id, labOrderId, labItems } = row;
//   const confirm = useBoolean();

//   const [appointmentDateInput, setAppointmentDateInput] = useState("");
//   const [appointmentTimeInput, setAppointmentTimeInput] = useState("");
//   const [notes, setNotes] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleClose = () => setOpenAppointmentBox(false);
//   const approveOrder = async () => {
//     setIsSubmitting(true);
//     try {
//       const res = await customAxios.patch(
//         `/medical-labs/facility/approve/${id}`,
//         {
//           appointmentDate: appointmentDateInput,
//           appointmentTime: appointmentDateInput,
//         }
//       );

//       if (res) {
//         fetchAllOrders();
//       }
//       setIsSubmitting(false);
//     } catch (error) {
//       console.log(error);
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Dialog
//         open={openAppointmentBox}
//         onClose={handleClose}
//         sx={{
//           "& .MuiDialog-paper": {
//             width: "40%", // Adjust this value to change the width of the dialog
//             maxWidth: "none", // Optional: This line removes the maximum width constraint
//             // maxHeight: '90vh', // You can also adjust the max height if needed
//           },
//         }}
//       >
//         <DialogTitle align="center">Set Appointment</DialogTitle>

//         <DialogContent>
//           <Typography sx={{ mb: 3 }}>Please fill the form below</Typography>

//           <TextField
//             autoFocus
//             fullWidth
//             type="date"
//             margin="dense"
//             variant="outlined"
//             value={appointmentDateInput}
//             onChange={(e) => setAppointmentDateInput(e.target.value)}
//           />

//           <TextField
//             autoFocus
//             fullWidth
//             type="time"
//             margin="dense"
//             variant="outlined"
//             value={appointmentTimeInput}
//             onChange={(e) => setAppointmentTimeInput(e.target.value)}
//           />

//           {/* <TextField
//             autoFocus
//             fullWidth
//             type="text"
//             margin="dense"
//             variant="outlined"
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//           /> */}
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={handleClose} variant="outlined" color="inherit">
//             Cancel
//           </Button>
//           <LoadingButton
//             onClick={() => approveOrder()}
//             variant="contained"
//             loading={isSubmitting}
//           >
//             Book Appointment
//           </LoadingButton>
//         </DialogActions>
//       </Dialog>

//       <ConfirmDialog
//         open={confirm.value}
//         onClose={confirm.onFalse}
//         title="Delete"
//         content="Are you sure want to delete?"
//         action={
//           <Button variant="contained" color="error" onClick={onDeleteRow}>
//             Delete
//           </Button>
//         }
//       />
//     </>
//   );
// }

// AppointmentPopup.propTypes = {
//   onDeleteRow: PropTypes.func,
//   row: PropTypes.object,
//   fetchAllOrders: PropTypes.func,
//   openAppointmentBox: PropTypes.bool,
//   setOpenAppointmentBox: PropTypes.func,
// };

// */-//////////////////////////////////

// import PropTypes from "prop-types";
// import { useState } from "react";
// // @mui
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// // hooks
// import { useBoolean } from "src/hooks/use-boolean";
// // components
// import { ConfirmDialog } from "src/components/custom-dialog";
// import { LoadingButton } from "@mui/lab";
// import customAxios from "src/utils/customAxios";

// // ----------------------------------------------------------------------

// export default function AppointmentPopup({
//   row,
//   onDeleteRow,
//   fetchAllOrders,
//   setOpenAppointmentBox,
//   openAppointmentBox,
// }) {
//   const { id, labOrderId, labItems } = row;
//   const confirm = useBoolean();

//   const [appointmentDateInput, setAppointmentDateInput] = useState("");
//   const [appointmentTimeInput, setAppointmentTimeInput] = useState("");
//   const [notes, setNotes] = useState("");

//   const [labItemsCost, setLabItemsCost] = useState(
//     labItems.reduce((acc, labItem) => {
//       acc[labItem._id] = labItem.cost || 0;
//       return acc;
//     }, {})
//   );

//   console.log(labItemsCost);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleClose = () => setOpenAppointmentBox(false);
//   const approveOrder = async () => {
//     setIsSubmitting(true);
//     try {
//       const res = await customAxios.patch(
//         `/medical-labs/facility/approve/${id}`,
//         {
//           appointmentDate: appointmentDateInput,
//           appointmentTime: appointmentDateInput,
//           labItemsCost,
//         }
//       );

//       if (res) {
//         fetchAllOrders();
//       }
//       setIsSubmitting(false);
//     } catch (error) {
//       console.log(error);
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Dialog
//         open={openAppointmentBox}
//         onClose={handleClose}
//         sx={{
//           "& .MuiDialog-paper": {
//             width: "40%", // Adjust this value to change the width of the dialog
//             maxWidth: "none", // Optional: This line removes the maximum width constraint
//           },
//         }}
//       >
//         <DialogTitle align="center">Set Appointment</DialogTitle>

//         <DialogContent>
//           <Typography sx={{ mb: 3 }}>Please fill the form below</Typography>

//           <TextField
//             autoFocus
//             fullWidth
//             type="date"
//             margin="dense"
//             variant="outlined"
//             value={appointmentDateInput}
//             onChange={(e) => setAppointmentDateInput(e.target.value)}
//           />

//           <TextField
//             autoFocus
//             fullWidth
//             type="time"
//             margin="dense"
//             variant="outlined"
//             value={appointmentTimeInput}
//             onChange={(e) => setAppointmentTimeInput(e.target.value)}
//           />

//           {/* <TextField
//             autoFocus
//             fullWidth
//             type="text"
//             margin="dense"
//             variant="outlined"
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//           /> */}

//           {labItems.map((labItem) => (
//             <TextField
//               key={labItem._id}
//               fullWidth
//               type="number"
//               margin="dense"
//               variant="outlined"
//               label={`Cost for ${labItem.category} - ${labItem.test}`}
//               value={labItemsCost[labItem._id] || 0}
//               onChange={(e) =>
//                 setLabItemsCost((prevCosts) => ({
//                   ...prevCosts,
//                   [labItem._id]: parseFloat(e.target.value) || 0,
//                 }))
//               }
//             />
//           ))}
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={handleClose} variant="outlined" color="inherit">
//             Cancel
//           </Button>
//           <LoadingButton
//             onClick={() => approveOrder()}
//             variant="contained"
//             loading={isSubmitting}
//           >
//             Book Appointment
//           </LoadingButton>
//         </DialogActions>
//       </Dialog>

//       <ConfirmDialog
//         open={confirm.value}
//         onClose={confirm.onFalse}
//         title="Delete"
//         content="Are you sure want to delete?"
//         action={
//           <Button variant="contained" color="error" onClick={onDeleteRow}>
//             Delete
//           </Button>
//         }
//       />
//     </>
//   );
// }

// AppointmentPopup.propTypes = {
//   onDeleteRow: PropTypes.func,
//   row: PropTypes.object,
//   fetchAllOrders: PropTypes.func,
//   openAppointmentBox: PropTypes.bool,
//   setOpenAppointmentBox: PropTypes.func,
// };

import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// components
import { ConfirmDialog } from "src/components/custom-dialog";
import { LoadingButton } from "@mui/lab";
import customAxios from "src/utils/customAxios";

// ----------------------------------------------------------------------

export default function AppointmentPopup({
  row,
  onDeleteRow,
  fetchAllOrders,
  setOpenAppointmentBox,
  openAppointmentBox,
}) {
  const { id, labOrderId, labItems } = row;
  const confirm = useBoolean();
  console.log(row);

  const [appointmentDateInput, setAppointmentDateInput] = useState("");
  const [appointmentTimeInput, setAppointmentTimeInput] = useState("");
  const [notes, setNotes] = useState("");
  const [labItemsCost, setLabItemsCost] = useState(
    labItems.map((labItem) => ({
      listID: labItem._id,
      cost: labItem.cost || 0,
    }))
  );

  console.log(labItemsCost);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => setOpenAppointmentBox(false);
  const approveOrder = async () => {
    setIsSubmitting(true);
    const reqObject = {
      appointmentDate: appointmentDateInput,
      appointmentTime: appointmentDateInput,
      labItems: labItemsCost,
      labOrderId,
    };
    console.log(reqObject);
    try {
      const res = await customAxios.patch(
        `/medical-labs/facility/approve/${id}`,
        reqObject
      );

      if (res) {
        fetchAllOrders();
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog
        open={openAppointmentBox}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "40%", // Adjust this value to change the width of the dialog
            maxWidth: "none", // Optional: This line removes the maximum width constraint
          },
        }}
      >
        <DialogTitle align="center">Set Appointment</DialogTitle>

        <DialogContent>
          <Typography sx={{ mb: 3 }}>Please fill the form below</Typography>

          <TextField
            autoFocus
            fullWidth
            type="date"
            margin="dense"
            variant="outlined"
            value={appointmentDateInput}
            onChange={(e) => setAppointmentDateInput(e.target.value)}
          />

          <TextField
            autoFocus
            fullWidth
            type="time"
            margin="dense"
            variant="outlined"
            value={appointmentTimeInput}
            onChange={(e) => setAppointmentTimeInput(e.target.value)}
          />

          {labItems.map((labItem, index) => (
            <TextField
              key={labItem._id}
              fullWidth
              type="number"
              margin="dense"
              variant="outlined"
              label={`Cost for ${labItem.category} - ${labItem.test}`}
              // value={labItemsCost[index].cost || 0}
              value={
                labItemsCost[index].cost === 0
                  ? ""
                  : labItemsCost[index].cost || ""
              }
              onChange={(e) =>
                setLabItemsCost((prevCosts) => {
                  const newCosts = [...prevCosts];
                  newCosts[index] = {
                    ...newCosts[index],
                    cost: parseFloat(e.target.value) || 0,
                  };
                  return newCosts;
                })
              }
            />
          ))}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="inherit">
            Cancel
          </Button>
          <LoadingButton
            onClick={() => approveOrder()}
            variant="contained"
            loading={isSubmitting}
          >
            Book Appointment
          </LoadingButton>
        </DialogActions>
      </Dialog>

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

AppointmentPopup.propTypes = {
  onDeleteRow: PropTypes.func,
  row: PropTypes.object,
  fetchAllOrders: PropTypes.func,
  openAppointmentBox: PropTypes.bool,
  setOpenAppointmentBox: PropTypes.func,
};
