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

const CertificationDialog = ({ open, handleClose, setDialogValue }) => {
  const methods = useForm({
    defaultValues: {
      boardCertifications: [{ name: "" }],
    },
  });
  const { enqueueSnackbar } = useSnackbar();

  const {
    setValue,
    formState: { isSubmitting },
    watch,
    control,
  } = methods;

  const {
    fields: certificationFields,
    append: appendCertification,
    remove: removeCertification,
  } = useFieldArray({
    control,
    name: "boardCertifications",
  });
  const handleRemoveCertification = (index) => {
    removeCertification(index);
  };

  const handleCertificateSubmit = (rhfdata) => {
    const { boardCertifications } = rhfdata;

    if (boardCertifications && boardCertifications.length > 0) {
      const filteredBoardCertifications = boardCertifications.map(
        (certificate) => certificate.name
      );
      setDialogValue((prev) => {
        return { ...prev, certificates: filteredBoardCertifications };
      });
      enqueueSnackbar("Certificates updated");
    } else {
      enqueueSnackbar("No schools to update", { variant: "warning" });
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
      <DialogTitle sx={{ textAlign: "center" }}>
        Doctor's Certificate
      </DialogTitle>
      <DialogContent sx={{ margin: "15px 0", overflow: "visible" }}>
        <FormProvider
          methods={methods}
          onSubmit={methods.handleSubmit(handleCertificateSubmit)}
          className="swiper-no-swiping"
        >
          {certificationFields.map((field, index) => (
            <Stack key={field.id}>
              <RHFTextField
                label="Certification"
                name={`boardCertifications.${index}.name`}
                InputLabelProps={{ shrink: true }}
                placeholder="Eg. Certificate of Medical Specialization"
              />

              <Button
                sx={{ marginTop: "10px" }}
                type="button"
                onClick={() => handleRemoveCertification(index)}
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
            onClick={() => appendCertification({ name: "" })}
          >
            + Add Board Certification
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

export default CertificationDialog;
