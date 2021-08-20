import * as wglt from "wglt";
import engine from './ecs';
import {Ally, Appearance, Combat, Description, Enemy, hasMoved, Health, Position, Action, Movement} from "./components"


var locationId = {}
const terminalx = 82
const terminaly = 52
//creating the map in "canvas" width = 80, height = 50
const terminal = new wglt.Terminal(document.querySelector('canvas'), terminalx, terminaly);

//WGLT leftovers. Setting the whole map as explored and visible to the player
for (let y = 0; y < terminal.height; y++) {
    for (let x = 0; x < terminal.width; x++) {
        terminal.grid[y][x].visible = true
        terminal.grid[y][x].explored = true
    }
}

//creating world to contain entities in order to enable query
const world = engine.createWorld();

//terminal border
//top
for( let i = 0; i <terminalx; i++) {
    let structure = world.createPrefab("Structure")
    structure.position.x = i
    locationId[structure.position.x + "," + structure.position.y] = structure.id

}
//left
for( let i = 0; i <terminaly; i++) {
    let structure = world.createPrefab("Structure")
    structure.position.y = i
    locationId[structure.position.x + "," + structure.position.y] = structure.id
}
//bottom
for( let i = 0; i <terminalx; i++) {
    let structure = world.createPrefab("Structure")
    structure.position.x = i
    structure.position.y = terminaly - 1
    locationId[structure.position.x + "," + structure.position.y] = structure.id
}
//right
for( let i = 0; i <terminaly; i++) {
    let structure = world.createPrefab("Structure")
    structure.position.y = i
    structure.position.x = terminalx - 1
    locationId[structure.position.x + "," + structure.position.y] = structure.id
}
//player = human test pilot
const playerx = 40
const playery = 2
for (let i = 0; i < playerx; i++) {
    for (let j = 0; j < playery; j++) {
    let player = world.createPrefab("Human")
    player.position.x = 80/2-playerx/2+i+1
    player.position.y = 40+j
    locationId[player.position.x + "," + player.position.y] = player.id
    }
}
//zombie = zombie test pilot
const zombiex = 60
const zombiey = 10
for (let i = 0; i < zombiex; i++) {
    for (let j = 0; j < zombiey; j++) {
        let zombie = world.createPrefab("Zombie")
        zombie.position.x = 80/2-zombiex/2+i+1
        zombie.position.y = 1+j
        locationId[zombie.position.x + "," + zombie.position.y] = zombie.id
    }  
}
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
    action : world.createQuery({
        all: [Action],
    })
}; 

//cardinal direction for movement
const cardinals = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]

function killEntity(entity){
delete locationId[entity.position.x + "," + entity.position.y]
entity.destroy()
}

//Collective of all enemy AI
//AI needs to have targetting, attacking, moving
function enemyAI(entityEnemy, time) {
    if (entityEnemy.description.name == "Zombie") {
        //action available
        if (time - entityEnemy.action.last >= entityEnemy.action.adjusted) {
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
            }
                //target available
                if (world.getEntity(entityEnemy.combat.target)) {
                    //if adjacent to target
                    if (Math.abs(entityEnemy.combat.x - entityEnemy.position.x) <= 1 && Math.abs(entityEnemy.combat.y - entityEnemy.position.y) <= 1) {
                        //adjacent
                    //TODO:Velocity
                    } else {
                        if (!locationId[(entityEnemy.position.x + entityEnemy.movement.x) + "," + (entityEnemy.position.y + entityEnemy.movement.y)]) {
                            //empty
                        } else {
                            //decide which directions are viable to go to
                            let randomDirection = []
                            //front left
                            if (!locationId[(entityEnemy.position.x + cardinals.at((entityEnemy.movement.cardinal + 1) % 8)[0]) + "," + (entityEnemy.position.y + cardinals.at((entityEnemy.movement.cardinal + 1) % 8)[1])]) {
                                randomDirection.push("Front Left")
                            //front right
                            } if (!locationId[(entityEnemy.position.x + cardinals.at((entityEnemy.movement.cardinal - 1) % 8)[0]) + "," + (entityEnemy.position.y + cardinals.at((entityEnemy.movement.cardinal - 1) % 8)[1])]) {
                                randomDirection.push("Front Right")

                            //side left
                            } if (!locationId[(entityEnemy.position.x + cardinals.at((entityEnemy.movement.cardinal + 2) % 8)[0]) + "," + (entityEnemy.position.y + cardinals.at((entityEnemy.movement.cardinal + 2) % 8)[1])]) {
                                randomDirection.push("Side Left")

                            //side right
                            } if (!locationId[(entityEnemy.position.x + cardinals.at((entityEnemy.movement.cardinal - 2) % 8)[0]) + "," + (entityEnemy.position.y + cardinals.at((entityEnemy.movement.cardinal - 2) % 8)[1])]) {
                                randomDirection.push("Side Right")

                            //don't move
                            }
                            //randomly pick a valid direction to move to, or none
                            switch (randomDirection[Math.floor(Math.random() * randomDirection.length)]){
                            case 'Front Left':
                                entityEnemy.movement.x = cardinals.at((entityEnemy.movement.cardinal + 1) % 8)[0]
                                entityEnemy.movement.y = cardinals.at((entityEnemy.movement.cardinal + 1) % 8)[1]
                                break;
                            case 'Front Right':
                                entityEnemy.movement.x = cardinals.at((entityEnemy.movement.cardinal - 1) % 8)[0]
                                entityEnemy.movement.y = cardinals.at((entityEnemy.movement.cardinal - 1) % 8)[1]
                                break;
                            case 'Side Left':
                                entityEnemy.movement.x = cardinals.at((entityEnemy.movement.cardinal + 2) % 8)[0]
                                entityEnemy.movement.y = cardinals.at((entityEnemy.movement.cardinal + 2) % 8)[1]
                                break;
                            case 'Side Right':
                                entityEnemy.movement.x = cardinals.at((entityEnemy.movement.cardinal - 2) % 8)[0]
                                entityEnemy.movement.y = cardinals.at((entityEnemy.movement.cardinal - 2) % 8)[1]
                                break;
                            case 'None':
                            case undefined:
                                entityEnemy.movement.x = 0
                                entityEnemy.movement.y = 0
                                break;
                            }
                        }
                        delete locationId[entityEnemy.position.x + "," + entityEnemy.position.y]
                        entityEnemy.position.x += entityEnemy.movement.x
                        entityEnemy.position.y += entityEnemy.movement.y
                        locationId[entityEnemy.position.x + "," + entityEnemy.position.y] = entityEnemy.id
                        entityEnemy.add(hasMoved)
                    }
                }
                //adjusted action speed = action speed + (action speed - (time since last attack))
                //Any action above or below the action speed will adjust the next action accordingly to keep action speed on average
                //i.e. 1200ms since last action == next action is 800ms instead of 1000ms
                //multiplier is for speeding up actions. i.e. velocity of 2 = move twice as fast. 1000ms/2=500ms cooldown
                let multiplier = 1
                if (entityEnemy.has(hasMoved)) {
                    multiplier = entityEnemy.movement.velocity
                    entityEnemy.remove(entityEnemy.hasMoved)
                }
                    entityEnemy.action.adjusted = (entityEnemy.action.speed + entityEnemy.action.speed - (time - entityEnemy.action.last))/multiplier
                    entityEnemy.action.last = time
            };
        };
    };

function allyAI(entityAlly, time) {
    if (entityAlly.description.name == "Human") {
        //action available
        if (time - entityAlly.action.last >= entityAlly.action.adjusted) { 
            //get a target
            let target = world.getEntity(entityAlly.combat.target)
            if (!target) {
                //Determine target based on first zombie found within range 1
                let randomTarget = []
                query.enemies.get().forEach(entityEnemy => {
                    if (Math.abs(entityAlly.position.x - entityEnemy.position.x) <= 1 && Math.abs(entityAlly.position.y - entityEnemy.position.y) <= 1) {
                        randomTarget.push([entityEnemy.id, entityEnemy.position.x, entityEnemy.position.y])
                    };
                });
                if (randomTarget.length > 0) {
                    let selectedTarget = randomTarget[Math.floor(Math.random() * randomTarget.length)]
                    entityAlly.combat.target = selectedTarget[0]
                    entityAlly.combat.x = selectedTarget[1]
                    entityAlly.combat.y = selectedTarget[2]
                };
                //have a target
            } else {
                target.appearance.color = wglt.Colors.LIGHT_RED
                target.fireEvent("damage-taken", {damage:1})
                if (target.health.hp <= 0) {
                    killEntity(target)
                    entityAlly.combat.target = ""
                    entityAlly.combat.x = 0
                    entityAlly.combat.y = 0
                }

            }
                //target available
                if (world.getEntity(entityAlly.combat.target)) {
                    //if adjacent to target
                };
                //adjusted action speed = action speed + (action speed - (time since last attack))
                //Any action above or below the action speed will adjust the next action accordingly to keep action speed on average
                //i.e. 1200ms since last action == next action is 800ms instead of 1000ms
                //multiplier is for speeding up actions. i.e. velocity of 2 = move twice as fast. 1000ms/2=500ms cooldown
                let multiplier = 1
                if (entityAlly.has(hasMoved)) {
                    multiplier = entityAlly.movement.velocity
                    entityAlly.remove(entityAlly.hasMoved)
                }
                entityAlly.action.adjusted = (entityAlly.action.speed + entityAlly.action.speed - (time - entityAlly.action.last))/multiplier
                entityAlly.action.last = time
            };
    }
}
//query all and do their next action. Attack else move
//TODO: Movement for velocity > 1. Increment through each step to determine if next step is clear/adjacent to target
//TODO: Maybe randomize the direction zombies decide to go when blocked.
function doAction(time) {
    query.action.get().forEach((entity) => {
        if (entity.has(Enemy)) {
            enemyAI(entity, time)
        } else if (entity.has(Ally)) {
            allyAI(entity, time)
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
    doAction(time)

    //clear screen
    this.flush();
    this.clear();
    //drawing UI
    //Drawing test pilot player and zombie
    query.all.get().forEach((entity) => {
        if (!entity.isDestroyed) {
            this.drawString(entity.position.x, entity.position.y, entity.appearance.char, entity.appearance.color);  
    }
    });
    //drawing FPS
    this.drawString(0,1, String(terminal.fps))
    //render all of the above
    this.render();
    //request webGL to draw to browser
    this.requestAnimationFrame();
}