function solution(n, k) {
    const bonus = Math.floor(n / 10);
    return 12000 * n + (k - bonus) * 2000;
}

// 10인분 먹으면 음료 하나 서비스