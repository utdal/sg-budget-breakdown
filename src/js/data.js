import sankey_top from '../data/top_level.json';
import sankey_instruction from '../data/ed-gen-funds_instruction.json';
import sankey_operations from '../data/ed-gen-funds_oper_main.json';
import treemap_insti_supp from '../data/ed-gen-funds_insti_supp.json';  
import treemap_fees from '../data/fees.json';

am4core.useTheme(am4themes_animated);

function buildSankey(divName, data, padRight) {
    let chart = am4core.create(divName, am4charts.SankeyDiagram);
    chart.data = data;
    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
    chart.paddingRight = padRight;
    chart.paddingTop = 25;
    chart.paddingBottom = 25;
}

function buildTreeMap(divName, data) {
    var chart = am4core.create(divName, am4charts.TreeMap);
    chart.data = data;

    /* Set color step */
    chart.colors.step = 2;
    chart.paddingBottom = 25;

    /* Define data fields */
    chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";

    let level1 = chart.seriesTemplates.create("0");
    let level1_column = level1.columns.template;
    level1_column.column.cornerRadius(10, 10, 10, 10);
    level1_column.fillOpacity = 0.8;
    level1_column.stroke = am4core.color("#fff");
    level1_column.strokeWidth = 5;
    level1_column.strokeOpacity = 1;

    let level1_bullet = level1.bullets.push(new am4charts.LabelBullet());
    level1_bullet.locationY = 0.5;
    level1_bullet.locationX = 0.5;
    level1_bullet.label.text = "{name}";
    level1_bullet.label.fill = am4core.color("#fff");
}

buildSankey("sankey_top", sankey_top, 100);
buildSankey("sankey_instruction", sankey_instruction, 200);
buildSankey("sankey_operations", sankey_operations, 200);

buildTreeMap("treemap_fees", treemap_fees);
buildTreeMap("treemap_insti_supp", treemap_insti_supp);