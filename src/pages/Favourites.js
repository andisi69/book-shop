import { useLocalStorage } from '@uidotdev/usehooks'
import React from 'react'
import { Container } from 'react-bootstrap'
import FavouritesCard from '../components/FavouritesCard'

function Favourites() {

  const [favourites, setFavourites] = useLocalStorage('favourites')


  return (
    <div>
      <Container className='my-5'>
        <div className='row'>
        {
          favourites && favourites.map(product => <div className='col-3' key={product.id}>
            <FavouritesCard product={product} />
          </div>)
        }
        </div>
      </Container>
    </div>
  )
}

export default Favourites