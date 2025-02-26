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

interface dataToSendModify{
    // email:string
    pseudo:string
    avatar:string
    // role:string
    pronouns:string
    // isSearching:boolean
    // geolocation:{
    //     id:number
    //     latitude:number
    //     longitude:number
    //     city: string
    // }
}

export const logout = async() =>{
    await fetch (`${config.API_URL}/v1/auth/tokenRotation/logout`, {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        },
    });

    Cookies.remove('refreshToken');
    Cookies.remove('accessToken');
    for(let i in sessionStorage){
        sessionStorage.removeItem(i);
    }
    window.location.reload();
}

export const refreshAccessToken = async() =>{
    console.log("aaaaaaaaaaaaaaaaaaaaa");

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
        logout();
    }
}

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

export const modifyProfile = async(url:string, dataToSend:dataToSendModify) => {
    let accessToken = Cookies.get('accessToken');
    let refreshToken = Cookies.get('refreshToken');

    if(isTokenExpired(accessToken)){
        accessToken = await refreshAccessToken();
    }
    if (!accessToken) {
        throw new Error("Access token is undefined");
    }
    if(!refreshToken){
        throw new Error('Refresh token is undefined');
    }
    
    try{
        const response = await fetch(url, {
            method:"PUT",
            headers:{
                'Content-type':'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body:JSON.stringify(dataToSend)
        });

        if(!response.ok){
            console.log(response);
            throw new Error('Network response was not ok');
        }
        return {error:null, status:'success'};
    }catch(error){
        return{error:error, status:'error'};
    }
}