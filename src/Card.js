import React from "react";
import "./Card.css";
export default function Card(props) {
    return(
        <div className={"card"}>
            <div className={"card-image"}>
                <img src={props.item.imageUrl} alt={props.item.title}/>
            </div>
            <div className={"card-content"}>
                <div className={"card-location"}>
                    <img src={"./Point.svg"} alt={"Point"}/>
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl} target={"_blank"} rel={"noreferrer"}>View on Google Maps</a>
                </div>
                <div className={"card-title"}>
                    <h3>{props.item.title}</h3>
                </div>
                <div className={"card-dates"}>
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                </div>
                <div className={"card-description"}>
                    <p>{props.item.description}</p>
                </div>
            </div>

        </div>
    )
}