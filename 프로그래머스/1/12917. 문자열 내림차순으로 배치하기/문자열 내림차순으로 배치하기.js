function solution(s) {
    const arr = s.split('');
    
    return arr.sort((a, b)=>{
        const isLowerA = (a.toLowerCase() === a);
        const isLowerB = (b.toLowerCase() === b);
        
        if(isLowerA === isLowerB){
            return b.localeCompare(a);
        }
        
        return isLowerA ? -1 : 1;
    }).join('');
}