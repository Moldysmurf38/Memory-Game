import React from "react";
import "./style.css";




function PhotoGrid(props) {
  return <div className="photo-grid">{props.children}</div>;
}

export default PhotoGrid;