function solution(brown, yellow) {
    const total = brown + yellow;
    const isWideEnough = (row, col) => row >= col;
    const checkInnerArea = (row, col) => (row - 2) * (col - 2) === yellow;
    const matchTile = (row, col) => isWideEnough(row, col) && checkInnerArea(row, col);
    
    for(let col = 3; col <= Math.sqrt(total); col++){
        if(total % col !== 0) continue;
        const row = total / col;
        
        if(matchTile(row, col)) return [row, col];
    }
}