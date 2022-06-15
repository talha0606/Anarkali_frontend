import { React, useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import axios from "axios";

// import image from `../images/${props.product.prodImage}`;

// import {previewImage  } from "./AddProduct";
// import AddProduct from "./AddProduct";

const EditProduct = (/*props*/) => {
  const history = useHistory();
  const { product } = useParams();
  const prodId = product;
  // console.log("EditProduct: " + prodId);
  // console.log("EditProduct/Props: " + /*props*/ product.pName);
  // console.log("EditProduct/Props: " + /*props*/ product.prodImage);

  const [sellerid, setsellerId] = useState(localStorage.getItem("id"));
  const [id, setid] = useState(prodId);
  const [pname, setpname] = useState("");
  const [pdescription, setpdescription] = useState("");
  const [price, setprice] = useState("");
  const [url, setUrl] = useState("");
  // const [opreimg, setopreimg] = useState();
  const [filename, setfilename] = useState("");
  const [category, setcateory] = useState("");
  const [brand, setbrand] = useState("");
  const [stock, setstock] = useState("");
  const [previewimage, setpreviewimage] = useState(avatar);

  // const [prodName, setprodName] = useState("");
  // const [prodDescription, setprodDescription] = useState("");
  // const [prodPrice, setprodPrice] = useState("");
  // const [prodImage, setprodImage] = useState(avatar);
  // const [prodcategory, setprodCategory] = useState("");
  // const [prodBrand, setprodBrand] = useState("");
  // const [prodStock, setprodStock] = useState("");

  const getShopDetail = async () => {
    try {
      const res = await fetch(`/product/prodinfo?id=${prodId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setpname(data[0].pName);
      setpdescription(data[0].pDescription);
      setprice(data[0].price);
      setUrl(data[0].prodImage);
      setcateory(data[0].category);
      setbrand(data[0].brand);
      setstock(data[0].stock);

      //   setshopImage(data[0].shopImage);
    } catch (err) {
      //   history.push("/login");
      console.log("Error in Product Detail Page");
    }
  };

  useEffect(() => {
    // console.log("sellerid " + localStorage.getItem("id"));
    getShopDetail();
  }, [sellerid]);

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

  //for image changing
  const previewImage = (event) => {
    // setfilename(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setpreviewimage(reader.result);
        setfilename(reader.result);
      } else {
        setpreviewimage(avatar);
      }
    };
    reader.readAsDataURL(event.target.files[0]);

    // setpreviewimage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const onChangeClick = (e) => {
    // e.preventDefault();
    console.log("Image of Updated Product " + filename);
    console.log("sellerId: " + sellerid);
    console.log("pName: " + pname);

    const fd = new FormData();
    fd.set("sellerId", sellerid);
    fd.set("id", id);
    fd.set("pName", pname);
    fd.set("pDescription", pdescription);
    fd.set("price", price);
    fd.set("prodImage", url);
    fd.set("category", category);
    fd.set("brand", brand);
    fd.set("stock", stock);
    fd.set("image", filename);

    // setpname("");
    // setpdescription("");
    // setprice("");
    // // setpreviewimage(avatar);
    // setfilename(avatar);
    // setUrl(avatar);
    // setcateory(1);
    // setbrand("");
    // setstock("");
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    axios
      .post("/product/updateProduct", fd, config)
      .then((res) => {
        console.log("Updated Product Response: " + res);
        console.log("Updated Product Data: " + res.data);

        window.alert("Product Updated Successfully");
        history.push("/seller");
      })
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
    //<Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter" className="ModalHead">
    //       Edit Product
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <h4>Product Name {id}</h4>
    <>
      <div>
        <form className="login-form" encType="multipart/form-data">
          <Link to="/">
            <img src={logo} className="login-logo" alt="logo" />
          </Link>
          <img
            src={
              // opreimg === previewimage
              //   ? `uploads/${previewimage}`
              //   : previewimage
              previewimage === avatar ? url : previewimage
            }
            className="img-round mx-auto d-block img-thumbnail avatar"
            id="myImg"
            alt="Shop avatar"
          />

          <label htmlFor="pName">Product Name</label>
          <input
            // className={classNames("", { "is-invalid": errors.sName })}
            type="text"
            id="pName"
            name="pName"
            value={pname}
            onChange={(e) => setpname(e.target.value)}
            placeholder="Product Name.."
            // {...register("pName", {
            //     required: "This field is required*",
            //     minLength: {
            //     value: 4,
            //     message: "Atlease 4 characters long*",
            //     },
            // })}
          />
          {/* {errors.sName && (
                <div className="invalid-feedback">{errors.sName.message}</div>
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
            name="image"
            // filename="image"
            accept="image/*"
            onChange={previewImage}
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
              <option
                key={item.key}
                selected={item.value === category ? "selected" : false}
                value={item.value}
              >
                {item.value}
              </option>
            ))}
          </select>
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={brand}
            onChange={(e) => setbrand(e.target.value)}
            placeholder="Brand Name.."
          ></input>
          <label htmlFor="countInStock">Count In Stock</label>
          <input
            type="text"
            name="countInStock"
            id="countInStock"
            value={stock}
            onChange={(e) => setstock(e.target.value)}
            placeholder="Count in Stock.."
          ></input>
          <input
            type="button"
            onClick={() => {
              onChangeClick();
              // props.onHide();
            }}
            value="Update Product"
            name="add"
          />
        </form>
      </div>
      {/* // </Modal.Body> */}
      {/* <Modal.Footer>
              <Button onClick={props.onHide}>Save</Button>
            </Modal.Footer> */}
      {/* // </Modal> */}
    </>
  );
};

export default EditProduct;
