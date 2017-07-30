function insertSort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr[2]
}
function getPivot (arr) { // Get pivot
    if (arr.length <= 5) {
        insertSort(arr)
        if (arr.length % 2 === 0) {
            return arr[arr.length / 2]
        } else {
            return arr[(arr.length - 1) / 2]
        }
    }
    const pivots = []
    for (let i = 0; i < (0 | arr.length / 5); i++) {
        pivots.push(insertSort(arr.slice(i * 5, i * 5 + 5)))
    }
    return getPivot(pivots)
}
function BFPRT (arr, k) {
    const pivot = getPivot(arr)
    const left = []
    const right = []
    for (let i in arr) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    if (right.length === k) { // The thinking of Quick Sort here.
        return pivot
    } else if (right.length < k) {
        return BFPRT(left, k - right.length)
    } else {
        return BFPRT(right, k)
    }
}
console.log(BFPRT([3, 1, 5, 2, 6, 4, 8, 123, 45, 61, 67, 222, 85, 43, 1320, 52, 331, 5521, 1523, 8981], 5))