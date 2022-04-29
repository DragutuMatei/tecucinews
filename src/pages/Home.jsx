/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom";

function Home() { 


  

  return ( 
    <>
      <main className="page landing-page">
        <section className="demo-3 loading">
          {" "}
          <div className="slideshow">
            <div className="slides">
              <div className="slide slide--current">
                <div
                  className="slide__img"
                  style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/slide-sus/17.jpg'})`}}
                ></div>
                <h2 className="slide__title">Tecuci News</h2>
                <p className="slide__desc">Text1 in slide</p>
                <a className="slide__link" href="#">
                  Citeste mai mult
                </a>
              </div>
              <div className="slide">
                <div
                  className="slide__img"
                  style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/slide-sus/18.jpg'})`}}
                ></div>
                <h2 className="slide__title">Tecuci News</h2>
                <p className="slide__desc">Text2 in slide</p>
                <a className="slide__link" href="#">
                  Citeste mai mult
                </a>
              </div>
              <div className="slide">
                <div
                  className="slide__img"
                  style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/slide-sus/19.jpg'})`}}
                ></div>
                <h2 className="slide__title">Tecuci News</h2>
                <p className="slide__desc">Text3 in slide</p>
                <a className="slide__link" href="#">
                  Citeste mai mult
                </a>
              </div>
              <div className="slide">
                <div
                  className="slide__img"
                  style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/slide-sus/20.jpg'})`}}
                ></div>
                <h2 className="slide__title">Tecuci News</h2>
                <p className="slide__desc">Text4 in slide</p>
                <a className="slide__link" href="#">
                  Citeste mai mult
                </a>
              </div>
            </div>
            <nav className="slidenav">
              <button className="slidenav__item slidenav__item--prev">
                Previous
              </button>
              <span>/</span>
              <button className="slidenav__item slidenav__item--next">
                Next
              </button>
            </nav>
          </div>
        </section>
        <section className="clean-block clean-info dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Info</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="img-thumbnail"
                  src="assets/img/scenery/image5.jpg"
                />
              </div>
              <div className="col-md-6">
                <h3>Lorem impsum dolor sit amet</h3>
                <div className="getting-started-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <button
                  className="btn btn-outline-primary btn-lg"
                  type="button"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Ce oferim noi?</h2>
              <p>DA DA DA</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 feature-box">
                <i className="icon-star icon"></i>
                <h4>Content de calitate</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div className="col-md-5 feature-box">
                <i className="icon-pencil icon"></i>
                <h4>Articole la zi</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div className="col-md-5 feature-box">
                <i className="icon-screen-smartphone icon"></i>
                <h4>Disponibilitate pe orice platforma</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div className="col-md-5 feature-box">
                <i className="icon-refresh icon"></i>
                <h4>Mereu informatii fresh</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <section className="article-list">
            <div className="container">
              <div className="intro">
                <h2 className="text-center">Latest Articles</h2>
                <p className="text-center">Astea s ultimele noastre articole</p>
              </div>
              <div className="row articles">
                <div className="col-sm-6 col-md-4 item">
                  <Link to="article">
                    <img className="img-fluid" src="assets/img/desk.jpg" />
                  </Link>
                  <h3 className="name">Article Title</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, interdum justo suscipit id.
                  </p>
                  <Link className="action" to="article">
                    <i className="fa fa-arrow-circle-right"></i>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4 item">
                  <a href="#">
                    <img className="img-fluid" src="assets/img/building.jpg" />
                  </a>
                  <h3 className="name">Article Title</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, interdum justo suscipit id.
                  </p>
                  <a className="action" href="#">
                    <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 item">
                  <a href="#">
                    <img className="img-fluid" src="assets/img/loft.jpg" />
                  </a>
                  <h3 className="name">Article Title</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, interdum justo suscipit id.
                  </p>
                  <a className="action" href="#">
                    <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">About Us</h2>
              <p>Astia suntem noi, ayaye</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="card text-center clean-card">
                  <img
                    className="card-img-top w-100 d-block"
                    src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.6435-9/87099114_2461872530734670_4855386551611293696_n.jpg?_nc_cat=101&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_eui2=AeGbn9D4PVCZa-JoIuKJ0iqZzku3L-uTrpTOS7cv65OulLafr7RUNprDymV0T9x14jqpgTS6DXg35SxlwZFreVfo&amp;_nc_ohc=Pv4iXKcfzZ4AX8WZzA6&amp;_nc_ht=scontent-otp1-1.xx&amp;oh=00_AT9IB7IqnnlwBTwvmMzJLe3m78y83XwA3qWhsYr4I2VPMQ&amp;oe=624B5CA6"
                  />
                  <div className="card-body info">
                    <h4 className="card-title">Dragutu Matei</h4>
                    <p className="card-text">FUGA DUPA EI</p>
                    <div className="icons">
                      <a href="https://www.facebook.com/dragutu.matei">
                        <i className="icon-social-facebook"></i>
                      </a>
                      <a href="https://www.instagram.com/dragutumatei/">
                        <i className="icon-social-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card text-center clean-card">
                  <img
                    className="card-img-top w-100 d-block"
                    src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.6435-9/86695369_2663907933657090_2295697635035578368_n.jpg?_nc_cat=105&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_eui2=AeFoBQlR7xQ29Gh8dhY_xJHSxZFpGbXA2ZPFkWkZtcDZk4kKZ_gzTK28W9dVrFbj4gA1ai7mQCrcbK3NZ5j1whxR&amp;_nc_ohc=4vIzpYzVVIQAX8bluM8&amp;_nc_ht=scontent-otp1-1.xx&amp;oh=00_AT-XlrOhVnxFt6Ku5uD-WqWcFtcKStLZiftOLcndPX65yQ&amp;oe=624BC4F3"
                  />
                  <div className="card-body info">
                    <h4 className="card-title">Hanga Mihail</h4>
                    <p className="card-text">ceva text</p>
                    <div className="icons">
                      <a href="https://www.facebook.com/hanga.mihail">
                        <i className="icon-social-facebook"></i>
                      </a>
                      <a href="https://www.instagram.com/mihail.zuzu/">
                        <i className="icon-social-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>   </>
  );
}

export default Home;
