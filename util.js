'use strict'


function mapToFunc(data, func) {
    return data.map(function (x) { return [x, func(x)] })
}

// naive implementation
function eventify(target) {
    target._events = []
    target.on = function (str, func) {
        this._events[str] = func
    }
    target.trigger = function (str) {
        var args = []
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i])
        }
        this._events[str].apply(undefined, args)
    }
}

function partial(f) {
    var arity = f.length
    var largs = []
    return function accumulator() {
        var rargs = []
        for (var i = 0; i < arguments.length; i++) {
            rargs.push(arguments[i])
        }
        var args = largs.concat(rargs)
        if (args.length >= arity) {
            return f.apply(undefined, args)
        }
        else {
            largs = args
            return accumulator
        }
    }
}
// console.log(partial(test)(1, 2, 3))
// console.log(partial(test)(1, 2)(3))
// console.log(partial(test)(1)(2, 3))
// console.log(partial(test)(1)(2)(3))
// function test(a, b, c) {
//     return [a, b, c]
// }


function throttle(fn, wait) {
    var timeout = null
    return function () {
        if (timeout) return
        var args = []
        for (var i = 0; i < arguments.length; i++) {
            args[i] = arguments[i]
        }
        timeout = window.setTimeout(function () {
            fn.apply(undefined, args)
            clearTimeout(timeout)
            timeout = null
        }, wait)
    }
}

function interpolate(string) {
    var args = [].slice.call(arguments, 1)
    return string.replace(/{}/g, function () {
        return args.shift()
    })
}

function defaults(options, defaults) {
    var combined = {}
    for (var key in defaults) {
        if (options.hasOwnProperty(key)) {
            combined[key] = options[key]
        }
        else if (defaults.hasOwnProperty(key)){
            combined[key] = defaults[key]
        }
    }
    return combined
}