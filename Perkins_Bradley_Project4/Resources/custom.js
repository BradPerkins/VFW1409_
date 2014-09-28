var customWin = Ti.UI.createWindow({
	backgroundColor: "white",
});

customImage = Ti.UI.createImageView({
	image: "dclogo.jpg"
});

var heroLogo = Ti.UI.createSwitch({
	value: true,
	bottom: 10,
});

var backView = Ti.UI.createView({
	backgroundColor: "gray",
	top: 20,
	height: 50
});
var back = Ti.UI.createLabel({
	text: "back",
	
});

var backButton = Ti.UI.createButton({
	backgroundColor: "gray",
});

heroLogo.addEventListener("change", function(e){
	if(heroLogo.value === true){
		customImage.image = "logos/batman-logo.jpg";
	}
	else{
		customImage.image = "logos/Flash-logo.jpg";
	}
});


backButton.addEventListener("click", function(){
    navWin.openWindow(mainWin, {animated:true});
});

backView.add(back, backButton);
customWin.add(heroLogo, customImage, backView);
customWin.open();
