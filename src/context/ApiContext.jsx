import React ,{ createContext ,useState, useEffect } from 'react';
export const ApiContext=createContext();
export function ApiProvider({children}) {
    const [images,setimages]=useState([]);
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState(null);

    const fetchImages =async(query="")=>{
        setloading(true);
        try{
            const res=await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
            const data=await res.json();
            setimages(data.collection.items);
            seterror(null);
        }catch{
            seterror('FAILED TO FETCH IMAGES!');
        }
        setloading(false);
    };
    useEffect(()=>{
        fetchImages("space");
    },[]);

    return(
        <ApiContext.Provider value={{images,loading,error,fetchImages}}>
            {children}
        </ApiContext.Provider>
    );
    
}