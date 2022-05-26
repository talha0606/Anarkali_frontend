import React, { useState, useEffect } from "react";
import "../style/categorySideBar.css"
import Checkboxes from "./Checkboxes";


const CategorySideBar = () => {


    // const handleFilters = (filters, category) => {
    //     console.log(filters);
    //     const newFilters = { ...Filters };
    //     newFilters[category] = filters;
    
    //     showFilteredResults(newFilters);
    //     setFilters(newFilters);
    //   };

    return (
        <div>
            {/* <label for="check">
            <i class="fas fa-times" id="cancel"></i>
            </label> */}
            <div class="cat-sidebar">
            <header>Filter Products</header>
            {/* <Checkboxes
                // handleFilters={(filters) => handleFilters(filters, "category")}
              /> */}

            <a href="#" class="active">
                <i class="fas fa-qrcode"></i>
                <span>Dashboard</span>
            </a>
            <a href="#">
                <i class="fas fa-link"></i>
                <span>Shortcuts</span>
            </a>
            <a href="#">
                <i class="fas fa-stream"></i>
                <span>Overview</span>
            </a>
            <a href="#">
                <i class="fas fa-calendar"></i>
                <span>Events</span>
            </a>
            <a href="#">
                <i class="far fa-question-circle"></i>
                <span>About</span>
            </a>
            <a href="#">
                <i class="fas fa-sliders-h"></i>
                <span>Services</span>
            </a>
            <a href="#">
                <i class="far fa-envelope"></i>
                <span>Contact</span>
            </a>
            </div>
        </div>
    );
};

export default CategorySideBar;