import { faCoffee, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--image_container">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="card--info_container">
        <div className="card--location-container">
          <span className="card--location-icon">
            <FontAwesomeIcon icon={faLocation} />
          </span>
          <span className="card--country">{props.location}</span>
          <a href={props.googleMapsUrl}>
            <span className="card--google">View on Google Maps</span>
          </a>
        </div>

        <h1>{props.title}</h1>
        <h5>{props.startDate} - {props.endDate}</h5>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}
