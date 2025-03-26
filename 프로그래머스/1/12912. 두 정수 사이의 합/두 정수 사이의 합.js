function solution(a, b){
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    let sum = 0;

       if(min === max){
            return min;
        }
        
    for(let i=min; i<=max; i++){
        sum += i;
    }
    return sum;
}