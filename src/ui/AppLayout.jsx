import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        {/* To render the content of a nested route inside another route, use the Outlet element */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
