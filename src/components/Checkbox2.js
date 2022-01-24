import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import "../style/brands-checkbox.css";
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';

// javascript for money range slider

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

const { Panel } = Collapse;
const Brands = [
  {
    _id: 1,
    name: "Sapphire",
  },
  {
    _id: 2,
    name: "Bonanza",
  },
  {
    _id: 3,
    name: "Metro",
  },
  {
    _id: 4,
    name: "Stylo",
  },
  {
    _id: 5,
    name: "Adidas",
  },
  {
    _id: 6,
    name: "Nike",
  },
  {
    _id: 7,
    name: "J.J.",
  },
  {
    _id: 8,
    name: "Gul Ahmed",
  },
  {
    _id: 9,
    name: "Bata",
  },
  {
    _id: 10,
    name: "Servis",
  },
];

const Checkbox2 = (props) => {
  const [Checked, setchecked] = useState([]);

  const [price, setPrice] = useState([0, 25000]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setchecked(newChecked);
    props.handleFilters(newChecked);
  };

  const handlePrice = (e, newPrice) => {
    setPrice(newPrice);
  };

  //for changing color of slider

  //not working

  //   const muiTheme = createMuiTheme({
  //     overrides:{
  //       MuiSlider: {
  //         thumb:{
  //         color: "yellow",
  //         },
  //         track: {
  //           color: 'red'
  //         },
  //         rail: {
  //           color: 'black'
  //         }
  //       }
  //   }
  //   });

  return (
    <div
      class="rounded container shadow p-3 mb-5"
      className="category-checkbox"
    >
      {/* range slider */}

      {/* <div class="slidecontainer">
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
            <p>Starting Value: <span id="demo"></span></p>
        </div> */}

      {/* <div class="range-slider">
            <input class="range-slider__range" type="range" value="100" min="0" max="500"/>
            <span class="range-slider__value">0</span>
        </div> */}

      <div>
        <h5 className="checkbox-heading">Price</h5>
        {/* <Typography>
        </Typography> */}
        {/* <ThemeProvider theme={muiTheme}> */}
        <Slider
          className="priceFilter"
          value={price}
          onChange={handlePrice}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={25000}
        />
        {/* </ThemeProvider> */}

        <h5 className="checkbox-heading">Brands</h5>

        {Brands.map((value, index) => (
          <React.Fragment key={index}>
            <div class="form-check">
              <Checkbox
                onChange={() => handleToggle(value.name)}
                type="checkbox"
                id="checkedBox"
                // className="checkedBox"
                checked={Checked.indexOf(value.name) === -1 ? false : true}
              />
              <label htmlFor="checkedBox" className="showCheck">
                {value.name}
              </label>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Checkbox2;
