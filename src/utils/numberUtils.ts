// 3200 => 3.2k
export function formatNumber(num:number):string{
    if(num >= 1000){
        return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
}