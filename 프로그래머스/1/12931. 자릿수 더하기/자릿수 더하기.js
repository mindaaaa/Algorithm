function solution(n)
{
    const array = [];

    while(n >= 1){
        array.push(n % 10);
        n = Math.floor(n / 10);
    }

    console.log(array);
    return array.reduce((acc, curr) => acc+curr, 0);
}