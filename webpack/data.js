import sankey_top from '../data/top_level.json';
import pie_schools from '../data/schools.json';
import sankey_housing from '../src/data/housing.json';
import sankey_recreation from '../src/data/recreation.json';
import treemap_fees from '../data/fees.json';

function buildSankey(divName, data) {
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
        forceHidden: true
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
            upDepth: -1,
            initialDepth: 2,
            valueField: "value",
            categoryField: "name",
            childDataField: "children",
            nodePaddingOuter: 0,
            nodePaddingInner: 0
        })
    );
    series.get("colors").set("step", 3);
    // Add data from object
    function processData(data) {
        var treeData = data;
        return [{
          name: "Root",
          children: treeData
        }];
      }
    series.data.setAll(processData(data));
    series.set("selectedDataItem", series.dataItems[0]);
}

function buildPie(divName, data) {
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

buildSankey("sankey_top", sankey_top, 200);

buildPie("pie_schools", pie_schools);

buildSankey("sankey_housing", sankey_housing, 300);
buildSankey("sankey_recreation", sankey_recreation, 300);

buildTreeMap("treemap_fees", treemap_fees);
