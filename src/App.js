import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AdminPage from "./components/AdminPage";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Error from "./components/Error";
import Seller from "./components/Seller";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import MyProducts from "./components/AddProduct";
import ModalTesting from "./components/ModalTesting";
import ShopDetail from "./components/ShopDetail";
import Map from "./components/Map";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import SignUpPage from "./components/SignUpPage";
import ProductDetail from "./components/ProductDetail";
import { useReducer, createContext } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
import Logout from "@mui/icons-material/Logout";
import EditProduct from "./components/EditProduct";

// we create a contextAPI
export const UserContext = createContext();

function App() {
  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginPage />
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
          <Route>
            <Error />
          </Route>
        </Switch>
        {/* </div> */}
      </UserContext.Provider>
    </>
  );
}

export default App;
