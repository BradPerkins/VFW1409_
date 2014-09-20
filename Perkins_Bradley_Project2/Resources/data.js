
//JSON Data
var mainData = {
	"marvel": [
			{title: "Spider-Man", description: "When Peter Parker was bitten by an irradiated spider, it caused numerous body-wide changes. Immediately after the bite, he was granted his original powers: primarily superhuman strength, reflexes, and balance; the ability to cling tenaciously to most surfaces; and a subconscious precognitive sense of danger, which he called a spider-sense."}, 
			{title: "Thor", description: "Thor possesses a very high resistance to physical injury that approaches invulnerability. Thor possesses keen senses that allow him to track objects traveling faster than light and hear cries from the other side of the planet. Thor has the ability to travel through time. His stamina allowed him to battle the entire Frost Giant army for nine months without any sustenance or rest; Thor has shown the ability to regenerate wounded portions of his body, including entire limbs or organs, with the aid of magical forces such as Mjolnir. Thor has superhuman speed, agility, and reflexes, enabling him to deflect bullets with his hammer. Like all Asgardians, he has immunity to all Earthly diseases and some resistance to magic. Exceptionally powerful magic can overwhelm Odin's enchantment that transforms him between Asgardian and mortal forms."}, 
			{title: "Captain America", description: "Captain America has no superhuman powers, but through the Super-Soldier Serum and Vita-Ray treatment, he is transformed and his strength, endurance, agility, speed, reflexes, durability, and healing are at the zenith of natural human potential."}, 
			{title: "Daredevil", description: "Although the character is blind, his remaining four senses function with high levels of superhuman accuracy and sensitivity, giving him abilities far beyond the limits of a sighted person; few know that the hero cannot see. Daredevil developed a radar sense, which is similar to echolocation."}, 
			{title: "Hulk", description: "His durability, regeneration, and endurance also increase in proportion to his temper. Hulk is resistant to injury or damage, though the degree to which varies between interpretations, but he has withstood the equivalent of solar temperatures, nuclear explosions, and planet-shattering impacts."}
		],
		
	"dc": [
			
			{title: "Green Arrow", description: "Oliver Queen is perhaps the finest archer ever known.  He is proficient in several forms of martial arts including judo, wing chun, taekwondo, as well as eskrima."},
			{title: "Batman", description: "Batman has no inherent superhuman powers. To compensate for this, he relies on his own scientific knowledge, detective skills, and athletic prowess."}, 
			{title: "Superman", description: "Supermans famous arsenal of powers has included flight, super-strength, invulnerability to non-magical attacks, super-speed, vision powers ,including x-ray, heat-emitting, telescopic, infra-red, and microscopic vision, super-hearing, super-intelligence, and super-breath, which enables him to blow out air at freezing temperatures, as well as exert the propulsive force of high-speed winds."}, 
			{title: "Flash", description: "Flash can move, think, and react at light speeds as well as having superhuman endurance that allows them to run incredible distances. He can also vibrate so fast that they can pass through walls in a process called quantum tunneling, travel through time and can also lend and borrow speed."}, 
			{title: "Green Lantern", description: "Green Lantern wears a ring that grants them a variety of powers. The full extent of the ring's ability has never been rigorously defined in the stories, but two consistent traits are that it grants the power of flight and that all its effects are accompanied by a green light."}, 	
		],
	};
//Get info Function
//detail window
var getInfo = function(){
	var infoWin = Ti.UI.createWindow({
		backgroundColor: "white",
		
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
	
	//button
	var closeButton = Ti.UI.createLabel({
		text: "Close",
		backgroundColor: "#e3e3e3",
		color: "#202e53",
		height: 50,
		font: {fontSize: 15, fontFamily: "Helvetica"},
		width: "100%",
		bottom: 0,
		textAlign: "center"

	});
	//close flip transition
	var closeWin = function(){
		infoWin.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	closeButton.addEventListener("click", closeWin);
	
	infoTitleBar.add(infoTitle);
	infoWin.add(infoTitleBar, infoSpacer1, originText, closeButton);
	
	infoWin.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};

//marvel table view row data
for(var i=0,j=mainData.marvel.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: mainData.marvel[i].title,
		desc: mainData.marvel[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
	row.hasChild = false;
	row.hasDetail = true;
}; 

	marvelSection.add(row);
	//event listener for each row
	row.addEventListener("click", getInfo);
};

//dc table view row data
for(var i=0,j=mainData.dc.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: mainData.dc[i].title,
		desc: mainData.dc[i].description,
		hasChild: true
		
	});
	
	if(Ti.Platform.name === "iPhone OS"){
	row.hasChild = false;
	row.hasDetail = true;
};
	
	dcSection.add(row);
	//event listener for each row
	row.addEventListener("click", getInfo);
};