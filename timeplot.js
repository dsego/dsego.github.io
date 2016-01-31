'use strict'

var Timeplot = {

    defaults:  {
        width: 100,
        height: 100,
        margin: 20
    },

    init: function(selector, options) {

        var opt = defaults(options, this.defaults)

        this.svg = d3.select(selector)
        this.time = d3.range(0, 10, 0.01)
        this.scale = {}
        this.scale.x = d3.scale.linear().domain([0, 10]).range([0, opt.width])
        this.scale.y = d3.scale.linear().domain([5, -5]).range([0, opt.height])
        this.graph = createGraph(this.svg, opt.width, opt.height, opt.margin)
        this.line = scaledSvgLine(this.scale)

        clip(this.svg, 'clip', opt.width, opt.height)
        this.layout(opt.width, opt.height)
    },

    layout: function(width, height) {
        var xaxis = d3.svg.axis()
            .scale(this.scale.x)
            .innerTickSize(0)
            .outerTickSize(0)

        var yaxis = d3.svg.axis()
            .scale(this.scale.y)
            .innerTickSize(0)
            .outerTickSize(0)
            .orient('left')

        this.graph.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', translate(0, height/2))
            .call(xaxis)
            .call(xlabel, 'Time', width)

        this.graph.append('g')
            .attr('class', 'axis y-axis')
            .call(yaxis)

        this.graph.selectAll('.x-axis .tick')
            .filter(function (d, i) { return i === 0 })
            .remove()

        this.clipped = this.graph.append('g').attr('clip-path', 'url(#clip)')
    },

    renderLine: function(className, func) {
        var points = mapToFunc(this.time, func)
        this.clipped.selectAll('path.'+className)
            .data([1])
            .attr('d', this.line(points))
            .enter()
                .append('path')
                .attr('class', className)
                .attr('d', this.line(points))
    }
}