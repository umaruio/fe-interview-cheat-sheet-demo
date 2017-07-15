let resizeTimer = null
window.addEventListener('resize', function () {
    if (resizeTimer !== null) {
        clearTimeout(resizeTimer)
    }
    resizeTimer = setTimeout(function () {
        console.log('resized!')
    }, 1000)
})