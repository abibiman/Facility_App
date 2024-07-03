import React from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  DialogContent,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const ScheduleForm = ({ handleClose, setSchedules, schedules }) => {
  const generateTimeSlots = (startHour, endHour) => {
    const slots = [];
    let currentHour = startHour;
    let currentMinute = 0;
    while (currentHour < endHour) {
      const startTime = `${currentHour
        .toString()
        .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
      const endTimeHour = currentHour + Math.floor(currentMinute / 60);
      const endTimeMinute = (currentMinute + 30) % 60;
      const endTime = `${endTimeHour
        .toString()
        .padStart(2, "0")}:${endTimeMinute.toString().padStart(2, "0")}`;
      slots.push(`${startTime} - ${endTime}`);
      currentMinute += 40;
      if (currentMinute >= 60) {
        currentHour += 1;
        currentMinute -= 60;
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots(8, 17);

  const handleAddSchedule = () => {
    setSchedules([...schedules, { day: "", timeSlot: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedSchedules = [...schedules];
    updatedSchedules[index][field] = value;
    setSchedules(updatedSchedules);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleClose();
  };

  return (
    <DialogContent sx={{ py: 5, px: 3 }}>
      <form>
        {schedules.map((schedule, index) => (
          <Grid container spacing={2} key={index} sx={{ my: 1 }}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Day</InputLabel>
                <Select
                  value={schedule.day}
                  onChange={(e) => handleChange(index, "day", e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  label="Select Day"
                >
                  <MenuItem value="Mondays">Monday</MenuItem>
                  <MenuItem value="Tuesdays">Tuesday</MenuItem>
                  <MenuItem value="Wednesdays">Wednesday</MenuItem>
                  <MenuItem value="Thursdays">Thursday</MenuItem>
                  <MenuItem value="Fridays">Friday</MenuItem>
                  {/* Add other days */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Time Slot</InputLabel>
                <Select
                  value={schedule.timeSlot}
                  onChange={(e) =>
                    handleChange(index, "timeSlot", e.target.value)
                  }
                  InputLabelProps={{ shrink: true }}
                  label="Select Time Slot"
                >
                  {timeSlots.map((timeSlot, idx) => (
                    <MenuItem key={idx} value={timeSlot}>
                      {timeSlot}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12} sx={{ my: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleAddSchedule}
          >
            Add Schedule
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            my: 2,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </LoadingButton>
        </Grid>
      </form>
    </DialogContent>
  );
};

export default ScheduleForm;
