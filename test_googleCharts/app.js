$(function() {

    'use strict';

    function drawChart() {
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/******************');
        query.send( handleQueryResponse );
    }

    function handleQueryResponse( response ) {

        var target = document.getElementById( 'target' );
        var data;
        var options = {
            title: 'My Chart !'
            ,width: 500
            ,height: 300

            // <-- for line Chart --> 
            ,hAxis: {title: 'Year'}
            ,vAxis: {title: 'Sales'}
            ,curveType: 'function'
            ,pointSize: 10
            ,pointShape: 'square'

            // <-- for column Chart --> 
            // ,animation: {
            //     startup: true
            //     ,duration: 800
            //     ,easing: 'inAndOut'
            // }
            // ,isStacked: 'percent'

            // <-- for Pie Chart --> 
            //,backgroundColor: '#c0c0c0'
            // ,colors: ['#aaa', '#bbb', '#ccc']
            // ,slices: [1, {offset: 0.2}]
            //,pieHole: 0.4
            // ,is3D: true
        };
        var chart = new google.visualization.PieChart( target );

        data = response.getDataTable();

        // <-- for line Chart --> 
        // data = new google.visualization.arrayToDataTable([
        //     ['Year', 'A', {role: 'annotation'}, {role: 'certainty'}, 'B', {role: 'certainty'}]
        //     ,['2014', 52, 'Campaign A', true, 89, false]
        //     ,['2015', 38, null, true, 78, true]
        //     ,['2016', 44, null, true, 88, true]
        //     ,['2017', 102, null, false, 91, false]
        // ]);

        // <-- for column Chart --> 
        // data = new google.visualization.arrayToDataTable([
        //     ['Team', 'item-1', 'item-2']
        //     ,['A', 12, 38]
        //     ,['B', 42, 18]
        //     ,['C', 11, 58]
        // ]);

        // <-- for Pie Chart --> 
        // data = new google.visualization.arrayToDataTable([
        //     [ 'language', 'votes' ]
        //     ,[ 'php', 30 ]
        //     ,[ 'java', 20 ]
        //     ,[ 'html', 30 ]
        // ]);
        // data.addColumn( 'string', 'language' );
        // data.addColumn( 'number', 'votes' );
        // data.addRows([
        //     [ 'php', 10 ]
        //     ,[ 'java', 20 ]
        //     ,[ 'html', 30 ]
        // ]);

        chart.draw( data, options );
    }

    google.charts.load( 'current'
                        ,{packages: ['corechart']}
                    );
    google.charts.setOnLoadCallback( drawChart );
});