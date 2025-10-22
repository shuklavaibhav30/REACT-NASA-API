import {useContext,useState  } from "react";
import { ApiContext } from "../context/ApiContext";
import ImageCard from "../components/ImageCard";

function MainPage(){
    const {images,loading,error,fetchImages}=useContext(ApiContext);
    const[query,setQuery]=useState("");
    const handleSearch=(e)=>{
        const value=e.target.value;
        setQuery(value);
        if(value.trim()!==""){
            clearTimeout(window.searchTimer);
            window.searchTimer=setTimeout(()=>fetchImages(value),600);
        }
    };
    return(
        <div className="home">
            <input type="text"
            placeholder="Search NASA images🔍"
            value={query}
            onChange={handleSearch}
            className="search-bar"
            />
            {loading&&<p>Loading Images⌛...</p>}
            {error&&<p style={{color:"red"}}>{error}</p>}

            <div className="Image-section">
                {images.map((item,i)=>(<ImageCard key={i} item={item}/>))}
            </div>
        </div>
    );
}

export default MainPage;