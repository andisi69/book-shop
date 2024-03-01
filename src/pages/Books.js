import { useLocalStorage } from '@uidotdev/usehooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Books() {
  const {id} = useParams()
  const [books, setBooks] = useState()
  const [favourites, setFavourites] = useLocalStorage('favourites')

  useEffect(() => {
    axios.get(`https://example-data.draftbit.com/books/${id}`)
    .then(response => {
      if(response.status === 200) {
        setBooks(response.data)
      }
    })
  }, [])

  const addToFav = (e, book) => {
    if(favourites === undefined)
      setFavourites([books])
    else {
      if(favourites.filter(bk => bk.id === book.id).length > 0)
      alert('This book is already in favourites')
    else {
      setFavourites([...favourites, books])
      alert('The book was added in favourites ')
      }
    }    
  }

  return (
    <div>
      <Container className='my-5'>
        { books &&
        <div className='row'>
          <div className='col-5'>
            <Image src={books.image_url} />
          </div>
          <div className='col-6 offset-1'>
            <h2 className='mb-4'>{books.title}</h2>
            <p>{books.description}</p>
            <button className='btn btn-secondary mt-4'>Add to cart <i className="bi bi-bag-plus"></i></button>
            <button className='btn btn-secondary mt-4 ms-4' onClick={(e) => addToFav(e, books)}>Add to favourites <i className="bi bi-heart"></i></button>
          </div>
        </div>
       }
      </Container>
    </div>
  )
}

export default Books