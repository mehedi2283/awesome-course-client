import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const RightSideCourses = () => {
    const courses = useLoaderData();
    return (
        
            <Col className="d-flex flex-wrap  gap-4">
          {courses.map((course) => (
            <NavLink
              to={`/course/details/${course._id}`}
              key={course._id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Course course={course}></Course>
            </NavLink>
          ))}
        </Col>
       
    );
};

export default RightSideCourses;