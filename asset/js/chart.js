$(document).ready(function() {
  $("#chart").kendoChart({
    title: {
      text: "Chart Demo"
      //   background: "green",
      //   align: "left"
    },
    legend: {
      position: "bottom"
    },
    seriesDefaults: {
      type: "area",
      area: {
        line: {
          style: "smooth"
        }
      },
      labels: {
        visible: true,
        background: "green"
      },
      tooltip: {
        visible: true,
        background: "red"
      }
    },
    series: [
      {
        name: "India",
        data: [
          3.907,
          7.943,
          7.848,
          9.284,
          9.263,
          9.801,
          3.89,
          8.238,
          9.552,
          6.855
        ]
      },
      {
        name: "World",
        data: [
          1.988,
          2.733,
          3.994,
          3.464,
          4.001,
          3.939,
          1.333,
          -2.245,
          4.339,
          2.727
        ]
      },
      {
        name: "Haiti",
        data: [
          -0.253,
          0.362,
          -3.519,
          1.799,
          2.252,
          3.343,
          0.843,
          2.877,
          -5.416,
          5.59
        ]
      }
    ],
    valueAxis: {
      labels: {
        format: "{0}%"
      },
      line: {
        visible: true
      }
    },
    categoryAxis: {
      categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
      majorGridLines: {
        visible: false
      },
      labels: {
        rotation: "auto"
      }
    },
    tooltip: {
      visible: true,
      format: "{0}%",
      template: "#= series.name #: #= value #"
    }
  });
});
// $(document).bind("kendo:skinChange", createChart);
