import React from "react";
import { format } from "date-fns";

export default function Card(props) {
  const renderDate = (dateString) => {
    return format(new Date(dateString), "do MMM yy");
  };
  let badgeText = "";
  if (props.cardData.onTap) {
    badgeText = "ON TAP";
  }
  return (
    <div className="card">
      <div className="card-image-box">
        {badgeText !== "" && <div className="card-badgeText">{badgeText}</div>}
        <img className="card-image" src={`./${props.cardData.image}`} />
      </div>
      <div className="card-box">
        <div className="card-header">
          <h4>{props.cardData.style}</h4>
          <h5>
            <a
              className="card-header-link"
              href={`${props.cardData.styleGuideAddress}`}
            >
              View style description
            </a>
          </h5>
          <h5>Rating:{props.cardData.rating}</h5>
        </div>
        <h1>{props.cardData.name}</h1>
        <div className="card-dates">
          <p>
            <b>Brewed:</b> {renderDate(props.cardData.brewDate)}{" "}
          </p>
          <p>
            <b>Reviewed:</b>
            {renderDate(props.cardData.reviewDate)}
          </p>
        </div>
        <p>
          <b>About this beer:</b> {props.cardData.description}
        </p>
        <p>
          <b>Review:</b> {props.cardData.review}
        </p>
        <div className="card-stats">
          <p>
            <b>ABV: </b>
            {props.cardData.abv}%
          </p>
          <p>
            <b>IBU: </b>
            {props.cardData.ibu}
          </p>
          <p>
            <b>SRM: </b>
            {props.cardData.srm}
          </p>
        </div>
      </div>
    </div>
  );
}
