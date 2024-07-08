import PropTypes from "prop-types";
import { useState, useCallback } from "react";

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

import { UploadAvatar, Upload, UploadBox } from "src/components/upload";

import { ConfirmDialog } from "src/components/custom-dialog";
import { LoadingButton } from "@mui/lab";
import customAxios from "src/utils/customAxios";
import { enqueueSnackbar } from "notistack";
import SingleFilePreview from "src/components/upload/preview-single-file";
import { Stack } from "@mui/material";

// ----------------------------------------------------------------------

export default function UploadSinglePopup({
  row,
  onDeleteRow,
  fetchAllOrders,
  setOpenAppointmentBox,
  openAppointmentBox,
  openUploadBox,
  handleClose,
  currentTest,
  setCompletedTests,
  setDownloadURL,
}) {
  const confirm = useBoolean();

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [test, setTest] = useState("");
  const { labOrderId } = row;
  const { _id } = currentTest;

  console.log(row);

  // upload
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const preview = useBoolean();

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

  // const handleDropMultiFile = useCallback(
  //   (acceptedFiles) => {
  //     setFiles([
  //       ...files,
  //       ...acceptedFiles.map((newFile) =>
  //         Object.assign(newFile, {
  //           preview: URL.createObjectURL(newFile),
  //         })
  //       ),
  //     ]);
  //   },
  //   [files]
  // );
  const handleDropMultiFile = useCallback(
    (acceptedFiles) => {
      // Only allow one file to be added
      if (acceptedFiles.length > 0 && files.length === 0) {
        const newFile = acceptedFiles[0];
        setFiles([
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          }),
        ]);
      }
    },
    [files]
  );

  const handleRemoveFile = (inputFile) => {
    const filesFiltered = files.filter(
      (fileFiltered) => fileFiltered !== inputFile
    );
    setFiles(filesFiltered);
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  console.log(row);
  const handleUploadFile = async () => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      // if (uploadedFiles.length > 1) {
      //   uploadedFiles?.map((item, index) =>
      //     formData.append(`image${index}`, uploadedFiles[index])
      //   );
      // } else {
      const singleFile = files[0];
      formData.append("image", singleFile);
      setDownloadURL((prev) => [...prev, { _id, singleFile }]);
      // }

      formData.append("labOrderId", labOrderId.trim());
      formData.append("orderType", "laboratory");
      formData.append("category", category);
      formData.append("test", test);
      formData.append("description", description);

      const res = await customAxios.patch(
        `/medical-labs/facility/result/upload-v2/${row?.id}`,
        formData
      );
      setCompletedTests((prevCompletedTests) => [...prevCompletedTests, _id]);
      handleClose();
      setFiles([]);

      enqueueSnackbar("Upload successful!");
      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  // const handleInitialUpload = () => {
  //   setUploadedFiles(files);
  //   setFiles([]);
  // };

  return (
    <>
      {/* upload */}
      <Dialog
        open={openUploadBox}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "500px",
          },
        }}
      >
        <DialogTitle align="center">Upload Results</DialogTitle>

        <DialogContent>
          {/* <Typography sx={{ mb: 3 }}>Please fill the form below</Typography> */}

          <Upload
            multiple
            thumbnail={preview.value}
            files={files}
            onDrop={handleDropMultiFile}
            onRemove={handleRemoveFile}
            // onRemoveAll={handleRemoveAllFiles}
            // onUpload={handleInitialUpload}
            disabled={files.length > 0}
          />

          <TextField
            autoFocus
            fullWidth
            type="text"
            margin="dense"
            variant="outlined"
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ mt: "15px" }}
          />
          <TextField
            autoFocus
            fullWidth
            type="text"
            margin="dense"
            variant="outlined"
            label="Test"
            value={test}
            onChange={(e) => setTest(e.target.value)}
            sx={{ mt: "15px" }}
          />

          <TextField
            autoFocus
            fullWidth
            type="text"
            margin="dense"
            variant="outlined"
            label="Description"
            multiline
            minRows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mt: "15px" }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="inherit">
            Discard
          </Button>
          <LoadingButton
            onClick={handleUploadFile}
            variant="contained"
            loading={isSubmitting}
            disabled={files.length === 0}
          >
            Upload
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

UploadSinglePopup.propTypes = {
  onDeleteRow: PropTypes.func,
  row: PropTypes.object,
  fetchAllOrders: PropTypes.func,
  openAppointmentBox: PropTypes.bool,
  setOpenAppointmentBox: PropTypes.func,
  currentTest: PropTypes.object,
  setCompletedTests: PropTypes.func,
  setDownloadURL: PropTypes.func,
};
