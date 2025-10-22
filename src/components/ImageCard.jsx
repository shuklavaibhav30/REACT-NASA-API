import {Link} from "react-router-dom";

function ImageCard({item}){
    const ImageUrl=item.link?.[0]?.href;
    const title=item.data?.[0]?.title;
    const nasaId=item.data?.[0]?.nasa_id;

    return(
        <div className="image-card">
            <Link to={`/image/${nasaId}`}>
            <img src={ImageUrl} alt={title}/>
            </Link>
            <p>{title}</p>
        </div>
    );
}
export default ImageCard;