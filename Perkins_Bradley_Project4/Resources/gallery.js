var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var comicPics = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "dcPics");
var picsList = comicPics.getDirectoryListing();

//button stuff v
nextView = Ti.UI.createView({
	backgroundColor: "white",
	height: 50,
	bottom: 0,
});

nextLabel = Ti.UI.createLabel({
	text: "Next Image",
	width: "100%",
	color: "black",
	font: {fontSize: 20, fontWeight: "bold", fontFamily: "Times New Roman"},
	textAlign: "center"
});

nextButton = Ti.UI.createButton({
	backgroundColor: "white",
	height: 50,
	width: "100%",
	bottom: 0,
});
// ^

var nextComics = function(){	
	if(i ===picsList.length -1){
	var	i = -1;
	};
	i++;
	
		var comicList = Ti.UI.createLabel({
		image: "dcPics/" + picsList[i],
		//textAlign: "center",
		backgroundColor: "white",
		borderRadius: 2,
		borderWidth: 1,
		top: 20,
		left: 20,
		right: 20,
		bottom: 100
	});
	
	
	galleryWin.add(comicList);
		
};
/*
for(var i=0; i<picsList.length; i++){
	var nextImage = Ti.UI.createImageView({
		image: "dcPics/" + picsList[i],
		backgroundColor: "33ccff",
		top: 20,
		left: 10,
		right: 10,
		width: pWidth,
		hieght: pHeight,
	});
	
	galleryWin.add(nextImage);
	
	nextImage.addEventListener("click", nextImage);
}
*/
/*
var loadPics = function(){
	var newImage = Ti.UI.createImageView({
		image: "dclogo.jpg",
		width: pWidth,
		hieght: pHeight,
	});
	
	galleryWin.add(newImage);
	
};
*/
nextButton.add(nextLabel);
nextView.add(nextButton);

nextButton.addEventListener("click", nextComics);

galleryWin.add(nextView);
galleryWin.open();

