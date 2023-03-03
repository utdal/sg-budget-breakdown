import React, { Component } from 'react'

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import pie_schools from '../../data/schools.json';

class SchoolPieChart extends Component {
    componentDidMount() {
        let root = am5.Root.new("pie_schools")
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
        
        pieSeries.data.setAll(pie_schools);
        
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

        this.root = root
    }

    componentWillUnmount() {
        if (this.root) {
            this.root.dispose();
        }
    }

    render() {
        return (
            <div className="sankey" id="pie_schools"></div>
        );
    }
}

export default SchoolPieChart;