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
import { PATH_AFTER_LOGIN } from "src/config-global";
import { useSnackbar } from "src/components/snackbar";
import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
} from "src/components/hook-form";

// import { getOneUser } from "./helpers/request";
import customAxios from "src/utils/customAxios";
import { Button, Dialog, DialogTitle, Tooltip, useTheme } from "@mui/material";
import ServiceDialog from "./service-dialog";
import CoordinatesDialog from "./coordinates-dialog";
import ScheduleForm from "./facility-schedule";
import tools from "../../../assets/images/tools-onboarding.png";
import { useRouter, useSearchParams } from "src/routes/hooks";

// ----------------------------------------------------------------------

export default function BioData({ carousel }) {
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

  const { onboardingData } = useContext(AuthContext);
  const theme = useTheme();
  const searchParams = useSearchParams();

  const returnTo = searchParams.get("returnTo");
  const router = useRouter();

  console.log(onboardingData);
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
    description: Yup.string()
      .required("Facility description is required")
      .min(20, "Description cannot be less than 20 characters"),
    // isPublic: Yup.boolean(),
  });

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = methods;

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
        location,
      } = rhfdata;

      const dataObject = {
        facilityID: onboardingData?.facilityID,
        userID: onboardingData?.userID,
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
          coordinates: [
            dialogValues?.coordinatestwo?.lat,
            dialogValues?.coordinatestwo?.long,
          ],
          address: location,
          city: location,
          // country,
          ghanaPostId: "hgyt 098765",
        },
        coordinatestwo: dialogValues?.coordinatestwo,
        faclityType: "Laboratory",
        service: dialogValues?.service,
        facilityDescription: description,
      };
      // const dataObject = {
      //   facilityID: "lH5H8Fc1js0B",
      //   userID: "FRO-63753041",
      //   facilityUserRole: "Admin",
      //   faciltyName: "Yeblo Labs",
      //   contact: {
      //     email: "ben8765@gmail.com",
      //     phoneNumber: "0564890908",
      //     website: "www.eastlabs.org",
      //   },
      //   operatingDays: [
      //     { days: "Monday", hours: "1pm -5pm" },
      //     { days: "Friday", hours: "1pm -5pm" },
      //   ],
      //   location: {
      //     locationType: "Point",
      //     coordinates: [-0.2422966, 5.6080762],
      //     address: "Ashaiman Street",
      //     city: "Ashaiman",
      //     ghanaPostId: "hgyt 098765",
      //   },
      //   coordinatestwo: { lat: -0.2422966, long: 5.6080762 },
      //   faclityType: "Laboratory",
      //   service: [
      //     "Out Patient",
      //     "Services",
      //     "General Medicines",
      //     "Maternity Care",
      //     "Eye Unit",
      //   ],
      //   facilityDescription:
      //     "Ashaiman Pharmacy is the biggest pharmaceutical company in Ghana, driven by our mission to provide a full range of quality pharmaceutical products at affordable prices. With over 30 years of experience in the Pharmaceutical Industry, Ernest Chemists Limited remains a true symbol of stability and diversity. <br> We have deep insight, knowledge and experience in the pharmaceutical industry and this enables us to continue to provide quality and affordable pharmaceutical products to meet the health needs for everyone in the society. We have been able to consolidate our position as the biggest distributor of pharmaceutical products with a wide distribution network across Ghana and beyond. We have the largest retail chain, with an ultra-modern pharmacy setup, to bring products closer to customers, coupled with exceptional customer service.",
      // };

      console.log(dataObject);

      await customAxios.post(`/facility`, dataObject);

      // getUser();
      carousel.onNext();
      enqueueSnackbar("Update success!");
      router.push(returnTo || PATH_AFTER_LOGIN);
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
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",

          display: "flex",
          flexDirection: "row",

          "@media (max-width: 600px)": {
            height: "100vh",
            width: "100vw",
            flexDirection: "column",
            overflow: "scroll",
          },
        }}
      >
        {/* wallpaper on side */}
        <Stack
          sx={{
            flex: 1,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // borderRadius: "10px 0 0 10px",
            backgroundPosition: "center center",

            background:
              theme.palette.mode === "light"
                ? "linear-gradient(89deg, #021c3d 0, #033585 100%)"
                : "linear-gradient(253deg, #021c3d 0, #021d4b 100%)",
            position: "relative",
            padding: "10px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "@media (max-width: 850px)": {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${tools})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              // width: '100vw',
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          />
          <Box
            sx={{
              width: "auto",
              maxWidth: "300px",
              height: "auto",
              padding: "10px",
              // background: '#00000010',
              zIndex: "999",
              "@media (min-width: 1200px)": {
                maxWidth: "450px",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                marginBottom: "10px",
                fontSize: "25px",
                color: "#fff",
              }}
            >
              Embark on a transformative health journey with us.
            </Typography>
            {/* <Box sx={{ my: 3, width: "100%", height: "100%" }}>
              <img src={tools} alt="illustration" />
            </Box> */}
          </Box>
        </Stack>
        {/* Form side */}{" "}
        <Stack
          sx={{
            flex: 2,
            overflow: "auto",
            // height: '100%',
            "@media (max-width: 600px)": {
              flex: 5,
              overflow: "scroll",
            },
            "@media (max-width: 900px)": {
              mt: "50px",
            },
          }}
        >
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Grid spacing={3}>
              <Grid xs={12} md={8}>
                <Card
                  sx={{
                    p: 10,
                    boxShadow: "none",
                    "@media (max-width: 850px)": {
                      p: 4,
                    },
                    "@media (max-width: 425px)": {
                      padding: "32px 10px",
                    },
                  }}
                >
                  <Box
                    rowGap={3}
                    columnGap={2}
                    display="grid"
                    gridTemplateColumns={{
                      xs: "repeat(1, 1fr)",
                      sm: "repeat(2, 1fr)",
                    }}
                    sx={{
                      margin: "50px 0",
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
                    {/* <RHFAutocomplete
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
                    /> */}
                  </Box>

                  <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
                    <RHFTextField
                      name="description"
                      multiline
                      rows={5}
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
        </Stack>
      </Stack>
    </>
  );
}
