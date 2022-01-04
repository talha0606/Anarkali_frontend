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

import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <div class="container-fluid box"> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginPage />
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
        <Route>
          <Error />
        </Route>
      </Switch>
      {/* </div> */}
      
    </>
  );
}

export default App;
