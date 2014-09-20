//main window
var win1 = Ti.UI.createWindow({
	backgroundColor: "#202e53" 
});

//title bar
var titleBar = Ti.UI.createView({
	height: 80,
	backgroundColor: "white",
	top: 20
});

//red spacer
var spacer1 = Ti.UI.createView({
	height: 20,
	backgroundColor: "#d80c0c",
	top: titleBar.height + titleBar.top
});

//Title bar label
var mainTitle = Ti.UI.createLabel({
	text: "Super Heroes",
	font: {fontSize: 40, fontStyle: "Helvetica", fontWeight: "bold"},
	color: "#202e53",
	textAlign: "center"
});

//main table view
var heroes = Ti.UI.createTableView({
	top: spacer1.height + spacer1.top
});

//iPhone id 
if(Ti.Platform.name === "iPhone OS"){
	heroes.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};
// table view section title
//table view section footer
var marvelSection = Ti.UI.createTableViewSection({
	headerTitle: "Marvel Heroes",
	footerTitle: "Nuff Said,"
});

//table view section title
//table view section footer
var dcSection = Ti.UI.createTableViewSection({
	headerTitle: "DC Heroes",
	footerTitle: "The new 52"
});

//variable for both table view sections
var heroSection = [marvelSection, dcSection];

//data pull from data.js file
dataFile = require("data");

heroes.setData(heroSection);

titleBar.add(mainTitle);
win1.add(titleBar, spacer1, heroes);
win1.open();
