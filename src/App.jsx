import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
//import ShoppingLayout from "./components/user-view/layout";
import NotFound from "./pages/not-found";
import ShoppingAccount from "./pages/user-view/account";
import ShoppingListing from "./pages/user-view/listing";
import ShoppingCheckout from "./pages/user-view/checkout";
import CheckAuth from "./components/common/check-auth";
import UnAuthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";
import HomePage from "./pages/home-view";
import UserLayout from "./components/user-dashboard/layout";
import UserDashboard from "./pages/user-view/dashboard";
import UserAccount from "./pages/user-view/account";
import UserListing from "./pages/user-view/listing";
import UserCheckout from "./pages/user-view/checkout";
import UserNewRequests from "./pages/user-view/new-requests";
import VendorDashboard from "./pages/vendor-view/dashboard";
import VendorLayout from "./components/vendor-view/layout";
import VendorNewRequests from "./pages/vendor-view/vendorNewRequests";
import AdminVendorManagement from "./pages/admin-view/vendor-manage";
import Notifications from "./pages/admin-view/notifications";
import PrivacyPolicy from "./components/user-view/PrivacyPolicy";
import TermsAndConditions from "./components/user-view/TermsAndConditions";
import AdminServiceManagement from "./pages/admin-view/service-management";
import ServicesPage from "./pages/user-view/ServicesPage";
import ServiceFormPage from "./pages/user-view/ServiceFormPage";
import TermsAndConditionsPhonepay from "./components/user-view/TermsAndConditionsPhonepay";
import PrivacyPolicyPhonepay from "./components/user-view/PrivacyPolicyPhonepay";
import ReturnPolicy from "./components/user-view/ReturnPolicy";
import ShippingPolicy from "./components/user-view/ShippingPolicy";
import RefundCancellationPolicy from "./components/user-view/RefundCancellationPolicy";


function App() {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-full h-screen bg-slate-200" />;

  console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/*  Common components */}

      <Routes>
        
      <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/terms-en" element={<TermsAndConditionsPhonepay />} />
        <Route path="/privacy-policy-en" element={<PrivacyPolicyPhonepay />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/refund-policy" element={<RefundCancellationPolicy />} />


        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>


            {/* Admin Dashboard*/}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="manage-centers" element={<AdminVendorManagement />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="service-manage" element={<AdminServiceManagement />} />
        </Route>



            {/* User Dashboard */}
        <Route
          path="/user"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <UserLayout/>
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<UserDashboard/>} />
          <Route path="services/:subCategoryId" element={<ServicesPage />} />
          <Route path="service-form/:serviceId" element={<ServiceFormPage />} />
          <Route path="new-request" element={<UserNewRequests/>} />
          <Route path="listing" element={<UserListing/>} />
          <Route path="checkout" element={<UserCheckout />} />
          
        </Route>

            {/* Vendor Dashboard */}
        <Route
          path="/vendor"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <VendorLayout/>
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<VendorDashboard/>} />
          <Route path="new-requests" element={<VendorNewRequests/>} />
          <Route path="listing" element={<UserListing/>} />
          <Route path="checkout" element={<UserCheckout />} />
        </Route>







        <Route path="*" element={<NotFound />} />
      <Route path="/unauth-page" element={<UnAuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
