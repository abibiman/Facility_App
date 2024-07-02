import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import React from "react";
import { RHFTextField } from "src/components/hook-form";
import { useForm } from "react-hook-form";
import FormProvider from "src/components/hook-form/form-provider";
import { useSnackbar } from "src/components/snackbar";

const CoordinatesDialog = ({ open, handleClose, setDialogValue }) => {
  const methods = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const {
    setValue,
    formState: { isSubmitting },
    watch,
    control,
  } = methods;

  const handleServiceSubmit = (rhfdata) => {
    const { lat, long } = rhfdata;

    setDialogValue((prev) => {
      return { ...prev, coordinatestwo: { lat, long } };
    });
    enqueueSnackbar("Coordinates updated");

    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "400px",
          maxWidth: "none",
          maxHeight: "450px",
        },
        "@media (max-width: 500px )": {
          width: "100%",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>Services Offered</DialogTitle>
      <DialogContent sx={{ margin: "15px 0", overflow: "visible" }}>
        <FormProvider
          methods={methods}
          onSubmit={methods.handleSubmit(handleServiceSubmit)}
          className="swiper-no-swiping"
        >
          <RHFTextField
            label="Latitude"
            name={`lat`}
            InputLabelProps={{ shrink: true }}
          />
          <RHFTextField
            label="Longitude"
            name={`long`}
            InputLabelProps={{ shrink: true }}
            sx={{ mt: "15px" }}
          />

          <Stack
            sx={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              margin: "15px 0 10px",
            }}
          >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Stack>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default CoordinatesDialog;
