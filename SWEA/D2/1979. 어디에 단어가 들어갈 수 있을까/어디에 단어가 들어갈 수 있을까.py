def count_L_target(line, l):
    count = 0
    target = 0
    # 길이 체
    for num in line:
        if num == 1:
            target += 1
        else:
            if target == l:
                count += 1
            target = 0
    # 마지막 구간 체크
    if target == l:
        count += 1
    return count


T = int(input())

for tc in range(1, T + 1):
    N, L = map(int, input().split())
    grid = [list(map(int, input().split())) for _ in range(N)]

    ans = 0
    for r in range(N):
        ans += count_L_target(grid[r], L)

    for c in range(N):
        line = [grid[r][c] for r in range(N)]
        ans += count_L_target(line, L)

    print(f"#{tc} {ans}")
