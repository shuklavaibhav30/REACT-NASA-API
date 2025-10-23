import { useState } from "react";
import { Link } from "react-router-dom";
function FlipImage({ item }) {
    const [flipped, setflipped] = useState(false);
    const imageUrl = item.links && item.links[0] ? item.links[0].href : null;
    const title = item.data?.[0]?.title || "untitled";
    const description = item.data?.[0]?.description || "No description available";
    const date = item.data?.[0]?.date_created ? new Date(item.data[0].date_created).toLocaleDateString() : "Unknown Date";
    const nasaId = item.data?.[0]?.nasa_id;

    return (
        <div className={`flip-card ${flipped ? "flipped" : ""}`}
            onClick={() => setflipped(!flipped)}>
            {/* frontside */}
            <div className="flip-front">
                {imageUrl ? (<img src={imageUrl} alt={title} />) : (
                    <div className="no-image">No Image Available</div>
                )}
                <p className="flip-title">{title}</p>

            </div>

            {/* rearside */}
            <div className="flip-back">
                <h3>{title}</h3>
                <p>{description.slice(0, 150)}...</p>
                <p><strong>Date:</strong>{date}</p>
                <Link to={`/image/${nasaId}`} className="flipdetails-btn">View Details</Link>
            </div>
        </div>


    );
}
export default FlipImage;