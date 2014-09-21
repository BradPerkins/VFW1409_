

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var comicPics = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "dcImages");
var picsList = comicPics.getDirectoryListing();
//var items = 30;
var rows = 4;
var margin = 10;
var screenWidth = 320; // pixel width size of iphone 
var boxSize = (pWidth - (margin * (rows + 1)))/rows;

var win1 = Ti.UI.createWindow({
	backgroundColor: "gray",
	layout: "horizontal",
	title: "Gallery",
	font: {fontSize: 25, fontWeight: "bold", fontFamily: "Times New Roman"},
});	

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: win1,
});

var box = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight - border.height - border.top,
	showVerticalScrollIndicator: true, // idicator on the side while scrolling
	backgroundColor: "gray",
	borderRadius: 10,
	
});


//detail window 
var getDetails = function(dataSource){
	var win = Ti.UI.createWindow({
		backgroundColor: "white",
		
	});
	
	var titleBar = Ti.UI.createView({
		height: 80,
		backgroundColor: "gray",
		top: 20
	});
	
	var detailImage = Ti.UI.createImageView({
		image: dataSource.image,
		backgroundColor: "gray",
		width: pWidth,
	});
	
	var detailTitle = Ti.UI.createLabel({
		text: dataSource.image,
		font: {fontSize: 20, fontWeight: "bold", fontFamily: "Times New Roman"},
		color: "black",
		textAlign: "center"
	});
	
	//button
	var closeButton = Ti.UI.createLabel({
		text: "BACK",
		backgroundColor: "gray",
		height: 50,
		font: {fontSize: 25, fontWeight: "bold", fontFamily: "Times New Roman"},
		width: "100%",
		bottom: 0,
		textAlign: "center",
	});
	
	//close flip transition
	var closeWin = function(){
		win.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	closeButton.addEventListener("click", closeWin);
	
	titleBar.add(detailTitle);
	win.add(titleBar, closeButton, detailImage);
	
	win.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});

	
};


var loadFiles = function(){
// call var picsList to get file data
	for(var i=0; i<picsList.length; i++){
		var view = Ti.UI.createView({
			title: "dcImages/" + picsList[i],//check this
			backgroundColor: "33ccff",
			top: 10,
			left: 10,
			width: boxSize,
			height: boxSize,
			borderRadius:10
		});
		var newImage = Ti.UI.createImageView({
			image: "dcImages/" + picsList[i],
			top: 0,
			width: view.width , 
			height: view.height,
		});
	
		
		box.add(view);
		view.add(newImage);
		
		//propagation
		newImage.addEventListener("click", function(event){
		getDetails(event.source);
	});
	}
	
	
	
	titleHeader.add(headerLabel);
	win1.add(border, titleHeader, navWin);
	win1.add(box);
	navWin.open();
	
	
};

dcLogoView.addEventListener("click", loadFiles);



