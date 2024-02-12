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
import { ListItemText, Stack } from "@mui/material";
import UploadPopup from "./upload-popup";

// ----------------------------------------------------------------------

export default function UploadList({
  row,
  onDeleteRow,
  fetchAllOrders,
  handleClose,
  // setOpenUploadBox,
  openUploadList,
}) {
  const { id, labOrderId, labItems } = row;
  const confirm = useBoolean();
  console.log(row);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openUploadLabBox, setOpenUploadBox] = useState(false);
  const [currentTest, setCurrentTest] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [completedTests, setCompletedTests] = useState([]);
  const [downloadURL, setDownloadURL] = useState([]);

  const markAsCompletedFunc = async () => {
    setIsLoading(true);
    try {
      const res = await customAxios.patch(
        `/medical-labs/facility/result/complete/${labOrderId}`
      );
      if (res) {
        fetchAllOrders();
      }
      setIsLoading(false);

      console.log(res);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const downloadFile = (labItemId) => {
    const fileToDownload = downloadURL.find((item) => item._id === labItemId);

    if (fileToDownload) {
      // You can use the fileToDownload.singleFile.path or .preview to construct the download link
      // For example, you might want to create an anchor element to initiate the download
      const downloadLink = document.createElement("a");
      downloadLink.href = fileToDownload.singleFile.preview;
      downloadLink.download = fileToDownload.singleFile.path;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      // Handle case when the file is not found
      console.error(`File not found for lab item with id: ${labItemId}`);
    }
  };

  const previewFile = (labItemId) => {
    const fileToPreview = downloadURL.find((item) => item._id === labItemId);

    if (fileToPreview) {
      // You can use the fileToPreview.singleFile.path or .preview to construct the preview link
      // For example, you might want to open the preview in a new tab
      window.open(fileToPreview.singleFile.preview, "_blank");
    } else {
      // Handle case when the file is not found
      console.error(`File not found for lab item with id: ${labItemId}`);
    }
  };

  console.log(currentTest);
  console.log(completedTests);
  console.log(downloadURL);

  return (
    <>
      <Dialog
        open={openUploadList}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "500px",
            maxWidth: "none",
          },
          "@media (max-width: 500px )": {
            width: "100%",
          },
        }}
      >
        <DialogTitle align="center">Upload Lab Results</DialogTitle>

        <DialogContent>
          {labItems.map((labItem) => (
            <Stack
              key={labItem.id}
              flexDirection={"row"}
              sx={{ margin: "25px 0" }}
            >
              <ListItemText
                primary={labItem.category}
                secondary={labItem.test}
                primaryTypographyProps={{ typography: "body2", noWrap: true }}
                secondaryTypographyProps={{
                  mt: 0.5,
                  component: "span",
                  typography: "caption",
                }}
              />

              {completedTests.includes(labItem._id) ? (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => previewFile(labItem._id)}
                >
                  Preview
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setOpenUploadBox(true);
                    setCurrentTest(labItem);
                  }}
                >
                  Upload Result
                </Button>
              )}
            </Stack>
          ))}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="inherit">
            Close
          </Button>
          <LoadingButton
            onClick={() => markAsCompletedFunc()}
            variant="contained"
            loading={isLoading}
          >
            Mark as Complete
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

      <UploadPopup
        row={row}
        currentTest={currentTest}
        openUploadBox={openUploadLabBox}
        handleClose={() => setOpenUploadBox(false)}
        setCompletedTests={setCompletedTests}
        setDownloadURL={setDownloadURL}
      />
    </>
  );
}

UploadList.propTypes = {
  onDeleteRow: PropTypes.func,
  row: PropTypes.object,
  fetchAllOrders: PropTypes.func,
  openUploadList: PropTypes.bool,
  handleClose: PropTypes.func,
};
