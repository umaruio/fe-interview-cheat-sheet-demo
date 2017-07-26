function fibonacci (n) {
    var prevA = 1, prevB = 1
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    var curr
    for (i = 2; i < n; i++) {
        curr = prevA + prevB
        prevA = prevB
        prevB = curr
    }
    return curr
}