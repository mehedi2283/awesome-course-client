import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import'./Home.css'


const Home = () => {
    
    return (
        <div className='home d-flex flex-column text-center p-5 rounded-4 mb-5 '>
            <h1 className='p-5'>Welcome to our Online Portal.</h1>
            <p className=''>Find the right instructor for you. Choose from many topics, skill levels, and languages. Study any topic when it suits you. Explore thousands of high-quality courses. Online Certification.</p>
            <hr />
            <hr />
            <Link to='/course'><Button variant="outline-light" >Our Courses</Button></Link>
            <hr />
            <hr />
        </div>
    );
};

export default Home;