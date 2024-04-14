import { useEffect, useState } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(false);

    const fetchData = async ()=>{
        setPending(true);
        try{
            const response = await fetch(url);
            if( !response.ok ) throw new Error( response.statusText);

            const result = await  response.json();
            setData( result );
            setError(null);
            setPending(false);
        }catch(error){
            // console.log(error)
            setError(`${error}`);
            setPending(false);
        }
    }
    

    useEffect(()=>{
        fetchData();
    }, [url]);

    return { data, pending , error}
}

export default useFetch;