def encode(arr):
    is_done = False
    # 총 5회 반복문으로 현재 맨 앞에 있는거 i만큼 빼줌
    for i in range(1, 6):
        # pop하고 append
        target = arr.pop(0) - i
        if(target <= 0):
            is_done = True
            arr.append(0)
            return is_done, arr
        else:
            arr.append(target)

    # 사이클 끝나면 반
    return is_done, arr

for _ in range(10):
    tc = int(input())
    q = list(map(int, input().split()))
    is_done = False

    while not is_done:
        is_done, q = encode(q)

    print(f"#{tc}", *q)