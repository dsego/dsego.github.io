'use strict'


var Zplane = Object.create(Plane);

Object.assign(Zplane, {

    defaults: {
        width: 100,
        height: 100,
        margin: 20,
        xdomain: [-1.5, 1.5],
        ydomain: [1.5, -1.5]
    },

    layout: function(width, height) {
        var graph = this.graph
        var scale = this.scale

        var xaxis = d3.svg.axis()
            .scale(scale.x)
            .innerTickSize(0)
            .outerTickSize(0)
            .tickValues([-1,1])

        var yaxis = d3.svg.axis()
            .scale(scale.y)
            .innerTickSize(0)
            .outerTickSize(0)
            .orient('left')
            .tickValues([-1,1])

        graph.append('ellipse').attr({
            class: 'unit-circle',
            cx: scale.x(0),
            cy: scale.y(0),
            rx: scale.x(1) - scale.x(0),
            ry: scale.y(0) - scale.y(1)
        })

        graph.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', translate(0, height/2))
            .call(xaxis)
            .call(xlabel, 'Re(z)', width)

        graph.append('g')
            .attr('class', 'axis y-axis')
            .attr('transform', translate(width/2, 0))
            .call(yaxis)
            .call(ylabel, 'Im(z)', 0)

        graph.selectAll('.axis .tick')
            .filter(function (d) { return d === 0 })
            .remove()

        createSvgShadow(this.svg, 'drop-shadow')
    },

    drawPointVectors: function(points) {
        var graph = this.graph
        var scale = this.scale
        var origin = [scale.x(0), scale.y(0)]
        var x = function (d) { return scale.x(d[0]) }
        var y = function (d) { return scale.y(d[1]) }

        graph.selectAll('.distance').data(points)
            .attr('x2', x)
            .attr('y2', y)
            .enter()
                .append('line')
                .attr('class', 'distance')
                .attr('x1', origin[0])
                .attr('y1', origin[1])
                .attr('x2', x)
                .attr('y2', y)

        var arc = d3.svg.arc()
            .outerRadius(function(d) {
                var radius = distance(x(d) - origin[0], y(d) - origin[1])
                if (radius > 35) radius = 35
                return radius
            })
            .startAngle(function(d) {
                return Math.PI/2 - angle(d[0], d[1])
            })
            .endAngle(Math.PI/2)

        graph.selectAll('.arc').data(points)
            .attr('d', arc)
            .enter()
                .append('path')
                .attr('class', 'arc')
                .attr('d', arc)
                .attr('transform', translate(origin[0], origin[1]))
    }

})