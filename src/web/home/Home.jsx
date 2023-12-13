import React ,{ Component } from 'react'
import Categories from './../categories/Categories.jsx';


function Home() {
  
  return (
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
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
  <Categories/>
</div>



  )
}

export default Home