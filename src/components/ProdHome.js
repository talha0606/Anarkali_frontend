import Checkboxes from "./Checkboxes";
import Checkbox2 from "./Checkbox2";
import React, { useState, useEffect } from "react";
import Allshops from "./Allshops";
import Footer from "./Footer";

function Home() {
  const [isPending, setIsPending] = useState(true);
  const [shopData, setShopData] = useState([]);
  const [Filters, setFilters] = useState({
    category: [],
    price: [],
  });

  const callHomePage = async (filters) => {
    try {
      const res = await fetch("/products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filters: filters }),
        credentials: "include",
      });

      const data = await res.json();

      setShopData(data);
      setIsPending(false);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("home page error" + err);
    }
  };

  useEffect(() => {
    callHomePage();
  }, []);

  const showFilteredResults = (filters) => {
    callHomePage(filters);
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;

    showFilteredResults(newFilters);
    setFilters(newFilters);
    console.log("New Filters: " + newFilters);
  };

  // const priceFilters = (e) => {
  //   setPrice(e.target.value);
  //   console.log("Price: " + price);
  //   handleFilters();
  // }
  // const handleFilters = (filters, category2) => {
  //   console.log(filters);
  //   const newFilters = { ...Filters };
  //   newFilters[category2] = filters;

  //   showFilteredResults(newFilters);
  //   setFilters(newFilters);
  // };

  return (
    <>
      <div class="container-fluid home-container">
        <div class="row ">
          <div class="col-lg-2 p-0">
            {isPending && <div> Loading... </div>}
            <Checkboxes
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
            <Checkbox2
              handleFilters={(filters) => handleFilters(filters, "brand")}
            />
          </div>

          <div class="col-lg-10  p-0">
            {/* <div className="row bg-success">
               <p>sxds</p>
            </div>  */}
            <div className="container-fluid home-bg card-container m-0"> 
              <div className="home ">
              
                <Allshops shopData={shopData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* by ali */}
      {/* Search Button  */}

      {/* {userData.map((user) => (
        <div className="card">
          <a href={`product/${user._id}`}>
            <img
              className="card-img-top"
              src={`/uploads/${user.shopImage}`}
              alt="Card image cap"
            />
          </a>
          <div className="card-body">
            <p>{user._id}</p>
            <p>{toString(user._id)}</p>

            <h5 className="card-title">{user.sName}</h5>
            <p className="card-text">{user.sDescription}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>*/}

      {/* 
      {
        userData.map((user) => (
          <div className="card">
            <img
              className="card-img-top"
              src={`/uploads/${user.shopImage}`}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{user.sName}</h5>
              <p className="card-text">{user.sDescription}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))
      } */}

      {/* {
        
        userData.map((user) => (
          <div className="card">
            <img
              className="card-img-top"
              src={`/uploads/${user.shopImage}`}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{user.sName}</h5>
              <p className="card-text">{user.sDescription}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))
      } */}

      <Footer />
    </>
  );
}

export default Home;
