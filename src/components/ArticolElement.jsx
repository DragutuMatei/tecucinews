import React from "react";

function ArticolElement({ h4, p }) {
  return (
    <div className="col portfolio-item filter-logo col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
      <a href="blog-post.html">
        <img className="img-fluid rounded-1" src="assets/img/desk.jpg" />
        <h4>{h4}</h4>
        <p>{p}</p>
      </a>
    </div>
  );
}

export default ArticolElement;
