/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from 'react';
import ArticolElement from "../components/ArticolElement";


function News() {



  

  return (
    <>
    <main className="page pricing-table-page">
      <section className="article-list">
        <div className="container">
          <section id="portfolio" className="portfolio">
            <div className="container">
              <div className="section-title pt-4 pb-4">
                <h2>
                  <strong>Ultimele stiri</strong>
                  <br />
                </h2>
                <div className="col-md-10 offset-md-1">
                  <div className="card m-auto" style={{ maxWidth: "850px" }}>
                    <div className="card-body">
                      <form className="d-flex align-items-center">
                        <i className="fas fa-search d-none d-sm-block h4 text-body m-0"></i>
                        <input
                          className="form-control form-control-lg flex-shrink-1 form-control-borderless"
                          type="search"
                          placeholder="Cauta stirea ta preferata"
                          name="searchbar"
                        />
                        <button
                          className="btn btn-success btn-lg"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                      <div className="container">
                          <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                              <h1 className="gallery-title">Ultimele stiri sa ma bata tata</h1>
                          </div>
                          <div align="center">
                              <button className="btn btn-default filter-button" data-filter="all">All</button>
                              <button className="btn btn-default filter-button" data-filter="hdpe">HDPE Pipes</button>
                              <button className="btn btn-default filter-button" data-filter="sprinkle">Sprinkle Pipes</button>
                              <button className="btn btn-default filter-button" data-filter="spray">Spray Nozzle</button>
                              <button className="btn btn-default filter-button" data-filter="irrigation">Irrigation Pipes</button>
                          </div>
                          <br/>
                          <div className="row">
                          <ArticolElement filter={"hdpe"} img={"https://via.placeholder.com/365"}  />
                          <ArticolElement filter={"hdpe"} img={"https://via.placeholder.com/365"}  />
                          <ArticolElement filter={"sprinkle"} img={"https://via.placeholder.com/365"}  />
                          <ArticolElement filter={"sprinkle"} img={"https://via.placeholder.com/365"}  />
                          <ArticolElement filter={"spray"} img={"https://via.placeholder.com/365"}  />
                          <ArticolElement filter={"hdpe"} img={"https://via.placeholder.com/365"}  />
                          <ArticolElement filter={"irrigation"} img={"https://via.placeholder.com/365"}  />
                          <ArticolElement filter={"irrigation"} img={"https://via.placeholder.com/365"}  />

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

export default News;
