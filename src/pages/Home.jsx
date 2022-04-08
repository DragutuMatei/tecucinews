import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="page landing-page">
        <section className="demo-3 loading">
          <div className="slideshow">
            <div className="slides">
              <div className="slide slide--current">
                <div
                  className="slide__img"
                  style={{
                    background:
                      "url(/assets/img/slide-sus/17.jpg?h=ccd1e3e80adac4448a696bf9822aea30)",
                  }}
                ></div>
                <h2 className="slide__title">Tecuci News</h2>
                <p className="slide__desc">Text1 in slide</p>
                <Link className="slide__link" to="#">
                  Citeste mai mult
                </Link>
              </div>
              <div className="slide">
                <div
                  className="slide__img"
                  style={{
                    background:
                      "url(/assets/img/slide-sus/17.jpg?h=ccd1e3e80adac4448a696bf9822aea30)",
                  }}
                ></div>
                <h2 className="slide__title">Tecuci News</h2>
                <p className="slide__desc">Text2 in slide</p>
                <Link className="slide__link" to="#">
                  Citeste mai mult
                </Link>
              </div>
              <div className="slide">
                <div
                  className="slide__img"
                  style={{
                    background:
                      "url(/assets/img/slide-sus/17.jpg?h=ccd1e3e80adac4448a696bf9822aea30)",
                  }}
                ></div>
                <h2 className="slide__title">Tecuci News</h2>
                <p className="slide__desc">Text3 in slide</p>
                <Link className="slide__link" to="#">
                  Citeste mai mult
                </Link>
              </div>
              <div className="slide">
                <div
                  className="slide__img"
                  style={{
                    background:
                      "url(/assets/img/slide-sus/17.jpg?h=ccd1e3e80adac4448a696bf9822aea30)",
                  }}
                ></div>
                <h2 className="slide__title">Tecuci News</h2>
                <p className="slide__desc">Text4 in slide</p>
                <Link className="slide__link" to="#">
                  Citeste mai mult
                </Link>
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
              <h2 className="text-info">Scurt about</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  alt=""
                  className="img-thumbnail"
                  src="/assets/img/scenery/image5.jpg?h=5a16d46fccd884924ce66752802d76c5"
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
                  <Link to="/article.html">
                    <img
                      alt=""
                      className="img-fluid"
                      src="/assets/img/desk.jpg?h=2ce14ccffed9db677708648866dc8fcf"
                    />
                  </Link>
                  <h3 className="name">Article Title</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, interdum justo suscipit id.
                  </p>
                  <Link className="action" to="/article.html">
                    <i className="fa fa-arrow-circle-right"></i>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4 item">
                  <Link to="#">
                    <img
                      alt=""
                      className="img-fluid"
                      src="/assets/img/building.jpg?h=f30691337e2bf289cf59c53d9662478c"
                    />
                  </Link>
                  <h3 className="name">Article Title</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, interdum justo suscipit id.
                  </p>
                  <Link className="action" to="#">
                    <i className="fa fa-arrow-circle-right"></i>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4 item">
                  <Link to="#">
                    <img
                      alt=""
                      className="img-fluid"
                      src="/assets/img/loft.jpg?h=e41d3fb408aa43bf64e4fe4ebdc8335f"
                    />
                  </Link>
                  <h3 className="name">Article Title</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, interdum justo suscipit id.
                  </p>
                  <Link className="action" to="#">
                    <i className="fa fa-arrow-circle-right"></i>
                  </Link>
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
                    alt=""
                    className="card-img-top w-100 d-block"
                    src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.6435-9/87099114_2461872530734670_4855386551611293696_n.jpg?_nc_cat=101&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_eui2=AeGbn9D4PVCZa-JoIuKJ0iqZzku3L-uTrpTOS7cv65OulLafr7RUNprDymV0T9x14jqpgTS6DXg35SxlwZFreVfo&amp;_nc_ohc=Pv4iXKcfzZ4AX8WZzA6&amp;_nc_ht=scontent-otp1-1.xx&amp;oh=00_AT9IB7IqnnlwBTwvmMzJLe3m78y83XwA3qWhsYr4I2VPMQ&amp;oe=624B5CA6"
                  />
                  <div className="card-body info">
                    <h4 className="card-title">Dragutu Matei</h4>
                    <p className="card-text">FUGA DUPA EI</p>
                    <div className="icons">
                      <Link to="https://www.facebook.com/dragutu.matei">
                        <i className="icon-social-facebook"></i>
                      </Link>
                      <Link to="https://www.instagram.com/dragutumatei/">
                        <i className="icon-social-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card text-center clean-card">
                  <img
                    alt=""
                    className="card-img-top w-100 d-block"
                    src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.6435-9/86695369_2663907933657090_2295697635035578368_n.jpg?_nc_cat=105&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_eui2=AeFoBQlR7xQ29Gh8dhY_xJHSxZFpGbXA2ZPFkWkZtcDZk4kKZ_gzTK28W9dVrFbj4gA1ai7mQCrcbK3NZ5j1whxR&amp;_nc_ohc=4vIzpYzVVIQAX8bluM8&amp;_nc_ht=scontent-otp1-1.xx&amp;oh=00_AT-XlrOhVnxFt6Ku5uD-WqWcFtcKStLZiftOLcndPX65yQ&amp;oe=624BC4F3"
                  />
                  <div className="card-body info">
                    <h4 className="card-title">Hanga Mihail</h4>
                    <p className="card-text">ceva text</p>
                    <div className="icons">
                      <Link to="https://www.facebook.com/hanga.mihail">
                        <i className="icon-social-facebook"></i>
                      </Link>
                      <Link to="https://www.instagram.com/mihail.zuzu/">
                        <i className="icon-social-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <div className="clean-block add-on social-icons blue">
            <div className="icons">
              <Link to="#">
                <i className="icon-social-facebook"></i>
              </Link>
              <Link to="#">
                <i className="icon-social-instagram"></i>
              </Link>
              <Link to="#">
                <i className="icon-social-twitter"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="page-footer dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h5>Get started</h5>
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Sign up</Link>
                </li>
                <li>
                  <Link to="#">Downloads</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5>About us</h5>
              <ul>
                <li>
                  <Link to="#">Company Information</Link>
                </li>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
                <li>
                  <Link to="#">Reviews</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5>Support</h5>
              <ul>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Help desk</Link>
                </li>
                <li>
                  <Link to="#">Forums</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5>Legal</h5>
              <ul>
                <li>
                  <Link to="#">Terms of Service</Link>
                </li>
                <li>
                  <Link to="#">Terms of Use</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2022 Copyright Text</p>
        </div>
      </footer>

      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark clean-navbar">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            TecuciNews.ro
          </Link>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-2"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item item">
                <Link className="nav-link active" to="/">
                  acasa
                </Link>
              </li>
              <li className="nav-item item">
                <Link className="nav-link" to="/news.html">
                  news
                </Link>
              </li>
              <li className="nav-item item">
                <Link className="nav-link" to="/about-us.html">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item item">
                <Link className="nav-link" to="/contact-us.html">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <script src="./assets/bootstrap/js/bootstrap.min.js?h=5488c86a1260428f0c13c0f8fb06bf6a"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
    <script src="./assets/js/vanilla-zoom.js?h=6a37ea9c996b05f763161c73127d66bc"></script>
    <script src="./assets/js/theme.js?h=a083aeb15550c5e1266c666e8a5846d9"></script>
    <script src="./assets/js/anime.min.js?h=7b7d9c2344ec7bb776c95e6d9144470f"></script>
    <script src="./assets/js/demo.js?h=7d016c1331724bb00e48e7ca1abccece"></script>
    <script src="./assets/js/demo3.js?h=157ba8265b3fc7352d98a09b3c69f84d"></script>
    <script src="./assets/js/imagesloaded.pkgd.min.js?h=1a4b132632e8444a9d67a33668e195a5"></script>    </>
  );
}

export default Home;
