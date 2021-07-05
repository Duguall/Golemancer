var cookies = 0;
var cursors = 0;
var prestige = 0;

function cookieClick(number){
    cookies = cookies + number;
	document.getElementById("cookies").innerHTML = prettify(cookies);
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = prettify(cursors);  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = prettify(cookies);  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
};

window.setInterval(function(){
	cookieClick(cursors);	
}, 1000);

function save(){
	var save = {
	cookies: cookies,
	cursors: cursors,
	prestige: prestige
};
localStorage.setItem("save",JSON.stringify(save));
};
function load(){
	var savegame = JSON.parse(localStorage.getItem("save"))
	if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
	document.getElementById("cookies").innerHTML = prettify(cookies);
	if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
	document.getElementById('cursors').innerHTML = prettify(cursors);
	if (typeof savegame.cookies !== "undefined") prestige = savegame.prestige;
};

function deleteSave(){
	localStorage.removeItem("save")
};

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
};