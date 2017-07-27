function getData () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()        
        xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts')
        xhr.onreadystatechange = function () {
            console.log(xhr.readyState)
            if (xhr.readyState === 4) {
                console.log('123')
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.statusText)
                }
            }
        }
        xhr.send()
    })
}