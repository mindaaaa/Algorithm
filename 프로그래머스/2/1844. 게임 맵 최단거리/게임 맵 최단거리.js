function solution(maps) {
    const direction = [[-1, 0], [0, -1], [1, 0], [0, 1]];
   
    let head = 0;
    const rows = maps.length;
    const cols = maps[0].length;
    
    const visited = Array.from({length: rows}, () => Array(cols).fill(false));
    const dist = Array.from({length: rows}, () => Array(cols).fill(1));
    
    const queue = [[0, 0]];
    visited[0][0] = true;
    
    while(head < queue.length){
        const [r,c] = queue[head++];
        const d = dist[r][c];
        
        for(const [dr, dc] of direction){
            const nr = r + dr;
            const nc = c + dc;
            
            if(nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
            if(visited[nr][nc] || maps[nr][nc] === 0) continue;
            
            dist[nr][nc] = d + 1;
            
            visited[nr][nc] = true;
            queue.push([nr, nc]);
        }
    }
    
    const target = dist[rows - 1][cols - 1];
    return target !== 1 ? target : -1;
}