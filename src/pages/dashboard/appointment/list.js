import { Helmet } from "react-helmet-async";
// sections
import { OrderListView } from "src/sections/order/view";

// ----------------------------------------------------------------------

export default function AppointmentListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: My Appointments</title>
      </Helmet>

      <OrderListView />
    </>
  );
}
