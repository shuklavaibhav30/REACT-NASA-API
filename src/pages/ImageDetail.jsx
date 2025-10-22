import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function ImageDetail(){
    const {id}=useParams();
    const [imageData,setimageData]=useState(null);
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        async function fetchDetail() {
            const res=await fetch(`https://images-api.nasa.gov/search?nasa_id=${id}`);
            const data=await res.json();
            setimageData(data.collection.items[0]);
            setloading(false);
            
        }
        fetchDetail();
    },[id]);

    if(loading) return <p>Loading Details...⌛</p>
    const ImageUrl=imageData?.links?.[0]?.href
    const title=imageData?.data?.[0]?.title;
    const description=imageData?.data?.[0]?.description;

    return(
        <div className="image-details">
            <image src={ImageUrl} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={ImageUrl}download><button>DOWNLOAD IMAGE</button></a>
        </div>
    );

}
export default ImageDetail;