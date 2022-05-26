def sum_pairs(array, number):
    ans = []
    for i in array:
        for j in array:
            if i + j == number and [j,i] not in ans:
                ans.append([i,j])
    if len(ans) == 0:
        return 'unable to find pairs'
    return ans

