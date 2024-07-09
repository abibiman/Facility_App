import PropTypes from "prop-types";
import { useCallback } from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DialogActions from "@mui/material/DialogActions";
// utils
import uuidv4 from "src/utils/uuidv4";
import { fTimestamp } from "src/utils/format-time";
// api
import { createEvent, updateEvent, deleteEvent } from "src/api/calendar";
// components
import Iconify from "src/components/iconify";
import { useSnackbar } from "src/components/snackbar";
import { ColorPicker } from "src/components/color-utils";
import FormProvider, {
  RHFTextField,
  RHFSwitch,
} from "src/components/hook-form";

// ----------------------------------------------------------------------

export default function CalendarForm({ currentEvent, colorOptions, onClose }) {
  const { enqueueSnackbar } = useSnackbar();

  const EventSchema = Yup.object().shape({
    title: Yup.string().max(255).required("Title is required"),
    description: Yup.string().max(
      5000,
      "Description must be at most 5000 characters"
    ),
    // not required
    color: Yup.string(),
    allDay: Yup.boolean(),
    start: Yup.mixed(),
    end: Yup.mixed(),
  });

  const methods = useForm({
    resolver: yupResolver(EventSchema),
    defaultValues: currentEvent,
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods}>
      <Stack spacing={3} sx={{ px: 3 }}>
        <RHFTextField
          name="title"
          label="Title"
          InputProps={{ readOnly: true }}
        />

        <RHFTextField
          name="description"
          label="Description"
          multiline
          rows={3}
          InputProps={{ readOnly: true }}
        />

        <RHFTextField
          name="start"
          label="Date"
          InputProps={{ readOnly: true }}
          sx={{ mb: "25px" }}
        />

        {/* <RHFSwitch name="allDay" label="All day" /> */}

        {/* <Controller
          name="end"
          control={control}
          render={({ field }) => (
            <MobileDateTimePicker
              {...field}
              value={new Date(field.value)}
              onChange={(newValue) => {
                if (newValue) {
                  field.onChange(fTimestamp(newValue));
                }
              }}
              label="End date"
              format="dd/MM/yyyy hh:mm a"
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: dateError,
                  helperText:
                    dateError && "End date must be later than start date",
                },
              }}
            />
          )}
        /> */}

        {/* <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <ColorPicker
              selected={field.value}
              onSelectColor={(color) => field.onChange(color)}
              colors={colorOptions}
            />
          )}
        /> */}
      </Stack>

      {/* <DialogActions>
        <Box sx={{ flexGrow: 1 }} />

        <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button>

        <LoadingButton
          type="submit"
          variant="contained"
          loading={isSubmitting}
          disabled={dateError}
        >
          Save Changes
        </LoadingButton>
      </DialogActions> */}
    </FormProvider>
  );
}

CalendarForm.propTypes = {
  colorOptions: PropTypes.arrayOf(PropTypes.string),
  currentEvent: PropTypes.object,
  onClose: PropTypes.func,
};
