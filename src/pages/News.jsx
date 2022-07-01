/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import ArticolElement from "../components/ArticolElement";

class News extends Component { 


  componentDidMount() {
    const scriptTag1 = document.createElement("script");

    scriptTag1.src = "./assets/js/portofoliu-fizica.js";

    scriptTag1.async = true;

    document.body.appendChild(scriptTag1);

}


  render() {

  return (
    <>
      <main classNameName="page pricing-table-page">
      <section classNameName="article-list">
        <div classNameName="container">
          <section id="portfolio" classNameName="portfolio">
            <div classNameName="container">
              <div classNameName="section-title pt-4 pb-4">
                <h2>
                  <strong>Ultimele stiri</strong>
                  <br />
                </h2>
                <div classNameName="col-md-10 offset-md-1">
                  <div classNameName="card m-auto" style={{ maxWidth: "850px" }}>
                    <div classNameName="card-body">
                      <form classNameName="d-flex align-items-center">
                        <i classNameName="fas fa-search d-none d-sm-block h4 text-body m-0"></i>
                        <input
                          classNameName="form-control form-control-lg flex-shrink-1 form-control-borderless"
                          type="search"
                          placeholder="Cauta stirea ta preferata"
                          name="searchbar"
                        />
                        <button
                          classNameName="btn btn-success btn-lg"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div classNameName="container">
                      <div classNameName="container">
                          <div classNameName="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                              <h1 classNameName="gallery-title">Ultimele stiri sa ma bata tata</h1>
                          </div>
                          <div align="center">
                              <button classNameName="btn btn-default filter-button" data-filter="all">All</button>
                              <button classNameName="btn btn-default filter-button" data-filter="covid">Covid-19</button>
                              <button classNameName="btn btn-default filter-button" data-filter="local">Local</button>
                              <button classNameName="btn btn-default filter-button" data-filter="judet">Judet</button>
                              <button classNameName="btn btn-default filter-button" data-filter="National">National</button>
                          </div>
                          <br/>
                          <div classNameName="row portfolio-container justify-content-center row-cols-lg-2">
                          <ArticolElement filter={"covid"} img={"https://via.placeholder.com/365"} titlu="test-titlu" descriere="test-descriere" />
                          <ArticolElement filter={"covid"} img={"https://via.placeholder.com/365"} titlu="test-titlu" descriere="test-descriere" />
                          <ArticolElement filter={"local"} img={"https://via.placeholder.com/365"} titlu="test-titlu" descriere="test-descriere" />
                          <ArticolElement filter={"local"} img={"https://via.placeholder.com/365"} titlu="test-titlu" descriere="test-descriere" />
                          <ArticolElement filter={"judet"} img={"https://via.placeholder.com/365"} titlu="test-titlu" descriere="test-descriere" />
                          <ArticolElement filter={"covid"} img={"https://via.placeholder.com/365"} titlu="test-titlu" descriere="test-descriere" />
                          <ArticolElement filter={"National"} img={"https://via.placeholder.com/365"} titlu="test-titlu" descriere="test-descriere" />
                          <ArticolElement filter={"National"} img={"https://via.placeholder.com/365"} titlu="test-titlu" descriere="test-descriere" />

                          </div> 
                      </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    

    </>
  );
}
}
export default News;
