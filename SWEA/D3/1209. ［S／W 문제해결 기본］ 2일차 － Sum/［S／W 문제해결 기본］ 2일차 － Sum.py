# 10개의 케이스
for _ in range(10):
    tc = int(input())
    # 100*100 그리드 제
    grid = []
    for _ in range(100):
        row = list(map(int, input().split()))
        grid.append(row)

    # 2차원 배열 만들고 ans(max) 갱신
    ans = 0
    # 100회 열/행 합산 [i][0] ~ [i][99] & [0][i] ~ [99][i]
    for i in range(100):
        row_sum = 0
        col_sum = 0
        for j in range(100):
            row_sum += grid[i][j]
            col_sum += grid[j][i]
            if(j == 99): ans = max(row_sum, col_sum, ans)
    # [0][0] , [1][1] [2][2] [3][3] [4][4] ... [i] [i]
    # [0][4] , [1][3] , [2][2] , [3][1] [4][0] ... [i][99-i]
    # 대각선 합산
    left_sum = 0
    right_sum = 0

    for i in range(100):
        left_sum += grid[i][i]
        right_sum += grid[i][99-i]

    ans = max(ans, left_sum, right_sum)
    
    print(f"#{tc} {ans}")