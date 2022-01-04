import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import axios from "axios";

// import image from `../images/${props.product.prodImage}`;

// import {previewImage  } from "./AddProduct";
// import AddProduct from "./AddProduct";

const EditProduct = (props) => {
  console.log("EditProduct/Props: " + props.product.pName);
  console.log("EditProduct/Props: " + props.product.prodImage);

  const [sellerid, setsellerId] = useState(localStorage.getItem("id"));
  const [id, setid] = useState(props.product._id);
  const [pname, setpname] = useState(props.product.pName);
  const [pdescription, setpdescription] = useState(props.product.pDescription);
  const [price, setprice] = useState(props.product.price);
  const [brand, setbrand] = useState(props.product.brand);
  const [stock, setstock] = useState(props.product.stock);
  const [previewimage, setpreviewimage] = useState(props.product.prodImage);
  const [opreimg, setopreimg] = useState(props.product.prodImage);
  const [filename, setfilename] = useState("");
  const [category, setcateory] = useState(props.product.category);
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
    // e.preventDefault();

    const fd = new FormData();
    fd.append("id", id);
    fd.append("sellerId", sellerid);
    fd.append("pName", pname);
    fd.append("pDescription", pdescription);
    fd.append("price", price);
    fd.append("prodImage", filename);
    fd.append("category", category);
    fd.append("brand", brand);
    fd.append("stock", stock);

    setpname("");
    setpdescription("");
    setprice("");
    setpreviewimage(avatar);
    setfilename(avatar);
    setcateory(1);
    setbrand("");
    setstock("");

    axios
      .post("/product", fd)
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="ModalHead">
          Edit Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Product Name {id}</h4>
        <div>
          <form className="login-form" encType="multipart/form-data">
            <Link to="/">
              <img src={logo} className="login-logo" alt="logo" />
            </Link>
            <img
              src={
                opreimg === previewimage
                  ? `uploads/${previewimage}`
                  : previewimage
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
              name="productImage"
              filename="productImage"
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
                  selected={item.key === category ? "selected" : false}
                  value={item.key}
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
                props.onHide();
              }}
              value="Edit Product"
              name="add"
            />
          </form>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
              <Button onClick={props.onHide}>Save</Button>
            </Modal.Footer> */}
    </Modal>
  );
};

export default EditProduct;