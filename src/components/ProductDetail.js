import { React } from 'react'
import product from '../images/product.png';

function ProductDetail() {

    return (
        <div className="container">
            <div className="row rowProduct h-25 ">
                <div class="card">
                    <div class="row no-gutters h-25">
                        <div class="col-md-4">
                            <img src={product} class="card-img prodImg" alt="Product Image" />
                        </div>
                        <div class="col-md-8 h-25">
                            <div class="card-body">
                                <div class="card-img-overlay d-flex justify-content-end">
                                    <a href="#" class="card-link text-danger like">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                                <h3 class="card-title">Product Name</h3>
                                <p class="card-text">Product Description</p>
                                {/* <div>
                                    <p>Reviews</p> */}

                                {/* <div class="rate">

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
                                </div> */}
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                {/* </div> */}
                                <div class="mb-3">
                                    <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link">Reviews (# of reviews) </a></span>
                                </div>
                                <br />
                                <p class="card-text float-left"><small class="text-muted">Brand Name</small></p>
                                <p class="card-text float-right"><small class="text-muted">In Stock : 100</small></p>
                                <div class="options d-flex flex-fill">
                                    <select class="form-select w-25" aria-label="Default select example">
                                        <option >Size </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                </div>

                                <div class="buy d-flex justify-content-between align-items-center">
                                    <div class="price text-success"><h3 class="mt-4">$125</h3></div>
                                    <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ProductDetail;
