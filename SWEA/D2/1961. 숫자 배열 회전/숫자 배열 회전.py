def rotate_90(grid, n):
    rotated = [[0]*n for _ in range(n)]
    for r in range(n):
        for c in range(n):
            rotated[c][n-1-r] = grid[r][c]
    return rotated

T = int(input().strip())

for tc in range(1, T+1):
    L = int(input().strip())
    grid = [list(map(str, input().split())) for _ in range(L)]

    rot_90 = rotate_90(grid, L)
    rot_180 = rotate_90(rot_90, L)
    rot_270 = rotate_90(rot_180, L)

    print(f"#{tc}")
    for i in range(L):
        a = "".join(rot_90[i])
        b = "".join(rot_180[i])
        c = "".join(rot_270[i])
        print(f"{a} {b} {c}")