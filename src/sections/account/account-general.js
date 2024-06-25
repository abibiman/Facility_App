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

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();
  const [userData, setUserData] = useState({});

  const { user } = useContext(AuthContext);

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
    labName: Yup.string().required("labName is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    website: Yup.string().required("website is required"),
    photoURL: Yup.mixed().nullable().required("Avatar is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    // country: Yup.string().required("Country is required"),
    address: Yup.string().required("Address is required"),
    description: Yup.string().required("Description is required"),
    isPublic: Yup.boolean(),
  });

  const defaultValues = {
    labName: user?.faciltyName,
    email: user.contactPerson?.email,
    website: user.contact?.website,
    photoURL: user?.photo,
    phoneNumber: user.contactPerson?.telephone,
    description: user?.facilityDescription,
    country: user.location?.country,
    address: user.location?.address,
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
      setValue("labName", user?.faciltyName);
      setValue("email", user.contactPerson?.email);
      setValue("website", user.contact?.website);
      setValue("photoURL", user?.photo);
      setValue("phoneNumber", user.contactPerson?.telephone);
      setValue("description", user?.facilityDescription);
      setValue("country", user.location?.country);
      setValue("address", user.location?.address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, setValue]);

  console.log(user);

  const onSubmit = handleSubmit(async (rhfdata) => {
    try {
      const {
        labName,
        email,
        website,
        photoURL,
        phoneNumber,
        description,
        country,
        address,
      } = rhfdata;

      const dataObject = {
        faciltyName: labName,
        contact: {
          email,
          phoneNumber,
          website,
        },
        operatingDays: [
          { mondays: "12pm - 14pm" },
          { Thurdays: "10am - 1pm" },
          { fridays: "6am -10am" },
        ],
        location: {
          locationType: "Point",
          coordinates: [67, 56],
          address: address,
          country,
          ghanaPostId: "hgyt 098765",
        },
        faclityType: "Pharmacy",
        service: ["Drugs selling, Council"],
        facilityDescription: description,
        contactPerson: {
          telephone: phoneNumber,
          email,
          name: "Nen Guru",
        },
      };

      await axios.patch(
        `https://abibiman-api.onrender.com/facility/${user?._id}`,
        dataObject,
        {
          headers: {
            Authorization: `Basic ${user?.token}`,
          },
        }
      );

      if (photoURL !== user?.photo) {
        const formData = new FormData();
        formData.append("image", photoURL);

        await axios.patch(
          `https://abibiman-api.onrender.com/imageupload/user/${user?._id}`,
          formData,
          {
            headers: {
              Authorization: `Basic ${user?.token}`,
            },
          }
        );
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

  const labNameWatch = watch("labName");

  return (
    <>
      {!user && labNameWatch === undefined ? (
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

                <RHFSwitch
                  name="isPublic"
                  labelPlacement="start"
                  label="Public Profile"
                  sx={{ mt: 5 }}
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
                    name="labName"
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
                    name="address"
                    label="Address"
                    InputLabelProps={{ shrink: true }}
                  />

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
