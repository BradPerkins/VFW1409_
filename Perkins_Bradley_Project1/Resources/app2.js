var comics = ["Amazing Spider-Man", "Batman", "Batman and Robin", "Redhood and the Outlaws", "The Walking Dead"];

var nextComics = function(){	
	if(i ===comics.length -1){
		i = -1;
	};
	i++;
	
		var comicList = Ti.UI.createLabel({
		text: comics[i],
		textAlign: "center",
		backgroundColor: "white",
		borderRadius: 2,
		borderWidth: 1,
		top: 20,
		left: 20,
		right: 20,
		bottom: 100
	});

	
	mainWin.add(comicList);
		
};

var prevComics = function(){
	//view1.hide();	
	if(i ===0){
		i = comics.length;
	};
	i--;
	
		var comicList = Ti.UI.createLabel({
		text: comics[i],
		textAlign: "center",
		backgroundColor: "white",
		borderRadius: 2,
		borderWidth: 1,
		top: 20,
		left: 20,
		right: 20,
		bottom: 100
	});
	
	mainWin.add(comicList);
		
};

var i = -1;

nextButton.addEventListener("click", nextComics);
prevButton.addEventListener("click", prevComics);
