function solution(left, right) {
    let sum = 0;
    for(let i=left; i<=right; i++){
        if(getMeasure(i) % 2 === 0){
            sum += i;
        }else{
            sum -= i;
        };
    }
    return sum;
}

function getMeasure(num){
    const arr = [];
    for(let i=1; i<= Math.sqrt(num); i++){
        if(num%i === 0){
            arr.push(i)
            if(i !== num/i){
                 arr.push(num/i);
            }
        }
    }
    return arr.length;
}