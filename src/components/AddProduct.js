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
  const [category, setcateory] = useState(1);
  const [brand, setbrand] = useState("");
  const [stock, setstock] = useState("");
  const [image, setImage] = useState(null);
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
    // setfilename(event.target.files[0]);
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

  const handleChange = (e) => {
    console.log("handlechange");
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
      console.log("cccimage name " + image);
    }
  };

  const handleUpload = (e) => {
    console.log("handleupload");
    console.log("image name " + image);
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
            console.log("URL: " + url);
            setUrl(url);
          });
      }
    );
    // {
    //   url && onChangeClick(e);
    // }
  };

  // {
  //   image && handleUpload();
  // }
  // useEffect(() => {
  //   handleUpload();
  // }, [image]);

  const onChangeClick = (event) => {
    // event.preventDefault();
    console.log("on change image name " + image.name);
    console.log(`Url ${url}`);

    // const fd = new FormData();
    // fd.append("sellerId", sellerid);
    // fd.append("pName", event.pName);
    // fd.append("pDescription", pdescription);
    // fd.append("price", price);
    // // fd.append("prodImage", filename);
    // fd.append("prodImage", url);
    // fd.append("category", category);
    // fd.append("brand", brand);
    // fd.append("stock", stock);
    const CR = {
      sellerId: `${sellerid}`,
      pName: `${pname}`,
      pDescription: `${pdescription}`,
      price: `${price}`,
      prodImage: `${url}`,
      category: `${category}`,
      brand: `${brand}`,
      stock: `${stock}`,
    };

    setpname("");
    setpdescription("");
    setprice("");
    setpreviewimage(avatar);
    // setfilename(avatar);
    setcateory(1);
    setbrand("");
    setstock("");

    axios
      .post("/product", CR)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("ERror............................");
        console.log(err);
      });

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
      <img src={url}></img>
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
          type="text"
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
          name="productImage"
          filename="productImage"
          // onChange={previewImage}
          onChange={(e) => {
            // handleChange(e);
            // previewImage(e);
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
            <option key={item.key} value={item.key}>
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
            // handleUpload(e);
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
