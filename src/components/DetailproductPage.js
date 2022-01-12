import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailproductPage = ({ id, setID }) => {
  // const { shopId } = useParams();

  //   const shopId = productId;
  console.log("Detail Product" + id);
  const prodId = id;
  let data;

  const [product, setProduct] = useState([]);
  console.log("shop id" + id);

  useEffect(() => {
    axios.get(`/prod_by_id?id=${prodId}&type=single`).then((res) => {
      setProduct(res.data[0]);
      //   data = res.data[0];
      console.log(`data received ${res.data[0]}`);
    });
  }, [id]);
  function hide(obj) {
    var el = document.getElementById(obj);

    el.style.display = "none";
  }

  //   setshop(data);
  //   console.log("Shop data" + data);

  return (
    <div class="fixcard ">
      <div class="cardHead">
        <span class="heading">Shop Detail Page</span>
        <span
          // onClick={() => {
          //   hide("hideme");
          // }}
          onClick={() => setID(null)}
          class="closebtn"
        >
          &times;
        </span>
      </div>
      <div className="card" class="detailed-card ">
        <img
          className="card-img-top "
          // src={`/uploads/${shop.shopImage}`}
          // src={product.prodImage}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product.pName}</h5>
          <p className="card-text" class="detailCardBody">
            {product.pDescription}
          </p>
          {/* <a href="/" className="btn btn-primary">
            Go back
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default DetailproductPage;
