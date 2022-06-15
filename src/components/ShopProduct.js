import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import EditProduct from "./EditProduct";
import DetailproductPage from "../components/DetailproductPage";
import product from "../images/product.png";
import "../style/ShopProduct.css";
import { Link } from "react-router-dom";
import "../style/allshops.css";
import "../style/shopCards.css";

const ShopProduct = ({ id, filteredData }) => {
  console.log("ShopProduct/Sellerid" + id);
  console.log("ShopProduct/FilteredProducts: " + filteredData);
  const [filteredProducts, setFilteredProducts] = useState(filteredData);
  const [idd, setID] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [myproducts, setMyProducts] = useState();
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [prodImage, setProductImage] = useState(product);

  const Myprod = async (filters) => {
    try {
      const res = await fetch(`/product/myproducts?id=${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ filters: filters }),
        //credentials: "include",
      });

      const data = await res.json();
      console.log("MyProducts", data);
      setMyProducts(data);
      //   if (data.length == 1) {
      //     setMyProducts(data[0]);
      //   } else {
      //     setMyProducts(data);
      //   }
      //product image
      setProductImage(data.prodImage);

      //console.log("MyProducts", myproducts);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("home page error" + err);
    }
  };
  useEffect(() => {
    Myprod();
  }, [deleteProduct]);

  const deleteHandler = async (id) => {
    try {
      setDeleteProduct(true);
      const res = await fetch(`/deleteproduct?id=${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ filters: filters }),
        //credentials: "include",
      });

      const data = await res.json();
      console.log("DeleteProductMessage: " + data[0]);
    } catch (err) {
      console.log("home page error" + err);
    }
  };

  if (filteredProducts === null) {
    return (
      <>
        <div className="container">
          <div className="row no-gutters">
            {myproducts?.map((prod) => (
              <div className="col-3 col-* ">
                <div className="card">
                  <div className="imgBx">
                    <Link to={`/productDetail/${prod._id}`}>
                      <img
                        // src={`/uploads/${shop.shopImage}`}
                        src={prod.prodImage}
                        alt="Card image cap"
                        //   onClick={() => {
                        //     setID(user._id);
                        //   }}
                      />
                    </Link>
                    <ul className="action">
                      <li>
                        <i className="fa fa-heart" aria-hidden="true">
                          {" "}
                        </i>
                        <span>Add to Wishlist</span>
                      </li>
                      <li>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        <span>View Details</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="productName">
                      <h3>{prod.pName}</h3>
                    </div>
                    <div className="price_rating">
                      <h3>Rs. {prod.price}</h3>
                      <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star grey" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {console.log("Else/ShopProduct/FilteredProducts: " + filteredProducts)}
        <div className="container">
          <div className="row no-gutters">
            {filteredProducts?.map((prod) => (
              <div className="col-3 col-* ">
                <div className="card">
                  <div className="imgBx">
                    <Link to={`/productDetail/${prod._id}`}>
                      <img
                        // src={`/uploads/${shop.shopImage}`}
                        src={prod.prodImage}
                        alt="Card image cap"
                        //   onClick={() => {
                        //     setID(user._id);
                        //   }}
                      />
                    </Link>
                    <ul className="action">
                      <li>
                        <i className="fa fa-heart" aria-hidden="true">
                          {" "}
                        </i>
                        <span>Add to Wishlist</span>
                      </li>
                      <li>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        <span>View Details</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="productName">
                      <h3>{prod.pName}</h3>
                    </div>
                    <div className="price_rating">
                      <h3>Rs. {prod.price}</h3>
                      <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star grey" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  {
    /* /////////////////////////////////////////////// */
  }
  {
    /* previous 1 */
  }
  {
    /* /////////////////////////////////////////////// */
  }

  {
    /* <div className="container-fluid bg-trasparent my-4 p-3 containerProduct">
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          <ul className="list-group list-group-horizontal unstyled">
            {myproducts?.map((prod) => (
              <li className="list-group-item shopProdd">
                <div className="col hp">
                  <div className="card shadow-sm"> */
  }

  {
    /* <a href="#"> */
  }
  {
    /* <a
                      onClick={() => {
                        setID(prod._id);
                        console.log(prod.prodImage);
                      }}
                    > */
  }

  {
    /* previous 2 */
  }
  {
    /* <Link to={`/productDetail/${prod._id}`}>
                      <img
                        // src={`/uploads/${prod.prodImage}`}
                        src={prod.prodImage}
                        className="card-img-top"
                        alt="product image"
                        width="250px"
                        height="200px"
                      />
                    </Link> */
  }
  {
    /* </a> */
  }

  {
    /* <div className="label-top shadow-sm">
                                            <a className="text-white" href="#">{prod.brand}</a>
                                        </div> */
  }

  {
    /* previous 3 */
  }
  {
    /* <div className="card-body">
                      <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-light text-dark">
                          Rs. {prod.price}
                        </span>

                        <span className="float-end">
                          <a
                            href="#"
                            className="small text-muted text-uppercase aff-link"
                          >
                            {prod.brand}
                          </a>
                        </span>
                      </div>
                      <h5 className="card-title">
                        <a target="_blank" href="#">
                          {prod.pName}
                        </a>
                      </h5>
                      <p className="card-text">{prod.pDescription}</p>

                      <div className="d-grid my-4">
                        <a href="#" className="btn btn-danger bold-btn">
                          Add to cart
                        </a>
                      </div>
                      <div className="clearfix mb-1">
                        <span className="float-start">
                          <a href="#">
                            <i className="fas fa-question-circle"></i>
                          </a>
                        </span>

                        <span className="float-end">
                          <i className="far fa-heart"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="col col-lg-2 detail" id="hideme">
            {idd && <DetailproductPage id={idd} setID={setID} />}
          </div>
        </div>
      </div> */
  }
};

export default ShopProduct;
