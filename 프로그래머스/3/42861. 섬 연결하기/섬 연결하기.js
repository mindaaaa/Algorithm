function solution(n, costs) {
    const parent = Array.from({length: n}, (_, i) => i);
    const rank = Array.from({length: n}, () => 0);
    
    let answer = 0;
    
    const find = (x) => {
        if(parent[x] !== x){
            parent[x] = find(parent[x]);
        }
        
        return parent[x]
    } 
    
    const union = (a, b) => {
        let ra = find(a), rb = find(b);
        if(ra === rb) return false;
        if(rank[ra] < rank[rb]) [ra, rb] = [rb, ra];
        parent[rb] = ra;
        if(rank[ra] === rank[rb]) rank[ra] += 1;
        
        return true;
    }
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for(const [a, b, cost] of costs){
        if(union(a, b)) answer += cost;
    }

    return answer;
}