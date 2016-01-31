

var Plane = {

    defaults: {},

    init: function(selector, options) {
        var opt = this.opt = defaults(options, this.defaults)
        this.svg = d3.select(selector)
        this.scale = {}
        this.scale.x = d3.scale.linear().domain(opt.xdomain).range([0, opt.width])
        this.scale.y = d3.scale.linear().domain(opt.ydomain).range([0, opt.height])
        this.graph = createGraph(this.svg, opt.width, opt.height, opt.margin)

        this.layout(opt.width, opt.height)

        var rect = this.svg.node().getBoundingClientRect()
        this.offset = {
            left: opt.margin + rect.left,
            top: opt.margin + rect.top
        }
        eventify(this)
        this.listen()
    },

    drawPoints: function(points) {
        var scale = this.scale
        var t = function (d) {
            return translate(scale.x(d[0]), scale.y(d[1]))
        }
        this.graph.selectAll('.point').data(points)
            .attr('transform', t)
            .enter()
                .append('circle')
                .attr('class', 'point')
                .attr('r', 5)
                .attr('transform', t)
                .call(this.drag)
    },

    listen: function() {
        this.drag = draggable(this.offset, function (pos) {
            var xi = this.scale.x.invert(pos[0])
            var yi = this.scale.y.invert(pos[1])
            this.trigger('update', [xi, yi])
        }.bind(this))

        this.svg.on('click', function () {
            if (d3.event.defaultPrevented) return
            var x = d3.event.pageX - this.offset.left
            var y = d3.event.pageY - this.offset.top
            var xi = this.scale.x.invert(x)
            var yi = this.scale.y.invert(y)
            this.trigger('update', [xi, yi])
        }.bind(this))
    }

}