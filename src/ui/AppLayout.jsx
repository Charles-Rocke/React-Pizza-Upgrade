import Header from './Header';
import CartOverview from '../features/cart/CartOverview';

import Loader from './Loader';
import { Outlet, useLinkClickHandler, useNavigation } from 'react-router-dom';
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* To render the content of a nested route inside another route, use the Outlet element */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
