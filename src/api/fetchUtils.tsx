import { useState, useEffect } from "react"

export const useFetch = (url:string) =>{
    const [data, setData] = useState<string|null>(null);
    const [error, setError] = useState<Error|null>(null);
    const [status, setStatus] = useState<string|null>(null);

    useEffect(()=>{
        setStatus('loading');

        fetch(url)
            .then((response)=>response.json())
            .then((data) => {
                setData(data);
                setStatus('success');
            })
        .catch((error : Error)=>{
            setError(error);
            setStatus('error');
        })
    }, [url])

    return {data, error, status};
}