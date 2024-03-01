import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

function OurProducts() {
   
  const [products, setProducts] = useState([])
  const [displayedProducts, setDisplayedProducts] = useState(16)


  useEffect(() => {
    axios.get('https://example-data.draftbit.com/books')
    .then(response => {
        setProducts(response.data)
    }).catch(error => {
        console.log(error)
    })
  }, [])

  



  const loadMoreProducts = () => {
    setDisplayedProducts(prevCount => prevCount + 16)
  }

  return (
    <div>
        <Container>
        <div className='text-center mt-5'>
            <input type='text' placeholder='Search for books...' style={{width: '450px', borderRadius: '80px', border: '2px solid gray'}}/>
        </div>
            
            <div className='row'>
                {
                        products.slice(0, displayedProducts).map(product => (
                            <div className='col-3 mt-5' key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))
                    }
            </div>
        </Container>
        <div className='mt-5 mb-5 text-center'>
            <button className='btn btn-secondary' onClick={loadMoreProducts}>See more books</button>
        </div>
    </div>
  )
}

export default OurProducts
