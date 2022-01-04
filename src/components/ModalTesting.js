import React, { useState } from "react";
import product from "../images/product.png";
import { Link } from "react-router-dom";

import EditProduct from "./EditProduct";

const productData = [
  { id: 1, label: "product1", description: "description1" },
  { id: 2, label: "product2", description: "description2" },
  { id: 3, label: "product3", description: "description3" },
  { id: 4, label: "product4", description: "description4" },
  { id: 5, label: "product5", description: "description5" },
  { id: 6, label: "product6", description: "description6" },
  { id: 7, label: "product7", description: "description7" },
];

const ModalTesting = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [activeObject, setActiveObject] = useState(null);

  // function getClass(index) {
  //   return index === activeObject?.id ? "active" : "inactive";
  // }

  // here className can not be "inactive" since Modal always shows activeObject
  // const Modal = ({ object: { label, description } }) => (
  //   <div id="productModal" className="active">
  //     This is modal
  //     <h2>{label}</h2>
  //     <span className="description">{description}</span>
  //     <button onClick={() => setShowModal(false)}>Close me</button>
  //   </div>
  // );

  return (
    <>
    <div className="container">
      <ul class="list-group shadow">
        <li class="list-group-item">
          
          <div class="card mb-3">
  <div class="row no-gutters">
    
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="col-md-4">
    
          <img src={product} className="login-logo" alt="logo" />
        
    </div>
  </div>
</div>
        </li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
    <div class="row">
    <div class="col-lg-8 mx-auto">

      <ul class="list-group shadow">

        <li class="list-group-item">
          <div class="media align-items-lg-center flex-column flex-lg-row p-3">
            <div class="media-body order-2 order-lg-1">
              <h5 class="mt-0 font-weight-bold mb-2">Awesome product</h5>
              <p class="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
              <div class="d-flex align-items-center justify-content-between mt-1">
                <h6 class="font-weight-bold my-2">$120.00</h6>
                <ul class="list-inline small">
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                </ul>
              </div>
            </div><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
          </div>
        </li>

        <li class="list-group-item">
          <div class="media align-items-lg-center flex-column flex-lg-row p-3">
            <div class="media-body order-2 order-lg-1">
              <h5 class="mt-0 font-weight-bold mb-2">Awesome product</h5>
              <p class="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
              <div class="d-flex align-items-center justify-content-between mt-1">
                <h6 class="font-weight-bold my-2">$99.00</h6>
                <ul class="list-inline small">
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                </ul>
              </div>
            </div><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
          </div>
        </li>

        <li class="list-group-item">
          <div class="media align-items-lg-center flex-column flex-lg-row p-3">
            <div class="media-body order-2 order-lg-1">
              <h5 class="mt-0 font-weight-bold mb-2">Awesome product</h5>
              <p class="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
              <div class="d-flex align-items-center justify-content-between mt-1">
                <h6 class="font-weight-bold my-2">$140.00</h6>
                <ul class="list-inline small">
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                </ul>
              </div>
            </div><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-3_rk25rt.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
          </div>
        </li>

        <li class="list-group-item">
          <div class="media align-items-lg-center flex-column flex-lg-row p-3">
            <div class="media-body order-2 order-lg-1">
              <h5 class="mt-0 font-weight-bold mb-2">Awesome product</h5>
              <p class="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
              <div class="d-flex align-items-center justify-content-between mt-1">
                <h6 class="font-weight-bold my-2">$220.00</h6>
                <ul class="list-inline small">
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                </ul>
              </div>
            </div><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-4_vgfjy9.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
          </div>
        </li>
      </ul>
    </div>
    </div>
    </>
  );
};

export default ModalTesting;

      {/* <div className="testing container">
      <ul className="list-menu">
        {productData.map(({ id, label, description }) => (
          <li
            key={id}
            onClick={() => {
              setActiveObject({ id, label, description });
              setShowModal(true);
            }}
            className={getClass(id)}
          >
            <h2>{label}</h2>
          </li>
        ))}
      </ul>
      {showModal ? <Modal object={activeObject} /> : null}
      </div> */}
    
