function radixSort (arr, place) {
    for (i = 0; i < place; i++) {
        const divisor = Math.pow(10, i)
        const buckets = [
            [],[],[],[],[],[],[],[],[],[]
        ]
        for (let i = 0; i < arr.length; i++) {
            const radix = 0 | ((arr[i] / divisor) % 10) // 取第 i 位数
            buckets[radix].push(arr[i])
        }
        arr = buckets.reduce((prev, curr) => {
            return prev.concat(curr)
        })
    }
    return arr
}
function sort (arr, maxPlace) {
    const result = radixSort(arr, maxPlace)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i]
    }
}