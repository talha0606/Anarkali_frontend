import { React, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import classNames from "classnames";

// ******************* - toggle password - ********************
function showPwd() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// ******************* - Show Shop Image - ********************

// window.addEventListener("load", function () {
//   document
//     .querySelector('input[type="file"]')
//     .addEventListener("change", function () {
//       if (this.files && this.files[0]) {
//         var img = document.querySelector("#myImg");
//         img.onload = () => {
//           URL.revokeObjectURL(img.src);
//         };
//         img.src = URL.createObjectURL(this.files[0]);
//       }
//     });
// });

function SignUpPage() {
  const categories = [
    { key: 1, value: "Bags" },
    { key: 2, value: "Books" },
    { key: 3, value: "Scarf" },
    { key: 4, value: "Toys" },
    { key: 5, value: "Sports" },
    { key: 6, value: "Groceries" },
    { key: 7, value: "Pents" },
    { key: 8, value: "Kurtas" },
    { key: 9, value: "Watches" },
    { key: 10, value: "Cameras" },
  ];

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange",
  // });

  const history = useHistory();
  // const [response, setresponse] = useState("");
  const [sname, setsname] = useState("kaskfj");
  const [sdescription, setsdescription] = useState("mmmmmmmmm");
  const [address, setaddress] = useState("dsfaf");
  const [email, setemail] = useState("asdf@gmail.com");
  const [password, setpassword] = useState("sadffa");
  const [filename, setfilename] = useState("");
  const [previewimage, setpreviewimage] = useState(avatar);
  const [category, setcateory] = useState(1);
  // const [response, setresponse] = useState("");

  const previewImage = (event) => {
    setfilename(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setpreviewimage(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);

    setpreviewimage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const onChangeClick = (e) => {
    e.preventDefault();
    console.log("onChangeClick");
    // const shopData = {
    //   sName: `${sname}`,
    //   sDescription: `${sdescription}`,
    //   addresss: `${address}`,
    //   email: `${email}`,
    //   password: `${password}`,
    //   shopImage: `${filename}`,
    //   category: `${category}`,
    // };
    const fd = new FormData();
    fd.append("sName", sname);
    fd.append("sDescription", sdescription);
    fd.append("address", address);
    fd.append("email", email);
    fd.append("password", password);
    fd.append("shopImage", filename);
    fd.append("category", category);

    // setsname("");
    // setsdescription("");
    // setaddress("");
    // setemail("");
    // setpassword("");
    // setfilename(avatar);
    // setcateory(1);

    // const res = await axios.post("/register", shopData);
    // console.log("Status: " + res.Status);

    // if (res.status === 422) {
    //   window.alert("Email already axist");
    // } else {
    //   window.alert("Shop registered Successfully.");
    // }

    try {
      axios
        .post("/register", fd)
        .then((res) => {
          console.log(
            "kdasjfkjafjkkasfkjakjfkj........................................"
          );
          localStorage.setItem("id", res.data.id);
          window.alert("Shop registered Successfully.");
          history.push(`/seller`);
        })
        .catch((err) => {
          if (err.response.status === 422) {
            window.alert(err);
            window.alert("Email already Exist");
          }
        });
    } catch (err) {
      window.alert("Axios not working");
    }

    // console.log("the name is: " + sname);
    // console.log("the id is: " + response);
    // history.push(`/seller`);
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

  // const handleInput = (e) => {
  //   console.log(e.target.value);
  //   setsname(e.target.value);
  // };

  // useEffect(()=>{
  //   localStorage.setItem("id", "hello");
  // })

  return (
    <>
      <form
        // onSubmit={handleSubmit(onChangeClick)}
        className="login-form"
        encType="multipart/form-data"
      >
        <Link to="/">
          <img src={logo} className="login-logo" alt="logo" />
        </Link>
        <img
          src={previewimage}
          className="img-round mx-auto d-block img-thumbnail avatar"
          id="myImg"
          alt="Shop avatar"
        />

        <label htmlFor="sName">Name</label>
        <input
          // className={classNames("", { "is-invalid": errors.sName })}
          type="text"
          id="sName"
          name="sName"
          value={sname}
          onChange={(e) => setsname(e.target.value)}
          placeholder="Shop Name.."
          // {...register("sName", {
          //   required: "This field is required*",
          //   minLength: {
          //     value: 4,
          //     message: "Atlease 4 characters long*",
          //   },
          // })}
        />
        {/* {errors.sName && (
          <div className="invalid-feedback">{errors.sName.message}</div>
        )} */}

        <label htmlFor="sDescription">Shop Description</label>
        <input
          type="text"
          id="sDescription"
          name="sDescription"
          value={sdescription}
          onChange={(e) => setsdescription(e.target.value)}
          placeholder="Shop Description.."
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          placeholder="Address.."
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="abc@gmail.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
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
        <label htmlFor="shop-img" id="img-label">
          Choose Image
        </label>
        <input
          type="file"
          id="image"
          name="shopImage"
          filename="shopImage"
          onChange={previewImage}
        />
        <select
          name="category"
          onChange={(e) => {
            setcateory(e.target.value);
            console.log(e.target.value);
          }}
        >
          {categories.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <input
          type="button"
          value="REGISTER NOW"
          name="register"
          onClick={onChangeClick}
        />
      </form>
      <div className="login-footer">
        <hr />
        <p> @ 2021, Anarkali Bazar, Lhr. </p>
      </div>
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

export default SignUpPage;