import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import React from "react";
import { RHFTextField } from "src/components/hook-form";
import { useFieldArray, useForm } from "react-hook-form";
import FormProvider from "src/components/hook-form/form-provider";
import { useSnackbar } from "src/components/snackbar";

const ServiceDialog = ({ open, handleClose, setDialogValue, user }) => {
  const defaultServices =
    user &&
    user?.service?.map((el) => {
      return { name: el };
    });
  const methods = useForm({
    defaultValues: {
      service: defaultServices || [{ name: "" }],
    },
  });
  const { enqueueSnackbar } = useSnackbar();
  console.log(defaultServices);
  const {
    setValue,
    formState: { isSubmitting },
    watch,
    control,
  } = methods;

  const {
    fields: serviceFields,
    append: appendService,
    remove: removeServices,
  } = useFieldArray({
    control,
    name: "service",
  });
  const handleRemoveService = (index) => {
    removeServices(index);
  };

  const handleServiceSubmit = (rhfdata) => {
    const { service } = rhfdata;

    if (service && service.length > 0) {
      const filteredService = service.map((el) => el.name);
      setDialogValue((prev) => {
        return { ...prev, service: filteredService };
      });
      enqueueSnackbar("Services updated");
    } else {
      enqueueSnackbar("No services to update", { variant: "warning" });
    }
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
          {serviceFields.map((field, index) => (
            <Stack key={field.id}>
              <RHFTextField
                label="Service"
                name={`service.${index}.name`}
                InputLabelProps={{ shrink: true }}
                placeholder="Eg. Annual Physicals, Laboratory Testing"
              />

              <Button
                sx={{ marginTop: "10px" }}
                type="button"
                onClick={() => handleRemoveService(index)}
              >
                Remove
              </Button>
            </Stack>
          ))}

          <Button
            type="button"
            variant="outlined"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              width: "100%",
              padding: "16.5px 14px",
            }}
            onClick={() => appendService({ name: "" })}
          >
            + Add Services
          </Button>

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

export default ServiceDialog;
