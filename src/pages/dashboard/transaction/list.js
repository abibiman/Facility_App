import { Helmet } from "react-helmet-async";
// sections
import { TransactionListView } from "src/sections/invoice/view";

// ----------------------------------------------------------------------

export default function TransactionListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: My Appointments</title>
      </Helmet>

      <TransactionListView />
    </>
  );
}
