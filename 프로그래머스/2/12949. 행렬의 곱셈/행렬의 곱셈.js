function solution(arr1, arr2) {
    const r1 = arr1.length; // 행
    const c1 = arr1[0].length; // 공통축
    const c2 = arr2[0].length;
    
    const answer = Array.from({length: r1}, () => Array(c2).fill(0));
    
    for(let i = 0; i < r1; i++){
        for(let k = 0; k < c1; k++){
            let val = arr1[i][k];
            
            for(let j = 0; j < c2; j++){
                answer[i][j] += val * arr2[k][j]
            }
        }
    }
    
    return answer;
}