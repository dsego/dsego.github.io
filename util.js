

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
            return f.apply(f, args)
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
    return 'translate('+ x +','+ y +')'
}

function rotate(angle) {
    return 'rotate('+angle+')'
}
