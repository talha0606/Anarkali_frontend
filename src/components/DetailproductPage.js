import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailproductPage = ({ id, setID }) => {
  const { productId } = useParams();

  //   const shopId = productId;
  console.log("Detail product" + id);
  const shopId = id;
  let data;

  const [shop, setshop] = useState([]);
  console.log("product id" + id);

  useEffect(() => {
    axios.get(`/shop_by_id?id=${shopId}&type=single`).then((res) => {
      setshop(res.data[0]);
      //   data = res.data[0];
      //   console.log(`data received ${res.data[0]}`);
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
        <span class="heading">Product Detail Page</span>
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
          src={`/uploads/${shop.prodImage}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{shop.pName}</h5>
          <p className="card-text" class="detailCardBody">
            {shop.pDescription}
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
