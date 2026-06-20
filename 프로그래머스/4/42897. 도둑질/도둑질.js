function solution(money) {
    if(money.length === 0) return 0;
    if(money.length === 1) return money[0];
    
    const rob = (arr) => {
        const n = arr.length;
        const dp = Array.from({length: n+1}, () => 0);
        
        dp[1] = arr[0];
        dp[2] = Math.max(arr[0], arr[1]);
        
        for(let i=3; i<=n; i++){
            dp[i] = Math.max(dp[i-1], dp[i-2]+arr[i-1]);
        }
        
        return dp[n];
    }
    
    const max1 = rob(money.slice(0, money.length-1));
    const max2 = rob(money.slice(1));

    return Math.max(max1, max2);
}