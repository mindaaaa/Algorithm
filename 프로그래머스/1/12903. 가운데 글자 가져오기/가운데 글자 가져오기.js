function solution(s) {
    const length = s.length;
    const oddMedian = (length+1)/2;
    const evenMedian = length/2;
    
    if(length % 2 === 0){
        return s.slice(evenMedian-1, evenMedian+1);
    
    }
    return s.slice(oddMedian-1, oddMedian);
}