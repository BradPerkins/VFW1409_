var win1 = Ti.UI.createWindow({
	backgroundColor: "#202e53" 
});

var dataNavWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
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
var heroesSection = Ti.UI.createTableViewSection({
	headerTitle: "DC Heroes",
	footerTitle: "The New 52,"
});

//table view section title
//table view section footer
var villainsSection = Ti.UI.createTableViewSection({
	headerTitle: "DC Villains",
	footerTitle: "The new 52"
});

//variable for both table view sections
var heroSection = [heroesSection, villainsSection];

//data pull from data.js file
//dataFile = require("data");


//rating chart
var rating1 = Ti.UI.createView({
		backgroundColor: "white",
		text: "1",
		width: 10,
		height: 25,
		bottom: 100,
		right: 10
	});
var rating2 = Ti.UI.createView({
		backgroundColor: "white",
		text: "1",
		width: 20,
		height: 25,
		bottom: 100,
		right: 10
	});	
var rating3 = Ti.UI.createView({
		backgroundColor: "white",
		text: "3",
		width: 30,
		height: 25,
		bottom: 100,
		right: 10
	});
var rating4 = Ti.UI.createView({
		backgroundColor: "white",
		text: "4",
		width: 40,
		height: 25,
		bottom: 100,
		right: 10
	});	
var rating5 = Ti.UI.createView({
		backgroundColor: "white",
		text: "5",
		width: 50,
		height: 25,
		bottom: 100,
		right: 10
	});	
var rating6 = Ti.UI.createView({
		backgroundColor: "white",
		text: "6",
		width: 60,
		height: 25,
		bottom: 100,
		right: 10
	});
var rating7 = Ti.UI.createView({
		backgroundColor: "white",
		text: "7",
		width: 70,
		height: 25,
		bottom: 100,
		right: 10
	});	
var rating8 = Ti.UI.createView({
		backgroundColor: "white",
		text: "8",
		width: 80,
		height: 25,
		bottom: 100,
		right: 10
	});
var rating9 = Ti.UI.createView({
		backgroundColor: "white",
		text: "9",
		width: 90,
		height: 25,
		bottom: 100,
		right: 10
	});
var rating10 = Ti.UI.createView({
		backgroundColor: "white",
		text: "10",
		width: 100,
		height: 25,
		bottom: 100,
		right: 10
	});
	
			
//JSON Data
var mainData = {
	"heroes": [
			{
				title: "Green Arrow", 
				description: "Oliver Queen is perhaps the finest archer ever known.  He is proficient in several forms of martial arts including judo, wing chun, taekwondo, as well as eskrima.",
				image: "dcPics/greenarrow.jpg",
				rating: rating6
			},
			{
				title: "Batman", 
				description: "Batman has no inherent superhuman powers. To compensate for this, he relies on his own scientific knowledge, detective skills, and athletic prowess.",
				image: "dcPics/batman.jpg",
				rating: rating8
			}, 
			{
				title: "Superman", 
				description: "Supermans famous arsenal of powers has included flight, super-strength, invulnerability to non-magical attacks, super-speed, vision powers ,including x-ray, heat-emitting, telescopic, infra-red, and microscopic vision, super-hearing, super-intelligence, and super-breath, which enables him to blow out air at freezing temperatures, as well as exert the propulsive force of high-speed winds.",
				image: "dcPics/superman.jpg",
				rating: rating10
			}, 
			{
				title: "Flash", 
				description: "Flash can move, think, and react at light speeds as well as having superhuman endurance that allows them to run incredible distances. He can also vibrate so fast that they can pass through walls in a process called quantum tunneling, travel through time and can also lend and borrow speed.",
				image: "dcPics/flash.jpg",
				rating: rating7
			}, 
			{
				title: "Green Lantern", 
				description: "Green Lantern wears a ring that grants them a variety of powers. The full extent of the ring's ability has never been rigorously defined in the stories, but two consistent traits are that it grants the power of flight and that all its effects are accompanied by a green light.",
				image: "dcPics/greenlantern.jpg",
				rating: rating7
			}, 	
		],
		
	"villains": [
			
			{
				title: "Joker", 
				description: "Don't make us laugh. The green hair. The crazed smile. The maniacal cackle. You know exactly who he is and how far he'd go to put a smile on your face.",
				image: "dcPics/joker.jpg",
				rating: rating8,
			},
			{
				title: "Lex Luther", 
				description: "Other people may see Superman as the greatest hero the world has ever known—a benevolent being with tremendous power, a strange visitor here to help. But one man sees him as something else entirely: a threat—a creature whose very existence hinders humanity, preventing it from ever reaching its true potential.",
				image: "dcPics/lexluther.jpg",
				rating: rating6
			}, 
			{
				title: "Bane", 
				description: "Assasin for the league of shadows, super powerful.",
				image: "dcPics/bane.jpg",
				rating: rating10,
			}, 
			{
				title: "The Riddler", 
				description: "Riddle us this: what cerebral criminal with an affinity for purple and green loves challenging the Dark Knight with cleverly calculated crimes and puzzling plots?",
				image: "dcPics/riddler.jpg",
				rating: rating5
			}, 
			{
				title: "Sinestro", 
				description: "In blackest day, in brightest night, beware your fears made into light. Let those who try to stop what's right, burn like my power, Sinestro's might!",
				image: "dcPics/sinestro.jpg",
				rating: rating7,
			}	
		]
};
	

var getInfo = function(){
	var infoWin = Ti.UI.createWindow({
		backgroundColor: "#202e53",
		
	});
	
	var infoTitleBar = Ti.UI.createView({
		height: 80,
		backgroundColor: "white",
		top: 20
	});
	
	var infoSpacer1 = Ti.UI.createView({
		height: 20,
		backgroundColor: "#d80c0c",
		top: infoTitleBar.height + infoTitleBar.top
	});
	
	var infoTitle = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 40, fontStyle: "Helvetica", fontWeight: "bold"},
		color: "#202e53",
		textAlign: "center"
	});
	
	var originText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 15, fontStyle: "Helvetica"},
		top: infoSpacer1.height + infoSpacer1.top + 20,
		left: 10,
		right: 10,	
	});
	
	var charactorView = Ti.UI.createImageView({
		image: this.image,
		height: 100,
		left: 10,
		width: 100,
		bottom: 100,
	});
	
	var ratingView = Ti.UI.createView({
		backgroundColor: "white",
		width: 100,
		height: 25,
		bottom: 100,
		right: 10
	});
	
	var ratingNumber = Ti.UI.createView({
		backgroundColor: "gray",
		width: this.rating,
	});
	
	var ratingNumberText = Ti.UI.createLabel({
		backgroundColor: "gray",
		text: this.rating,
		font: {fontSize: 10, fontFamily: "Helvetica"},
	});
		
	//button
	var closeButton = Ti.UI.createLabel({
		text: "Close",
		backgroundColor: "#e3e3e3",
		color: "#202e53",
		height: 50,
		font: {fontSize: 10, fontFamily: "Helvetica"},
		width: "100%",
		bottom: 0,
		textAlign: "center"

	});
	//close flip transition
	var closeWin = function(){
		infoWin.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	closeButton.addEventListener("click", closeWin);
	
	ratingView.add(ratingNumber, ratingNumberText);
	infoTitleBar.add(infoTitle);
	infoWin.add(infoTitleBar, infoSpacer1, originText, closeButton, charactorView, ratingView);
	
	infoWin.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};

//heroes table view row data	
for(var i=0,j=mainData.heroes.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: mainData.heroes[i].title,
		desc: mainData.heroes[i].description,
		image: mainData.heroes[i].image,
		rating: mainData.heroes[i].rating,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
	row.hasChild = false;
	row.hasDetail = true;
}; 
	heroesSection.add(row);
	//event listener for each row
	row.addEventListener("click", getInfo);
};

//vilians table view row data
for(var i=0,j=mainData.villains.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: mainData.villains[i].title,
		desc: mainData.villains[i].description,
		image: mainData.villains[i].image,
		rating: mainData.villains[i].rating,
		hasChild: true
		
	});
	
	if(Ti.Platform.name === "iPhone OS"){
	row.hasChild = false;
	row.hasDetail = true;
};
	
	villainsSection.add(row);
	//event listener for each row
	row.addEventListener("click", getInfo);
};

heroes.setData(heroSection);

titleBar.add(mainTitle);
dataWin.add(titleBar, spacer1, heroes);
dataWin.open();





