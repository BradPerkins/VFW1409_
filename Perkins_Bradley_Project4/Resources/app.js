

var mainWin = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "The DC Universe",
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
});

var myLabel = Ti.UI.createLabel({
	text: "VFW 1409  Bradley Perkins",
	color: "white",
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	top: 450
}) ;

var dcLogo = Ti.UI.createImageView({
	image: "dclogo.jpg",
	top: 5,
	height: 115 
});

//windows -v-
var galleryWin = Ti.UI.createWindow({
	backgroundColor: "gray",
    title: "Gallery"
});

var dataWin = Ti.UI.createWindow({
	backgroundColor: "gray",
    title: "Data"
});

var customWin = Ti.UI.createWindow({
	backgroundColor: "gray",
    title: "Custom"
});
//windows -^-

//Gallery Button
var gallery = Ti.UI.createButton({
	backgroundColor: "#3f9fd1",
	borderColor: "white",
	borderWidth: 1,
	top: 125,
	left: 0,
	right: 0,
	height: 100,
});

var galleryText = Ti.UI.createLabel({
	color: "white",
	font: {fontSize: 50, fontFamily: "Times New Roman"},
	textAlign: "center",
	text: "Gallery"
});

gallery.addEventListener('click', function(){
    navWin.openWindow(galleryWin, {animated:true});
    galleryFile = require("gallery");
});

gallery.add(galleryText);

//Data Button
var data = Ti.UI.createButton({
	backgroundColor: "black",
	borderColor: "white",
	borderWidth: 1,
	top: 225,
	left: 0,
	right: 0,
	height: 100,
});

var dataText = Ti.UI.createLabel({
	color: "white",
	font: {fontSize: 50, fontFamily: "Times New Roman"},
	textAlign: "center",
	text: "Data"
});

data.addEventListener('click', function(){
    navWin.openWindow(dataWin, {animated:true});
   dataFile = require("data");
});

data.add(dataText);

//Custom Button
var custom = Ti.UI.createButton({
	backgroundColor: "#0068b1",
	borderColor: "white",
	borderWidth: 1,
	top: 325,
	left: 0,
	right: 0,
	height: 100,
});

var customText = Ti.UI.createLabel({
	color: "white",
	font: {fontSize: 50, fontFamily: "Times New Roman"},
	textAlign: "center",
	text: "Custom"
});

custom.addEventListener('click', function(){
    navWin.openWindow(customWin, {animated:true});
    customFile = require("custom");
});

custom.add(customText);


var border = Ti.UI.createView({
	backgroundColor: "black",
	height: 1,
	top: 0,
});


//galleryFile = require("gallery");

mainWin.add(border, gallery, data, custom, myLabel, dcLogo);
navWin.open();

