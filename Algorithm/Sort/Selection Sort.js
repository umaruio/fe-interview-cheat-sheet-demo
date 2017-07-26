function sort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let base = i + 1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[base]) base = j
        }
        if (arr[base] < arr[i]) {
            let tmp = arr[base]
            arr[base] = arr[i]
            arr[i] = tmp
        }
    }
}
