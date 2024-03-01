import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({product}) {

  return (
    <Card style={{ width: '300px', height: '450px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset' }}>
      <Link to={`/books/${product.id}/details`}>
        <Card.Img style={{height: '200px', width: '230px', marginLeft: '35px', marginTop: '15px'}} variant='top' src={product.image_url }  />
      </Link>
      <Card.Body className='d-flex flex-column justify-content-between my-1'>
      <Card.Title className='text-center mb-4'>{product.title.substring(0, 27)}</Card.Title>
      <Card.Text className='d-flex justify-content-between'> Author<span>{product.authors}</span></Card.Text>
      <Card.Text className='d-flex justify-content-between'>Rating <span>{product.rating}</span></Card.Text>
      <Card.Text className='d-flex justify-content-between'>Pages <span>{product.num_pages}</span></Card.Text>
      <Card.Text className='d-flex justify-content-between'>Format <span>{product.format}</span></Card.Text>
    </Card.Body>
    </Card>
  )
}

export default ProductCard
