import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

import {
  Button,
  Dialog,
  TextField,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
  MenuItem,
  Box,
} from "@mui/material";
import EarningIllustration from "src/assets/images/earning.jpg";
import { LoadingButton } from "@mui/lab";
import customAxios from "src/utils/customAxios";
import { useSnackbar } from "src/components/snackbar";
import { useAuthContext } from "src/auth/hooks";
import { AuthContext } from "src/auth/context/jwt";

export default function EarningApproval({ openDialog, setOpenDialog, data }) {
  const handleCloseDialog = () => setOpenDialog(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuthContext(AuthContext);
  const { facilityID } = user || "";

  const handlePayoutRequest = async () => {
    setIsSubmitting(true);
    try {
      await customAxios.post("/transactions/labs/payout", {
        facilityID,
      });
      enqueueSnackbar("Payout request successful");
      handleCloseDialog();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Dialog open={!!openDialog} onClose={handleCloseDialog}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: "100%", sm: "425px" },
          pb: 5,
        }}
      >
        <Box
          component="img"
          src={EarningIllustration}
          alt="mission"
          sx={{
            mx: "auto",
            my: "15px",
            width: { xs: "100%", sm: 250 },
            height: { xs: "100%", sm: 250 },
            borderRadius: "50%",
          }}
        />

        <Typography variant="body1" textAlign="center">
          Net Amount (after 20% deduction) <br />
          <span style={{ fontWeight: 700, fontSize: "18px" }}>
            GH₵ {data?.amount}
          </span>
        </Typography>
      </DialogContent>

      <DialogActions>
        <LoadingButton
          loading={isSubmitting}
          onClick={handlePayoutRequest}
          variant="contained"
          color="primary"
        >
          Proceed
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}

EarningApproval.propTypes = {
  setOpenDialog: PropTypes.func,
  openDialog: PropTypes.bool,
  data: PropTypes.object,
};
