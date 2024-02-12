import { Helmet } from "react-helmet-async";
// sections
import { CompletedListView } from "src/sections/appointments/view";

// ----------------------------------------------------------------------

export default function CompletedListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: All Orders</title>
      </Helmet>

      <CompletedListView />
    </>
  );
}