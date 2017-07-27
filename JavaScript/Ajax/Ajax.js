function createAjax () {
    if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP")
    } else {
        return new XMLHttpRequest()
    }
}

var xhr = createAjax()
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts')
xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            document.getElementById('container').innerHTML = xhr.responseText
        } else {
            console.error(xhr.statusText)
        }
    }
}
xhr.send()