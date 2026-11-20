def palindrome(arr):
    return arr == arr[::-1]

for tc in range(1, 11):
    target = int(input()) # 회문 길이 (M)
    grid = [list(input().strip()) for _ in range(8)]
    last_idx = 8 - target + 1 # 0 ~ N-M+1
    ans = 0

    # 가로 검사
    for r in range(8):
        for c in range(last_idx):
            row_part = grid[r][c : c + target]
            if palindrome(row_part): ans += 1
    # 세로 검사
    for r in range(last_idx):
        for c in range(8):
            col_part = [grid[i][c] for i in range(r, r + target)]
            if palindrome(col_part): ans += 1

    print(f"#{tc} {ans}")