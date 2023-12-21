import React ,{ Component } from 'react'
import Categories from './../categories/Categories.jsx';
import './home.css'

function Home() {
  
  return (
    <>
    <div className='homeContent'>
   <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active ">
      <img src="carousel/page1.jpg" className="d-block w-100 vh-100" alt="slide1" />
    </div>
    <div className="carousel-item ">
      <img src="carousel/page2.jpg" className="d-block w-100 vh-100" alt="slide2" />
    </div>  
    <div className="carousel-item">
      <img src="carousel/page3.jpg" className="d-block w-100 vh-100" alt="slide3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
<Categories/>
<div className='images row justify-content-center py-5'>
  <div className='col-md-3'>
  <img src='home/banner-01.jpg' className='w-100 imgHome'/>
  <div className='overlay'>
    <span><strong className='fs-2'>Women</strong></span>
    <span>Spring 2024</span>
  </div>
  </div>
  <div className='col-md-3'>
  <img src='home/banner-02.jpg' className='w-100 imgHome'/>
  <div className='overlay'>
    <span><strong className='fs-2'>Men</strong></span>
    <span>Spring 2024</span>
  </div>
  </div>
  <div className='col-md-3'>
  <img src='home/banner-03.jpg' className='w-100 imgHome position-relative'/>
  <div className='overlay'>
    <span><strong className='fs-2'>Accessories</strong></span>
    <span>Spring 2024</span>
  </div>
  </div>
  {/* <img src='home/banner-02.jpg' className='w-100'/>
  <img src='home/banner-03.jpg' className='w-100'/> */}
</div>
</div>
</>

  )
}

export default Home