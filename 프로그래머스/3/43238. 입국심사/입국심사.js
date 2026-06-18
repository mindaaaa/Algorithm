function solution(n, times) {
    let low = 1, high = times[0] * n;
    
    const canFinish = (hours) => {
        let done = 0;
        
        for(const t of times){
            if(done >= n) return true;
            done += Math.floor(hours / t);
        }
        
        return done >= n;
    }
    
    while(low < high){
        const mid = Math.floor((low + high) / 2);
        
        if(canFinish(mid)) high = mid;
        else low = mid + 1;
    }

    return low;
}