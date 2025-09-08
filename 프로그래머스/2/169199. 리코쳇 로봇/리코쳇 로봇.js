function solution(board) {
    let answer = -1;
    
    const map = board.map((line) => line.split(''));
    
    const row = map.length;
    const col = map[0].length;
    const visited = Array.from({length: row}, () => new Array(col).fill(false));

    const dir = [
        [0,1], 
        [1,0],
        [-1,0],
        [0,-1],
    ];
    
    let sc = 0;
    let sr = 0;
    
    for(let i=0; i<row; i++){
        const target = map[i].indexOf('R');
        
        if(target !== -1){
            sc = target;
            sr = i;
            break;
        };
    }
    
    
    const queue = [[sr, sc, 0]];
    visited[sr][sc] = true;
    let idx = 0;
    
    while(idx < queue.length){
        const [r, c, count] = queue[idx++];
        
        if(map[r][c] === 'G'){
            answer = count;
            break;
        }
        
        for(const [dr, dc] of dir){
            let nr = r + dr;
            let nc = c + dc;
            
            while(0 <= nr && nr < row && 0 <= nc && nc < col && map[nr][nc] !== 'D'){
                nr += dr;
                nc += dc;
            }
            
            nr -= dr;
            nc -= dc;
            
            if(!visited[nr][nc]){
                visited[nr][nc] = true;
                queue.push([nr, nc, count+1]);
            }
        }
    }
    
    return answer;
}