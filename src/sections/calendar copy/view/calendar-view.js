import Calendar from "@fullcalendar/react"; // => request placed at the top
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import timelinePlugin from "@fullcalendar/timeline";
//
import { useState, useEffect, useCallback } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
// utils
import { fTimestamp } from "src/utils/format-time";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
import { useResponsive } from "src/hooks/use-responsive";
// _mock
import { CALENDAR_COLOR_OPTIONS } from "src/_mock/_calendar";
// api
import { useGetEvents, updateEvent } from "src/api/calendar";
// components
import Iconify from "src/components/iconify";
import { useSettingsContext } from "src/components/settings";
//
import { useCalendar, useEvent } from "../hooks";
import { StyledCalendar } from "../styles";
import CalendarForm from "../calendar-form";
import CalendarToolbar from "../calendar-toolbar";
import CalendarFilters from "../calendar-filters";
import CalendarFiltersResult from "../calendar-filters-result";
// import { useAppointmentDetails } from "src/sections/appointments/context/appointment-context";

// ----------------------------------------------------------------------

const defaultFilters = {
  colors: [],
  startDate: null,
  endDate: null,
};

// ----------------------------------------------------------------------

export default function CalendarView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const smUp = useResponsive("up", "sm");

  const openFilters = useBoolean();

  const [filters, setFilters] = useState(defaultFilters);

  // const [events, setEvents] = useState([]);

  // const { appointmentDetails } = useAppointmentDetails();

  // const { events, eventsLoading } = useGetEvents();
  const events = [
    {
      id: "event-1",
      title: "Meeting",
      description: "Meeting with the board of directors",
      start: new Date(2024, 2, 12, 10, 0), // March 12, 2024, 10:00 AM
      end: new Date(2024, 2, 12, 12, 0), // March 12, 2024, 12:00 PM
      color: theme.palette.success.main,
    },
    {
      id: "event-2",
      title: "Presentation",
      description: "Presentation with the board of directors",
      start: new Date(2024, 2, 14, 14, 0), // March 14, 2024, 2:00 PM
      end: new Date(2024, 2, 14, 16, 0), // March 14, 2024, 4:00 PM
      color: theme.palette.error.main,
    },
    // Add more event objects here
  ];

  // const events = [];

  // appointmentDetails?.forEach((app) => {
  //   const { id, appointmentDate, patientName, complaint, appointmentType } =
  //     app;
  //   const newObj = {
  //     id,
  //     title: "Appointment",
  //     description: `You have an appointment with ${patientName}`,
  //     start: appointmentDate,
  //     end: appointmentDate,
  //     color:
  //       appointmentType === "Video"
  //         ? theme.palette.warning.main
  //         : theme.palette.error.main,
  //   };
  //   events.push(newObj);
  // });

  // Update events state outside the loop
  // setEvents((prevEvents) => [...prevEvents, ...newEvents]);

  const dateError =
    filters.startDate && filters.endDate
      ? filters.startDate.getTime() > filters.endDate.getTime()
      : false;

  const {
    calendarRef,
    //
    view,
    date,
    //
    onDatePrev,
    onDateNext,
    onDateToday,
    onDropEvent,
    onChangeView,
    onSelectRange,
    onClickEvent,
    onResizeEvent,
    onInitialView,
    //
    openForm,
    onOpenForm,
    onCloseForm,
    //
    selectEventId,
    selectedRange,
    //
    onClickEventInFilters,
  } = useCalendar();

  const currentEvent = useEvent(events, selectEventId, selectedRange, openForm);

  useEffect(() => {
    onInitialView();
  }, [onInitialView]);

  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const canReset =
    !!filters.colors.length || (!!filters.startDate && !!filters.endDate);

  const dataFiltered = applyFilter({
    inputData: events,
    filters,
    dateError,
  });

  const renderResults = (
    <CalendarFiltersResult
      filters={filters}
      onFilters={handleFilters}
      //
      canReset={canReset}
      onResetFilters={handleResetFilters}
      //
      results={dataFiltered.length}
      sx={{ mb: { xs: 3, md: 5 } }}
    />
  );

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : "xl"}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          <Typography variant="h4">Calendar</Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={onOpenForm}
          >
            New Event
          </Button>
        </Stack>

        {canReset && renderResults}

        <Card>
          <StyledCalendar>
            <CalendarToolbar
              date={date}
              view={view}
              // loading={eventsLoading}
              onNextDate={onDateNext}
              onPrevDate={onDatePrev}
              onToday={onDateToday}
              onChangeView={onChangeView}
              onOpenFilters={openFilters.onTrue}
            />

            <Calendar
              weekends
              editable
              droppable
              selectable
              rerenderDelay={10}
              allDayMaintainDuration
              eventResizableFromStart
              ref={calendarRef}
              initialDate={date}
              initialView={view}
              dayMaxEventRows={3}
              eventDisplay="block"
              events={dataFiltered}
              eventColor={(event) => event.color}
              headerToolbar={false}
              select={onSelectRange}
              eventClick={onClickEvent}
              height={smUp ? 720 : "auto"}
              eventDrop={(arg) => {
                onDropEvent(arg, updateEvent);
              }}
              eventResize={(arg) => {
                onResizeEvent(arg, updateEvent);
              }}
              plugins={[
                listPlugin,
                dayGridPlugin,
                timelinePlugin,
                timeGridPlugin,
                interactionPlugin,
              ]}
            />
          </StyledCalendar>
        </Card>
      </Container>

      <Dialog
        fullWidth
        maxWidth="xs"
        open={openForm}
        onClose={onCloseForm}
        transitionDuration={{
          enter: theme.transitions.duration.shortest,
          exit: theme.transitions.duration.shortest - 80,
        }}
      >
        <DialogTitle sx={{ minHeight: 76 }}>
          {openForm && <> {currentEvent?.id ? "Edit Event" : "Add Event"}</>}
        </DialogTitle>

        <CalendarForm
          currentEvent={currentEvent}
          colorOptions={CALENDAR_COLOR_OPTIONS}
          onClose={onCloseForm}
        />
      </Dialog>

      <CalendarFilters
        open={openFilters.value}
        onClose={openFilters.onFalse}
        //
        filters={filters}
        onFilters={handleFilters}
        //
        canReset={canReset}
        onResetFilters={handleResetFilters}
        //
        dateError={dateError}
        //
        events={events}
        colorOptions={CALENDAR_COLOR_OPTIONS}
        onClickEvent={onClickEventInFilters}
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, filters, dateError }) {
  const { colors, startDate, endDate } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  inputData = stabilizedThis.map((el) => el[0]);

  if (colors.length) {
    inputData = inputData.filter((event) => colors.includes(event.color));
  }

  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter(
        (event) =>
          fTimestamp(event.start) >= fTimestamp(startDate) &&
          fTimestamp(event.end) <= fTimestamp(endDate)
      );
    }
  }

  return inputData;
}
