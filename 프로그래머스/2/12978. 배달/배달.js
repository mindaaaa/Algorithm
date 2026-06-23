class MH {
    constructor(){
        this.heap = [];
    }
    
    size(){
        return this.heap.length;
    }
    
    push(n){
        const h = this.heap;
        h.push(n);
        
        let i = this.heap.length - 1;
        
        while(i > 0){
            const p = (i - 1) >> 1;
            if(h[p][0] <= h[i][0]) break;
            
            [h[p], h[i]] = [h[i], h[p]];
            i = p;
        }
    }
    
    pop(){
        const h = this.heap;
        const top = h[0];
        const last = h.pop();
        
        if(h.length > 0){
            h[0] = last;
            let i = 0;
            while(true){
                let l = 2 * i + 1, r = 2 * i + 2, m = i;
                if(l < h.length && h[l][0] < h[m][0]) m = l;
                if(r < h.length && h[r][0] < h[m][0]) m = r;
                
                if(m === i) break;
                [h[m], h[i]] = [h[i], h[m]];
                i = m;
            }
        }
        return top;
    }
}

function solution(N, road, K) {
    const source = 1;
    const graph = Array.from({length: N + 1}, () => []);
    for(const [from, to, cost] of road) {
        graph[from].push([to, cost]);
        graph[to].push([from, cost]);
    }
    
    const dist = Array.from({length: N + 1}, () => Infinity);
    dist[source] = 0;
    
    const heap = new MH();
    heap.push([0, source])
    
    while(heap.size() > 0){
        const [d, node] = heap.pop();
        if(d > dist[node]) continue;
        
        for(const [to, cost] of graph[node]){
            if(dist[to] > d + cost){
                dist[to] = d + cost;
                heap.push([dist[to], to]);
            }
        }
    }

    return dist.splice(1).filter((d) => d <= K).length;
}