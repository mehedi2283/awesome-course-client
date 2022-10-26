import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './LeftSideNav.css'

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        
      });
  }, []);


  let activeStyle = {
    color:"white",
    backgroundColor: "black",
    // borderRadius: "7px",
  };
  

  return (
    <div className="d-flex flex-column">
      {
        categories.map(category=> <NavLink className='mb-2 py-2 ps-3 border border-dark rounded-3 link2' style={({ isActive }) =>
        isActive ? activeStyle : undefined
      } key={category._id} to={`/course/details/${category._id}`}>{category.category_name}</NavLink>)
      }
    </div>
  );
};

export default LeftSideNav;
