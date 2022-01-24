import { React, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { storage } from "../firebase/firebase.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from "react-loader-spinner";

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

  const [sname, setsname] = useState("");
  const [sdescription, setsdescription] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [filename, setfilename] = useState("");
  const [previewimage, setpreviewimage] = useState(avatar);
  const [category, setcateory] = useState(1);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  // const [response, setresponse] = useState("");
  const [progress, setProgress] = useState("");
  const [status, setStatus] = useState("");
  const [credential, setcredential] = useState({});

  //Preview Code
  const previewImage = (event) => {
    // setfilename(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setpreviewimage(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(previewimage);
    setpreviewimage(event.target.files[0]);
    console.log(previewimage);
  };

  const handleChange = (e) => {
    console.log("handlechange");
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const handleUpload = (id) => {
    console.log("handleupload");

    // FireBase Code............................
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log("URL: " + typeof url);
            setUrl(url);
            const idd = { id: id, shopImage: `${url}` };
            axios
              .post("/registered", idd)
              .then((res) => {
                console.log(
                  "kdasjfkjafjkkasfkjakjfkj........................................"
                );
                // setStatus(200);
                // localStorage.setItem("id", res.data.id);
                // window.alert("Shop registered Successfully.");
                // history.push(`/seller`);
              })
              .catch((err) => {
                console.log("onChangeCcccclick");

                if (err.response.status === 422) {
                  window.alert(err);
                  window.alert("Email already Exist");
                }
              });
          });
      }
    );

    // <Audio heigth="100" width="100" color="grey" arialLabel="loading" />;
  };

  // {
  //   url && onChangeClick(e);
  // }

  //Click Oye
  const onChangeClick = (e) => {
    e.preventDefault();
    console.log("onChangeClick");
    // <Audio heigth="100" width="100" color="grey" arialLabel="loading" />;

    // const shopData = {
    //   sName: `${sname}`,
    //   sDescription: `${sdescription}`,
    //   addresss: `${address}`,
    //   email: `${email}`,
    //   password: `${password}`,
    //   shopImage: `${filename}`,
    //   category: `${category}`,
    // };
    // const fd = new FormData();
    // fd.append("sName", sname);
    // fd.append("sDescription", sdescription);
    // fd.append("address", address);
    // fd.append("email", email);
    // fd.append("password", password);
    // // fd.append("shopImage", filename);
    // fd.append("imageUrl", url);
    // fd.append("category", category);

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
    const CR = {
      sName: `${sname}`,
      sDescription: `${sdescription}`,
      address: `${address}`,
      email: `${email}`,
      password: `${password}`,
      imageUrl: `${url}`,
      category: `${category}`,
    };

    // setcredential(CR);

    try {
      console.log("onChangeClick");

      axios
        .post("/register", CR)
        .then((res) => {
          console.log("ID: " + res.data.id);
          setStatus(200);
          // nextaxioscall();
          handleUpload(res.data.id);
          localStorage.setItem("id", res.data.id);
          window.alert("Shop registered Successfully.");
          history.push(`/login`);
        })
        .catch((err) => {
          console.log("onChangeCcccclick");

          if (err.response.status === 422) {
            window.alert(err);
            window.alert("Email already Exist");
          } else if (err.response.status === 402) {
            window.alert("Please filled the empty field properly");
          }
        });
    } catch (err) {
      console.log("onChangeClick");

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

  // const nextaxioscall = () => {
  //   console.log("NExtAxiosCall");
  //   const CR = {
  //     sName: `${sname}`,
  //     sDescription: `${sdescription}`,
  //     address: `${address}`,
  //     email: `${email}`,
  //     password: `${password}`,
  //     imageUrl: `${url}`,
  //     category: `${category}`,
  //   };
  //   if (true) {
  //     try {
  //       console.log("if click");

  //       axios
  //         .post("/registered", CR)
  //         .then((res) => {
  //           console.log(
  //             "kdasjfkjafjkkasfkjakjfkj........................................"
  //           );
  //           // setStatus(200);
  //           localStorage.setItem("id", res.data.id);
  //           window.alert("Shop registered Successfully.");
  //           history.push(`/seller`);
  //         })
  //         .catch((err) => {
  //           console.log("onChangeCcccclick");

  //           if (err.response.status === 422) {
  //             window.alert(err);
  //             window.alert("Email already Exist");
  //           }
  //         });
  //     } catch (err) {
  //       console.log("onChangeClick");

  //       window.alert("Axios not working");
  //     }
  //   }
  // };

  // const handleInput = (e) => {
  //   console.log(e.target.value);
  //   setsname(e.target.value);
  // };

  // useEffect(()=>{
  //   localStorage.setItem("id", "hello");
  // })

  return (
    <>
      {/* <img src={url}></img> */}
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

        <label htmlFor="sName">Shop Name</label>
        <input
          // className={classNames("", { "is-invalid": errors.sName })}
          autoComplete="off"
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
        <label htmlFor="email">Shop Email</label>
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
          Choose Shop Image
        </label>
        <input
          type="file"
          id="image"
          name="shopImage"
          filename="shopImage"
          onChange={(e) => {
            handleChange(e);
            previewImage(e);
          }}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          onChange={(e) => {
            setcateory(e.target.value);
            console.log(e.target.value);
          }}
        >
          {categories.map((item) => (
            <option key={item.key} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <input
          type="button"
          value="REGISTER NOW"
          name="register"
          onClick={(e) => {
            // handleUpload(e);
            onChangeClick(e);
          }}
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
