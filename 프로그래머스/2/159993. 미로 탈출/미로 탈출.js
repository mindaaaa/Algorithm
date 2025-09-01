
function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const dir = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    
    let S = null
    let L = null;
    let E = null;
    for(let i = 0; i < row; i++){
        const current = maps[i];
        const s = current.indexOf('S');
        const l = current.indexOf('L');
        const e = current.indexOf('E');
        
        if(s !== -1) S = [i, s];
        if(l !== -1) L = [i, l];
        if(e !== -1) E = [i, e];
    }
    
    const SToLDistance = bfs(S, L);
    if(SToLDistance === -1) return -1;
    const LToEDistance = bfs(L, E);
    if(LToEDistance === -1) return -1;
    
    return SToLDistance + LToEDistance;    
    
    function bfs(start, target){
        const [sRow, sCol] = start;
        const [tRow, tCol] = target;
        const visited = Array.from({length: row}, ()=> Array(col).fill(false));
        
        const q = [[sRow, sCol, 0]];
        visited[sRow][sCol] = true;
        let idx = 0;
        
        while(idx < q.length){
            const [r, c, d] = q[idx++];
            if(r === tRow && c === tCol) return d;
            
            for(const [dr, dc] of dir){
                const n = dr + r;
                const m = dc + c;
                if(n < 0 || m < 0 || n >= row || m >= col) continue;
                if(maps[n][m] === 'X') continue;
                if(visited[n][m]) continue;
                
                visited[n][m] = true;
                q.push([n, m, d+1]);
            }
        }
        return -1;
    }
}
