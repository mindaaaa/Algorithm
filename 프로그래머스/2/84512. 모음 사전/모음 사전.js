function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const path = [];
    let count = 0;
    
    const bt = () => {
        if(path.join('') === word) return count;
        if(path.length === 5) return;
        for(let i = 0; i < vowels.length; i++){
            path.push(vowels[i]);
            count += 1;
            
            const found = bt();
            if(found) return found;
            
            path.pop();
        }
    }
    
    return bt();
}