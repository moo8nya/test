$(function() {
    var dataset = [11, 25, 45, 30, 33];

    var w = 500;
    var h = 200;

    var svg = d3.select('body')
                .append('svg')
                .style( 'width', w )
                .style( 'height', h );

    svg.selectAll('circle')
       .data(dataset)
       .enter()
       .append('circle')
       .attr({
           cx: function( d, i ) { return 50 + ( i * 100 ); }
           ,cy: h / 2
           ,r: function( d ) { return d; }
           ,fill: 'red'
       });
});