function solution(n) {
    const digit = ['1', '2', '4'];  
    let answer = '';

    while (n > 0) {
        n--;
        const remainder = n % 3;
        answer = digit[remainder] + answer;
        n = Math.floor(n / 3);
    }

    return answer;
}
