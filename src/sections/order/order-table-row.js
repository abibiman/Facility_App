import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useState, useCallback } from 'react';

// @mui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
import { fCurrency } from 'src/utils/format-number';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { LoadingButton } from '@mui/lab';
import { UploadAvatar, Upload, UploadBox } from 'src/components/upload';


// ----------------------------------------------------------------------

export default function OrderTableRow({ row, selected, onViewRow, onSelectRow, onDeleteRow }) {
  const {     orderNo,
  patient,
  doctor,
  reqDate,
  orderType,
  priority,
  photo,
  status} = row;

  const preview = useBoolean();

  const [files, setFiles] = useState([]);

  const [file, setFile] = useState(null);

  const [avatarUrl, setAvatarUrl] = useState(null);

  const handleDropSingleFile = useCallback((acceptedFiles) => {
    const newFile = acceptedFiles[0];
    if (newFile) {
      setFile(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    }
  }, []);

  const handleDropAvatar = useCallback((acceptedFiles) => {
    const newFile = acceptedFiles[0];
    if (newFile) {
      setAvatarUrl(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    }
  }, []);

  const handleDropMultiFile = useCallback(
    (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((newFile) =>
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          })
        ),
      ]);
    },
    [files]
  );

  const handleRemoveFile = (inputFile) => {
    const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
    setFiles(filesFiltered);
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const confirm = useBoolean();

  const collapse = useBoolean();

  const popover = usePopover();

  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [openUploadBox, setOpenUploadBox] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const dialog = useBoolean();
  const redialog = useBoolean()

  const [appointmentDateInput, setAppointmentDateInput] = useState('');
  const [appointmentTimeInput, setAppointmentTimeInput] = useState('');
  const [notes,setNotes] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false);

  const renderPrimary = (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell>
        <Box
          onClick={onViewRow}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {`# ${orderNo}`}
        </Box>
      </TableCell>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={patient} src={patient || 'https://cdn-icons-png.flaticon.com/512/1177/1177568.png'} sx={{ mr: 2 }} />

        <ListItemText
          primary={patient}
          secondary="0234521425"
          primaryTypographyProps={{ typography: 'body2' }}
          secondaryTypographyProps={{
            component: 'span',
            color: 'text.disabled',
          }}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          // primary={format(new Date(createdAt), 'dd MMM yyyy')}
          // secondary={format(new Date(createdAt), 'p')}
          primary="2023-08-21"
          secondary="14:32"
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'caption',
          }}
        />
      </TableCell>

      <TableCell align="center"> {orderType} </TableCell>

      <TableCell> {status} </TableCell>

      <TableCell>
        <Label
          variant="soft"
          color={
            (priority === 'Routine' && 'success') ||
            (priority === 'Urgent' && 'warning') ||
            (priority === 'Emergency' && 'error') ||
            'default'
          }
        >
          {priority}
        </Label>
      </TableCell>

      <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>

        <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
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
          }}>
          <Iconify icon="carbon:view" />
          View 
        </MenuItem>

        <MenuItem           
        onClick={() => {
          setOpenDialogBox(true);
          // onViewRow();
          popover.onClose();
          }}>
          <Iconify icon="icon-park-outline:schedule" />
          Reschedule 
        </MenuItem>


        <MenuItem           
        onClick={() => {
          setOpenUploadBox(true);
          // onViewRow();
          popover.onClose();
          }}>
          <Iconify icon="material-symbols-light:upload-sharp" />
          Upload Results 
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={()=>{alert("Cancel Order")}}>
          <Iconify icon="flat-color-icons:cancel" />
          Cancel 
        </MenuItem>
      </CustomPopover>

      <Dialog 
        open={openDialogBox}
        sx={{
          '& .MuiDialog-paper': { 
            width: '50%', // Increase to 90% for a wider dialog
            maxWidth: 'none', // Optional: Remove the maximum width constraint
            maxHeight: '90vh', // Keeping the max height as before
          },
        }}
      >
        <DialogTitle align='center'>
          {`# LO-32452`}
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
              typography: 'body1',
              borderStyle: 'dashed',
            }}
          >
            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Patient Name</Box>
              {row.patient}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />

            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Patient Phone Number</Box>
              {row.patientPhone}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />

            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Patient Email</Box>
              {row.patientEmail}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />

            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Gender</Box>
              {row.gender}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />

            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Order Type</Box>
              {row.orderType}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />

            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Ordered By</Box>
              {row.doctor}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />

            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Doctor Phone Number</Box>
              {row.doctorPhone}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />

            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Doctor Email</Box>
              {row.doctorEmail}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />

            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Request Date</Box>
              {row.reqDate}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />

            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Priority</Box>
              {row.priority}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />


            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Fee Paid</Box>
              {row.fee}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'primary.main' }} />


            <Stack spacing={0.5}>
              <Box sx={{ color: 'text.disabled' }}>Message</Box>
              {row.message}
            </Stack>

          </Stack>
        </DialogContent>


        <DialogActions>
          <Button  onClick={dialog.onTrue} variant="outlined" color="inherit">
            {row.status === 'Awaiting Confirmation'? 'Schedule':'Rescedule'}
          </Button>

          <Button onClick={() => setOpenDialogBox(false)} variant="outlined" color="inherit">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog 
          open={dialog.value} 
          onClose={dialog.onFalse}
          sx={{
            '& .MuiDialog-paper': {
              width: '40%', // Adjust this value to change the width of the dialog
              maxWidth: 'none', // Optional: This line removes the maximum width constraint
              // maxHeight: '90vh', // You can also adjust the max height if needed
            },
          }}
        >
        
        <DialogTitle align='center'>
          Set Appointment
        </DialogTitle>

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

          <TextField
            autoFocus
            fullWidth
            type="text"
            margin="dense"
            variant="outlined"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />


        </DialogContent>

        <DialogActions>
          <Button onClick={dialog.onFalse} variant="outlined" color="inherit">
            Cancel
          </Button>
          <LoadingButton onClick={()=>alert("appointment")} variant="contained">
            Book Appointment
          </LoadingButton>
        </DialogActions>
      </Dialog>

{/* upload */}
      <Dialog 
          open={openUploadBox} 
          onClose={dialog.onFalse}
          sx={{
            '& .MuiDialog-paper': {
              width: '40%', // Adjust this value to change the width of the dialog
              maxWidth: 'none', // Optional: This line removes the maximum width constraint
              // maxHeight: '90vh', // You can also adjust the max height if needed
            },
          }}
        >
        
        <DialogTitle align='center'>
          Upload Results
        </DialogTitle>

        <DialogContent>
          <Typography sx={{ mb: 3 }}>Please fill the form below</Typography>


          <Upload
                multiple
                thumbnail={preview.value}
                files={files}
                onDrop={handleDropMultiFile}
                onRemove={handleRemoveFile}
                onRemoveAll={handleRemoveAllFiles}
                onUpload={() => console.info('ON UPLOAD')}
              />

          <TextField
            autoFocus
            fullWidth
            type="text"
            margin="dense"
            variant="outlined"
            value={appointmentDateInput}
            row='3'
            onChange={(e) => setAppointmentDateInput(e.target.value)}
          />

        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenUploadBox(false)} variant="outlined" color="inherit">
            Discard
          </Button>
          <LoadingButton onClick={()=>alert("Upload Results")} variant="contained">
            Upload
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

OrderTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
