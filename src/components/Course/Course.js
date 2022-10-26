import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './course.module.css'

const Course = ({course}) => {
    // console.log(course);
    return (
        <Card className={style.card} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course.img} className={style.height} />
      <Card.Body>
        <Card.Title>{course.category_name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='w-100' variant="dark">Details</Button>
      </Card.Body>
    </Card>
    );
};

export default Course;