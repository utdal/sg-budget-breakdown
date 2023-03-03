import React, { Component } from 'react'

import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import treemap_fees from '../../data/fees.json';

class FeeTreemap extends Component {
    componentDidMount() {
        let root = am5.Root.new("treemap_fees")
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
        series.data.setAll(processData(treemap_fees));
        series.set("selectedDataItem", series.dataItems[0]);    
        this.root = root;
    }
    
    componentWillUnmount() {
        if (this.root) {
            this.root.dispose();
        }
    }

    render() {
        return (
            <div className="treemap" id="treemap_fees"></div>
        );
    }
}

export default FeeTreemap;