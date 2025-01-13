export function isSamePassword(password1:string, password2:string):boolean{
    if(password1 === password2){
        return true;
    }else{
        return false;
    }
}

export function isPasswordCorrect(password:string):boolean{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;
    return regex.test(password);
}