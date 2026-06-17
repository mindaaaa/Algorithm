function solution(numbers, target) {
    let count = 0;
    let sum = 0;
    let depth = 0;
    
    dfs = (depth, sum) => {
        if(depth === numbers.length){
            if(sum === target) count += 1;
            return;
        }
        
        dfs(depth + 1, sum + numbers[depth]);
        dfs(depth + 1, sum - numbers[depth]);

    }
    
    dfs(0, sum);

    return count;
}