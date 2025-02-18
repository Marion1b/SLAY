export const isTokenExpired = (token:string|undefined) => {
    if(typeof token === "string"){
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expirationDate = new Date(payload.exp * 1000);
        return expirationDate < new Date();
    }else{
        return null;
    }
    
}