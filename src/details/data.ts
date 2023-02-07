import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import sankey_top from '../data/top_level.json';
import sankey_instruction from '../data/ed-gen-funds_instruction.json';
import sankey_operations from '../data/ed-gen-funds_oper_main.json';
import treemap_insti_supp from '../data/ed-gen-funds_insti_supp.json';
import treemap_fees from '../data/fees.json';


am4core.useTheme(am4themes_animated);

function buildSankey(divName: string, data: any[], padRight: number) {
    let chart = am4core.create(divName, am4charts.SankeyDiagram);
    chart.data = data;
    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
    chart.paddingRight = padRight;
    chart.paddingTop = 25;
    chart.paddingBottom = 25;
    let nodeTemplate = chart.nodes.template;
    nodeTemplate.width = 15;
    nodeTemplate.nameLabel.locationX = 0.2;
    chart.nodes.template.nameLabel.label.truncate = false;
    chart.nodes.template.nameLabel.label.wrap = false;
}

function buildTreeMap(divName: string, data: any[]) {
    var chart = am4core.create(divName, am4charts.TreeMap);
    chart.data = data;

    /* Set color step */
    chart.colors.step = 2;
    chart.paddingBottom = 25;

    /* Define data fields */
    chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";

    // only one level visible initially
    chart.maxLevels = 2;
    chart.zoomable = false;

    let level0 = chart.seriesTemplates.create("0");
    let level0_column = level0.columns.template;
    level0_column.fillOpacity = 0.8;
    level0_column.stroke = am4core.color("#f1f5f9");

    let level1 = chart.seriesTemplates.create("1");
    let level1_column = level1.columns.template;
    level1_column.fillOpacity = 0;

    let level0_bullet = level0.bullets.push(new am4charts.LabelBullet());
    level0_bullet.locationY = 0.5;
    level0_bullet.locationX = 0.5;
    level0_bullet.label.text = "{name}";
    level0_bullet.label.fill = am4core.color("#f1f5f9");
}

buildSankey("sankey_top", sankey_top, 200);
buildSankey("sankey_instruction", sankey_instruction, 300);
buildSankey("sankey_operations", sankey_operations, 200);

buildTreeMap("treemap_fees", treemap_fees);
buildTreeMap("treemap_insti_supp", treemap_insti_supp);
