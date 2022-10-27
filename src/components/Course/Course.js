import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './course.module.css'

const Course = ({course}) => {
    // console.log(course);
    const courseDetails = course.details.slice(0,77) +  ' ...';
    return (
        <Card className={style.card} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course.img} className={style.height} />
      <Card.Body>
        <Card.Title>{course.category_name}</Card.Title>
        <Card.Text>
          {courseDetails}
        </Card.Text>
        <Button className='w-100' variant="dark">Details</Button>
      </Card.Body>
    </Card>
    );
};

export default Course;