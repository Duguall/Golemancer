import * as wglt from "wglt";
import engine from './ecs';
import {Appearance, Combat, Description, Health, Position, Action, Movement, Enemy, Ally} from "./components"


var locationId = {}
//creating the map in "canvas" width = 80, height = 50
const terminal = new wglt.Terminal(document.querySelector('canvas'), 80, 50);

//WGLT leftovers. Setting the whole map as explored and visible to the player
for (let y = 0; y < terminal.height; y++) {
    for (let x = 0; x < terminal.width; x++) {
        terminal.grid[y][x].visible = true
        terminal.grid[y][x].explored = true
    }
}

//creating world to contain entities in order to enable query
const world = engine.createWorld();
//player = human test pilot
const player = world.createPrefab("Human")
player.position.x = 50
player.position.y = 20
locationId[player.position.x + "," + player.position.y] = player.id
//zombie = zombie test pilot

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let zombie = world.createPrefab("Zombie")
        zombie.position.x = 48+i
        zombie.position.y = 10+j
        locationId[zombie.position.x + "," + zombie.position.y] = zombie.id
    }  
}
/*  Fuck it custom zombie-esque pathfinding.
    Dilemna: If each zombie only attempts to move once, there will be a trickle/accordian effect for movement.
    Solution 1: If a zombie doesn't move, they don't consume their action for the second and wait for an opening.
        Pros: Less process-intensive.
        Cons: Would cause probably minor stutterstepping to still occur
    Solution 2: Don't render a frame until all zombies have filled in every spot possible to them.
        Pros: Zombies will move as one massive wave
        Cons: Potential to be dangerously process-intensive

    DONE - Determine cardinal movement, save variable 
    DONE - Zombie moves towards nearest target
    If zombie can't move directly towards target, randomly move left/right of target
        - Heading south, move southwest/southeast. Etc. for other directions
    If zombie can't move around target, randomly move 90deg off target
        -Heading south, move west or east, etc.
    If zombie can't make lateral progress, zombie doesn't move.
    
    Solution 1 break:
        If zombie moved, they have consumed their action for their action speed. Flag cooldown
    Solution 2 break:
        If zombie moved, flag it.
            Remember the vacated spot's coordinates
        If zombie didn't move, flag it
        Starting with opposite of South and working out, move zombie in.
            Ex: Move in N, NW/NE, E/W
            Verify Zombie's target direction. If moving into moves away from target, skip zombie.
            If no zombies move, skip to next vacated spot.
    
    If zombie is able to successfully move and end adjacent to their target, flag as 'engaged'
    Engaged zombies no longer search for nearby targets until target is dead or moves out of range
    Result: Zombies will move as a horde towards nearest targets

    TODO:   Target selection
            Frequency of target selection
                Maybe Only query for targets in situations where a target is required?
                    ex. needing movement, needing to attack
                Part of general query sweep of zombies, if zombie != target, add to needTarget list?
                    During query sweep of golems, assign zombie to nearest target?

    Do solution 1 first as proof of concept due to being much simpler
    Attempt solution 1 and 2 with theoretical maximum of zombies to see processing strain and compare
    */
 //query array
const query = {
    all : world.createQuery({
        all: [],
    }),
    enemies : world.createQuery({
        all: [Enemy],
    }),
    allies : world.createQuery({
        all: [Ally],
    }),
}; 

//cardinal direction for movement
const cardinals = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]

//Collective of all enemy AI
//AI needs to have targetting, attacking, moving
function enemyAI(time) {

    query.enemies.get().forEach((entityEnemy) => {
        //zombie AI

        if (entityEnemy.description.name == "Zombie") {
            let distance = 0
            //Determine closest player ally to zombie
            query.allies.get().forEach((entityAlly) => {
                if (Math.hypot((entityEnemy.position.x - entityAlly.position.x),(entityEnemy.position.y - entityAlly.position.y)) < distance || distance == 0) {
                    entityEnemy.combat.x = entityAlly.position.x
                    entityEnemy.combat.y = entityAlly.position.y
                    entityEnemy.combat.target = entityAlly.id
                    distance = Math.hypot((entityEnemy.position.x - entityAlly.position.x),(entityEnemy.position.y - entityAlly.position.y))
                };
            });
            entityEnemy.combat.distance = distance
            //determine cardinal movement to nearest enemy
            for (let i = 0; i < 8; i++) {
                let angle = Math.atan2(entityEnemy.combat.x - entityEnemy.position.x, entityEnemy.combat.y - entityEnemy.position.y)* 180 / Math.PI
                let lowAngle = i * 45 - 22.5
                let highAngle = i * 45 + 22.5
                if (Math.sign(lowAngle) == -1) {lowAngle += 360}
                if (Math.sign(angle) == -1) {angle += 360}
                if ((i == 0 && (angle >= 337.5 || angle <= 22.5)) || (lowAngle <= angle && angle <= highAngle)) {
                    entityEnemy.movement.x = cardinals[i][0]
                    entityEnemy.movement.y = cardinals[i][1]
                    entityEnemy.movement.cardinal = i
                };
            };
        };
    });
}
//query all and do their next action. Attack else move
//TODO: Movement for velocity > 1. Increment through each step to determine if next step is clear/adjacent to target
//TODO: Maybe randomize the direction zombies decide to go when blocked.
function doAction(time) {
    query.all.get().forEach((entity) => {
        //action available
        if (time - entity.action.last >= entity.action.adjusted) {
            //target available
            if (world.getEntity(entity.combat.target)) {
                //if adjacent to target
                if (Math.abs(entity.combat.x - entity.position.x) <= 1 && Math.abs(entity.combat.y - entity.position.y) <= 1) {
                    //adjacent
                //TODO:Velocity
                } else {
                    if (!locationId[(entity.position.x + entity.movement.x) + "," + (entity.position.y + entity.movement.y)]) {
                        //empty
                    } else {
                        //front left
                        if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal + 1) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal + 1) % 8)[1])]) {
                            entity.movement.x = cardinals.at((entity.movement.cardinal + 1) % 8)[0]
                            entity.movement.y = cardinals.at((entity.movement.cardinal + 1) % 8)[1]
                        //front right
                        } else if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal - 1) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal - 1) % 8)[1])]) {
                            entity.movement.x = cardinals.at((entity.movement.cardinal - 1) % 8)[0]
                            entity.movement.y = cardinals.at((entity.movement.cardinal - 1) % 8)[1]
                        //side left
                        } else if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal + 2) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal + 2) % 8)[1])]) {
                            entity.movement.x = cardinals.at((entity.movement.cardinal + 2) % 8)[0]
                            entity.movement.y = cardinals.at((entity.movement.cardinal + 2) % 8)[1]
                        //side right
                        } else if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal - 2) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal - 2) % 8)[1])]) {
                            entity.movement.x = cardinals.at((entity.movement.cardinal - 2) % 8)[0]
                            entity.movement.y = cardinals.at((entity.movement.cardinal - 2) % 8)[1]
                        //don't move
                        } else {
                            entity.movement.x = 0
                            entity.movement.y = 0
                        }
                    }
                    delete locationId[entity.position.x + "," + entity.position.y]
                    entity.position.x += entity.movement.x
                    entity.position.y += entity.movement.y
                    locationId[entity.position.x + "," + entity.position.y] = entity.id
                }
            }
            //adjusted action speed = action speed + (action speed - (time since last attack))
            //Any action above or below the action speed will adjust the next action accordingly to keep action speed on average
            //i.e. 1200ms since last action == next action is 800ms instead of 1000ms 
            entity.action.adjusted = entity.action.speed + entity.action.speed - (time - entity.action.last)
            entity.action.last = time
        }
    });
}
    //renderLoop = things to do every loop.
terminal.renderLoop = function(time) {
    //fps display
    if (this.lastRenderTime === 0) {
      this.lastRenderTime = time;
      this.fps = 0;
    } else {
      this.renderDelta = time - this.lastRenderTime;
      this.lastRenderTime = time;
      this.fps = Math.round(1000.0 / this.renderDelta * 100) / 100;
      this.averageFps = 0.95 * this.averageFps + 0.05 * this.fps;

    }
    //updateKeys(time) will send timestamp for the purpose of limiting repeated/held keypresses
    this.keys.updateKeys(time);
    //update(time) will send timestamp for the purpose of limiting repeated/held mouse clicks. Also tracks change in mouse coordinates
    this.mouse.update(time);
    if (this.update) {
      this.update();
    }
    enemyAI(time)
    doAction(time)

    //clear screen
    this.flush();
    this.clear();
    //drawing UI
    //Drawing test pilot player and zombie
    query.all.get().forEach((entity) => {
    this.drawString(entity.position.x, entity.position.y, entity.appearance.char, entity.appearance.color);  
    });
    //drawing FPS
    this.drawString(0,1, String(terminal.fps))
    //render all of the above
    this.render();
    //request webGL to draw to browser
    this.requestAnimationFrame();
}




/*function cookieClick(number){
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
};*/