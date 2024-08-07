import { useState, useCallback, useEffect } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import TableContainer from "@mui/material/TableContainer";
// routes
import { paths } from "src/routes/paths";
import { useRouter } from "src/routes/hooks";
// _mock
import { _orders, ORDER_STATUS_OPTIONS } from "src/_mock";
// utils
import { fTimestamp } from "src/utils/format-time";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// components
import Label from "src/components/label";
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";
import { ConfirmDialog } from "src/components/custom-dialog";
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
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
import OrderTableRow from "../order-table-row";
import OrderTableToolbar from "../order-table-toolbar";
import OrderTableFiltersResult from "../order-table-filters-result";
import customAxios from "src/utils/customAxios";
import { useAuthContext } from "src/auth/hooks";

// ----------------------------------------------------------------------

const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  ...ORDER_STATUS_OPTIONS,
];

const TABLE_HEAD = [
  { id: "orderNumber", label: "Appointment ID", width: 110 },
  { id: "name", label: "Patient", width: 140 },
  { id: "createdAt", label: "Date", width: 120 },
  { id: "totalQuantity", label: "Order Type", width: 200, align: "center" },
  { id: "totalAmount", label: "Status", width: 110 },
  { id: "payment", label: "Payment Status", width: 110 },
  { id: "status", label: "Priority", width: 110 },
  { id: "", width: 88 },
];

const defaultFilters = {
  name: "",
  status: "all",
  startDate: null,
  endDate: null,
  orderType: "",
  labOrderId: "",
};

// ----------------------------------------------------------------------

export default function OrderListView() {
  const table = useTable({ defaultOrderBy: "orderNumber" });

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState([]);

  const [filters, setFilters] = useState(defaultFilters);

  const { user } = useAuthContext();

  const fetchAllOrders = async () => {
    try {
      const { data } = await customAxios.get(
        `/medical-labs/facility/approved/${user?.facilityID}`
      );

      setTableData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tableData);

  useEffect(() => {
    fetchAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const denseHeight = table.dense ? 52 : 72;

  const canReset =
    !!filters.name ||
    filters.status !== "all" ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

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

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.order.details(id));
    },
    [router]
  );

  const handleFilterStatus = useCallback(
    (event, newValue) => {
      handleFilters("status", newValue);
    },
    [handleFilters]
  );

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : "lg"}>
        <CustomBreadcrumbs
          heading="All Appointments"
          links={[
            {
              name: "Dashboard",
              href: paths.dashboard.root,
            },
            {
              name: "Appointments",
              href: paths.dashboard.order.root,
            },
            { name: "List" },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card>
          {/* <Tabs
            value={filters.status}
            onChange={handleFilterStatus}
            sx={{
              px: 2.5,
              boxShadow: (theme) =>
                `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
            }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab
                key={tab.value}
                iconPosition="end"
                value={tab.value}
                label={tab.label}
                icon={
                  <Label
                    variant={
                      ((tab.value === "all" || tab.value === filters.status) &&
                        "filled") ||
                      "soft"
                    }
                    color={
                      (tab.value === "completed" && "success") ||
                      (tab.value === "pending" && "warning") ||
                      (tab.value === "cancelled" && "error") ||
                      "default"
                    }
                  >
                    {tab.value === "all" && tableData.length}
                    {tab.value === "completed" &&
                      tableData.filter((order) => order.status === "Completed")
                        .length}

                    {tab.value === "pending" &&
                      tableData.filter((order) => order.status === "Pending")
                        .length}
                    {tab.value === "cancelled" &&
                      tableData.filter((order) => order.status === "Cancelled")
                        .length}
                    {tab.value === "refunded" &&
                      tableData.filter((order) => order.status === "Refunded")
                        .length}
                  </Label>
                }
              />
            ))}
          </Tabs> */}

          <OrderTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            canReset={canReset}
            onResetFilters={handleResetFilters}
          />

          {canReset && (
            <OrderTableFiltersResult
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
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={confirm.onTrue}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table
                size={table.dense ? "small" : "medium"}
                sx={{ minWidth: 960 }}
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
                    .sort(
                      (a, b) =>
                        new Date(b.dateOrdered) - new Date(a.dateOrdered)
                    )
                    .map((row) => (
                      <OrderTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                        fetchAllOrders={fetchAllOrders}
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

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete{" "}
            <strong> {table.selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filters, dateError }) {
  const { status, name, startDate, endDate, orderType, labOrderId } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (orderType) {
    inputData = inputData.filter(
      (order) =>
        order.orderType.toLowerCase().indexOf(orderType.toLowerCase()) !== -1
      // order.customer.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
      // order.customer.email.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (status !== "all") {
    inputData = inputData.filter((order) => order.status === status);
  }

  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter(
        (order) =>
          fTimestamp(order.dateOrdered) >= fTimestamp(startDate) &&
          fTimestamp(order.dateOrdered) <= fTimestamp(endDate)
      );
    }
  }

  return inputData;
}
