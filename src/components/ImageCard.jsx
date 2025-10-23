import {Link} from "react-router-dom";

function ImageCard({item}){
    const ImageUrl=item.links&&item.links[0]?item.links[0].href: null;
    const title=item.data?.[0]?.title || "untitled";
    const nasaId=item.data?.[0]?.nasa_id;

    return(
        <div className="image-card">
            {ImageUrl ? (
            <Link to={`/image/${nasaId}`}>
            <img src={ImageUrl} alt={title}/>
            </Link>
            ):(
                <div className="no-image">No Image Available</div>
            )}

            <p>{title}</p>
        </div>
    );
}
export default ImageCard;