// CardComponent.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const CardComponent = ({ title, text, imageUrl }) => {
  return (
    <Card style={{ width: '20rem',marginBottom:"12px" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
