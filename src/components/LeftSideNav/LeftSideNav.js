import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        
      });
  }, []);
  

  return (
    <div className="d-flex flex-column">
      {
        categories.map(category=> <NavLink key={category._id} to={`/course/details/${category._id}`}><Button className="w-100 mb-2" variant="outline-dark">{category.category_name}</Button></NavLink>)
      }
    </div>
  );
};

export default LeftSideNav;
