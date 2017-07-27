function interactor (node) {
    console.log(node)
    if (node.children.length) {
        for (let i in node.children) {
            interactor(node.children[i])
        }
    }
}