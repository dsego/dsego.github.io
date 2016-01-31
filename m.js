'use strict'


function sinewave(amp, freq, phase, t) {
    return amp * Math.sin(2.0 * Math.PI * freq * t + phase)
}


function distance(x, y) {
    return Math.sqrt(x*x + y*y)
}


function angle(x, y) {
    return Math.atan2(y, x)
}


function stoz(s) {
    // z = e^s
    return [
        Math.exp(s[0]) * Math.cos(s[1]),
        Math.exp(s[0]) * Math.sin(s[1])
    ]
}


function ztos(z) {
    // z = e^s
    // zx = e^sx * cos(sy)
    // zy = e^sx * sin(sy)
    // a = e^x * cos(y)
    // b = e^x * sin(y)
    // e^x = a / cos(y)
    // e^x = b / sin(y)
    // a / cos(y) = b / sin(y)
    // a = b cos(y) / sin(y)
    // cos(y) / sin(y) = a / b
    // sin(y) / cos(y) = b / a
    // tan(y) = b/a
    // y = atan(b/a)
    // e^x = a / cos(y)
    // x = ln(a / cos(y))
    var y = Math.atan2(z[1], z[0])
    return [
        Math.log(z[0] / Math.cos(y)), y
    ]
}

// e^st = e^(x + yi)t
function sreal(d, w) {
    return function (t) { return Math.exp(d*t) * Math.cos(w*t) }
}

function simag(d, w) {
    return function (t) { return Math.exp(d*t) * Math.sin(w*t) }
}

// z^t = A^t * e^ωit
function zreal(A, w) {
    return function (t) { return Math.pow(A, t) * Math.cos(w*t) }
}

function zimag(A, w) {
    return function (t) { return Math.pow(A, t) * Math.sin(w*t) }
}