import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { RHFTextField } from "src/components/hook-form";
import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import { useSnackbar } from "src/components/snackbar";

const SchoolDialog = ({ open, handleClose, setDialogValue }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const methods = useForm({
    defaultValues: {
      medicalSchool: [{ name: "" }],
    },
  });

  const { enqueueSnackbar } = useSnackbar();

  const { handleSubmit, control } = methods;

  const {
    fields: schoolFields,
    append: appendSchool,
    remove: removeSchool,
  } = useFieldArray({
    control,
    name: "medicalSchool",
  });

  const handleRemoveSchool = (index) => {
    removeSchool(index);
  };

  const handleDialogSubmit = (data) => {
    const { medicalSchool } = data;
    if (medicalSchool && medicalSchool.length > 0) {
      const filteredSchools = medicalSchool.map((school) => school.name);
      setDialogValue((prev) => {
        return { ...prev, schools: filteredSchools };
      });

      enqueueSnackbar("Schools updated");
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
          width: isSmallScreen ? "100%" : "400px",
          maxWidth: "none",
          maxHeight: "450px",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>Medical Schools</DialogTitle>
      <DialogContent sx={{ margin: "15px 0", overflow: "visible" }}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleDialogSubmit)}>
            {schoolFields.map((field, index) => (
              <Stack key={field.id}>
                <RHFTextField
                  label="Medical school"
                  name={`medicalSchool.${index}.name`}
                  InputLabelProps={{ shrink: true }}
                  placeholder="Eg. University of Ghana Medical School"
                />
                <Button
                  sx={{ marginTop: "10px" }}
                  type="button"
                  onClick={() => handleRemoveSchool(index)}
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
              onClick={() => appendSchool({ name: "" })}
            >
              + Add Medical School
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
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default SchoolDialog;
