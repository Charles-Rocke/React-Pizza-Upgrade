import Header from './Header'
import CartOverview from '../features/cart/CartOverview'

import Loader from './Loader'
import { Outlet, useLinkClickHandler, useNavigation } from 'react-router-dom'
function AppLayout () {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        {/* To render the content of a nested route inside another route, use the Outlet element */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  )
}

export default AppLayout
