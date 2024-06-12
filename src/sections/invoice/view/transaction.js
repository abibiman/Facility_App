import { useState, useEffect, useCallback } from "react";
// @mui

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// routes
import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";

// components
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
//

import { useAuthContext } from "src/auth/hooks";
import { AuthContext } from "src/auth/context/jwt";

import EarningApproval from "../earning";
import Pending from "./pending";
import customAxios from "src/utils/customAxios";
import Iconify from "src/components/iconify";
import { Tab, Tabs } from "@mui/material";
import PayoutRequest from "./payout-request";
import PayoutHistory from "./payout-history";

// ----------------------------------------------------------------------

const TABS = [
  {
    value: "pending",
    label: "Pending Transaction",
    icon: <Iconify icon="mdi:receipt-text-pending" width={24} />,
  },
  {
    value: "request",
    label: "Payout Request",
    icon: <Iconify icon="material-symbols:request-page-rounded" width={24} />,
  },
  {
    value: "history",
    label: "Payout History",
    icon: <Iconify icon="uis:history-alt" width={24} />,
  },
];

// ----------------------------------------------------------------------

export default function TransactionListView() {
  const settings = useSettingsContext();

  const [tableData, setTableData] = useState([]);
  const [otherData, setOtherData] = useState({});

  // tabs

  const [currentTab, setCurrentTab] = useState("pending");

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const [openEarningPopup, setOpenEarningPopup] = useState(false);
  const { user } = useAuthContext(AuthContext);
  const { facilityID } = user;

  const fetchData = async () => {
    const { data: resData } = await customAxios.get(
      `/transactions/labs/pending/${facilityID}`
    );
    console.log(resData);
    const newData = resData.data.map((data) => {
      return { ...data, price: Number(data.price) };
    });
    setOtherData(resData);
    setTableData(newData);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facilityID]);

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : "lg"}>
        <CustomBreadcrumbs
          heading="Transactions"
          links={[
            {
              name: "Dashboard",
              href: paths.dashboard.root,
            },
            {
              name: "Transactions",
              // href: paths.dashboard.invoice.root,
            },
            // {
            //   name: "List",
            // },
          ]}
          action={
            <Button
              component={RouterLink}
              onClick={() => setOpenEarningPopup(true)}
              variant="contained"
              // startIcon={<Iconify icon="mingcute:add-line" />}
            >
              Request Payout
            </Button>
          }
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          {TABS.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              icon={tab.icon}
              value={tab.value}
            />
          ))}
        </Tabs>

        {currentTab === "pending" && (
          <Pending data={tableData} extraData={otherData} />
        )}
        {currentTab === "history" && <PayoutHistory />}
        {currentTab === "request" && <PayoutRequest />}
      </Container>

      <EarningApproval
        openDialog={openEarningPopup}
        setOpenDialog={setOpenEarningPopup}
        data={otherData}
      />
    </>
  );
}
