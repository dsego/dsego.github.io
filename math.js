
function distance(x1, y1, x2=0, y2=0) {
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
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
    // sin(sy) / cos(sy) = zy / zx
    // tan(sy) = zy/zx
    // sy = atan(zy/zx)
    // sx = ln(zx / cos(sy)) = ln(zy / sin(sy))
    const y = Math.atan2(z[1], z[0])
    const cos = Math.cos(y)
    let x = 0
    if (z[0] >= Number.MIN_VALUE || z[0] <= -Number.MIN_VALUE) {
        x = Math.log(z[0]/cos)
        return [x, y]
    }
    else if (z[1] >= Number.MIN_VALUE || z[1] <= -Number.MIN_VALUE) {
        x = Math.log(z[1]/Math.sin(y))
        return [x, y]
    }
    return [Number.NEGATIVE_INFINITY, 0]
}

// e^st = e^(x + yi)t
function sreal(s, t) {
    return Math.exp(s[0]*t) * Math.cos(s[1]*t)
}

function simag(s, t) {
    return Math.exp(s[0]*t) * Math.sin(s[1]*t)
}

// z^t = A^t * e^ωit
function zreal(z, t) {
    const A = distance(z[0], z[1])
    const omega = angle(z[0], z[1])
    return Math.pow(A, t) * Math.cos(omega*t)
}

function zimag(z, t) {
    const A = distance(z[0], z[1])
    const omega = angle(z[0], z[1])
    return Math.pow(A, t) * Math.sin(omega*t)
}

function sinewave(amp, freq, phase, t) {
    return amp * Math.sin(2.0 * Math.PI * freq * t + phase)
}

function snap(value, to=0, delta=0.1) {
    return Math.abs(value - to) > delta ? value : to
}
