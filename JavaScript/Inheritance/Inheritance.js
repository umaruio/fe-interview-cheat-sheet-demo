// 原型链继承
var Base = function () {
    this.name = 'Base'
    this.toString = function () {
        return this.name
    }
}
var Sub = function () {}
Sub.prototype = new Base()
Sub.name = 'Sub'

// 构造继承
var Base = function () {
    this.name = 'Base'
    this.toString = function () {
        return this.name
    }
}
var Sub = function () {
    Base.call(this)
    this.name = 'Sub'
}

// 实例继承
var Base = function () {
    this.name = 'Base'
    this.toString = function () {
        return this.name
    }
}
var Sub = function () {  
    var instance = new Base()
    instance.name = 'Sub'
    return instance
}

// 拷贝继承
var Base = function () {
    this.name = 'Base'
    this.toString = function () {
        return this.name
    }
}
var Sub = function()  
{  
    var base = new Base()
    for(var i in base) {
        Sub.prototype[i] = base[i]
    }
    Sub.prototype['name'] = 'Sub'
}