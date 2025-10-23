import {useContext,useState  } from "react";
import { ApiContext } from "../context/ApiContext";
import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import FlipImage from "../components/FlipImage";

function MainPage(){
    const {images,loading,error,fetchImages,query,page}=useContext(ApiContext);
    const[searchItem,setSearchItem]=useState(query);
    const handleSearch=(e)=>{
        const value=e.target.value;
        setSearchItem(value);
        if(value.trim()!==""){
            clearTimeout(window.searchTimer);
            window.searchTimer=setTimeout(()=>fetchImages(value,1),600);
        }
    };

    const nextPage=()=>{
        fetchImages(query,page+1);
    };
    const prevPage=()=>{
        if (page>1)fetchImages(query,page-1);
    };
    return(
        <div className="home">
            <input type="text"
            placeholder="Search NASA images🔍"
            value={searchItem}
            onChange={handleSearch}
            className="search-bar"
            />
            {loading&&<p>Loading Images⌛...</p>}
            {error&&<p style={{color:"red"}}>{error}</p>}

            <div className="Image-section">
                {images.map((item,i)=>(<FlipImage key={i} item={item}/>))}
            </div>
            <Pagination page={page} prev={prevPage} next={nextPage}/>
        </div>
    );
}

export default MainPage;