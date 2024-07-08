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
import UploadSinglePopup from "./upload-popup-single";

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

  const [openUploadLabBox, setOpenUploadBox] = useState(false);
  const [openUploadSingleLabBox, setOpenUploadSingleBox] = useState(false);
  const [currentTest, setCurrentTest] = useState({});
  const [completedTests, setCompletedTests] = useState([]);
  const [downloadURL, setDownloadURL] = useState([]);
  const [showList, setShowList] = useState(false);

  const previewFile = (labItemId) => {
    const fileToPreview = downloadURL.find((item) => item._id === labItemId);

    if (fileToPreview) {
      window.open(fileToPreview.singleFile.preview, "_blank");
    } else {
      // Handle case when the file is not found
      console.error(`File not found for lab item with id: ${labItemId}`);
    }
  };

  const handleUploadSingleFile = () => {
    setOpenUploadSingleBox(true);
    setShowList(false);
    setCurrentTest(labItems[0]);
  };

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
          <Stack
            direction="row"
            justifyContent="space-between"
            marginBottom={2}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleUploadSingleFile}
              disabled={!showList}
            >
              Upload Single File
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setShowList(true)}
              // onClick={() => setOpenUploadBox(true)}
              disabled={showList}
            >
              Upload Individual Results
            </Button>
          </Stack>

          <Stack sx={{ display: showList ? "flex" : "none" }}>
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
                      setCurrentTest(labItem);
                      setOpenUploadBox(true);
                    }}
                  >
                    Upload Result
                  </Button>
                )}
              </Stack>
            ))}
          </Stack>
        </DialogContent>
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

      <UploadSinglePopup
        row={row}
        currentTest={currentTest}
        openUploadBox={openUploadSingleLabBox}
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
