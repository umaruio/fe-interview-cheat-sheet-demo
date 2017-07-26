function mergeSort (_left, _right) {
    let left = _left.slice()
    let right = _right.slice()
    let result = []
    while(left.length !== 0 || right.length !== 0) {
        if (left.length === 0) {
            result = result.concat(right)
            right = []
            break
        }
        if (right.length === 0) {
            result = result.concat(left)
            left = []
            break
        }
        if (right[0] <= left[0]) {
            result.push(right[0])
            right.splice(0, 1)
        } else {
            result.push(left[0])
            left.splice(0, 1)
        }
    }
}

function sort (arr) {

}