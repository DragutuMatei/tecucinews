/* eslint-disable jsx-a11y/alt-text */
// import React from "react";

import React from 'react';

function ArticolElement({filter, img ,titlu, descriere}) {


  let imagine = img;
   let bag  = 'col portfolio-item filter ';
   let pula  = filter;
  let in_ = ' col-lg-3 col-md-4 col-sm-6 px-2 mb-4';
  
  let ma_ta = bag + pula + in_;

  return (
    <div className={ma_ta } >
      <a href="blog-post.html">
        <img src={imagine} className="img-fluid rounded-1" />
        <h4>{titlu}</h4>
        <p>{descriere}</p>
      </a>
    </div> 
  );
}

export default ArticolElement;
 