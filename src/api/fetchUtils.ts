import { data } from "react-router-dom";
import { isTokenExpired } from "./tokenUtils";
import Cookies from "js-cookie";
import config from '../../config.ts';

interface dataToSendLogin {
    email: string,
    password: string
}

interface dataToSendRegister {
    email: string,
    pseudo: string,
    password: string
}

export const refreshAccessToken = async() =>{
    const expirationAT = new Date(new Date().getTime()+15*60*1000);
    const refreshToken = Cookies.get('refreshToken');
    const response = await fetch(`${config.API_URL}/v1/auth/tokenRotation`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({refreshToken})
    });

    if(response.ok){
        const data = await response.json();
        Cookies.set('accessToken', data.accessToken, {SameSite: 'strict', secure:true, expires: expirationAT});
        if(data.refreshToken){
            Cookies.set('refreshToken', data.refreshToken, {SameSite: 'strict', secure:true, expires:7});
        }
        return data.acessToken
    } else{
        console.log("erreur lors de refresh access token");
    }
}

export const login = async (url:string, dataToSend: dataToSendLogin)=>{
    let accessToken = Cookies.get('accessToken');

    if (isTokenExpired(accessToken)) {
        accessToken = await refreshAccessToken();
    }

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
    let accessToken = Cookies.get('accessToken');

    if (isTokenExpired(accessToken)) {
        accessToken = await refreshAccessToken();
    }
    
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