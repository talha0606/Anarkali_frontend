import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import { storage } from "../firebase/firebase.js";
import classNames from "classnames";

// import User from "../../../server/model/userSchema";

const AddProduct = () => {
  let history = useHistory();
  const [sellerid, setsellerId] = useState(localStorage.getItem("id"));
  const [pname, setpname] = useState("");
  const [pdescription, setpdescription] = useState("");
  const [price, setprice] = useState("");
  const [previewimage, setpreviewimage] = useState(avatar);
  // const [filename, setfilename] = useState("");
  const [category, setcateory] = useState("Bags");
  const [brand, setbrand] = useState("");
  const [stock, setstock] = useState("");
  const [prodImage, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState("");

  //categories
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

  //for image changing
  const previewImage = (event) => {
    // setImage(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setpreviewimage(reader.result);
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    // setImage(event.target.files[0]);
    // setpreviewimage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  // const handleChange = (e) => {
  //   console.log("handlechange");
  // if (e.target.files[0]) {
  //   setImage(e.target.files[0]);
  //   console.log(e.target.files[0]);
  //   console.log("cccimage name " + image);
  // }
  // };

  // const handleUpload = (id) => {
  //   console.log("handleupload");
  //   console.log("image name " + image);
  //   // FireBase Code............................
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           console.log("URL: " + url);
  //           setUrl(url);
  //           const idd = { id: id, prodImage: `${url}` };
  //           axios
  //             .post("/product/productadded", idd)
  //             // console.log("Status: " + res.status);
  //             // if (res.status === 200) {
  //             //   window.alert("Product added successfully");
  //             //   history.push(`/seller`);
  //             // }
  //             .then((res) => {
  //               console.log("Status: " + res.status);

  //               window.alert("Product added successfully");
  //               history.push(`/seller`);
  //               // setStatus(200);
  //               // localStorage.setItem("id", res.data.id);
  //               // window.alert("Shop registered Successfully.");
  //               // history.push(`/seller`);
  //             })
  //             .catch((err) => {
  //               console.log("onChangeCcccclick");
  //             });
  //         });
  //     }
  //   );
  //   // {
  //   //   url && onChangeClick(e);
  //   // }
  // };

  // {
  //   image && handleUpload();
  // }
  useEffect(() => {
    console.log("Category: " + category);
  }, [category]);

  const onChangeClick = async (event) => {
    // event.preventDefault();
    console.log("Image of Product " + prodImage);
    console.log("sellerId: " + sellerid);
    console.log("pName: " + pname);

    const myForm = new FormData();
    myForm.set("sellerId", sellerid);
    myForm.set("pName", pname);
    myForm.set("pDescription", pdescription);
    myForm.set("price", price);
    myForm.set("image", prodImage);
    // myForm.append("prodImage", url);
    myForm.set("category", category);
    myForm.set("brand", brand);
    myForm.set("stock", stock);
    // const CR = {
    //   sellerId: `${sellerid}`,
    //   pName: `${pname}`,
    //   pDescription: `${pdescription}`,
    //   price: `${price}`,
    //   prodImage: `${url}`,
    //   category: `${category}`,
    //   brand: `${brand}`,
    //   stock: `${stock}`,
    // };

    // setpname("");
    // setpdescription("");
    // setprice("");
    // setpreviewimage(avatar);
    // setfilename(avatar);
    // setcateory(1);
    // setbrand("");
    // setstock("");
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post("/product/product", myForm, config);
    console.log("Add Product Data: " + data);
    if (data) {
      history.push(`/seller`);
    }
    // axios({
    //   method: "post",
    //   url: "/product/product",
    //   data: myForm,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    // .then((res) => {
    //   console.log(res.data.id);
    //   // handleUpload(res.data.id);
    //   window.alert("Product Image uploading. Plz wait 3 to 5 sec...");

    //   history.push(`/seller`);
    // })
    // .catch((err) => {
    //   console.log("ERror............................");
    //   if (err.response.status === 402) {
    //     window.alert("Please filled the empty field properly");
    //   }
    //   console.log(err);
    // });

    // console.log("the name is: " + pname);
    // history.push(`/seller`);
    // history.push({
    //   pathname: "/seller",
    //   search: "?query=abc",
    //   state: { desc: `${pdescription}` },
    // });
  };

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

        <label htmlFor="pName">Product Name</label>
        <input
          // className={classNames("", { "is-invalid": errors.pName })}
          type="text"
          id="pName"
          name="pName"
          value={pname}
          onChange={(e) => setpname(e.target.value)}
          placeholder="Product Name.."
          // {...register("pName", {
          //   required: "This field is required*",
          //   minLength: {
          //     value: 4,
          //     message: "Atlease 4 characters long*",
          //   },
          // })}
        />
        {/* {errors.pName && (
          <div className="invalid-feedback">{errors.pName.message}</div>
        )} */}

        <label htmlFor="pDescription">Product Description</label>
        <input
          type="text"
          id="pDescription"
          name="pDescription"
          value={pdescription}
          onChange={(e) => setpdescription(e.target.value)}
          placeholder="Product Description.."
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          placeholder="Price.."
        />
        <label htmlFor="product-img" id="img-label">
          Choose Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          // filename="productImage"
          // onChange={previewImage}
          onChange={previewImage}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          onChange={(e) => {
            setcateory(e.target.value);
          }}
        >
          {categories.map((item) => (
            <option key={item.key} value={item.value}>
              {item.value}
            </option>
          ))}
          {/* <option>
                    Bags
                    </option> */}
        </select>
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={brand}
          onChange={(e) =>
            setbrand(e.target.value /*.charAt(0).toUpperCase()*/)
          }
          placeholder="Brand Name.."
        ></input>
        <label htmlFor="countInStock">Count In Stock</label>
        <input
          type="text"
          name="stock"
          id="stock"
          value={stock}
          onChange={(e) => setstock(e.target.value)}
          placeholder="Count in Stock.."
        ></input>
        <input
          type="button"
          onClick={(e) => {
            onChangeClick(e);
          }}
          value="Add Product"
          name="add"
        />
      </form>
      <div className="login-footer">
        <hr />
        <p> @ 2021, Anarkali Bazar, Lhr. </p>
      </div>
    </>
  );
};

export default AddProduct;
