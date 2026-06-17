function solution(n, computers) {
    let count = 0;
    const visited = Array.from({length: n}, () => false);
    
    const dfs = (idx) => {
        if(visited[idx]) return;
        visited[idx] = true;
        
        for(let i = 0; i < n; i++){
            if(computers[idx][i] === 1) dfs(i);
        }
    }
    
    for(let i = 0; i < n; i++){
        if(!visited[i]) count += 1;
        dfs(i);
    }
    
    return count;
}