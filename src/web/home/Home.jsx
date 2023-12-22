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
      <img src="item-Home/slide-01.jpg" className="d-block w-100 vh-100" alt="slide1" />
      <div className='overlay1 text-start'>
      <span className='spanCarousel'> Women Collection 2024 </span>
    <h1 className='h1Crousel'>NEW SEASON</h1>
    <button className="badge rounded-pill">Shope Now</button>
  </div>
    </div>
    <div className="carousel-item ">
      <img src="item-Home/slide-02.jpg" className="d-block w-100 vh-100" alt="slide2" />
      <div className='overlay1 text-start'>
      <span className='spanCarousel'> Men New-Season </span>
    <h1 className='h1Crousel'>JACKETS & COATS</h1>
    <button className="badge rounded-pill">Shope Now</button>
  </div>
    </div>  
    <div className="carousel-item">
      <img src="item-Home/slide-03.jpg" className="d-block w-100 vh-100" alt="slide3" />
      <div className='overlay1 text-start'>
      <span className='spanCarousel'>Men Collection 2024 </span>
    <h1 className='h1Crousel'>NEW ARRIVALS</h1>
    <button className="badge rounded-pill">Shope Now</button>
  </div>
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
</div>
</div>
<section>
  <div className='container'>
  <h2 className="h2Home">PRODUCT OVERVIEW</h2>
  <div>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Products</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Women</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="men-tab" data-bs-toggle="tab" data-bs-target="#men" type="button" role="tab" aria-controls="men" aria-selected="false">Men</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="shoes-tab" data-bs-toggle="tab" data-bs-target="#shoes" type="button" role="tab" aria-controls="shoes" aria-selected="false">Shoes</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Watches</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="row py-5">
            <div className="col-md-3 pt-3">
              <img src="item-Home/product-01.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-02.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-03.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-04.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-05.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-06.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-07.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-08.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-09.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-10.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-11.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-12.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-13.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-14.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-15.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-16.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="row py-5">
            <div className="col-md-3 pt-3">
              <img src="item-Home/product-01.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-02.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-04.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-05.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-07.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-08.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-10.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-13.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-14.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-16.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="men" role="tabpanel" aria-labelledby="men-tab">
          <div className="row py-5">
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-03.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-11.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-12.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="shoes" role="tabpanel" aria-labelledby="shoes-tab">
          <div className="row py-5">
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-09.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <div className="row py-5">
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-06.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
            <div className="col-md-3  pt-3">
              <img src="item-Home/product-15.jpg" alt="product-01" className="itemProduct" />
              <h5 className="h5Home">Esprit Ruffle Shirt</h5><span className="spanHome">$16.64</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>

</>

  )
}

export default Home