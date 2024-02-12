import PropTypes from "prop-types";
// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
// utils
import { fToNow } from "src/utils/format-time";
// components
import Label from "src/components/label";
import FileThumbnail from "src/components/file-thumbnail";

// ----------------------------------------------------------------------

export default function NotificationItem({ notification }) {
  console.log(notification);
  const renderAvatar = (
    <ListItemAvatar>
      {notification.avatarUrl ? (
        <Avatar
          src={notification.avatarUrl}
          sx={{ bgcolor: "background.neutral" }}
        />
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: "background.neutral",
          }}
        >
          <Box
            component="img"
            src={`/assets/icons/notification/${
              (notification.type === "appointment" && "ic_appointment") ||
              (notification.type === "chat" && "ic_chat") ||
              (notification.type === "payment" && "ic_payment") ||
              (notification.type === "delivery" && "ic_delivery")
            }.svg`}
            sx={{ width: 24, height: 24 }}
          />
        </Stack>
      )}
    </ListItemAvatar>
  );

  const renderText = (
    <ListItemText
      disableTypography
      primary={reader(notification.message)}
      secondary={
        <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: "caption", color: "text.disabled" }}
          divider={
            <Box
              sx={{
                width: 2,
                height: 2,
                bgcolor: "currentColor",
                mx: 0.5,
                borderRadius: "50%",
              }}
            />
          }
        >
          {fToNow(notification.StringDate)}
          <Typography sx={{ textTransform: "capitalize", fontSize: "12px" }}>
            {notification.type}
          </Typography>
        </Stack>
      }
    />
  );

  const renderUnReadBadge = notification.isUnRead && (
    <Box
      sx={{
        top: 26,
        width: 8,
        height: 8,
        right: 20,
        borderRadius: "50%",
        bgcolor: "info.main",
        position: "absolute",
      }}
    />
  );

  // const friendAction = (
  //   <Stack spacing={1} direction="row" sx={{ mt: 1.5 }}>
  //     <Button size="small" variant="contained">
  //       Accept
  //     </Button>
  //     <Button size="small" variant="outlined">
  //       Decline
  //     </Button>
  //   </Stack>
  // );

  return (
    <ListItemButton
      disableRipple
      sx={{
        p: 2.5,
        alignItems: "flex-start",
        borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      {renderUnReadBadge}

      {renderAvatar}

      <Stack sx={{ flexGrow: 1 }}>
        {renderText}
        {/* {notification.type === 'friend' && friendAction} */}
      </Stack>
    </ListItemButton>
  );
}

NotificationItem.propTypes = {
  notification: PropTypes.object,
};

// ----------------------------------------------------------------------

function reader(data) {
  return (
    <Box
      dangerouslySetInnerHTML={{ __html: data }}
      sx={{
        mb: 0.5,
        "& p": { typography: "body2", m: 0 },
        "& a": { color: "inherit", textDecoration: "none" },
        "& strong": { typography: "subtitle2" },
      }}
    />
  );
}
