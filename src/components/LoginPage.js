import { React, useEffect, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import axios from "axios";
import { useForm } from "react-hook-form";

// For useContext / imports
// import { UserContext } from "../App";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { useAlert } from "react-alert";
// import { clearErrors, shoplogin } from "../../actions/shopAction";

//copied from LoginPage.js
// ******************* - toggle password - ********************
function showPwd() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function LoginPage() {
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  // const {
  //   error: shoperror,
  //   loading: shoploading,
  //   isAuthenticated: shopisAuthenticated,
  // } = useSelector((state) => state.shop);

  const dispatch = useDispatch();
  const alert = useAlert();

  //For useContext | ok
  // const { state, dispatched } = useContext(UserContext);

  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const CR = {
    email: `${email}`,
    password: `${password}`,
  };

  const loginSeller = async (e) => {
    e.preventDefault();
    console.log("Email: " + email);
    // dispatch(shoplogin(email, password));
    try {
      axios
        .post("/shop/signinin", CR)
        .then((res) => {
          localStorage.setItem("id", res.data.id);
          //For useContext | call useReduce file function
          // dispatched({ type: "USER", payload: true });
          window.alert("Login Successfully!");
          if (isAuthenticated === true) {
            dispatch(logout());
            alert.success(
              "Customer Profile Logout Successfully. Because Seller Profile Login"
            );
          }

          history.push(`/seller`);
        })
        .catch((err) => {
          if (err.response.status === 402)
            window.alert("Please filled Credentials");
          else if (err.response.status === 401)
            window.alert("Please enter Password");
          else window.alert("Credentials not matched");
        });
    } catch (err) {
      console.log("catch: " + err);
    }

    // history.push({
    //   pathname: "/seller",
    //   search: "?query=abc",
    //   state: {
    //     desc: `${sdescription}`,
    //     name: `${e.sName}`,
    //     address: `${address}`,
    //     email: `${email}`,
    //   },
    // });
    // return false;
  };

  // useEffect(() => {
  //   console.log("Use Effect in login page yr.....");
  //   if (shoperror) {
  //     alert.error(shoperror);
  //     dispatch(clearErrors());
  //   }

  //   if (shopisAuthenticated) {
  //     history.push("/seller");
  //   }
  // }, [dispatch, shoperror, alert, history, shopisAuthenticated]);

  return (
    <>
      {/* <p>the value is {response}</p> */}
      <form className="login-form" encType="multipart/form-data">
        <Link to="/">
          <img src={logo} className="login-logo" alt="logo" />
        </Link>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            console.log(e.target.value);
            setemail(e.target.value);
          }}
          placeholder="abc@gmail.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            console.log(e.target.value);
            setpassword(e.target.value);
          }}
          placeholder="Password.."
        />
        <input
          type="checkbox"
          id="showPassword"
          name="showPassword"
          onClick={showPwd}
        />
        <label htmlFor="showPassword" className="showPwd">
          Show Password
        </label>

        <br />
        <Link
          className="spanForgetPassword d-flex justify-content-center"
          aria-current="page"
          to="/"
        >
          Forget password?
        </Link>

        <input
          type="button"
          value="LOG IN"
          name="login"
          onClick={loginSeller}
        />
      </form>
      {/* <div className="login-footer">
        <hr />
        <p> @ 2021, Anarkali Bazar, Lhr. </p>
      </div> */}
    </>

    // const history = useHistory();

    // const [user, setUser] = useState({
    //   sName: "",
    //   address: "",
    //   email: "",
    //   password: "",
    //   // shopImage: ""
    // });

    // // const [filename, setFileName] = useState("");

    // let name, value;

    // // const onChangeFile = (e) => {
    // //     name = e.target.name;
    // //     value = e.target.files[0];
    // //     setUser({ ...user, [name]: value }); //
    // //     console.log(e.target);
    // // }

    // const handleInputs = (e) => {
    //   console.log(e);
    //   name = e.target.name;
    //   value = e.target.value;
    //   setUser({ ...user, [name]: value });
    // };

    // const PostData = async (e) => {
    //   e.preventDefault();

    //   const { sName, address, email, password, shopImage } = user;
    //   // const { filename } = filename;
    //   // const formdata = new FormData();
    //   // formdata.append("sName", user.sName);
    //   // formdata.append("address", user.address);
    //   // formdata.append("email", user.email);
    //   // formdata.append("password", user.password);
    //   // formdata.append("filename", filename);

    //   const res = await fetch("/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       sName,
    //       address,
    //       email,
    //       password,
    //       shopImage,
    //     }),
    //   });

    //   const data = await res.json();
    //   console.log(data);
    //   alert("success");

    //   history.push("/");
    // I need to change the data to res
    // if (data.status === 422 || !data) {
    //     window.alert("INvalid Registration");
    //     console.log("INvalid Registration");
    // } else {
    //      window.alert(" Registration Successfull");
    //     console.log("Successfull Registration");

    //     // history.push("/login");
    // }
    // };
  );
}

export default LoginPage;
