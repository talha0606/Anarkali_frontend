import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import EditProduct from "./EditProduct";
import product from "../images/product.png";

const MyProducts = ({ id }) => {
  console.log("MyProducts/Sellerid" + id);
  const [modalShow, setModalShow] = useState(false);
  const [myproducts, setMyProducts] = useState();
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [prodImage, setProductImage] = useState(product);

  const Myprod = async (filters) => {
    try {
      const res = await fetch(`/myproducts?id=${id}`, {
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
      if (data.length == 1) {
        setMyProducts(data[0]);
      } else {
        setMyProducts(data);
      }
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

  return (
    // <h1>Myproducts</h1>
    <>
      <div className="orders">
        {/* <h2>Your Orders</h2> */}
        <div className="container">
          <ul class="list-group shadow">
          {myproducts?.map((prod) => (
            <li class="list-group-item">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{prod.pName}</h5>
                      <p class="card-text prodDesc">
                        {prod.pDescription}
                      </p>
                      <p class="card-title"><b>Rs. {prod.price}</b></p>
                      <p class="card-text">
                      <ul class="list-group list-group-horizontal-xl center">
                        <li class="list-group-item borderless">Brand: <b>{prod.brand}</b></li>
                        <li class="list-group-item">In Stock: <b>{prod.stock}</b></li>
                      
                        <li class="list-group-item">
                          <button
                            className="btn btn-sm btn-outline-success m-1"
                            onClick={() => {
                              setModalShow(true);
                            }}
                          >
                          Edit
                          </button>

                          {modalShow && (
                            <EditProduct
                              product={prod}
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            />
                          )}
                        </li>
                        <li class="list-group-item">
                          <button
                            className="btn btn-sm btn-outline-success m-1"
                            onClick={() => deleteHandler(prod._id)}
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                  
                        <img 
                        src={product}
                        className="login-logo" alt="product" />
                  </div>
                </div>
              </div>
            </li>
             ))}
          </ul>
        </div> 
      </div>
    </>
  );
};

export default MyProducts;