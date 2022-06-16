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
  // const [filteredProducts, setFilteredProducts] = useState(filteredData);
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

  if (filteredData == null) {
    return (
      <>
        <div class="container">
          <div class="row no-gutters">
            {myproducts?.map((prod) => (
              <div class="col-3 col-* ">
                <div className="card">
                  <div class="imgBx">
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
                    <ul class="action">
                      <li>
                        <i class="fa fa-heart" aria-hidden="true">
                          {" "}
                        </i>
                        <span>Add to Wishlist</span>
                      </li>
                      <li>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        <span>View Details</span>
                      </li>
                    </ul>
                  </div>
                  <div class="content">
                    <div class="productName">
                      <h3>{prod.pName}</h3>
                    </div>
                    <div class="price_rating">
                      <h3>Rs.{prod.price}</h3>
                      <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star grey" aria-hidden="true"></i>
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
        {console.log("Else/ShopProduct/FilteredProducts: " + filteredData)}
        <div class="container">
          <div class="row no-gutters">
            {filteredData?.map((prod) => (
              <div class="col-3 col-* ">
                <div className="card">
                  <div class="imgBx">
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
                    <ul class="action">
                      <li>
                        <i class="fa fa-heart" aria-hidden="true">
                          {" "}
                        </i>
                        <span>Add to Wishlist</span>
                      </li>
                      <li>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        <span>View Details</span>
                      </li>
                    </ul>
                  </div>
                  <div class="content">
                    <div class="productName">
                      <h3>{prod.pName}</h3>
                    </div>
                    <div class="price_rating">
                      <h3>Rs. {prod.price}</h3>
                      <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star grey" aria-hidden="true"></i>
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
    /* <div class="container-fluid bg-trasparent my-4 p-3 containerProduct">
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          <ul className="list-group list-group-horizontal unstyled">
            {myproducts?.map((prod) => (
              <li class="list-group-item shopProdd">
                <div class="col hp">
                  <div class="card shadow-sm"> */
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
                        class="card-img-top"
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
    /* <div class="label-top shadow-sm">
                                            <a class="text-white" href="#">{prod.brand}</a>
                                        </div> */
  }

  {
    /* previous 3 */
  }
  {
    /* <div class="card-body">
                      <div class="clearfix mb-3">
                        <span class="float-start badge rounded-pill bg-light text-dark">
                          Rs. {prod.price}
                        </span>

                        <span class="float-end">
                          <a
                            href="#"
                            class="small text-muted text-uppercase aff-link"
                          >
                            {prod.brand}
                          </a>
                        </span>
                      </div>
                      <h5 class="card-title">
                        <a target="_blank" href="#">
                          {prod.pName}
                        </a>
                      </h5>
                      <p class="card-text">{prod.pDescription}</p>

                      <div class="d-grid my-4">
                        <a href="#" class="btn btn-danger bold-btn">
                          Add to cart
                        </a>
                      </div>
                      <div class="clearfix mb-1">
                        <span class="float-start">
                          <a href="#">
                            <i class="fas fa-question-circle"></i>
                          </a>
                        </span>

                        <span class="float-end">
                          <i class="far fa-heart"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div class="col col-lg-2 detail" id="hideme">
            {idd && <DetailproductPage id={idd} setID={setID} />}
          </div>
        </div>
      </div> */
  }
};

export default ShopProduct;
