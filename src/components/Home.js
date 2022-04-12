import Checkboxes from "./Checkboxes";
import Checkbox2 from "./Checkbox2";
import React, { useState, useEffect } from "react";
import Allshops from "./Allshops";
import Allproducts from "./Allproducts";
import "../style/Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function Home() {
  const [isPending, setIsPending] = useState(true);
  const [userData, setUserData] = useState([]);
  const [Filters, setFilters] = useState({
    category: [],
    price: [],
  });

  const [searchedData, setsearchedData] = useState("");
  const [searchString, setsearchString] = useState("");
  const [novalue, setnovalue] = useState("");
  const [suggestString, setsuggestString] = useState("");

  const [toggleValue, setToggleValue] = useState("Shops");
  console.log("adfkakfkjakfk" + toggleValue);

  const [price, setPrice] = useState([0, 25000000]);
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const [FilteredProducts, setFilteredProducts] = useState(null);

  const callHomePage = async (filters) => {
    try {
      const res = await fetch("/home", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filters: filters }),
        credentials: "include",
      });

      const data = await res.json();
      console.log(`in home data is ${data}`);
      setUserData(data);
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
    console.log(toggleValue);
    callHomePage();
  }, []);

  const showFilteredResults = (filters) => {
    callHomePage(filters);
  };

  const handleFilters = (filters, category) => {
    console.log(filters);
    const newFilters = { ...Filters };
    newFilters[category] = filters;

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };
  // const handleFilters = (filters, category2) => {
  //   console.log(filters);
  //   const newFilters = { ...Filters };
  //   newFilters[category2] = filters;

  //   showFilteredResults(newFilters);
  //   setFilters(newFilters);
  // };
  const findShops = async () => {
    console.log("SearchStirng: " + searchString.replace(/\s/g, "").length);
    if (searchString.replace(/\s/g, "").length != 0) {
      try {
        axios.get(`/searchShop?name=${searchString}`).then((res) => {
          setsearchedData(res.data);
          //   data = res.data[0];
          console.log(`Searched Data: ${res.data}`);
        });
      } catch (err) {
        console.log("catch: " + err);
      }
    } else {
      setsearchedData("");
      callHomePage();
    }
  };

  const filteredShops = () => {
    console.log("Filtered Shops yr");
    setsearchedData("");
    if (searchString.replace(/\s/g, "").length != 0) {
      try {
        axios.get(`/searchShop?name=${searchString}`).then((res) => {
          console.log(`Searched Data: ${res.data}`);
          setUserData(res.data);
        });
      } catch (err) {
        console.log("catch: " + err);
      }
    } else {
      setsearchedData("");
    }
  };

  useEffect(() => {
    filteredShops();
  }, [novalue]);

  useEffect(() => {
    findShops();
  }, [searchString && suggestString]);

  const handleKeyPress = (e) => {
    console.log("Enter Clicked");
    if (e.key === "Enter") {
      if (novalue === "yes") setnovalue("no");
      else setnovalue("yes");
    }
  };

  const handleToggle = () => {
    if (toggleValue == "Shops") {
      alert("Products Displayed");
      setToggleValue("Products");
    } else {
      alert("Shops Displayed");
      setToggleValue("Shops");
    }
  };

  const getFilteredProducts = async () => {
    try {
      const res = await fetch(
        `/allproducts?price[gte]=${price[0]}&price[lte]=${price[1]}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log("FilteredProducts: " + data);
      setFilteredProducts(data);
    } catch (err) {}
  };

  useEffect(() => {
    getFilteredProducts();
  }, [price]);

  if (toggleValue == "Shops") {
    return (
      <>
        <div class="container-fluid home-container">
          <div class="row ">
            <div class="col-2 p-0">
              {/* {isPending && <div> Loading... </div>} */}
              <Checkboxes
                handleFilters={(filters) => handleFilters(filters, "category")}
              />
              <Checkbox2
                handleFilters={(filters) => handleFilters(filters, "brand")}
              />
            </div>
            <div class="col-10 p-0 ps-3 ">
              <div className="container-fluid card-container m-0">
                {/* <div className="grid-container"> */}
                <div className="search-portion">
                  <div className="a1">
                    <input
                      className="search-box ms-3"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchString}
                      onChange={(e) => {
                        setsearchString(e.target.value);
                        setsuggestString(e.target.value);
                      }}
                      onKeyUp={(e) => handleKeyPress(e)}
                    />
                  </div>
                  <spam className="search-shops">Shops</spam>
                  <div className="a2">
                    <div class="form-check form-switch ms-2 mt-2 ">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Products
                      </label>

                      <input
                        class="form-check-input shops-switch "
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={handleToggle}
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="grid-container">
                <div className="input-group searchToggleInput"> */}
                {/* <input
                    className="form-control me-2 home-bg ms-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchString}
                    onChange={(e) => {
                      setsearchString(e.target.value);
                      setsuggestString(e.target.value);
                    }}
                    onKeyUp={(e) => handleKeyPress(e)}
                  /> */}
                {/* {searchString.length != 0 && searchedData.length != 0 && ( */}
                {/* <div className="dataResult">
                      {searchedData?.map((value, key) => {
                        if (
                          value.sName
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ) {
                          return (
                            <div>
                              <button
                                onClick={() => {
                                  setsearchString(value.sName);
                                  setsearchedData("");
                                  setnovalue(value.sName);
                                }}
                              >
                                {value.sName}
                              </button>
                            </div>
                          );
                        } else if (
                          value.sDescription
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ) {
                          return (
                            <p>
                              <button
                                onClick={() => {
                                  setsearchString(value.sDescription);
                                  setsearchedData("");
                                  setnovalue(value.sDescription);
                                  // console.log("Search String: " + searchString);
                                  // console.log(
                                  //   "searchedData: " + searchedData.length
                                  // );
                                }}
                              >
                                {value.sDescription}
                              </button>
                            </p>
                          );
                        }
                      })}
                    </div> */}
                {/* )} */}
                {/* <button type="button" class="btn btn-primary" value="Search" name="Search">
                      <AiOutlineSearch />
                    </button> */}
                {/* </div> */}
                {/* <div className="toogleDiv">
                  <label class="toggleSwitch nolabel" onclick="">
                    <input type="checkbox" checked />
                    <a></a>
                    <span>
                      <span class="left-span">Shops</span>
                      <span class="right-span">Products</span>
                    </span>
                  </label>
                </div> */}
              </div>

              <div className="p-3">
                <Allshops shopData={userData} />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

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
      </>
    );
  } else {
    return (
      <>
        <div class="container-fluid home-container">
          <div class="row ">
            <div class="col-2 p-0">
              <div
                class="rounded container shadow p-3 mb-5"
                className="category-checkbox"
              >
                <Typography>Price</Typography>
                <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={25000}
                />
              </div>
              {/* {isPending && <div> Loading... </div>} */}
              <Checkboxes
                handleFilters={(filters) => handleFilters(filters, "category")}
              />
              <Checkbox2
                handleFilters={(filters) => handleFilters(filters, "brand")}
              />
            </div>
            <div class="col-10 p-0 ps-3 ">
              <div className="container-fluid card-container m-0">
                {/* <div className="grid-container"> */}
                <div className="search-portion">
                  <div className="a1">
                    <input
                      className="search-box ms-3"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchString}
                      onChange={(e) => {
                        setsearchString(e.target.value);
                        setsuggestString(e.target.value);
                      }}
                      onKeyUp={(e) => handleKeyPress(e)}
                    />
                  </div>
                  <spam className="search-shops">Shops</spam>
                  <div className="a2">
                    <div class="form-check form-switch ms-2 mt-2 ">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Products
                      </label>

                      <input
                        class="form-check-input shops-switch "
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={handleToggle}
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="grid-container">
                <div className="input-group searchToggleInput"> */}
                {/* <input
                    className="form-control me-2 home-bg ms-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchString}
                    onChange={(e) => {
                      setsearchString(e.target.value);
                      setsuggestString(e.target.value);
                    }}
                    onKeyUp={(e) => handleKeyPress(e)}
                  /> */}
                {/* {searchString.length != 0 && searchedData.length != 0 && ( */}
                {/* <div className="dataResult">
                      {searchedData?.map((value, key) => {
                        if (
                          value.sName
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ) {
                          return (
                            <div>
                              <button
                                onClick={() => {
                                  setsearchString(value.sName);
                                  setsearchedData("");
                                  setnovalue(value.sName);
                                }}
                              >
                                {value.sName}
                              </button>
                            </div>
                          );
                        } else if (
                          value.sDescription
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ) {
                          return (
                            <p>
                              <button
                                onClick={() => {
                                  setsearchString(value.sDescription);
                                  setsearchedData("");
                                  setnovalue(value.sDescription);
                                  // console.log("Search String: " + searchString);
                                  // console.log(
                                  //   "searchedData: " + searchedData.length
                                  // );
                                }}
                              >
                                {value.sDescription}
                              </button>
                            </p>
                          );
                        }
                      })}
                    </div> */}
                {/* )} */}
                {/* <button type="button" class="btn btn-primary" value="Search" name="Search">
                      <AiOutlineSearch />
                    </button> */}
                {/* </div> */}
                {/* <div className="toogleDiv">
                  <label class="toggleSwitch nolabel" onclick="">
                    <input type="checkbox" checked />
                    <a></a>
                    <span>
                      <span class="left-span">Shops</span>
                      <span class="right-span">Products</span>
                    </span>
                  </label>
                </div> */}
              </div>

              <div className="p-3">
                <Allproducts filteredProducts={FilteredProducts} />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

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
      </>
    );
  }
}

export default Home;
