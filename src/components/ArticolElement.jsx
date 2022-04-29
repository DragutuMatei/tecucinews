/* eslint-disable jsx-a11y/alt-text */
// import React from "react";

import React from 'react';

function ArticolElement({filter, img }) {


  let imagine = img;
   let bag  = 'gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ';
   let pula  = filter;

  
  let ma_ta = bag + pula;

  return (
    <div className={ma_ta } >
      <a href="blog-post.html">
        <img src={imagine} className="img-responsive" />
        <h4>test</h4>
        <p>test</p>
      </a>
    </div> 
  );
}

export default ArticolElement;
 