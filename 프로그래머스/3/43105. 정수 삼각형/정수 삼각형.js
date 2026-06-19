function solution(triangle) {
    const rows = triangle.length;
    const cols = triangle[rows-1].length;
    
    const candidates = [];
    
    const dp = Array.from({length: rows+1}, () => Array(cols+1).fill(-Infinity));
    dp[1][1] = triangle[0][0];
    
    for(let r=1; r<=rows; r++){
        for(let c=1; c<=r; c++){
            if(r===1 && c===1) continue;
            
            dp[r][c] = Math.max(dp[r-1][c], dp[r-1][c-1]) + triangle[r-1][c-1];
            
            if(r===rows) candidates.push(dp[r][c])
        }
    }
    
    return Math.max(...candidates);
}