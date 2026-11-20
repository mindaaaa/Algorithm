T = int(input())

for tc in range(1, T+1):
    arr = list(map(str, input().strip()))
    # 현재 curr은 0
    curr = "0"
    ans = 0

    arr_len = len(arr)
    for i in range(arr_len):
        # 반복문 돌면서 자기랑 다른 경우... count 1
        target = arr[i]
        if(curr != target):
            ans += 1
            curr = arr[i]

    print(f"#{tc} {ans}")



# 01010
# 초기값은 00000
# 가장 처음 나온 1 -> 01111
# 그 다음 다른 수 2 -> 01000
# 또 그 다음 다른 수 3 -> 01011
# 또 그 다름 다음 수 4 -> 01010

# 제일 처음 1 나온 위치부터 계속 이동하면서 자기랑 다른 경우 세기

# 0011 -> 1
# 100 -> 2

