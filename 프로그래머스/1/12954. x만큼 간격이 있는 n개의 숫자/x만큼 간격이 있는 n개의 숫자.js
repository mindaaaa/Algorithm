function solution(x, n){
    const array = new Array(n).fill(0);
    
    for(let i=0; i<n; i++){
        array[i] += x*(i+1);
    }
    
    return array;
}