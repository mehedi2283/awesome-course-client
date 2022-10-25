import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, NavLink } from "react-bootstrap";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        // console.log(data)
      });
  }, []);

  return <div className="d-flex flex-column">
    {
        categories.map(category => <Button key={category._id} variant="outline-dark" className="mb-2" ><NavLink key={category.id}>{category.category_name}</NavLink></Button>)
    }
    </div>;
};

export default LeftSideNav;
