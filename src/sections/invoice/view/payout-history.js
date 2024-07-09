import sumBy from "lodash/sumBy";
import { useState, useCallback, useEffect } from "react";
// @mui
import { useTheme, alpha } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import TableContainer from "@mui/material/TableContainer";
// routes
import { paths } from "src/routes/paths";
import { useRouter } from "src/routes/hooks";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// utils
import { fTimestamp } from "src/utils/format-time";
// _mock
import { INVOICE_SERVICE_OPTIONS } from "src/_mock";
// components
import Label from "src/components/label";
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";
import { ConfirmDialog } from "src/components/custom-dialog";
import { useSettingsContext } from "src/components/settings";
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from "src/components/table";
//
import TranscationAnalytic from "../transaction-analytic";
import InvoiceTableToolbar from "../invoice-table-toolbar";
import InvoiceTableFiltersResult from "../invoice-table-filters-result";
import customAxios from "src/utils/customAxios";
import { useAuthContext } from "src/auth/hooks";
import { AuthContext } from "src/auth/context/jwt";
import NetEarning from "src/assets/images/net.png";
import TotalEarning from "src/assets/images/total.png";
import Deduction from "src/assets/images/deduction.png";
import PayoutRequestTableRow from "../payout-request-table-row";
import PayoutHistoryTableRow from "../payout-history-table-row";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "service", label: "Service Type" },
  { id: "createDate", label: "Request Date" },
  { id: "gross", label: "Gross Earning (GH₵)" },
  // { id: "dueDate", label: "Due" },
  { id: "charge", label: "Charge (GH₵)" },
  { id: "net", label: "Net Earning (GH₵)" },
  { id: "status", label: "Status" },
  // { id: "sent", label: "Sent", align: "center" },
  // { id: "status", label: "Status" },
  // { id: "" },
];

const defaultFilters = {
  name: "",
  service: [],
  status: "all",
  startDate: null,
  endDate: null,
};

// ----------------------------------------------------------------------

export default function PayoutHistory() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const router = useRouter();

  const table = useTable({ defaultOrderBy: "createDate" });

  const confirm = useBoolean();

  const { user } = useAuthContext(AuthContext);

  const [tableData, setTableData] = useState([]);
  const [otherData, setOtherData] = useState({});

  const [filters, setFilters] = useState(defaultFilters);

  // const [openEarningPopup, setOpenEarningPopup] = useState(false);

  const { startDate, endDate } = filters;
  const openDialog = startDate !== null && endDate !== null;

  const fetchData = async () => {
    const { data: resData } = await customAxios.get(
      // `/transactions/appointments/requested/${providerID}`
      `/transactions/labs/history/${user?.facilityID}`
    );
    setTableData(resData?.data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.providerID]);

  const handleClose = () => {
    setFilters((prev) => {
      return { ...prev, startDate: null, endDate: null };
    });
  };
  const newData = tableData.map((data) => {
    return {
      ...data,
      total: Number(data.total),
      charges: Number(data.charges),
      amount: Number(data.amount),
    };
  });
  console.log(newData);
  const getGross = sumBy(newData, "total");
  const getCharges = sumBy(newData, "charges");
  const getNet = sumBy(newData, "amount");

  console.log(getGross, getCharges, getNet);

  const dateError =
    filters.startDate && filters.endDate
      ? filters.startDate.getTime() > filters.endDate.getTime()
      : false;

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
    dateError,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    !!filters.service.length ||
    filters.status !== "all" ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const getInvoiceLength = (status) =>
    tableData.filter((item) => item.status === status).length;

  const TABS = [
    { value: "all", label: "All", color: "default", count: tableData.length },
    {
      value: "paid",
      label: "Paid",
      color: "success",
      count: getInvoiceLength("paid"),
    },
    {
      value: "pending",
      label: "Pending",
      color: "warning",
      count: getInvoiceLength("pending"),
    },
    {
      value: "overdue",
      label: "Overdue",
      color: "error",
      count: getInvoiceLength("overdue"),
    },
    {
      value: "draft",
      label: "Draft",
      color: "default",
      count: getInvoiceLength("draft"),
    },
  ];

  const handleFilters = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter(
      (row) => !table.selected.includes(row.id)
    );
    setTableData(deleteRows);

    table.onUpdatePageDeleteRows({
      totalRows: tableData.length,
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleEditRow = useCallback(
    (id) => {
      router.push(paths.dashboard.invoice.edit(id));
    },
    [router]
  );

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.invoice.details(id));
    },
    [router]
  );

  const handleFilterStatus = useCallback(
    (event, newValue) => {
      handleFilters("status", newValue);
    },
    [handleFilters]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : "lg"}>
        <Card
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          <Scrollbar>
            <Stack
              direction="row"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderStyle: "dashed" }}
                />
              }
              sx={{ py: 2 }}
            >
              <TranscationAnalytic
                title="Gross Earnings"
                total={tableData.length}
                percent={100}
                price={getGross}
                icon={TotalEarning}
                color={theme.palette.primary.main}
              />

              <TranscationAnalytic
                title="Total Deduction"
                // total={dataFiltered.length}
                percent={20}
                price={getCharges}
                icon={Deduction}
                color={theme.palette.info.main}
              />

              <TranscationAnalytic
                title="Net Earnings"
                // total={getInvoiceLength("paid")}
                percent={80}
                price={getNet}
                icon={NetEarning}
                color={theme.palette.success.main}
              />
            </Stack>
          </Scrollbar>
        </Card>

        <Card>
          <Tabs
            value={filters.status}
            onChange={handleFilterStatus}
            sx={{
              px: 2.5,
              boxShadow: `inset 0 -2px 0 0 ${alpha(
                theme.palette.grey[500],
                0.08
              )}`,
            }}
          >
            {TABS.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={tab.label}
                iconPosition="end"
                icon={
                  <Label
                    variant={
                      ((tab.value === "all" || tab.value === filters.status) &&
                        "filled") ||
                      "soft"
                    }
                    color={tab.color}
                  >
                    {tab.count}
                  </Label>
                }
              />
            ))}
          </Tabs>

          <InvoiceTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            dateError={dateError}
            serviceOptions={INVOICE_SERVICE_OPTIONS.map(
              (option) => option.name
            )}
          />

          {canReset && (
            <InvoiceTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              //
              onResetFilters={handleResetFilters}
              //
              results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}

          <TableContainer sx={{ position: "relative", overflow: "unset" }}>
            <TableSelectedAction
              dense={table.dense}
              numSelected={table.selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
              action={
                <Stack direction="row">
                  <Tooltip title="Sent">
                    <IconButton color="primary">
                      <Iconify icon="iconamoon:send-fill" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Download">
                    <IconButton color="primary">
                      <Iconify icon="eva:download-outline" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Print">
                    <IconButton color="primary">
                      <Iconify icon="solar:printer-minimalistic-bold" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton color="primary" onClick={confirm.onTrue}>
                      <Iconify icon="solar:trash-bin-trash-bold" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              }
            />

            <Scrollbar>
              <Table
                size={table.dense ? "small" : "medium"}
                sx={{ minWidth: 800 }}
              >
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <PayoutHistoryTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(
                      table.page,
                      table.rowsPerPage,
                      tableData.length
                    )}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filters, dateError }) {
  const { name, status, service, startDate, endDate } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (invoice) =>
        invoice.invoiceNumber.toLowerCase().indexOf(name.toLowerCase()) !==
          -1 ||
        invoice.invoiceTo.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (status !== "all") {
    inputData = inputData.filter((invoice) => invoice.status === status);
  }

  if (service.length) {
    inputData = inputData.filter((invoice) =>
      invoice.items.some((filterItem) => service.includes(filterItem.service))
    );
  }

  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter(
        (transaction) =>
          fTimestamp(transaction.appointmentDate) >= fTimestamp(startDate) &&
          fTimestamp(transaction.appointmentDate) <= fTimestamp(endDate)
      );
    }
  }

  return inputData;
}
