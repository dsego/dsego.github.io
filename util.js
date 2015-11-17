'use strict'

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

function sinewave(amp, freq, phase, t) {
    return amp * Math.sin(2.0 * Math.PI * freq * t + phase)
}

function interpolate(string) {
    var args = [].slice.call(arguments, 1)
    return string.replace(/{}/g, function () {
        return args.shift()
    })
}

function translate(x, y) {
    return 'translate('+ [x, y] +')'
}

function scale(x, y) {
    return 'scale('+ [x, y] +')'
}

function rotate(angle) {
    return 'rotate('+ angle +')'
}

// TODO: options
function createSvgShadow(svg, id) {
    var filter = svg.append('filter')
        .attr('id', id)
        .attr('x', '-100%')
        .attr('y', '-100%')
        .attr('width', '400%')
        .attr('height', '400%')

    filter.append('feGaussianBlur')
        .attr('in', 'SourceAlpha')
        .attr('stdDeviation', 3)
        .attr('result', 'blur')

    filter.append('feOffset')
        .attr('in', 'blur')
        // .attr('dx', 2)
        .attr('dy', 2)
        .attr('result', 'offsetBlur')

    filter.append('feComponentTransfer')
        .append('feFuncA')
        .attr('type', 'linear')
        .attr('slope', 0.5)

    var feMerge = filter.append('feMerge')
    feMerge.append('feMergeNode')
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic')
    return filter
}
