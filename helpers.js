'use strict'


function translate(x, y) {
    return 'translate('+ [x, y] +')'
}


function scale(x, y) {
    return 'scale('+ [x, y] +')'
}


function rotate(angle) {
    return 'rotate('+ angle +')'
}


function createGraph(svg, width, height, margin) {
    svg.attr({
        width: width + margin + margin,
        height: height + margin + margin
    })
    return svg.append('g').attr('transform', translate(margin, margin))
}


function clip(svg, id, width, height) {
    svg.append('defs')
        .append('svg:clipPath')
        .attr('id', id)
        .append('rect')
        .attr({ width: width, height: height })
}


function scaledSvgLine(scale) {
    return d3.svg.line()
        .x(function (d) { return scale.x(d[0]) })
        .y(function (d) { return scale.y(d[1]) })
}


function xlabel(selection, text, pos) {
    selection.append('text')
        .attr('x', pos)
        .attr('y', -6)
        .style('text-anchor', 'end')
        .text(text)
}


function ylabel(selection, text, pos) {
    selection.append('text')
        .attr('transform', rotate(-90))
        .attr('x', pos)
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text(text)
}


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


function draggable(offset, callback) {

    function dragstart(d) {
        d3.event.sourceEvent.preventDefault()
        var el = d3.select(this)
        var transform = d3.transform(el.attr('transform'))
        var t = transform.translate
        d3.select(this).classed('drag', true)
            .attr('transform', translate(t[0], t[1]) + scale(1.3, 1.3))
    }

    function dragmove(d, i) {
        var el = d3.select(this)
        var x = d3.event.sourceEvent.pageX - offset.left
        var y = d3.event.sourceEvent.pageY - offset.top
        // this will center the object on the cursor, but it is not too noticeable
        el.attr('transform', translate(x, y) + scale(1.3, 1.3))
        callback([x, y], d, i)
    }

    function dragend(d) {
        var el = d3.select(this)
        var transform = d3.transform(el.attr('transform'))
        var t = transform.translate
        el.classed('drag', false)
            .attr('transform', translate(t[0], t[1]) + scale(1, 1))
    }

    return d3.behavior.drag()
        .on('dragstart', dragstart)
        .on('drag', dragmove)
        .on('dragend', dragend)
}