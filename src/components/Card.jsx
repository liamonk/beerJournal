import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-image-box">
        <img className="card-image" src={`/images/${props.cardData.image}`} />
      </div>
      <div className="card-box">
        <div className="card-header">
          <h4>{props.cardData.style}</h4>
          <h5>
            <a
              className="card-header-link"
              href="props.cardData.styleGuideAddress"
            >
              View style on Wikipedia
            </a>
          </h5>
          <h5>Rating:{props.cardData.rating}</h5>
        </div>
        <h1>{props.cardData.name}</h1>
        <div className="card-dates">
          <p>
            <b>Brewed on:</b> {props.cardData.brewDate}{" "}
          </p>
          <p>
            <b>Reviewed on:</b>
            {props.cardData.reviewDate}
          </p>
        </div>
        <p>
          <b>About this beer:</b> {props.cardData.description}
        </p>
        <p>
          <b>Review:</b> {props.cardData.review}
        </p>
      </div>
    </div>
  );
}
