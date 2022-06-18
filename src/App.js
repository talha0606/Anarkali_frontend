import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AdminPage from "./components/AdminPage";
import FileUpload from "./components/FileUpload";
// import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Error from "./components/Error";
import Seller from "./components/Seller";
import Cart from "./components/Cart/Cart.js";
import AddProduct from "./components/AddProduct";
// import MyProducts from "./components/AddProduct";
import ModalTesting from "./components/ModalTesting";
import ShopDetail from "./components/ShopDetail";
import ContactUs from "./components/ContactUs";

import Map from "./components/Map";
import FilterNavbar from "./components/FilterNavbar";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import SignUpPage from "./components/SignUpPage";
import ProductDetail from "./components/ProductDetail";
import CategorySideBar from "./components/CategorySideBar";

// import { initialState, reducer } from "./reducer/UseReducer";
// import { useReducer, createContext } from "react";

// import Logout from "@mui/icons-material/Logout";
import EditProduct from "./components/EditProduct";
import LoginSignUp from "./components/User/LoginSignUp";
import Profile from "./components/User/Profile";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// we create a contextAPI
// export const UserContext = createContext();

import store from "./store";
import { loadUser } from "./actions/userAction";

import UserOptions from "./components/layout/Header/UserOptions";
import { useSelector } from "react-redux";

import ProtectedRoute from "./components/Route/ProtectedRoute";

function App() {
  //* we use useReducer
  // const [state, dispatch] = useReducer(reducer, initialState);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/payment/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() => {
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <>
      {/* <UserContext.Provider value={{ state, dispatch }}> */}
      <Navbar />
      <Sidebar />

      {isAuthenticated && <UserOptions user={user} />}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/logout">
          <LogoutPage />
        </Route>
        <Route exact path="/admin">
          <AdminPage />
        </Route>
        <Route exact path="/seller">
          <Seller />
        </Route>
        <Route exact path="/addProduct">
          <AddProduct />
        </Route>
        {/* <Route exact path="/myProducts">
          <MyProducts />
        </Route> */}
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/file">
          <FileUpload />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/catSide">
          <CategorySideBar />
        </Route>
        <Route exact path="/filter">
          <FilterNavbar />
        </Route>
        <Route exact path="/testing">
          <ModalTesting />
        </Route>
        <Route exact path="/shopDetail/:shopId">
          <ShopDetail />
        </Route>
        <Route exact path="/editProduct/:product">
          <EditProduct />
        </Route>
        <Route exact path="/productDetail/:prodId">
          <ProductDetail />
        </Route>
        <Route exact path="/map/:shopId">
          <Map />
        </Route>
        <Route exact path="/logiinsignup">
          <LoginSignUp />
        </Route>
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <ProtectedRoute exact path="/shipping" component={Shipping} />
        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute exact path="/process/payment" component={Payment} />
          </Elements>
        )}
        {/* <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}
        <Route>
          <Error />
        </Route>
      </Switch>
      {/* </div> */}
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
