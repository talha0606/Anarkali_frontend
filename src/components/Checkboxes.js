import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";
import "../style/categories-checkbox.css";
import { AiOutlineSearch } from "react-icons/ai";

const { Panel } = Collapse;
const category = [
  {
    _id: 1,
    name: "Bags",
  },
  {
    _id: 2,
    name: "Books",
  },
  {
    _id: 3,
    name: "Scarf",
  },
  {
    _id: 4,
    name: "Toys",
  },
  {
    _id: 5,
    name: "Sports",
  },
  {
    _id: 6,
    name: "Pents",
  },
  {
    _id: 7,
    name: "Kurtas",
  },
  {
    _id: 8,
    name: "Watches",
  },
];

const Checkboxes = (props) => {
  const [Checked, setchecked] = useState([]);

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

  return (
    
      <div className="category-checkbox rounded mb-4">
        {/* <div className="input-group">
        <form>
          <input
              className="form-control me-2 home-bg ms-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          {/* <button type="button" className="btn btn-primary" value="Search" name="Search"> */}
        {/* <AiOutlineSearch/> */}
        {/* </button> 
        </form>
      </div>
      */}
        <div>
          <h6 className="checkbox-heading">Product Categories</h6>
          {category.map((value, index) => (
            <React.Fragment key={index}>
              <div className="form-check">
                <Checkbox
                  onChange={() => handleToggle(value.name)}
                  type="checkbox"
                  id="checkedBox"
                  // className="checkedBox"
                  checked={Checked.indexOf(value.name) === -1 ? false : true}
                  className="Check"
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

export default Checkboxes;
