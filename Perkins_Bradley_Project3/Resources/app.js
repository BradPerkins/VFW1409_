

var mainWin = Ti.UI.createWindow({
	backgroundColor: "gray",
});

var titleHeader = Ti.UI.createView({
	height: 50,
	backgroundColor: "white",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "black",
	height: 1,
	top: 20,
});

var headerLabel = Ti.UI.createLabel({
	text: "DC COMICS CHARACTORS",
	width: "100%",
	color: "black",
	font: {fontSize: 20, fontWeight: "bold", fontFamily: "Times New Roman"},
	textAlign: "center"
});

var dcLogoView = Ti.UI.createImageView({
	backgroundColor: "white",
	image: "dclogo.jpg",
	height: 125,
	width: 200,
	borderRadius: 20,
	
});

var dcButton = Ti.UI.createButton({
	height: 125,
	width: 200,
	borderRadius: 20,
	opacity: 0.0,
	
});

var loadGallery = require("gallery");

dcLogoView.add(dcButton);
titleHeader.add(headerLabel);
mainWin.add(border, dcLogoView, titleHeader);
mainWin.open();