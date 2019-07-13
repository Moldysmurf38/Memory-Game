import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <div className="image-card">
            <img onClick={props.onClick} id={props.id} src={props.src} alt={props.alt}></img>
        </div>
    );
}

export default ImageCard