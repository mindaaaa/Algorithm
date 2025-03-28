function solution(arr)
{
    const result = [];
    const length = arr.length;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i-1]){
            result.push(arr[i]);
        }
    }

    return result;
}