import React from "react";
import ArticolElement from "../components/ArticolElement";

function News() {
  return (
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
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li className="filter-active" data-filter="*">
                      all
                    </li>
                    <li data-filter=".filter-3d">Local</li>
                    <li data-filter=".filter-logo">Covid</li>
                    <li data-filter=".filter-web">Judet</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container justify-content-center row-cols-lg-2">
                <ArticolElement h4={"nush"} p={"idk"} />
                <ArticolElement h4={"nush"} p={"idk"} />
                <ArticolElement h4={"nush"} p={"idk"} />
                <ArticolElement h4={"nush"} p={"idk"} />
                <ArticolElement h4={"nush"} p={"idk"} />
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default News;
