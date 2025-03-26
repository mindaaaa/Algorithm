function solution(n) {
    const array = [...String(n)];
    const result = array.sort((a, b) => b-a).join('');
    
    return Number(result);
}