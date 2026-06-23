function solution(n, lost, reserve) {
    let count = n;
    
    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);
    
    for(const s of reserve){
        if(lostSet.has(s)){
            lostSet.delete(s);
            reserveSet.delete(s)
        }
    }
        
    const lostArr = [...lostSet].sort((a, b) => a-b);
    const reserveArr = [...reserveSet].sort((a, b) => a-b);
    
    for(const s of lostArr){
        if(reserveSet.has(s - 1)) reserveSet.delete(s-1)
        else if(reserveSet.has(s+1)) reserveSet.delete(s+1)
        else count--;
    }
    
    return count;
}