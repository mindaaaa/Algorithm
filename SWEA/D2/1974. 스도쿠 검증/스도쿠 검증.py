def row_checked(grid, i):
    if len(set(grid[i])) != 9:
        return False
    return True

def col_checked(grid, i):
    arr = [grid[r][i] for r in range(9)]
    if len(set(arr)) != 9:
        return False
    return True


def square_checked(grid, i):
    for r in range(0, 9, 3):
        for c in range(0, 9, 3):
            box = []
            for dr in range(3):
                for dc in range(3):
                    box.append(grid[r + dr][c + dc])
            if len(set(box)) != 9:
                return False
    return True

def check_sudoku(grid):
    for i in range(9):
        if not row_checked(grid, i):
            return 0
        if not col_checked(grid, i):
            return 0
        if not square_checked(grid, i):
            return 0
    return 1


T = int(input())
for tc in range(1, T + 1):
    grid = [list(map(int, input().split())) for _ in range(9)]
    ans = check_sudoku(grid)

    print(f"#{tc} {ans}")
