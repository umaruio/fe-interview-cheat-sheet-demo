function quickSort (arr) {
    if (arr.length < 2) return arr
    const pivot = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return quickSort(left).concat(pivot).concat(quickSort(right))
}
function sort (arr) {
    const result = quickSort(arr)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i]
    }
}