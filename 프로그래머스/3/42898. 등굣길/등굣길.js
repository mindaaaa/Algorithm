function solution(m, n, puddles) {
    const dp = Array.from({length: m+1}, () => Array(n+1).fill(0));
    const block = new Set();
    
    dp[1][1] = 1;
    
    for(const [row, col] of puddles){
        block.add(`${row}-${col}`);
    }
    
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            if(i===1 && j===1) continue;
            if(block.has(`${i}-${j}`)) continue;
            
            dp[i][j] = (dp[i-1][j] + dp[i][j-1])%1_000_000_007;
        }
    }
    
    return dp[m][n];
}