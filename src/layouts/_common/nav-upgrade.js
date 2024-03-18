import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// hooks
import { useAuthContext } from "src/auth/hooks";
import { useRouter } from "src/routes/hooks";
import { useSnackbar } from "src/components/snackbar";

// routes
import { paths } from "src/routes/paths";
// locales
import { useLocales } from "src/locales";

// ----------------------------------------------------------------------

export default function NavUpgrade() {
  const { logout } = useAuthContext();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Unable to logout!", { variant: "error" });
    }
  };

  const { t } = useLocales();

  return (
    <Stack
      sx={{
        px: 2,
        py: 5,
        textAlign: "center",
      }}
    >
      <Stack alignItems="center">
        <Button
          variant="contained"
          // sx={{ background: "#0429cf" }}
          color="primary"
          onClick={handleLogout}
        >
          {t("Logout")}
        </Button>
      </Stack>
    </Stack>
  );
}
