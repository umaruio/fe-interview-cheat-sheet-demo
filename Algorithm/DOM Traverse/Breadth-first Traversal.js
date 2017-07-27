function interactor (node) {
    const arr = []
    arr.push(node)
    while (arr.length > 0) {
        node.arr.shift()
        console.log(node)
        if (node.children.length) {
            for (let i in node.children) {
                arr.push(node.children[i])
            }
        }
    }
}