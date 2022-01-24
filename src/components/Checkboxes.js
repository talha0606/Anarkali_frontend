import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";
import "../style/categories-checkbox.css"
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
    name: "Groceries",
  },
  {
    _id: 7,
    name: "Pents",
  },
  {
    _id: 8,
    name: "Kurtas",
  },
  {
    _id: 9,
    name: "Watches",
  },
  {
    _id: 10,
    name: "Cameras",
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
    <div
      class="rounded container shadow p-3 mb-5"
      className="category-checkbox"
    >
      {/* <div class="input-group">
        <form>
          <input
              className="form-control me-2 home-bg ms-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          {/* <button type="button" class="btn btn-primary" value="Search" name="Search"> */}
            {/* <AiOutlineSearch/> */}
          {/* </button> 
        </form>
      </div>
      */}
      <div>
        <h5 className="checkbox-heading">Categories</h5>
        {category.map((value, index) => (
          <React.Fragment key={index}>
            <div class="form-check">
              <Checkbox
                onChange={() => handleToggle(value._id)}
                type="checkbox"
                id="checkedBox"
                // className="checkedBox"
                checked={Checked.indexOf(value._id) === -1 ? false : true}
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
