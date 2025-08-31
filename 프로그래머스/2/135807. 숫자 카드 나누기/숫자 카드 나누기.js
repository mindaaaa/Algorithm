// function getArrMaxNumMeasure(array){
//     const minNum = Math.min(array);
//     const measure = [];
    
//     for(let i = 1; i<=Math.sqrt(minNum); i++){
//         if(minNum % i === 0){
//             measure.push(i);
//             if(i !== minNum / i) measure.push(minNum / i);
//         }
//     }
    
//     return [measure, minNum];
// }

// function conditionCommonMeasure(arr, measure){
//     const candidates = [];
    
//     for(let i = 0; i < measure.length; i++){
//         let divisibleFound = true;
        
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] < measure[i] || arr[j] % measure[i] !== 0){
//                 divisibleFound = false;
//                 break;
//             } 
//         }
//         if(divisibleFound) candidates.push(measure[i]);
//     }
    
//     return candidates;
// }

// function solution(arrayA, arrayB) {
//     const setA = new Set(arrayA);
//     const setB = new Set(arrayB);
    
//     const [measureA, numA] = getArrMaxNumMeasure(...setA);
//     const [measureB, numB] = getArrMaxNumMeasure(...setB);
    
//     const arrA = [...setA];
//     const arrB = [...setB];
    
//     const commonMeasureA = conditionCommonMeasure(arrA, measureA);
//     const commanMeasureB = conditionCommonMeasure(arrB, measureB);
          
//     const candidates = [];
    
//     for(let i = 0; i<commanMeasureB.length; i++){
//         let divisibleFound = false;
        
//         for(let j = 0; j < arrA.length; j++){
//             if(arrA[j] < commanMeasureB[i]) continue;
//             if(arrA[j] % commanMeasureB[i] === 0){
//                 divisibleFound = true;
//                 break;
//             }
//         }
//         if(!divisibleFound) candidates.push(commanMeasureB[i]);
//     }
    
//         for(let i = 0; i<commonMeasureA.length; i++){
//         let divisibleFound = false;
        
//         for(let j = 0; j < arrB.length; j++){
//             if(arrB[j] < commonMeasureA[i]) continue;
//             if(arrB[j] % commonMeasureA[i] === 0){
//                 divisibleFound = true;
//                 break;
//             }
//         }
//         if(!divisibleFound) candidates.push(commonMeasureA[i]);
//     }

//     return candidates.length === 0 ? 0 : Math.max(...candidates);
// }


const gcd = (a, b) => (b ? gcd(b, a % b) : a);
function gcdArr(arr){
    let result = arr[0];
    for(let i = 0; i < arr.length; i++){
        result = gcd(result, arr[i]);
    }
    return result;
}

function solution(arrayA, arrayB){
    const gcdA = gcdArr(arrayA);
    const gcdB = gcdArr(arrayB);
    
    const candidateA = arrayB.every(num => num % gcdA !== 0) ? gcdA : 0;
    const candidateB = arrayA.every(num => num % gcdB !== 0) ? gcdB : 0;
    
    return Math.max(candidateA, candidateB);
}