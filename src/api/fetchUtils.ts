// import { useState, useEffect } from "react"

import { data } from "react-router-dom"

interface dataToSendLogin {
    email: string,
    password: string
}

interface dataToSendRegister {
    email: string,
    pseudo: string,
    password: string
}

// export const useFetch = (url:string) =>{
//     const [data, setData] = useState<string|null>(null);
//     const [error, setError] = useState<Error|null>(null);
//     const [status, setStatus] = useState<string|null>(null);

//     useEffect(()=>{
//         setStatus('loading');

//         fetch(url)
//             .then((response)=>response.text())
//             .then((data) => {
//                 setData(data);
//                 setStatus('success');
//             })
//         .catch((error : Error)=>{
//             setError(error);
//             setStatus('error');
//         })
//     }, [url])

//     return {data, error, status};
// }

export const login = async (url:string, dataToSend: dataToSendLogin)=>{
    try{
        const response = await fetch(url, {
            method: "POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(dataToSend)
        });

        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return{data, error:null, status:'success'};
    }catch(error){
        return{data:null, errorFetch: error, status:"error"};
    }
}

export const register = async (url:string, dataToSend: dataToSendRegister)=>{
    try{
        const response = await fetch(url, {
            method: "POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(dataToSend)
        });

        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return{data, error:null, status:'success'};
    }catch(error){
        return{data:null, errorFetch: error, status:"error"};
    }
}