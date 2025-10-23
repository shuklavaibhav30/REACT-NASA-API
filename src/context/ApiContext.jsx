import React ,{ createContext ,useState, useEffect } from 'react';
export const ApiContext=createContext();
export function ApiProvider({children}) {
    const [images,setimages]=useState([]);
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState(null);
    const [query,setquery]=useState("space");
    const [page,setpage]=useState(1);

    const fetchImages =async(search=query,pageNum=1)=>{
        setloading(true);
        try{
            const res=await fetch(`https://images-api.nasa.gov/search?q=${search}&media_type=image&page=${pageNum}`);
            const data=await res.json();
            const items=data.collection.items || [];
            setimages(items);
            seterror(null);
            setquery(search);
            setpage(pageNum);
        }catch{
            seterror('FAILED TO FETCH IMAGES!');
        }
        setloading(false);
    };
    useEffect(()=>{
        fetchImages("space",1);
    },[]);

    return(
        <ApiContext.Provider value={{images,loading,error,fetchImages,query,page}}>
            {children}
        </ApiContext.Provider>
    );
    
}