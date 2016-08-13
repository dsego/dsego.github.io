
function createClippingRect(svg, id, width, height) {
    // clipping mask
    let defs = svg.select('defs')
    if (defs.size() == 0) defs = svg.append('defs')
    defs.append('clipPath').attr('id', id)
        .append('rect')
        .attr('width', width)
        .attr('height', height)
}


function createPlane(svgSelector, xdomain, ydomain, width, height, margin) {
    const scaleX = d3.scaleLinear().domain(xdomain).range([0, width-2*margin])
    const scaleY = d3.scaleLinear().domain(ydomain).range([0, height-2*margin])
    const svg = d3.select(svgSelector)
        .attr('width', width)
        .attr('height', height)
    const body = svg.append('g')
        .attr('transform', 'translate('+[margin,margin]+')')
    const defs = svg.append('defs')
    const rect = svg.node().getBoundingClientRect()

    return {
        width: width-2*margin,
        height: height-2*margin,
        svg: svg,
        scale: { x: scaleX, y: scaleY },
        origin: { x: scaleX(0), y: scaleY(0) },
        offset: { left: margin+rect.left, top: margin+rect.top },
        body: body
    }
}


function drawSplaneLayout(plane) {
    // add shaded ROC
    plane.body.append('rect')
        .classed('shaded', true)
        .attr('width', plane.width/2)
        .attr('height', plane.height)

    // draw dashed lines for multiples of PI
    const dashed = [[  'π', Math.PI    ],
                    [ '2π', 2*Math.PI  ],
                    [ '-π', -Math.PI   ],
                    ['-2π', -2*Math.PI ]]

    plane.body.selectAll('.dashed').data(dashed).enter()
        .append('line')
            .classed('dashed', true)
            .attr('stroke-dasharray', '1,3')
            .attr('x2', plane.width)
            .attr('y1', d => plane.scale.y(d[1]))
            .attr('y2', d => plane.scale.y(d[1]))

    plane.body.selectAll('.dashed-label').data(dashed).enter()
        .append('text')
            .classed('dashed-label', true)
            .attr('x', plane.width)
            .attr('dx', 3)
            .attr('y', d => plane.scale.y(d[1]))
            .text(d => d[0])

    // draw axes
    let test = plane.body.append('g')
        .classed('axis x-axis', true)
        .attr('transform', 'translate('+[0, plane.scale.y(0)]+')')
        .call(d3.axisBottom(plane.scale.x).tickSize(0))
        .append('text').text('Re')
            .attr('x', plane.width)
            .attr('dy', -6)

    plane.body.append('g')
        .classed('axis y-axis', true)
        .attr('transform', 'translate('+[plane.scale.x(0), 0]+')')
        .call(d3.axisLeft(plane.scale.y).tickSize(0))
        .append('text').text('Im')
            .attr('transform', 'rotate(-90)')
            .attr('y', 15)

    // remove 0-tick
    plane.body.selectAll('.axis .tick').filter(d => d === 0).remove()
}


function drawZplaneLayout(plane) {
    plane.body.append('ellipse')
        .classed('unit-circle', true)
        .attr('cx', plane.scale.x(0))
        .attr('cy', plane.scale.y(0))
        .attr('rx', plane.scale.x(1) - plane.scale.x(0))
        .attr('ry', plane.scale.y(0) - plane.scale.y(1))

    plane.body.append('g')
        .classed('axis x-axis', true)
        .attr('transform', 'translate('+[0, plane.scale.y(0)]+')')
        .call(d3.axisBottom(plane.scale.x).tickSize(0).tickValues([-1,1]))
        .append('text').text('Re')
            .attr('x', plane.width)
            .attr('dy', -6)

    plane.body.append('g')
        .classed('axis y-axis', true)
        .attr('transform', 'translate('+[plane.scale.x(0), 0]+')')
        .call(d3.axisLeft(plane.scale.y).tickSize(0).tickValues([-1,1]))
        .append('text').text('Im')
            .attr('transform', 'rotate(-90)')
            .attr('y', 15)

    plane.body.selectAll('.axis .tick')
        .filter(function (d) { return d === 0 })
        .remove()
}


function drawTimeplotLayout(plane) {
    plane.body.append('g')
        .classed('axis x-axis', true)
        .attr('transform', 'translate('+[0, plane.origin.y]+')')
        .call(d3.axisBottom(plane.scale.x).tickSize(0))
        .append('text').text('Time')
            .attr('x', plane.width)
            .attr('dy', -6)

    plane.body.append('g')
        .classed('axis y-axis', true)
        .call(d3.axisLeft(plane.scale.y).tickSize(0))

    plane.body.selectAll('.x-axis .tick')
        .filter(function (d,i) { return i === 0 })
        .remove()
}


function drawMagnitudeLayout(plane) {
    plane.body.append('g')
        .classed('axis x-axis', true)
        .attr('transform', 'translate('+[0, plane.height]+')')
        .call(d3.axisBottom(plane.scale.x).tickSize(-plane.height).ticks(5))
        .append('text').text('Frequency')
            .attr('x', plane.width/2)
            .attr('y', 25)

    plane.body.append('g')
        .classed('axis y-axis', true)
        .call(d3.axisLeft(plane.scale.y).tickSize(-plane.width).ticks(5))

}


function drawPhaseLayout(plane) {
    plane.body.append('g')
        .classed('axis x-axis', true)
        .attr('transform', 'translate('+[0, plane.height]+')')
        .call(d3.axisBottom(plane.scale.x).tickSize(-plane.height).ticks(5))
        .append('text').text('Frequency')
            .attr('x', plane.width/2)
            .attr('y', 25)

    const labels = ['π', 'π/2', '0', '-π/2','-π']
    plane.body.append('g')
        .classed('axis y-axis', true)
        .call(d3.axisLeft(plane.scale.y)
            .tickSize(-plane.width)
            .tickValues(d3.range(Math.PI, -Math.PI-0.1, -Math.PI/2))
            .tickFormat((d,i) => labels[i]))

}


function registerClickEvent(plane, callback) {
    plane.svg.on('click', () => {
        if (d3.event.defaultPrevented) return
        const x = plane.scale.x.invert(d3.event.pageX - plane.offset.left)
        const y = plane.scale.y.invert(d3.event.pageY - plane.offset.top)
        callback(x, y)
    })
}

