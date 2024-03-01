import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <div style={{backgroundColor: 'rgb(138, 139, 140)'}}>
      <Container>
        <div className='row'>
          <div className='col-4 text-white mt-4'>
            <h3 className='mb-4'>Shop</h3>
            <p className='mb-3'>We are the best choice for you <br /> to make shopping!Explore our products.</p>
            <p>Phone : 044 111 111</p>
          </div>
          <div className='col-4 text-white mt-4'>
            <h3 className='mb-4' style={{marginLeft: '27px'}}>Menu</h3>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/favourites'>Favourites</a></li>
              <li><a href='/cart'>Cart</a></li>
              <li><a href='/'>About us</a></li>
            </ul>
          </div>
          <div className='col-4 text-white mt-4'>
            <h3 className='mb-4' style={{marginLeft: '27px'}}>Social-media</h3>
            <ul>
              <li><a href='https://facebook.com' target='_blank'><i className="bi bi-facebook"></i> Facebook</a></li>
              <li><a href='https://instagram.com' target='_blank'><i className="bi bi-instagram"></i> Instagram</a></li>
              <li><a href='https://youtube.com' target='_blank'><i className="bi bi-youtube"></i> Youtube</a></li>
              <li><a href='https://linkedin.com' target='_blank'><i className="bi bi-linkedin"></i> Linkedin</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer