function getBorderCordinates(r1, c1, r2, c2){
    const row1 = r1 - 1;
    const col1 = c1 - 1;
    const row2 = r2 - 1;
    const col2 = c2 - 1;
    
    const coords = [];
    
    for(let c = col1; c < col2; c++){
        coords.push([row1, c]);
    }
    
    for(let r = row1; r < row2; r++){
        coords.push([r, col2]);
    }
    
    for(let c = col2; c > col1; c--){
        coords.push([row2, c]);
    }
    
    for(let r = row2; r > row1; r--){
        coords.push([r, col1]);
    }
    
    return coords;
}

function solution(rows, columns, queries) {
    const board = Array.from({length: rows}, () => Array(columns).fill(0));
    
    let num = 1;
    
    // 일단 rows, columns에 해당하는 배열 만들기
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            board[r][c] = num;
            num++;
        }
    }
    
    const answer = [];
    
    for(const [r1, c1, r2, c2] of queries){
        // 좌표 만들기
        const coords = getBorderCordinates(r1, c1, r2, c2);
        
        // 인덱스 값 읽기
        const values = coords.map(([r, c]) => board[r][c]);
        
        // 최소값 구하기
        answer.push(Math.min(...values));
        
        // 회전하기
        const rotated = [values[values.length - 1], ...values.slice(0, -1)];
        
        // 채워넣기
        coords.forEach(([r, c], i) => board[r][c] = rotated[i]);
    }

    return answer;
}