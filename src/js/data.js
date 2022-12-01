import data from '../data/budget.json';
  
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
chart.data = data;
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";

// for right-most label to fit
chart.paddingRight = 100;
chart.paddingBottom = 25;

// Add events on links
chart.links.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
chart.links.template.events.on("hit", function(ev) {
    chart.colors.reset();
    var nav = chart.children.getIndex(0);
    var linkData = ev.target.dataItem.dataContext;
    if (linkData.sub) {
    chart.data = linkData.sub;
    nav.data.push({
        name: ev.target.populateString("{fromName}→{toName}"),
        step: ev.target.dataItem.dataContext
    });
    nav.invalidateData();
    }
});

// Add navigation bar
var nav = chart.createChild(am4charts.NavigationBar);
nav.data = [{ name: "Top" }];
nav.toBack();

nav.links.template.events.on("hit", function(ev) {
    var target = ev.target.dataItem.dataContext;
    var nav = ev.target.parent;
    chart.colors.reset();
    if (target.step) {
    chart.data = target.step.sub;
    nav.data.splice(nav.data.indexOf(target) + 1);
    nav.invalidateData();
    } else {
    chart.data = data;
    nav.data = [{ name: "Top" }];
    }
});