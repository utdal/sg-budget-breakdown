import React, { Component } from 'react'

import * as am5 from "@amcharts/amcharts5";
import * as am5flow from "@amcharts/amcharts5/flow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import sankey_top from '../../data/top_level.json';

class TopSankey extends Component {
    componentDidMount() {
        let root = am5.Root.new("sankey_top")
        // Create root element with theme
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        // Add series to root container
        let series = root.container.children.push(
            am5flow.Sankey.new(root, {
            sourceIdField: "from",
            targetIdField: "to",
            valueField: "value",
            paddingRight: 200
            })
        );
        // Add data from object
        series.data.setAll(sankey_top);

        series.nodes.setAll({
            nameField: "name"
        });
        
        series.nodes.rectangles.template.set("templateField", "nodeSettings");
        series.links.template.set("templateField", "linkSettings");

        series.appear(1000, 100);    
        this.root = root;
    }

    componentWillUnmount() {
        if (this.root) {
            this.root.dispose();
        }
    }

    render() {
        return (
            <div className="sankey w-full" id="sankey_top"></div>
        );
    }
}

export default TopSankey;