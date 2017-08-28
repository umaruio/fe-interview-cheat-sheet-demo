function deepCopy (source) {
    if (typeof source !== 'object') {
        return source
    }
    const copy = {}
    for (let key in source) {
        if (typeof key === 'object') {
            copy[key] = deepCopy(source[key])
        } else {
            copy[key] = source[key]
        }
    }
    return copy
}