function createChart() {
  // $("#chart").kendoChart({
  //   title: {
  //     text: "Site Visitors Stats \n /thousands/"
  //   },
  //   legend: {
  //     visible: false
  //   },
  //   seriesDefaults: {
  //     type: "bar"
  //   },
  //   series: [
  //     {
  //       name: "Total Visits",
  //       data: [56000, 63000, 74000, 91000, 117000, 138000]
  //     },
  //     {
  //       name: "Unique visitors",
  //       data: [52000, 34000, 23000, 48000, 67000, 83000]
  //     }
  //   ],
  //   valueAxis: {
  //     max: 140000,
  //     line: {
  //       visible: false
  //     },
  //     minorGridLines: {
  //       visible: true
  //     },
  //     labels: {
  //       rotation: "auto"
  //     }
  //   },
  //   categoryAxis: {
  //     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //     majorGridLines: {
  //       visible: false
  //     }
  //   },
  //   tooltip: {
  //     visible: true,
  //     template: "#= series.name #: #= value #"
  //   }
  // });
  $("#chart").kendoChart({
    title: {
        text: "Gross domestic product growth \n /GDP annual %/"
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
        }
    },
    series: [{
        name: "India",
        data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
    }, {
        name: "World",
        data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
    }, {
        name: "Haiti",
        data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
    }],
    valueAxis: {
        labels: {
            format: "{0}%"
        },
        line: {
            visible: false
        },
        axisCrossingValue: -10
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
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);
