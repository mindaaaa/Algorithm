function solution(k, dungeons) {
    let result = 0;
    let count = 0;
    const visited = Array.from({length: dungeons.length}, () => false);
    
    const bt = () => {
        result = Math.max(count, result);
        
        for(let i = 0; i < dungeons.length; i++){
            if(!visited[i] && dungeons[i][0] <= k){
                visited[i] = true;
                count += 1;
                k -= dungeons[i][1];
                
                bt();
                
                visited[i] = false;
                count -= 1;
                k += dungeons[i][1];
            }
        }
    }
    
    bt();
    return result;
}