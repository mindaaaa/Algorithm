T = int(input())

for tc in range(1, T+1):
    L = int(input())
    mid_index = L // 2 # mid-size ~ mid+size+1
    grid = [list(map(int, input().strip())) for _ in range(L)] # 그리드 생성
    ans = 0

    for i in range(L):
        dist = abs(mid_index-i)
        end_index = L-dist
        ans += sum(grid[i][dist:end_index])

    print(f"#{tc} {ans}")