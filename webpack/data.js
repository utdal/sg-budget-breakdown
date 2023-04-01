import sankey_top from '../data/top_level.json';
import pie_schools from '../data/schools.json';
import sankey_housing from '../data/housing.json';
import sankey_recreation from '../data/recreation.json';
import sankey_parking from '../data/parking.json';
import sankey_dining from '../data/dining.json';
import treemap_fees from '../data/fees.json';
import revenue_time_series from '../data/revenue_time_series.json';
import expenses_time_series from '../data/expenses_time_series.json';

function buildSankey(divName, data, padRight) {
    // Create root element with theme
    let root = am5.Root.new(divName);
    root.setThemes([
        am5themes_Animated.new(root)
    ]);
    // Add series to root container
    let series = root.container.children.push(
        am5flow.Sankey.new(root, {
          sourceIdField: "from",
          targetIdField: "to",
          valueField: "value",
          paddingRight: padRight,
          paddingBottom: 50
        })
    );
    // Add data from object
    series.data.setAll(data);

    series.nodes.setAll({
        nameField: "name"
      });
      
    series.nodes.rectangles.template.set("templateField", "nodeSettings");
    series.links.template.set("templateField", "linkSettings");

    // Make chart animate in
    series.appear(1000, 100);
}

function buildTreeMap(divName, data) {
    // Create root element with theme
    let root = am5.Root.new(divName);
    const myTheme = am5.Theme.new(root);
    myTheme.rule("RoundedRectangle", ["hierarchy", "node", "shape", "depth1"]).setAll({
        strokeWidth: 2
    });

    myTheme.rule("RoundedRectangle", ["hierarchy", "node", "shape", "depth2"]).setAll({
        fillOpacity: 0,
        strokeWidth: 1,
        strokeOpacity: 0.2
    });

    myTheme.rule("Label", ["node", "depth1"]).setAll({
        forceHidden: false,
        fontSize: 11
    });

    myTheme.rule("Label", ["node", "depth2"]).setAll({
        forceHidden: false,
        fontSize: 11
    });

    root.setThemes([
        am5themes_Animated.new(root),
        myTheme
    ]);
    var container = root.container.children.push(
        am5.Container.new(root, {
            width: am5.percent(100),
            height: am5.percent(100),
            layout: root.verticalLayout
        })
    );
    // Add series to root container
    let series = container.children.push(
        am5hierarchy.Treemap.new(root, {
            sort: "descending",
            singleBranchOnly: false,
            downDepth: 1,
            upDepth: 0,
            initialDepth: 1,
            valueField: "value",
            categoryField: "name",
            childDataField: "children",
            nodePaddingOuter: 0,
            nodePaddingInner: 0
        })
    );

    container.children.unshift(
        am5hierarchy.BreadcrumbBar.new(root, {
          series: series
        })
    );

    series.get("colors").set("step", 3);
    // Add data from object
    function processData(data) {
        var treeData = data;
        return [{
          name: "Top",
          children: treeData
        }];
      }
    series.data.setAll(processData(data));
    series.set("selectedDataItem", series.dataItems[0]);
}

function buildPie(divName, data) {
    // Prep data
    const colors = [0xf94144, 0xf8961e, 0xf9c74f, 0x90be6d, 0x43aa8b, 0x577590, 0x277da1, 0x5a189a]
    for (let i=0; i<8; i++) {
        data[i]["sliceSettings"] = {
            fill: am5.color(colors[i])
        }
    }

    let root = am5.Root.new(divName);
    root.setThemes([
        am5themes_Animated.new(root)
      ]);
    let container = root.container.children.push(am5.Container.new(root, {
        width: am5.p100,
        height: am5.p100,
        layout: root.horizontalLayout
    }));

    let columnChart = container.children.push(am5xy.XYChart.new(root, {
        width: am5.p50,
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticalLayout
    }));
    let yRenderer = am5xy.AxisRendererY.new(root, {});
    let yAxis = columnChart.yAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: yRenderer
    }));

    yRenderer.grid.template.setAll({
        location: 1
    });

    let xAxis = columnChart.xAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
            strokeOpacity: 0.1
        })
    }));
    let columnSeries = columnChart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Temp",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        categoryYField: "category"
    }));
      
    columnSeries.columns.template.setAll({
        tooltipText: "{categoryY}: {valueX}"
    });

    columnChart.appear(1000, 100);
    let pieChart = container.children.push(
        am5percent.PieChart.new(root, {
            width: am5.p50,
            innerRadius: am5.percent(50)
        })
    );

    columnSeries.bullets.push(function() {
        return am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            centerY: am5.p50,
            text: "{valueX}",
            populateText: true
          })
        });
      });
    
    // Create series
    let pieSeries = pieChart.series.push(
        am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            alignLabels: false
        })
    );
    
    pieSeries.slices.template.setAll({
        templateField: "sliceSettings",
        strokeOpacity: 0
    });
    
    let currentSlice;
    pieSeries.slices.template.on("active", function(active, slice) {
        if (currentSlice && currentSlice != slice && active) {
            currentSlice.set("active", false)
        }
    
        let color = slice.get("fill");
        
        label1.setAll({
            fill: color,
            text: root.numberFormatter.format(slice.dataItem.get("valuePercentTotal"), "#.'%'")
        });
        
        label2.set("text", slice.dataItem.get("category"));
        
        columnSeries.columns.template.setAll({
            fill: slice.get("fill"),
            stroke: slice.get("fill")
        });
        
        columnSeries.data.setAll(slice.dataItem.dataContext.breakdown);
        yAxis.data.setAll(slice.dataItem.dataContext.breakdown);
        
        currentSlice = slice;
    });
    

    pieSeries.ticks.template.set("forceHidden", true);
    pieSeries.labels.template.setAll({
        textType: "circular",
        centerX: 0,
        centerY: 0,
        text: "{category}"
    });
    
    pieSeries.data.setAll(data);
    
    // Add label
    let label1 = pieChart.seriesContainer.children.push(am5.Label.new(root, {
        text: "",
        fontSize: 35,
        fontweight: "bold",
        centerX: am5.p50,
        centerY: am5.p50
    }));
    
    let label2 = pieChart.seriesContainer.children.push(am5.Label.new(root, {
        text: "",
        fontSize: 12,
        centerX: am5.p50,
        centerY: am5.p50,
        dy: 30
    }));
    
    // Pre-select first slice
    pieSeries.events.on("datavalidated", function() {
    pieSeries.slices.getIndex(0).set("active", true);
    });
}

function buildLine(divName, data) {
    let root = am5.Root.new(divName);
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Prepare data
    const NUM_YEARS = 7
    var transformed_data = [];
    var cat_names = [];
    let categories = data[0]['Children'];
    for (let i = 0; i < categories.length; i++) {
        cat_names.push(categories[i]['name']);
        transformed_data.push([]);
    }

    for (let i = 0; i < NUM_YEARS; i++) {
        let date = new Date();

        let year_data = data[i];
        let year = year_data['Year'];

        date.setFullYear(year);

        let categories = year_data['Children'];

        for (let j = 0; j < categories.length; j++) {
            transformed_data[j].push({
                'year': date.getTime(),
                'value': categories[j]['value']
            });
            
        }
    }

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
        maxTooltipDistance: 0,
    }));

    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        baseInterval: {
            timeUnit: "year",
            count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
    }));


    // Add series
    for (var i = 0; i < cat_names.length; i++) {
        let series = chart.series.push(am5xy.LineSeries.new(root, {
            name: cat_names[i],
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            valueXField: "year",
            legendValueText: "{valueY}",
            tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "{valueY}"
            })
        }));

        series.data.setAll(transformed_data[i]);
        series.appear();
    }


    // Add cursor
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "none"
    }));
    cursor.lineY.set("visible", false);

    // Add legend
    let legend = chart.rightAxesContainer.children.push(am5.Legend.new(root, {
        width: 400,
        paddingLeft: 15,
        height: am5.percent(100)
    }));

    // When legend item container is hovered, dim all the series except the hovered one
    legend.itemContainers.template.events.on("pointerover", function(e) {
        let itemContainer = e.target;
        let series = itemContainer.dataItem.dataContext;

        chart.series.each(function(chartSeries) {
            if (chartSeries != series) {
                chartSeries.strokes.template.setAll({
                    strokeOpacity: 0.15,
                    stroke: am5.color(0x000000)
                });
            } else {
                chartSeries.strokes.template.setAll({
                    strokeWidth: 3
                });
            }
        })
    })

    // When legend item container is unhovered, make all series as they are
    legend.itemContainers.template.events.on("pointerout", function(e) {
        chart.series.each(function(chartSeries) {
            chartSeries.strokes.template.setAll({
            strokeOpacity: 1,
            strokeWidth: 1,
            stroke: chartSeries.get("fill")
            });
        });
    })

    legend.itemContainers.template.set("width", am5.p100);
    legend.valueLabels.template.setAll({
        width: am5.p100,
        textAlign: "right"
    });

    legend.data.setAll(chart.series.values);
    chart.appear(1000, 100);
}

buildSankey("sankey_top", sankey_top, 200);

buildPie("pie_schools", pie_schools);

buildSankey("sankey_housing", sankey_housing, 300);
buildSankey("sankey_recreation", sankey_recreation, 300);
buildSankey("sankey_parking", sankey_parking, 300);
buildSankey("sankey_dining", sankey_dining, 300);

buildTreeMap("treemap_fees", treemap_fees);

buildLine("line_revenue", revenue_time_series);
buildLine("line_expenses", expenses_time_series);
