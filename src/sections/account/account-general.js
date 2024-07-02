import * as Yup from "yup";
import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
// hooks
import { AuthContext } from "src/auth/context/jwt";
// utils
import { fData } from "src/utils/format-number";
// assets
import { countries } from "src/assets/data";
// components
import { LoadingScreen } from "src/components/loading-screen";
import Iconify from "src/components/iconify";
import { useSnackbar } from "src/components/snackbar";
import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
} from "src/components/hook-form";

import { getOneUser } from "./helpers/request";
import customAxios from "src/utils/customAxios";
import { Button, Dialog, DialogTitle, Tooltip } from "@mui/material";
import ServiceDialog from "./helpers/service-dialog";
import CoordinatesDialog from "./helpers/coordinates-dialog";
import ScheduleForm from "./helpers/facility-schedule";

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();
  const [userData, setUserData] = useState({});
  const [openServiceBox, setOpenServiceBox] = useState(false);
  const [openCoordinatesBox, setOpenCoordinatesBox] = useState(false);
  const [schedules, setSchedules] = useState([{ days: "", hours: "" }]);
  const [openScheduleBox, setOpenScheduleBox] = useState(false);
  const [dialogValues, setDialogValues] = useState({
    service: [],
    coordinatestwo: {},
  });

  const { user } = useContext(AuthContext);

  console.log(user);
  console.log(schedules);
  // const getUser = async () => {
  //   try {
  //     const {
  //       data: { data },
  //     } = await getOneUser(user?.facilityID, user?.token);
  //     setUserData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const UpdateUserSchema = Yup.object().shape({
    // facilityName: Yup.string().required("Facility name is required"),
    // email: Yup.string()
    // .required("Email is required")
    // .email("Email must be a valid email address"),
    // website: Yup.string().required("Website is required"),
    // location: Yup.string().required("Location is required"),
    // coordinatestwo: Yup.string().required("Coordinate is a required field"),
    // service: Yup.string().required("Service is a required field"),
    // photoURL: Yup.mixed().nullable().required("Avatar is required"),
    // phoneNumber: Yup.string().required("Phone number is required"),
    // country: Yup.string().required("Country is required"),
    // description: Yup.string().required("Facility description is required"),
    // isPublic: Yup.boolean(),
  });

  const defaultValues = {
    facilityName: user && user?.faciltyName,
    email: user && user.contactPerson?.email,
    website: user && user.contact?.website,
    photoURL: user && user?.photo,
    location: user?.location?.address && user?.location?.address,
    coordinatestwo: user && user?.coordinatestwo,
    service: user && user?.service,
    phoneNumber: user && user.contactPerson?.telephone,
    description: user && user?.facilityDescription,
    country: user && user.location?.country,
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = methods;

  useEffect(() => {
    if (user) {
      setValue("facilityName", user?.faciltyName);
      setValue("email", user.contactPerson?.email);
      setValue("website", user.contact?.website);
      setValue("photoURL", user?.photo);
      setValue("phoneNumber", user.contactPerson?.telephone);
      setValue("description", user?.facilityDescription);
      setValue("country", user.location?.country);
      setValue("location", user?.location?.address && user?.location.address);
      setValue("coordinatestwo", user?.coordinatestwo);
      setValue("service", user?.service);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, setValue]);

  const onSubmit = handleSubmit(async (rhfdata) => {
    try {
      const {
        facilityName,
        email,
        website,
        photoURL,
        phoneNumber,
        description,
        country,
        address,
      } = rhfdata;

      const dataObject = {
        facilityID: user?.facilityID,
        userID: user?.userID,
        facilityUserRole: "Admin",
        faciltyName: facilityName,
        contact: {
          email,
          phoneNumber,
          website,
        },
        operatingDays: schedules,
        location: {
          locationType: "Point",
          coordinates: dialogValues?.coordinatestwo,
          address: address,
          country,
          ghanaPostId: "hgyt 098765",
        },
        coordinatestwo: dialogValues?.coordinatestwo,
        faclityType: "Laboratory",
        service: dialogValues?.service,
        facilityDescription: description,
      };

      console.log(dataObject);

      // await customAxios.post(`/facility`, dataObject);

      if (photoURL !== user?.photo) {
        const formData = new FormData();
        formData.append("image", photoURL);

        await customAxios.patch(`/imageupload/user/${user?._id}`, formData);
      }

      // getUser();
      enqueueSnackbar("Update success!");
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("photoURL", file);
      }
    },
    [setValue]
  );

  const facilityNameWatch = watch("facilityName");

  return (
    <>
      {!user && facilityNameWatch === undefined ? (
        <LoadingScreen />
      ) : (
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid xs={12} md={4}>
              <Card sx={{ pt: 10, pb: 5, px: 3, textAlign: "center" }}>
                <RHFUploadAvatar
                  name="photoURL"
                  maxSize={3145728}
                  onDrop={handleDrop}
                  helperText={
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 3,
                        mx: "auto",
                        display: "block",
                        textAlign: "center",
                        color: "text.disabled",
                      }}
                    >
                      Allowed *.jpeg, *.jpg, *.png, *.gif
                      <br /> max size of {fData(3145728)}
                    </Typography>
                  }
                />
              </Card>
            </Grid>

            <Grid xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Box
                  rowGap={3}
                  columnGap={2}
                  display="grid"
                  gridTemplateColumns={{
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                  }}
                >
                  <RHFTextField
                    name="facilityName"
                    label="Laboratory Name"
                    InputLabelProps={{ shrink: true }}
                  />
                  <RHFTextField
                    name="email"
                    label="Email Address"
                    InputLabelProps={{ shrink: true }}
                  />
                  <RHFTextField
                    name="phoneNumber"
                    label="Phone Number"
                    InputLabelProps={{ shrink: true }}
                  />
                  <RHFTextField
                    name="website"
                    label="Website"
                    InputLabelProps={{ shrink: true }}
                  />
                  <RHFTextField
                    name="location"
                    label="Location"
                    InputLabelProps={{ shrink: true }}
                  />
                  {/* <Grid item xs={12} md={12}> */}
                  <Tooltip title="Add services offered at your facility">
                    <Button
                      variant="outlined"
                      onClick={() => setOpenServiceBox(true)}
                      sx={{
                        padding: "14px",
                      }}
                      fullWidth
                    >
                      + Add Services
                    </Button>
                  </Tooltip>

                  <ServiceDialog
                    open={openServiceBox}
                    handleClose={() => setOpenServiceBox(false)}
                    setDialogValue={setDialogValues}
                  />
                  {/* </Grid>{" "} */}
                  {/* <Grid item xs={12} md={12}> */}
                  <Tooltip title="Add facility coordinates">
                    <Button
                      variant="outlined"
                      onClick={() => setOpenCoordinatesBox(true)}
                      sx={{
                        padding: "14px",
                      }}
                      fullWidth
                    >
                      + Add Coordinates
                    </Button>
                  </Tooltip>

                  <CoordinatesDialog
                    open={openCoordinatesBox}
                    handleClose={() => setOpenCoordinatesBox(false)}
                    setDialogValue={setDialogValues}
                  />
                  {/* </Grid>{" "} */}
                  {/* <Grid item xs={12} md={6}> */}
                  <Tooltip title="Add your available days and time in the dialog popup">
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => setOpenScheduleBox(true)}
                      sx={{
                        padding: "16.5px 14px",
                      }}
                    >
                      + Add Available Days
                    </Button>
                  </Tooltip>
                  <Dialog
                    open={openScheduleBox}
                    onClose={() => setOpenScheduleBox(false)}
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
                      Doctor's Schedule
                    </DialogTitle>
                    <ScheduleForm
                      handleClose={() => setOpenScheduleBox(false)}
                      setSchedules={setSchedules}
                      schedules={schedules}
                    />
                  </Dialog>
                  {/* </Grid> */}
                  <RHFAutocomplete
                    name="country"
                    label="Country"
                    options={countries.map((country) => country.label)}
                    getOptionLabel={(option) => option}
                    renderOption={(props, option) => {
                      const { code, label, phone } = countries.filter(
                        (country) => country.label === option
                      )[0];

                      if (!label) {
                        return null;
                      }

                      return (
                        <li {...props} key={label}>
                          <Iconify
                            key={label}
                            icon={`circle-flags:${code.toLowerCase()}`}
                            width={28}
                            sx={{ mr: 1 }}
                          />
                          {label} ({code}) +{phone}
                        </li>
                      );
                    }}
                  />
                </Box>

                <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
                  <RHFTextField
                    name="description"
                    multiline
                    rows={4}
                    label="Description"
                  />

                  <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    Save Changes
                  </LoadingButton>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </FormProvider>
      )}
    </>
  );
}
