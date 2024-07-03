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

const LanguageDialog = ({ open, handleClose, setDialogValue }) => {
  const methods = useForm({
    defaultValues: {
      languages: [{ name: "" }],
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
    fields: languagesFields,
    append: appendLanguage,
    remove: removeLanguage,
  } = useFieldArray({
    control,
    name: "languages",
  });
  const handleRemoveLanguage = (index) => {
    removeLanguage(index);
  };

  const handleLanguagesSubmit = (rhfdata) => {
    const { languages } = rhfdata;

    if (languages && languages.length > 0) {
      const filteredLanguages = languages.map((language) => language.name);
      setDialogValue((prev) => {
        return { ...prev, languages: filteredLanguages };
      });
      enqueueSnackbar("Languages updated");
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
      <DialogTitle sx={{ textAlign: "center" }}>Languages</DialogTitle>
      <DialogContent sx={{ margin: "15px 0", overflow: "visible" }}>
        <FormProvider
          methods={methods}
          onSubmit={methods.handleSubmit(handleLanguagesSubmit)}
          className="swiper-no-swiping"
        >
          {languagesFields.map((field, index) => (
            <Stack key={field.id}>
              <RHFTextField
                label="Language"
                name={`languages.${index}.name`}
                InputLabelProps={{ shrink: true }}
                placeholder="Eg. English"
              />

              <Button
                sx={{ marginTop: "10px" }}
                type="button"
                onClick={() => handleRemoveLanguage(index)}
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
            onClick={() => appendLanguage({ name: "" })}
          >
            + Add New Language
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

export default LanguageDialog;
