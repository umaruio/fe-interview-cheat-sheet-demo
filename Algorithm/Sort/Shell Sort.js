/* 
    插入排序一：对按 gap 分离开的每个数组都执行插入排序
 */
function insertSortA (arr, gap) {
    for(let i = 0; i < gap; i++) {
        for (let j = i; j < arr.length - gap; j += gap) {
            for(let k = j; k >= 0; k -= gap) {
                if (arr[k] > arr[k + gap]) {
                    let tmp = arr[k]
                    arr[k] = arr[k + gap]
                    arr[k + gap] = tmp
                }
            }
        }
    }
}
/*
    插入排序二：我们并不关心 gap 将原始数组分成了几个数组，依然按照最原始的插入排序方式逐个比较，但是待插入的元素从后 1 个 变成了 后 gap 个。
    换句话说，我们不是一次性完成一个子数组的排序，再切换到下一个子数组，而是每一个子数组插入一个对应元素，然后回到第一个子数组，再继续插入一个对应元素，直到循环完成。
*/
function insertSortB (arr, gap) {
    for (let i = 0; i < arr.length - gap; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] > arr[j + gap]) {
                let tmp = arr[j]
                arr[j] = arr[j + gap]
                arr[j + gap] = tmp
            }
        }
    }
}
function sort (arr) {
    let gap = 0 | (arr.length / 2)
    while (gap > 0) {
        insertSortA(arr, gap)
        gap = 0 | (gap / 2)
    }
}