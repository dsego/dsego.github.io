'use strict'


var Splane = Object.create(Plane)

Object.assign(Splane, {

    defaults: {
        width: 100,
        height: 100,
        margin: 20,
        xdomain: [-2, 2],
        ydomain: [8, -8]
    },

    layout: function() {
        var scale = this.scale
        var graph = this.graph
        var width = this.opt.width
        var height = this.opt.height
        var ydomain = this.opt.ydomain

        var xaxis = d3.svg.axis()
            .scale(scale.x)
            .innerTickSize(0)
            .outerTickSize(0)

        var yaxis = d3.svg.axis()
            .scale(scale.y)
            .innerTickSize(0)
            .outerTickSize(0)
            .orient('left')

        // add shaded area
        graph.append('rect').attr({
            class: 'left-part',
            x: 0,
            y: 0,
            width: width/2,
            height: height
        })

        // draw dashed lines to show pi, 2pi, -pi, -2pi

        function pieMarkers(limit) {
            var markers = []
            var sign = limit < 0 ? -1 : 1
            limit = limit < 0 ? -limit : limit
            for (var i=Math.PI, j=1; i < limit; i+=Math.PI, ++j) {
                markers.push({
                    value: sign*j*Math.PI,
                    text: (j>1 ? sign*j : sign==-1 ? '-' : '') + 'π'
                })
            }
            return markers
        }

        var dashed = pieMarkers(ydomain[0]).concat(pieMarkers(ydomain[1]))


        graph.selectAll('.dashed').data(dashed).enter()
            .append('line')
                .attr('class', 'dashed')
                .attr('stroke-dasharray', '1,3')
                .attr('x1', 0)
                .attr('x2', width)
                .attr('y1', function(d) { return scale.y(d.value) })
                .attr('y2', function(d) { return scale.y(d.value) })

        graph.selectAll('.dashed-label').data(dashed).enter()
            .append('text')
                .attr('class', 'dashed-label')
                .attr('x', width)
                .attr('dx', 3)
                .attr('y', function(d) { return scale.y(d.value) })
                .text(function(d) { return d.text })

        // draw axes
        graph.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', translate(0, height/2))
            .call(xaxis)
            .call(xlabel, 'Re(s)', width)

        graph.append('g')
            .attr('class', 'axis y-axis')
            .attr('transform', translate(width/2, 0))
            .call(yaxis)
            .call(ylabel, 'Im(s)', 0)

        graph.selectAll('.axis .tick')
            .filter(function (d) { return d === 0 })
            .remove()

        createSvgShadow(this.svg, 'drop-shadow')
    }

})