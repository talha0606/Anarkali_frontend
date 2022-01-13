import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import EditProduct from "./EditProduct";
import product from "../images/product.png";
import "../style/ShopProduct.css";

const ShopProduct = ({ id }) => {
    console.log("ShopProduct/Sellerid" + id);
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
        <>
            <div class="container-fluid bg-trasparent my-4 p-3">
                <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    <ul className="list-group list-group-horizontal unstyled">
                        {myproducts?.map((prod) => (
                            <li class="list-group-item shopProdd">
                                <div class="col hp">
                                    <div class="card h-100 shadow-sm">
                                        <a href="#">
                                            <img
                                                src={`/uploads/${prod.prodImage}`}
                                                class="card-img-top" alt="product image"
                                                width="250px"
                                                height="200px"
                                            />
                                        </a>

                                        {/* <div class="label-top shadow-sm">
                                            <a class="text-white" href="#">{prod.brand}</a>
                                        </div> */}
                                        <div class="card-body">
                                            <div class="clearfix mb-3">
                                                <span class="float-start badge rounded-pill bg-success">Rs. {prod.price}</span>

                                                <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link">{prod.brand}</a></span>
                                            </div>
                                            <h5 class="card-title">
                                                <a target="_blank" href="#">{prod.pName}</a>
                                            </h5>
                                            <p class="card-text">{prod.pDescription}</p>

                                            <div class="d-grid my-4">

                                                <a href="#" class="btn btn-warning bold-btn">Add to cart</a>

                                            </div>
                                            <div class="d-grid my-4">
                                                <div class="rate">
                                                    <input type="radio" id="star5" name="rate" value="5" />
                                                    <label for="star5" title="text">5 stars</label>
                                                    <input type="radio" id="star4" name="rate" value="4" />
                                                    <label for="star4" title="text">4 stars</label>
                                                    <input type="radio" id="star3" name="rate" value="3" />
                                                    <label for="star3" title="text">3 stars</label>
                                                    <input type="radio" id="star2" name="rate" value="2" />
                                                    <label for="star2" title="text">2 stars</label>
                                                    <input type="radio" id="star1" name="rate" value="1" />
                                                    <label for="star1" title="text">1 star</label>
                                                </div>
                                            </div>
                                            <div class="clearfix mb-1">

                                                <span class="float-start"><a href="#"><i class="fas fa-question-circle"></i></a></span>

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
                </div>

            </div>
        </>
    );
};

export default ShopProduct;
