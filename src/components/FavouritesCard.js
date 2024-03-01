import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, redirect } from 'react-router-dom';



function FavouritesCard({product}) {

  const [favourites, setFavourites] = useLocalStorage('favourites')

  const removeFromF = (e, productId) => {
    const confirmed = window.confirm("Are you sure ?") 
    if(confirmed) {
      setFavourites(favourites.filter(b => b.id !== productId))
      return redirect("/favourites")
    } 
  }



  return (
    <Card style={{ width: '300px' }}>
      <Link to={`/books/${product.id}/details`}>
        <Card.Img style={{height: '200px', width: '230px', marginLeft: '35px', marginTop: '15px'}} variant='top' src={product.image_url }  />
      </Link>
      <Card.Body className='d-flex flex-column justify-content-between my-1'>
      <Card.Title className='text-center mb-4'>{product.title.substring(0, 27)}</Card.Title>
      <Card.Text className='d-flex justify-content-between'> Author<span>{product.authors}</span></Card.Text>
      <Card.Text className='d-flex justify-content-between'>Rating <span>{product.rating}</span></Card.Text>
      <Card.Text className='d-flex justify-content-between'>Pages <span>{product.num_pages}</span></Card.Text>
      <Card.Text className='d-flex justify-content-between'>Format <span>{product.format}</span></Card.Text>
      {
        favourites.filter(b => b.id == product.id).length > 0 &&
        <div className='text-center'>
          <button className='btn btn-secondary' product-id={product.id} onClick={(e) => removeFromF(e, product.id)}>Remove <i className="bi bi-trash"></i></button> 
        </div>
      }
    </Card.Body>
    </Card>
  )
}

export default FavouritesCard