function solution(numbers) {
    const arr = [0,1,2,3,4,5,6,7,8,9];
    const filterArr = arr.filter(num => !numbers.includes(num));
    
    return filterArr.reduce((acc, curr) => acc+curr, 0);
}