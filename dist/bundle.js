/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allyAI": () => (/* binding */ allyAI),
/* harmony export */   "doAction": () => (/* binding */ doAction),
/* harmony export */   "enemyAI": () => (/* binding */ enemyAI),
/* harmony export */   "entityAI": () => (/* binding */ entityAI)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/esm/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/*
Modular AI:
    functions in order to make it easy to switch in and out different AI into enemies/golems.
    **Movement**
    zombie horde-esque movement
    formational marching forward
    formation reinforcing from spawn
    **Targetting**
    target nearest
    dumb target adjacent random
    formation-attack neighbor's targets
    formation-phalanx attack in columns forward
    --Targetting: Find a way to include range
    --Targetting: Add targetting cooldown to reduce processing load. I.e., update every 5 actions.
    Target random in range
    Target random globally
*/




let entityAI = {
    movement: {
        //move like a zombie horde. Requires entity, a target, movement direction
        horde: function(entity) {
            let cardinals = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]
            //determine cardinal movement to nearest enemy
            for (let i = 0; i < 8; i++) {
                let angle = Math.atan2(entity.combat.x - entity.position.x, entity.combat.y - entity.position.y)* 180 / Math.PI
                let lowAngle = i * 45 - 22.5
                let highAngle = i * 45 + 22.5
                if (Math.sign(lowAngle) == -1) {lowAngle += 360}
                if (Math.sign(angle) == -1) {angle += 360}
                if ((i == 0 && (angle >= 337.5 || angle <= 22.5)) || (lowAngle <= angle && angle <= highAngle)) {
                    entity.movement.x = cardinals[i][0]
                    entity.movement.y = cardinals[i][1]
                    entity.movement.cardinal = i
                };
            }
            //determine if path forward is empty
            if (!locationId[(entity.position.x + entity.movement.x) + "," + (entity.position.y + entity.movement.y)]) {
                //empty, move straight towards target
            } else {
                //decide which directions are viable to go to
                let randomDirection = []
                //front left
                if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal + 1) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal + 1) % 8)[1])]) {
                    randomDirection.push("Front Left")
                //front right
                } if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal - 1) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal - 1) % 8)[1])]) {
                    randomDirection.push("Front Right")

                //side left
                } if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal + 2) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal + 2) % 8)[1])]) {
                    randomDirection.push("Side Left")

                //side right
                } if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal - 2) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal - 2) % 8)[1])]) {
                    randomDirection.push("Side Right")
                }
                //randomly pick a valid direction to move to, or none
                switch (randomDirection[Math.floor(Math.random() * randomDirection.length)]){
                case 'Front Left':
                    entity.movement.x = cardinals.at((entity.movement.cardinal + 1) % 8)[0]
                    entity.movement.y = cardinals.at((entity.movement.cardinal + 1) % 8)[1]
                    break;
                case 'Front Right':
                    entity.movement.x = cardinals.at((entity.movement.cardinal - 1) % 8)[0]
                    entity.movement.y = cardinals.at((entity.movement.cardinal - 1) % 8)[1]
                    break;
                case 'Side Left':
                    entity.movement.x = cardinals.at((entity.movement.cardinal + 2) % 8)[0]
                    entity.movement.y = cardinals.at((entity.movement.cardinal + 2) % 8)[1]
                    break;
                case 'Side Right':
                    entity.movement.x = cardinals.at((entity.movement.cardinal - 2) % 8)[0]
                    entity.movement.y = cardinals.at((entity.movement.cardinal - 2) % 8)[1]
                    break;
                case 'None':
                case undefined:
                    entity.movement.x = 0
                    entity.movement.y = 0
                    break;
                }
            }
            //update locationId and set new position
            delete locationId[entity.position.x + "," + entity.position.y]
            entity.position.x += entity.movement.x
            entity.position.y += entity.movement.y
            locationId[entity.position.x + "," + entity.position.y] = entity.id
            //informs action timer that the last action was movement and requires velocity multiplier
            entity.add(_components__WEBPACK_IMPORTED_MODULE_0__.hasMoved)
        }
    },
    target: {
        //target nearest. requires entity, and team of target: "enemies", "allies"
        nearest: function(entity, team, cooldown) {
            if (entity.combat.targetCooldown <= 0) {
                entity.combat.targetCooldown = cooldown
                let distance = 0
                //Determine closest player ally to zombie
                query[team].get().forEach((entityTarget) => {
                    if (Math.hypot((entity.position.x - entityTarget.position.x),(entity.position.y - entityTarget.position.y)) < distance || distance == 0) {
                        entity.combat.x = entityTarget.position.x
                        entity.combat.y = entityTarget.position.y
                        entity.combat.target = entityTarget.id
                        distance = Math.hypot((entity.position.x - entityTarget.position.x),(entity.position.y - entityTarget.position.y))
                    };
                });
                entity.combat.distance = distance
            } else {
                entity.combat.targetCooldown -= 1
            }
        },
        //target adjacent, requires entity, team of target: "enemies", "allies"
        adjacent: function(entity, team, cooldown) {
            if (entity.combat.targetCooldown <= 0) {
                entity.combat.targetCooldown = cooldown
                //Determine target based on first zombie found within range 1
                let randomTarget = []
                query[team].get().forEach(entityEnemy => {
                    if (Math.abs(entity.position.x - entityEnemy.position.x) <= 1 && Math.abs(entity.position.y - entityEnemy.position.y) <= 1) {
                        randomTarget.push([entityEnemy.id, entityEnemy.position.x, entityEnemy.position.y])
                    };
                });
                if (randomTarget.length > 0) {
                    let selectedTarget = randomTarget[Math.floor(Math.random() * randomTarget.length)]
                    entity.combat.target = selectedTarget[0]
                    entity.combat.x = selectedTarget[1]
                    entity.combat.y = selectedTarget[2]
                };
            } else {
                entity.combat.targetCooldown -= 1
            }
        }
    }
}


//Collective of all enemy AI
//AI needs to have targetting, attacking, moving
function enemyAI(entityEnemy, time) {
    if (entityEnemy.description.name == "Zombie") {
        //action available
        if (time - entityEnemy.action.last >= entityEnemy.action.adjusted) {
            //target available
            if (world.getEntity(entityEnemy.combat.target)) {
                //target in range
                if (Math.abs(entityEnemy.combat.x - entityEnemy.position.x) <= entityEnemy.combat.range && Math.abs(entityEnemy.combat.y - entityEnemy.position.y) <= entityEnemy.combat.range) {
                    //in range and don't move
                } else {
                    //zombie targets nearest ally, 5sec cooldown. Stops tunnel-visioning but slow to respond
                    entityAI.target.nearest(entityEnemy, "allies", 5)
                    entityAI.movement.horde(entityEnemy)    
                }
            } else {
                //zombie targets nearest ally, .1sec cooldown
                entityAI.target.nearest(entityEnemy, "allies", .1)      
            }
                //adjusted action speed = action speed + (action speed - (time since last attack))
                //Any action above or below the action speed will adjust the next action accordingly to keep action speed on average
                //i.e. 1200ms since last action == next action is 800ms instead of 1000ms
                //multiplier is for speeding up actions. i.e. velocity of 2 = move twice as fast. 1000ms/2=500ms cooldown
                let multiplier = 1
                if (entityEnemy.has(_components__WEBPACK_IMPORTED_MODULE_0__.hasMoved)) {
                    multiplier = entityEnemy.movement.velocity
                    entityEnemy.remove(entityEnemy.hasMoved)
                }
                    entityEnemy.action.adjusted = (entityEnemy.action.speed + entityEnemy.action.speed - (time - entityEnemy.action.last))/multiplier
                    entityEnemy.action.last = time
            }
        }
    }
function allyAI(entityAlly, time) {
    if (entityAlly.description.name == "Human") {
        //action available
        if (time - entityAlly.action.last >= entityAlly.action.adjusted) { 
            //get a target
            let target = world.getEntity(entityAlly.combat.target)
            if (!target || Math.abs(entityAlly.position.x - target.position.x) > entityAlly.combat.range  && Math.abs(entityAlly.position.y - target.position.y) > entityAlly.combat.range) {
                if(target) {target.appearance.color = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.DARK_GREEN}
                entityAI.target.adjacent(entityAlly, "enemies", 0)
            //have a target
            } else {
                target.appearance.color = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.LIGHT_RED
                target.fireEvent("damage-taken", {damage:golemancer.golems.damage})
                if (target.health.hp <= target.health.minHp) {
                    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.killEntity)(target)
                    entityAlly.combat.target = ""
                    entityAlly.combat.x = 0
                    entityAlly.combat.y = 0
                }

            }
                //target available
                if (world.getEntity(entityAlly.combat.target)) {
                    //if adjacent to target
                }
                //adjusted action speed = action speed + (action speed - (time since last attack))
                //Any action above or below the action speed will adjust the next action accordingly to keep action speed on average
                //i.e. 1200ms since last action == next action is 800ms instead of 1000ms
                //multiplier is for speeding up actions. i.e. velocity of 2 = move twice as fast. 1000ms/2=500ms cooldown
                let multiplier = 1
                if (entityAlly.has(_components__WEBPACK_IMPORTED_MODULE_0__.hasMoved)) {
                    multiplier = entityAlly.movement.velocity
                    entityAlly.remove(entityAlly.hasMoved)
                }
                //TODO:move golemancer into entity stats
                entityAlly.action.adjusted = (1000/golemancer.golems.attackSpeed + 1000/golemancer.golems.attackSpeed - (time - entityAlly.action.last))/multiplier
                //entityAlly.action.adjusted = (entityAlly.action.speed + entityAlly.action.speed - (time - entityAlly.action.last))/multiplier
                entityAlly.action.last = time
            }
    }
}

//query all and do their next action
//TODO: Movement for velocity > 1. Increment through each step to determine if next step is clear/adjacent to target
//TODO: Maybe randomize the direction zombies decide to go when blocked.
function doAction(time) {
    //reset stats for bottom display
    golemancer.terminal.enemyCount = 0
    golemancer.terminal.allyCount = 0
    golemancer.terminal.enemyHealth = 0
    golemancer.terminal.allyHealth = 0
    golemancer.terminal.enemyMaxHealth = 0
    golemancer.terminal.allyMaxHealth = 0
    golemancer.terminal.enemyMinHealth = 0
    golemancer.terminal.allyMinHealth = 0

    query.action.get().forEach((entity) => {
        if (entity.has(_components__WEBPACK_IMPORTED_MODULE_0__.Enemy)) {
            golemancer.terminal.enemyCount++
            golemancer.terminal.enemyHealth += entity.health.hp
            golemancer.terminal.enemyMaxHealth += entity.health.maxHp
            golemancer.terminal.enemyMinHealth += entity.health.minHp
            enemyAI(entity, time)
        } else if (entity.has(_components__WEBPACK_IMPORTED_MODULE_0__.Ally)) {
            golemancer.terminal.allyCount++
            golemancer.terminal.allyHealth += entity.health.hp
            golemancer.terminal.allyMaxHealth += entity.health.maxHp
            golemancer.terminal.allyMinHealth += entity.health.minHp
            allyAI(entity, time)
        }
        
    })
}

/***/ }),

/***/ "./src/ascii/loader.js":
/*!*****************************!*\
  !*** ./src/ascii/loader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _human_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./human.txt */ "./src/ascii/human.txt");




 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    human: _human_txt__WEBPACK_IMPORTED_MODULE_0__
});

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "Ally": () => (/* binding */ Ally),
/* harmony export */   "Appearance": () => (/* binding */ Appearance),
/* harmony export */   "Combat": () => (/* binding */ Combat),
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "Enemy": () => (/* binding */ Enemy),
/* harmony export */   "Health": () => (/* binding */ Health),
/* harmony export */   "Movement": () => (/* binding */ Movement),
/* harmony export */   "Position": () => (/* binding */ Position),
/* harmony export */   "hasMoved": () => (/* binding */ hasMoved)
/* harmony export */ });
/* harmony import */ var geotic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geotic */ "./node_modules/geotic/build/index.js");
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/esm/index.js");




class Ally extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
    };
}
//declaring components
//char = displayed character, color = displayed color
class Appearance extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        char: "@",
        color: wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.WHITE
    }
}
//target = current primary target
class Combat extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        target: "",
        targetCooldown: 0,
        range: 1,
        x: 0,
        y: 0,
        distance: 0,
        damage: 1,
        attackSpeed: 1000
    }
}
//name = name of object, desc = description of object
class Description extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        desc: ""
    }
}
class Enemy extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
    };
}
//hp = current health, maxHp = maximum health allowed
class hasMoved extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {}
}
class Health extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        hp: 1,
        maxHp: 1,
        minHp: 0
    }
    reduce(amount) {
        this.hp = this.hp-amount
    }
    heal(amount) {
        this.hp = this.hp+amount
    }
    onDamageTaken(event) {
        if (event.data.damage > 0) {
            this.reduce(event.data.damage)
        } else {
            this.heal(event.data.damage)
        }
    }
}
//x,y = x,y coordinate position on display
class Position extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        x: 0,
        y: 0
    };
}
//action = action speed in milliseconds i.e. how fast all actions such as moving and attacking are done
class Action extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        speed: 1000,
        last: 0,
        adjusted: 1000
    }
}
//x = horizontal movement speed, y = vertical movement speed. i.e. per movement action move up to x/y velocity.
class Movement extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        velocity: 1,
        x: 0,
        y: 0,
        cardinal: 0
    };
}



/***/ }),

/***/ "./src/ecs.js":
/*!********************!*\
  !*** ./src/ecs.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var geotic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geotic */ "./node_modules/geotic/build/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities */ "./src/entities.js");




//creating geotic engine
const engine = new geotic__WEBPACK_IMPORTED_MODULE_0__.Engine();
//associating components
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Ally)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Appearance)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Combat)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Description)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Enemy)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.hasMoved)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Health)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Position)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Action)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Movement)
//associating prefabs
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Being)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Human)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Structure)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Zombie)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Vertical)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Horizontal)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.BottomLeft)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.BottomRight)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.TopLeft)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.TopRight)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.TLeft)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.TRight)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.SingleHorizontal)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.SingleVertical)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (engine);

/***/ }),

/***/ "./src/entities.js":
/*!*************************!*\
  !*** ./src/entities.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Being": () => (/* binding */ Being),
/* harmony export */   "BottomLeft": () => (/* binding */ BottomLeft),
/* harmony export */   "BottomRight": () => (/* binding */ BottomRight),
/* harmony export */   "Horizontal": () => (/* binding */ Horizontal),
/* harmony export */   "Human": () => (/* binding */ Human),
/* harmony export */   "SingleHorizontal": () => (/* binding */ SingleHorizontal),
/* harmony export */   "SingleVertical": () => (/* binding */ SingleVertical),
/* harmony export */   "Structure": () => (/* binding */ Structure),
/* harmony export */   "TLeft": () => (/* binding */ TLeft),
/* harmony export */   "TRight": () => (/* binding */ TRight),
/* harmony export */   "TopLeft": () => (/* binding */ TopLeft),
/* harmony export */   "TopRight": () => (/* binding */ TopRight),
/* harmony export */   "Vertical": () => (/* binding */ Vertical),
/* harmony export */   "Zombie": () => (/* binding */ Zombie)
/* harmony export */ });
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/esm/index.js");

//default "Being"mob with related components
let Being = {
    name: "Being",
    components: [
        {
            type: "Appearance",
        },
        {
            type: "Combat",
        },
        {
            type: "Description",
            properties: {
                name: "Being",
                desc: "Nondescript being."
            }
        },
        {
            type: "Health",
            properties: {
                hp: 10,
                maxHp: 10
            },
        },
        {
            type: "Position",
        },
        { type: "Action", 
        },
        {
            type: "Movement",
        },

    ],
};
//default "Human" subtype of "Being"
let Human = {
   name: "Human",
   inherit: "Being",
   components: [
    
    {
        type: "Ally",
            properties: {},
    },
    {
        type: "Appearance",
            properties: {
                char: "@",
                color: wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.LIGHT_MAGENTA
            },
    },
    {
        type: "Description",
        properties: {
            name: "Human",
            desc: "A human being."
        }
    },
    
   ] 
}
//default "Zombie" subtype of "Being"
let Zombie = {
    name: "Zombie",
    inherit: "Being",
    components: [
    {
        type: "Appearance",
          properties: {
            char: "Z",
            color: wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GREEN
       }
    },
    {
         type: "Description",
         properties: {
             name: "Zombie",
             desc: "A zombie."
         }
     },
     {
        type: "Enemy",
        properties: {}
     },     
     {
         type: "Movement",
         properties: {
             velocity: 5,
         },
     },
    ] 
}

let Structure = {
    name: "Structure",
    components: [
        {
            type: "Appearance",
              properties: {
                    char: "X",
                    color: wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.WHITE
            }
        },
        {
            type: "Description",
            properties: {
                name: "Structure",
                desc: "Nondescript structure."
            }
        },
        {
            type: "Position",
        },
    ]
}

let Horizontal = {
    name: "Horizontal",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xCD,
                }
        }
    ]
}

let Vertical = {
    name: "Vertical",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xBA,
                }
        }
    ]
}

let BottomLeft = {
    name: "BottomLeft",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xC8,
                }
        }
    ]
}

let BottomRight = {
    name: "BottomRight",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xBC,
                }
        }
    ]
}

let TopLeft = {
    name: "TopLeft",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xC9,
                }
        }
    ]
}

let TopRight = {
    name: "TopRight",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xBB,
                }
        }
    ]
}

let TRight = {
    name: "TRight",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xB9,
                }
        }
    ]
}

let TLeft = {
    name: "TLeft",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xCC,
                }
        }
    ]
}
let SingleHorizontal = {
    name: "Single Horizontal",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xC4,
                }
        }
    ]
}

let SingleVertical = {
    name: "Single Vertical",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xB3,
                }
        }
    ]
}

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttons": () => (/* binding */ buttons),
/* harmony export */   "killEntity": () => (/* binding */ killEntity),
/* harmony export */   "onBuyAttackSpeedClick": () => (/* binding */ onBuyAttackSpeedClick),
/* harmony export */   "onBuyDamageClick": () => (/* binding */ onBuyDamageClick),
/* harmony export */   "onBuyGolemClick": () => (/* binding */ onBuyGolemClick),
/* harmony export */   "onShopClick": () => (/* binding */ onShopClick)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");


function killEntity(entity) {
    if (entity.has(_components__WEBPACK_IMPORTED_MODULE_0__.Enemy)) {
        golemancer.currency.parts += 5
    }
    delete __webpack_require__.g.locationId[entity.position.x + "," + entity.position.y]
    entity.destroy()
}

//clicking the buy golem button, adjusts costs and counters. Cost = 10*golems^1.1
let onBuyGolemClick = function() {
    if (golemancer.currency.parts >= golemancer.golems.cost) {
        golemancer.golems.count++
        golemancer.currency.parts -= golemancer.golems.cost
        golemancer.golems.cost = Math.floor(10*Math.pow(1.1, golemancer.golems.count))
    }
}

let onBuyDamageClick = function() {
    if (golemancer.currency.parts >= golemancer.golems.damageCost) {
        golemancer.golems.damage++
        golemancer.currency.parts -= golemancer.golems.damageCost
        golemancer.golems.damageCost = Math.floor(20*Math.pow(1.1, golemancer.golems.damage))
    }
}
let onBuyAttackSpeedClick = function() {
    if (golemancer.currency.parts >= golemancer.golems.attackSpeedCost) {
        golemancer.golems.attackSpeed++
        golemancer.currency.parts -= golemancer.golems.attackSpeedCost
        golemancer.golems.attackSpeedCost = Math.floor(100*Math.pow(1.1, golemancer.golems.attackSpeed))
    }
}

let onShopClick = function() {
    if (golemancer.terminal.sideDisplay == "upgrades") {
        //shop is open, close shop and side window
        golemancer.terminal.sideDisplay = "none"
        golemancer.terminal.sideMove = true
        golemancer.terminal.sideDir = 0
    } else {
        //shop is closed. Open panel if not open, switch to shop
        golemancer.terminal.sideDisplay = "upgrades"
        if (!golemancer.terminal.sideOut) {
            golemancer.terminal.sideMove = true
            golemancer.terminal.sideDir = 1
        }
    }
}


let buttons = {
    onShopClick,
    onBuyAttackSpeedClick,
    onBuyDamageClick,
    onBuyGolemClick
}

/***/ }),

/***/ "./src/terminal/placement.js":
/*!***********************************!*\
  !*** ./src/terminal/placement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placement": () => (/* binding */ placement)
/* harmony export */ });
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components.js");


function line(terminal, mouseStart) {
    return wglt__WEBPACK_IMPORTED_MODULE_0__.computePath(terminal, mouseStart, terminal.mouse, 1000)
}
function boxRemove(terminal, mouseStart) {
    for (let i = Math.min(mouseStart.x, terminal.mouse.x); i < Math.max(mouseStart.x, terminal.mouse.x); i++) {
        for (let j = Math.min(mouseStart.y, terminal.mouse.y); j < Math.max(mouseStart.y, terminal.mouse.y); j++) {
            let entity = world.getEntity(locationId[i + "," + j])
            if (entity && entity.has(_components__WEBPACK_IMPORTED_MODULE_1__.Ally)) {
                let cell = terminal.getCell(entity.position.x, entity.position.y)
                cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
            }
        }
    }
}
function box(terminal, mouseStart, golemCount, removeBool) {
    let mousePath = []
    let lineCount = 0

    //bottom right box
    if (terminal.mouse.x - mouseStart.x > 0 && terminal.mouse.y - mouseStart.y > 0) {
        terminal.fillRect(mouseStart.x, mouseStart.y, terminal.mouse.x - mouseStart.x, terminal.mouse.y - mouseStart.y, 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (terminal.mouse.y - mouseStart.y); i = i - (terminal.mouse.x - mouseStart.x)) {
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {
                    terminal.drawHLine(mouseStart.x, mouseStart.y + lineCount, Math.min(i, terminal.mouse.x - mouseStart.x), 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    lineCount++
                }
            }
        }
        //bottom left box
    } else if (terminal.mouse.x - mouseStart.x < 0 && terminal.mouse.y - mouseStart.y > 0) {
        terminal.fillRect(terminal.mouse.x, mouseStart.y, (mouseStart.x - terminal.mouse.x) + 1, terminal.mouse.y - mouseStart.y, 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (terminal.mouse.y - mouseStart.y); i = i - ((mouseStart.x - terminal.mouse.x) + 1)) {
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {
                    terminal.drawHLine(terminal.mouse.x + (((mouseStart.x - terminal.mouse.x) + 1) - (Math.min(i, (mouseStart.x - terminal.mouse.x) + 1))), mouseStart.y + lineCount, Math.min(i, (mouseStart.x - terminal.mouse.x) + 1), 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    lineCount++
                }
            }
        }
        //top left box
    } else if (terminal.mouse.x - mouseStart.x < 0 && terminal.mouse.y - mouseStart.y < 0) {
        terminal.fillRect(terminal.mouse.x, terminal.mouse.y + 1, (mouseStart.x - terminal.mouse.x) + 1, mouseStart.y - terminal.mouse.y, 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (mouseStart.y - terminal.mouse.y); i = i - ((mouseStart.x - terminal.mouse.x) + 1)) {    
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {        
                    terminal.drawHLine(terminal.mouse.x + (((mouseStart.x - terminal.mouse.x) + 1) - (Math.min(i, (mouseStart.x - terminal.mouse.x) + 1))), mouseStart.y - lineCount, Math.min(i, (mouseStart.x - terminal.mouse.x) + 1), 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    lineCount++
                }
            }
        }
        //top right box
    } else if (terminal.mouse.x - mouseStart.x > 0 && terminal.mouse.y - mouseStart.y < 0) {
        terminal.fillRect(mouseStart.x, terminal.mouse.y + 1, terminal.mouse.x - mouseStart.x, mouseStart.y - terminal.mouse.y, 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (mouseStart.y - terminal.mouse.y); i = i - (terminal.mouse.x - mouseStart.x)) {    
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {        
                    terminal.drawHLine(mouseStart.x, mouseStart.y - lineCount, Math.min(i, terminal.mouse.x - mouseStart.x), 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    lineCount++
                }
            }
        }
    }
    mousePath[0] = mouseStart
    mousePath[1] = { x: terminal.mouse.x, y: terminal.mouse.y }
    return mousePath
}
let draw = function(terminal, mousePath) {
    let newPath = mousePath
    if (newPath == []) {newPath[0] = mouseStart}
    if (newPath.findIndex( value => value.x  == terminal.mouse.x && value.y == terminal.mouse.y) == -1) {
        newPath.push({x: terminal.mouse.x, y: terminal.mouse.y})
    }
    return newPath
}


let placement = function(terminal, mouseStart, golemCount, mousePath, placementIndex, removeBool){
    if (placementIndex === 0) {
        return line(terminal, mouseStart)
    } else if (placementIndex === 1) {
        return box(terminal, mouseStart, golemCount, removeBool)
    } else if (placementIndex === 2) {
        return draw(terminal, mousePath)
    }

}


/***/ }),

/***/ "./src/terminal/ui.js":
/*!****************************!*\
  !*** ./src/terminal/ui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placement */ "./src/terminal/placement.js");
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/esm/index.js");



 function arenaBorderCreate(golemancer, world) {
//terminal border
//top
    for( let i = 1; i <golemancer.terminal.arenaX - 1; i++) {
        let structure = world.createPrefab("Horizontal")
        structure.position.x = i
        locationId[structure.position.x + "," + structure.position.y] = structure.id

    }
    //left
    for( let i = 1; i < golemancer.terminal.arenaY - 1; i++) {
        let structure = world.createPrefab("Vertical")
        structure.position.y = i
        locationId[structure.position.x + "," + structure.position.y] = structure.id
    }
    //bottom
    for( let i = 1; i <golemancer.terminal.arenaX - 1; i++) {
        let structure = world.createPrefab("Horizontal")
        structure.position.x = i
        structure.position.y = golemancer.terminal.arenaY - 1
        locationId[structure.position.x + "," + structure.position.y] = structure.id
    }
    //right
    for( let i = 1; i <golemancer.terminal.arenaY - 1; i++) {
        let structure = world.createPrefab("Vertical")
        structure.position.y = i
        structure.position.x = golemancer.terminal.arenaX - 1
        locationId[structure.position.x + "," + structure.position.y] = structure.id
    }
    world.createPrefab("TopLeft", {position:{x: 0,y: 0}})
    world.createPrefab("TopRight", {position:{x: golemancer.terminal.arenaX-1,y: 0}})
    world.createPrefab("TLeft", {position:{x: 0,y: golemancer.terminal.arenaY-1}})
    world.createPrefab("TRight", {position:{x: golemancer.terminal.arenaX-1,y: golemancer.terminal.arenaY-1}})
}

function bottomMenuBorderCreate(golemancer, world) {
//left
for(let i = golemancer.terminal.bottomY - 2; i > golemancer.terminal.arenaY - 1;i--) {
        let structure = world.createPrefab("Vertical")
        structure.position.y = i
        locationId[structure.position.x + "," + structure.position.y] = structure.id
    }
    //bottom
    for( let i = 1; i <golemancer.terminal.bottomX - 1; i++) {
        let structure = world.createPrefab("Horizontal")
        structure.position.x = i
        structure.position.y = golemancer.terminal.bottomY - 1
        locationId[structure.position.x + "," + structure.position.y] = structure.id
    }
    //right
    for(let i = golemancer.terminal.bottomY - 2; i > golemancer.terminal.arenaY - 1;i--) {
        let structure = world.createPrefab("Vertical")
        structure.position.y = i
        structure.position.x = golemancer.terminal.bottomX - 1
        locationId[structure.position.x + "," + structure.position.y] = structure.id

        world.createPrefab("BottomLeft", {position:{x: 0,y: golemancer.terminal.bottomY-1}})
        world.createPrefab("BottomRight", {position:{x: golemancer.terminal.arenaX-1,y: golemancer.terminal.bottomY-1}})

    }
}

function bottomMenuUpdate(terminal) {
    let allyStringLength = Math.floor(20 * (golemancer.terminal.allyHealth / (golemancer.terminal.allyMaxHealth + Math.abs(golemancer.terminal.allyMinHealth))))
    let allyString = ""
    for (;allyString.length < allyStringLength;) {
        allyString += "#"
    }
    let enemyStringLength = Math.floor(20 * (golemancer.terminal.enemyHealth / (golemancer.terminal.enemyMaxHealth + Math.abs(golemancer.terminal.enemyMinHealth))))
    let enemyString = ""
    for (;enemyString.length < enemyStringLength;) {
        enemyString += "#"
    }
    //rudimentary bar
    terminal.drawString(1,52, allyString + "\n" + allyString + "\n     (" + golemancer.terminal.allyHealth + "/" + golemancer.terminal.allyMaxHealth + ")\nAllies: " + golemancer.terminal.allyCount)
    //rudimentary health bar
    terminal.drawString(81-enemyString.length,52,enemyString + "\n" + enemyString)
    terminal.drawString(61,54, "     (" + golemancer.terminal.enemyHealth + "/" + golemancer.terminal.enemyMaxHealth + ")\nEnemies: " + golemancer.terminal.enemyCount)

    //shop button
    let buttonColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.WHITE
    if (golemancer.terminal.sideDisplay == "upgrades") {
        buttonColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.LIGHT_GREEN
    }
    terminal.drawHLine(1, golemancer.terminal.bottomY - 5, 10, 0xC4, buttonColor)
    terminal.drawVLine(11, golemancer.terminal.bottomY - 4, 3, 0xB3, buttonColor)
    terminal.drawString(2, golemancer.terminal.bottomY - 3, "UPGRADES", buttonColor)

    //buttons for line, box, draw
    let lineColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.WHITE
    let boxColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.WHITE
    let drawColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.WHITE

    switch(golemancer.placement.index) {
        case 0:
            lineColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.LIGHT_GREEN
            break;
        case 1:
            boxColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.LIGHT_GREEN
            break;
        case 2:
            drawColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.LIGHT_GREEN
            break;
    }
    
    terminal.drawVLine(25, 52, 3, 0xB3, lineColor)
    terminal.drawVLine(30, 52, 3, 0xB3, lineColor)
    terminal.drawHLine(26, 55, 4, 0xC4, lineColor)
    terminal.drawString(26, 53, "LINE", lineColor)

    terminal.drawVLine(31, 52, 3, 0xB3, boxColor)
    terminal.drawVLine(36, 52, 3, 0xB3, boxColor)
    terminal.drawHLine(32, 55, 4, 0xC4, boxColor)
    terminal.drawString(32, 53, "BOX", boxColor)
    
    terminal.drawVLine(37, 52, 3, 0xB3, drawColor)
    terminal.drawVLine(42, 52, 3, 0xB3, drawColor)
    terminal.drawHLine(38, 55, 4, 0xC4, drawColor)
    terminal.drawString(38, 53, "DRAW", drawColor)

}

function sideMenuOut(terminal, index) {
    terminal.drawVLine(index - 1, 0,golemancer.terminal.sideY, 0xB3)
    terminal.drawHLine(golemancer.terminal.arenaX, 0, index - golemancer.terminal.arenaX, 0xC4)
    terminal.drawHLine(golemancer.terminal.arenaX, golemancer.terminal.sideY-1, index - golemancer.terminal.arenaX, 0xC4)
    if(golemancer.terminal.sideOut) {
        return
    }
    if (index == golemancer.terminal.sideX) {
        golemancer.terminal.sideMove = false
        golemancer.terminal.sideDir = 0
        golemancer.terminal.sideOut = true
    } else {
        golemancer.terminal.sideIndex++
    }
}

function sideMenuIn(terminal, index) {
    terminal.drawVLine(index - 1, 0,golemancer.terminal.sideY, 0xB3)
    terminal.drawHLine(golemancer.terminal.arenaX, 0, index - golemancer.terminal.arenaX, 0xC4)
    terminal.drawHLine(golemancer.terminal.arenaX, golemancer.terminal.sideY-1, index - golemancer.terminal.arenaX, 0xC4)
    if (index == golemancer.terminal.arenaX + 1) {
        golemancer.terminal.sideMove = false
        golemancer.terminal.sideDir = 1
        golemancer.terminal.sideOut = false
    } else {
        golemancer.terminal.sideIndex--
    }
}

function sideMenuUpdate(terminal) {
    if (golemancer.terminal.sideOut) {
        switch(golemancer.terminal.sideDisplay) {
            case "upgrades":
                terminal.drawString(golemancer.terminal.arenaX, 1, "                UPGRADES")
                terminal.drawString(golemancer.terminal.arenaX, 4,
                    "Damage: " + golemancer.golems.damage + 
                    "\n\nCost: " + golemancer.golems.damageCost + 
                    "\n\n\n\nAttack Speed: " + golemancer.golems.attackSpeed +
                    "\n\nCost: " + golemancer.golems.attackSpeedCost + 
                    "\n\n\n\nGolems: " + golemancer.golems.count + 
                    "\n\nCost: " + golemancer.golems.cost
                )
                //damage button
                let damageColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.DARK_GRAY
                if (golemancer.golems.damageCost <= golemancer.currency.parts) {
                    damageColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.WHITE
                }
                terminal.drawHLine(golemancer.terminal.sideX - 11, 3, 10, 0xC4, damageColor)
                terminal.drawHLine(golemancer.terminal.sideX - 11, 7, 10, 0xC4, damageColor)
                terminal.drawVLine(golemancer.terminal.sideX - 11, 4, 3, 0xB3, damageColor)
                terminal.drawVLine(golemancer.terminal.sideX - 2, 4, 3, 0xB3, damageColor)
                terminal.drawString(golemancer.terminal.sideX - 8, 4, "Buy", damageColor)
                terminal.drawString(golemancer.terminal.sideX - 9, 6, "Damage", damageColor)

                //Attack Speed button
                let attackSpeedColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.DARK_GRAY
                if (golemancer.golems.attackSpeedCost <= golemancer.currency.parts) {
                    attackSpeedColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.WHITE
                }
                terminal.drawHLine(golemancer.terminal.sideX - 11, 9, 10, 0xC4, attackSpeedColor)
                terminal.drawHLine(golemancer.terminal.sideX - 11, 13, 10, 0xC4, attackSpeedColor)
                terminal.drawVLine(golemancer.terminal.sideX - 11, 10, 3, 0xB3, attackSpeedColor)
                terminal.drawVLine(golemancer.terminal.sideX - 2, 10, 3, 0xB3, attackSpeedColor)
                terminal.drawString(golemancer.terminal.sideX - 8, 10, "Buy", attackSpeedColor)
                terminal.drawString(golemancer.terminal.sideX - 10, 12, "AtkSpeed", attackSpeedColor)

                //Golem button
                let golemColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.DARK_GRAY
                if (golemancer.golems.cost <= golemancer.currency.parts) {
                    golemColor = wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.WHITE
                }
                terminal.drawHLine(golemancer.terminal.sideX - 11, 15, 10, 0xC4, golemColor)
                terminal.drawHLine(golemancer.terminal.sideX - 11, 19, 10, 0xC4, golemColor)
                terminal.drawVLine(golemancer.terminal.sideX - 11, 16, 3, 0xB3, golemColor)
                terminal.drawVLine(golemancer.terminal.sideX - 2, 16, 3, 0xB3, golemColor)
                terminal.drawString(golemancer.terminal.sideX - 8, 16, "Buy", golemColor)
                terminal.drawString(golemancer.terminal.sideX - 9, 18, "Golem", golemColor)

                break;
            default:
        }
    }
}
let ui = {
    placement: _placement__WEBPACK_IMPORTED_MODULE_0__.placement,
    arenaBorderCreate,
    bottomMenuBorderCreate,
    bottomMenuUpdate,
    sideMenuOut,
    sideMenuIn,
    sideMenuUpdate    
}

/***/ }),

/***/ "./src/ascii/human.txt":
/*!*****************************!*\
  !*** ./src/ascii/human.txt ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b677be059d1fd9e6c73d.txt";

/***/ }),

/***/ "./node_modules/geotic/build/index.js":
/*!********************************************!*\
  !*** ./node_modules/geotic/build/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "Engine": () => (/* binding */ Engine)
/* harmony export */ });
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }

    return obj;
}

const preserveCamelCase = (string) => {
    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;

    for (let i = 0; i < string.length; i++) {
        const character = string[i];

        if (isLastCharLower && /[\p{Lu}]/u.test(character)) {
            string = string.slice(0, i) + '-' + string.slice(i);
            isLastCharLower = false;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = true;
            i++;
        } else if (
            isLastCharUpper &&
            isLastLastCharUpper &&
            /[\p{Ll}]/u.test(character)
        ) {
            string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = false;
            isLastCharLower = true;
        } else {
            isLastCharLower =
                character.toLocaleLowerCase() === character &&
                character.toLocaleUpperCase() !== character;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper =
                character.toLocaleUpperCase() === character &&
                character.toLocaleLowerCase() !== character;
        }
    }

    return string;
};

const camelCase = (input, options) => {
    if (!(typeof input === 'string' || Array.isArray(input))) {
        throw new TypeError('Expected the input to be `string | string[]`');
    }

    options = {
        ...{
            pascalCase: false,
        },
        ...options,
    };

    const postProcess = (x) =>
        options.pascalCase ? x.charAt(0).toLocaleUpperCase() + x.slice(1) : x;

    if (Array.isArray(input)) {
        input = input
            .map((x) => x.trim())
            .filter((x) => x.length)
            .join('-');
    } else {
        input = input.trim();
    }

    if (input.length === 0) {
        return '';
    }

    if (input.length === 1) {
        return options.pascalCase
            ? input.toLocaleUpperCase()
            : input.toLocaleLowerCase();
    }

    const hasUpperCase = input !== input.toLocaleLowerCase();

    if (hasUpperCase) {
        input = preserveCamelCase(input);
    }

    input = input
        .replace(/^[_.\- ]+/, '')
        .toLocaleLowerCase()
        .replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1) =>
            p1.toLocaleUpperCase()
        )
        .replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, (m) => m.toLocaleUpperCase());
    return postProcess(input);
};

var camelcase = camelCase; // TODO: Remove this for the next major release

var _default = camelCase;
camelcase.default = _default;

const camelCache = {};
const camelString = (value) => {
    const result = camelCache[value];

    if (!result) {
        camelCache[value] = camelcase(value);
        return camelCache[value];
    }

    return result;
};

class ComponentRegistry {
    constructor() {
        _defineProperty(this, '_cbit', 0);

        _defineProperty(this, '_map', {});
    }

    register(clazz) {
        const key = camelString(clazz.name);
        clazz.prototype._ckey = key;
        clazz.prototype._cbit = BigInt(++this._cbit);
        this._map[key] = clazz;
    }

    get(key) {
        return this._map[key];
    }
}

var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}

function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return (
        stringValue === '[object RegExp]' ||
        stringValue === '[object Date]' ||
        isReactElement(value)
    );
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25

var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value)
        ? deepmerge(emptyTarget(value), value, options)
        : value;
}

function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}

function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }

    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols
        ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
              return target.propertyIsEnumerable(symbol);
          })
        : [];
}

function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.

function propertyIsUnsafe(target, key) {
    return (
        propertyIsOnObject(target, key) && // Properties are safe to merge if they don't exist in the target yet,
        !(
            Object.hasOwnProperty.call(target, key) && // unsafe if they exist up the prototype chain,
            Object.propertyIsEnumerable.call(target, key)
        )
    ); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
    var destination = {};

    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function (key) {
            destination[key] = cloneUnlessOtherwiseSpecified(
                target[key],
                options
            );
        });
    }

    getKeys(source).forEach(function (key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }

        if (
            propertyIsOnObject(target, key) &&
            options.isMergeableObject(source[key])
        ) {
            destination[key] = getMergeFunction(key, options)(
                target[key],
                source[key],
                options
            );
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(
                source[key],
                options
            );
        }
    });
    return destination;
}

function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.

    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}

deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }

    return array.reduce(function (prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};

var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;

class PrefabComponent {
    constructor(clazz, properties = {}, overwrite = true) {
        this.clazz = clazz;
        this.properties = properties;
        this.overwrite = overwrite;
    }

    applyToEntity(entity, initialProps = {}) {
        if (!this.clazz.allowMultiple && entity.has(this.clazz)) {
            if (!this.overwrite) {
                return;
            }

            const comp = entity[this.clazz.prototype._ckey];
            entity.remove(comp);
        }

        const props = cjs(this.properties, initialProps);
        entity.add(this.clazz, props);
    }
}

class Prefab {
    constructor(name) {
        _defineProperty(this, 'name', '');

        _defineProperty(this, 'inherit', []);

        _defineProperty(this, 'components', []);

        this.name = name;
    }

    addComponent(prefabComponent) {
        this.components.push(prefabComponent);
    }

    applyToEntity(entity, prefabProps = {}) {
        this.inherit.forEach((parent) => {
            parent.applyToEntity(entity, prefabProps);
        });
        const arrComps = {};
        this.components.forEach((component) => {
            const clazz = component.clazz;
            const ckey = clazz.prototype._ckey;
            let initialCompProps = {};

            if (clazz.allowMultiple) {
                if (clazz.keyProperty) {
                    const key = component.properties[clazz.keyProperty];

                    if (prefabProps[ckey] && prefabProps[ckey][key]) {
                        initialCompProps = prefabProps[ckey][key];
                    }
                } else {
                    if (!arrComps[ckey]) {
                        arrComps[ckey] = 0;
                    }

                    if (
                        prefabProps[ckey] &&
                        prefabProps[ckey][arrComps[ckey]]
                    ) {
                        initialCompProps = prefabProps[ckey][arrComps[ckey]];
                    }

                    arrComps[ckey]++;
                }
            } else {
                initialCompProps = prefabProps[ckey];
            }

            component.applyToEntity(entity, initialCompProps);
        });
        return entity;
    }
}

class PrefabRegistry {
    constructor(engine) {
        _defineProperty(this, '_prefabs', {});

        _defineProperty(this, '_engine', null);

        this._engine = engine;
    }

    deserialize(data) {
        const registered = this.get(data.name);

        if (registered) {
            return registered;
        }

        const prefab = new Prefab(data.name);
        let inherit;

        if (Array.isArray(data.inherit)) {
            inherit = data.inherit;
        } else if (typeof data.inherit === 'string') {
            inherit = [data.inherit];
        } else {
            inherit = [];
        }

        prefab.inherit = inherit.map((parent) => {
            const ref = this.get(parent);

            if (!ref) {
                console.warn(
                    `Prefab "${data.name}" cannot inherit from Prefab "${parent}" because is not registered yet! Prefabs must be registered in the right order.`
                );
                return parent;
            }

            return ref;
        });
        const comps = data.components || [];
        comps.forEach((componentData) => {
            if (typeof componentData === 'string') {
                const ckey = camelString(componentData);

                const clazz = this._engine._components.get(ckey);

                if (clazz) {
                    prefab.addComponent(new PrefabComponent(clazz));
                    return;
                }
            }

            if (typeof componentData === 'object') {
                const ckey = camelString(componentData.type);

                const clazz = this._engine._components.get(ckey);

                if (clazz) {
                    prefab.addComponent(
                        new PrefabComponent(
                            clazz,
                            componentData.properties,
                            componentData.overwrite
                        )
                    );
                    return;
                }
            }

            console.warn(
                `Unrecognized component reference "${componentData}" in prefab "${data.name}". Ensure the component is registered before the prefab.`
            );
        });
        return prefab;
    }

    register(data) {
        const prefab = this.deserialize(data);
        this._prefabs[prefab.name] = prefab;
    }

    get(name) {
        return this._prefabs[name];
    }

    create(world, name, properties = {}) {
        const prefab = this.get(name);

        if (!prefab) {
            console.warn(
                `Could not instantiate prefab "${name}" since it is not registered`
            );
            return;
        }

        const entity = world.createEntity();
        entity._qeligible = false;
        prefab.applyToEntity(entity, properties);
        entity._qeligible = true;

        entity._candidacy();

        return entity;
    }
}

class Component {
    get world() {
        return this.entity.world;
    }

    get allowMultiple() {
        return this.constructor.allowMultiple;
    }

    get keyProperty() {
        return this.constructor.keyProperty;
    }

    constructor(properties = {}) {
        Object.assign(this, this.constructor.properties, properties);
    }

    destroy() {
        this.entity.remove(this);
    }

    _onDestroyed() {
        this.onDestroyed();
        delete this.entity;
    }

    _onEvent(evt) {
        this.onEvent(evt);

        if (typeof this[evt.handlerName] === 'function') {
            this[evt.handlerName](evt);
        }
    }

    _onAttached(entity) {
        this.entity = entity;
        this.onAttached(entity);
    }

    serialize() {
        const ob = {};

        for (const key in this.constructor.properties) {
            ob[key] = this[key];
        }

        return ob;
    }

    onAttached(entity) {}

    onDestroyed() {}

    onEvent(evt) {}
}

_defineProperty(Component, 'allowMultiple', false);

_defineProperty(Component, 'keyProperty', null);

_defineProperty(Component, 'properties', {});

class EntityEvent {
    constructor(name, data = {}) {
        _defineProperty(this, 'data', {});

        _defineProperty(this, 'prevented', false);

        _defineProperty(this, 'handled', false);

        this.name = name;
        this.data = data;
        this.handlerName = camelString(`on ${this.name}`);
    }

    is(name) {
        return this.name === name;
    }

    handle() {
        this.handled = true;
        this.prevented = true;
    }

    prevent() {
        this.prevented = true;
    }
}

const ONE = 1n;
const subtractBit = (num, bit) => {
    return num & ~(1n << bit);
};
const addBit = (num, bit) => {
    return num | (ONE << bit);
};
const hasBit = (num, bit) => {
    return (num >> bit) % 2n !== 0n;
};
const bitIntersection = (n1, n2) => {
    return n1 & n2;
};

const attachComponent = (entity, component) => {
    const key = component._ckey;
    entity[key] = component;
    entity.components[key] = component;
};

const attachComponentKeyed = (entity, component) => {
    const key = component._ckey;

    if (!entity.components[key]) {
        entity[key] = {};
        entity.components[key] = {};
    }

    entity[key][component[component.keyProperty]] = component;
    entity.components[key][component[component.keyProperty]] = component;
};

const attachComponentArray = (entity, component) => {
    const key = component._ckey;

    if (!entity.components[key]) {
        entity[key] = [];
        entity.components[key] = [];
    }

    entity[key].push(component);
    entity.components[key].push(component);
};

const removeComponent = (entity, component) => {
    const key = component._ckey;
    delete entity[key];
    delete entity.components[key];
    entity._cbits = subtractBit(entity._cbits, component._cbit);

    entity._candidacy();
};

const removeComponentKeyed = (entity, component) => {
    const key = component._ckey;
    const keyProp = component[component.keyProperty];
    delete entity[key][keyProp];
    delete entity.components[key][keyProp];

    if (Object.keys(entity[key]).length <= 0) {
        delete entity[key];
        delete entity.components[key];
        entity._cbits = subtractBit(entity._cbits, component._cbit);

        entity._candidacy();
    }
};

const removeComponentArray = (entity, component) => {
    const key = component._ckey;
    const idx = entity[key].indexOf(component);
    entity[key].splice(idx, 1);
    entity.components[key].splice(idx, 1);

    if (entity[key].length <= 0) {
        delete entity[key];
        delete entity.components[key];
        entity._cbits = subtractBit(entity._cbits, component._cbit);

        entity._candidacy();
    }
};

const serializeComponent = (component) => {
    return component.serialize();
};

const serializeComponentArray = (arr) => {
    return arr.map(serializeComponent);
};

const serializeComponentKeyed = (ob) => {
    const ser = {};

    for (const k in ob) {
        ser[k] = serializeComponent(ob[k]);
    }

    return ser;
};

class Entity {
    constructor(world, id) {
        _defineProperty(this, '_cbits', 0n);

        _defineProperty(this, '_qeligible', true);

        this.world = world;
        this.id = id;
        this.components = {};
        this.isDestroyed = false;
    }

    _candidacy() {
        if (this._qeligible) {
            this.world._candidate(this);
        }
    }

    add(clazz, properties) {
        const component = new clazz(properties);

        if (component.keyProperty) {
            attachComponentKeyed(this, component);
        } else if (component.allowMultiple) {
            attachComponentArray(this, component);
        } else {
            attachComponent(this, component);
        }

        this._cbits = addBit(this._cbits, component._cbit);

        component._onAttached(this);

        this._candidacy();
    }

    has(clazz) {
        return hasBit(this._cbits, clazz.prototype._cbit);
    }

    remove(component) {
        if (component.keyProperty) {
            removeComponentKeyed(this, component);
        } else if (component.allowMultiple) {
            removeComponentArray(this, component);
        } else {
            removeComponent(this, component);
        }

        component._onDestroyed();
    }

    destroy() {
        for (const k in this.components) {
            const v = this.components[k];

            if (v instanceof Component) {
                this._cbits = subtractBit(this._cbits, v._cbit);

                v._onDestroyed();
            } else if (v instanceof Array) {
                for (const component of v) {
                    this._cbits = subtractBit(this._cbits, component._cbit);

                    component._onDestroyed();
                }
            } else {
                for (const component of Object.values(v)) {
                    this._cbits = subtractBit(this._cbits, component._cbit);

                    component._onDestroyed();
                }
            }

            delete this[k];
            delete this.components[k];
        }

        this._candidacy();

        this.world._destroyed(this.id);

        this.components = {};
        this.isDestroyed = true;
    }

    serialize() {
        const components = {};

        for (const k in this.components) {
            const v = this.components[k];

            if (v instanceof Component) {
                components[k] = serializeComponent(v);
            } else if (v instanceof Array) {
                components[k] = serializeComponentArray(v);
            } else {
                components[k] = serializeComponentKeyed(v);
            }
        }

        return {
            id: this.id,
            ...components,
        };
    }

    fireEvent(name, data) {
        const evt = new EntityEvent(name, data);

        for (const key in this.components) {
            const v = this.components[key];

            if (v instanceof Component) {
                v._onEvent(evt);

                if (evt.prevented) {
                    return evt;
                }
            } else if (v instanceof Array) {
                for (let i = 0; i < v.length; i++) {
                    v[i]._onEvent(evt);

                    if (evt.prevented) {
                        return evt;
                    }
                }
            } else {
                for (const component of Object.values(v)) {
                    component._onEvent(evt);

                    if (evt.prevented) {
                        return evt;
                    }
                }
            }
        }

        return evt;
    }
}

class Query {
    constructor(world, filters) {
        _defineProperty(this, '_cache', []);

        _defineProperty(this, '_onAddListeners', []);

        _defineProperty(this, '_onRemoveListeners', []);

        this._world = world;
        const any = filters.any || [];
        const all = filters.all || [];
        const none = filters.none || [];
        this._any = any.reduce((s, c) => {
            return addBit(s, c.prototype._cbit);
        }, 0n);
        this._all = all.reduce((s, c) => {
            return addBit(s, c.prototype._cbit);
        }, 0n);
        this._none = none.reduce((s, c) => {
            return addBit(s, c.prototype._cbit);
        }, 0n);
        this.refresh();
    }

    onEntityAdded(fn) {
        this._onAddListeners.push(fn);
    }

    onEntityRemoved(fn) {
        this._onRemoveListeners.push(fn);
    }

    has(entity) {
        return this.idx(entity) >= 0;
    }

    idx(entity) {
        return this._cache.indexOf(entity);
    }

    matches(entity) {
        const bits = entity._cbits;
        const any = this._any === 0n || bitIntersection(bits, this._any) > 0;

        const all = bitIntersection(bits, this._all) === this._all;

        const none = bitIntersection(bits, this._none) === 0n;
        return any && all && none;
    }

    candidate(entity) {
        const idx = this.idx(entity);
        const isTracking = idx >= 0;

        if (!entity.isDestroyed && this.matches(entity)) {
            if (!isTracking) {
                this._cache.push(entity);

                this._onAddListeners.forEach((cb) => cb(entity));
            }

            return true;
        }

        if (isTracking) {
            this._cache.splice(idx, 1);

            this._onRemoveListeners.forEach((cb) => cb(entity));
        }

        return false;
    }

    refresh() {
        this._cache = [];

        this._world._entities.forEach((entity) => {
            this.candidate(entity);
        });
    }

    get() {
        return this._cache;
    }
}

class World {
    constructor(engine) {
        _defineProperty(this, '_id', 0);

        _defineProperty(this, '_queries', []);

        _defineProperty(this, '_entities', new Map());

        this.engine = engine;
    }

    createId() {
        return ++this._id + Math.random().toString(36).substr(2, 9);
    }

    getEntity(id) {
        return this._entities.get(id);
    }

    getEntities() {
        return this._entities.values();
    }

    createEntity(id = this.createId()) {
        const entity = new Entity(this, id);

        this._entities.set(id, entity);

        return entity;
    }

    destroyEntity(id) {
        const entity = this.getEntity(id);

        if (entity) {
            entity.destroy();
        }
    }

    destroyEntities() {
        this._entities.forEach((entity) => {
            entity.destroy();
        });
    }

    destroy() {
        this.destroyEntities();
        this._id = 0;
        this._queries = [];
        this._entities = new Map();
    }

    createQuery(filters) {
        const query = new Query(this, filters);

        this._queries.push(query);

        return query;
    }

    createPrefab(name, properties = {}) {
        return this.engine._prefabs.create(this, name, properties);
    }

    serialize(entities) {
        const json = [];
        const list = entities || this._entities;
        list.forEach((e) => {
            json.push(e.serialize());
        });
        return {
            entities: json,
        };
    }

    deserialize(data) {
        for (const entityData of data.entities) {
            this._createOrGetEntityById(entityData.id);
        }

        for (const entityData of data.entities) {
            this._deserializeEntity(entityData);
        }
    }

    _createOrGetEntityById(id) {
        return this.getEntity(id) || this.createEntity(id);
    }

    _deserializeEntity(data) {
        const { id, ...components } = data;

        const entity = this._createOrGetEntityById(id);

        entity._qeligible = false;
        Object.entries(components).forEach(([key, value]) => {
            const type = camelString(key);

            const def = this.engine._components.get(type);

            if (def.allowMultiple) {
                Object.values(value).forEach((d) => {
                    entity.add(def, d);
                });
            } else {
                entity.add(def, value);
            }
        });
        entity._qeligible = true;

        entity._candidacy();
    }

    _candidate(entity) {
        this._queries.forEach((q) => q.candidate(entity));
    }

    _destroyed(id) {
        return this._entities.delete(id);
    }
}

class Engine {
    constructor() {
        _defineProperty(this, '_components', new ComponentRegistry());

        _defineProperty(this, '_prefabs', new PrefabRegistry(this));
    }

    registerComponent(clazz) {
        this._components.register(clazz);
    }

    registerPrefab(data) {
        this._prefabs.register(data);
    }

    createWorld() {
        return new World(this);
    }

    destroyWorld(world) {
        world.destroy();
    }
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/wglt/dist/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/wglt/dist/esm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlendMode": () => (/* binding */ BlendMode),
/* harmony export */   "Cell": () => (/* binding */ Cell),
/* harmony export */   "Chars": () => (/* binding */ Chars),
/* harmony export */   "Colors": () => (/* binding */ Colors),
/* harmony export */   "Console": () => (/* binding */ Console),
/* harmony export */   "DEFAULT_FONT": () => (/* binding */ DEFAULT_FONT),
/* harmony export */   "DefaultDialogRenderer": () => (/* binding */ DefaultDialogRenderer),
/* harmony export */   "Dialog": () => (/* binding */ Dialog),
/* harmony export */   "DialogState": () => (/* binding */ DialogState),
/* harmony export */   "Font": () => (/* binding */ Font),
/* harmony export */   "FovOctants": () => (/* binding */ FovOctants),
/* harmony export */   "FovQuadrants": () => (/* binding */ FovQuadrants),
/* harmony export */   "GUI": () => (/* binding */ GUI),
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard),
/* harmony export */   "Keys": () => (/* binding */ Keys),
/* harmony export */   "MessageDialog": () => (/* binding */ MessageDialog),
/* harmony export */   "Mouse": () => (/* binding */ Mouse),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "RNG": () => (/* binding */ RNG),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "SelectDialog": () => (/* binding */ SelectDialog),
/* harmony export */   "Terminal": () => (/* binding */ Terminal),
/* harmony export */   "computePath": () => (/* binding */ computePath),
/* harmony export */   "deserialize": () => (/* binding */ deserialize),
/* harmony export */   "fixBoxCells": () => (/* binding */ fixBoxCells),
/* harmony export */   "fromHsv": () => (/* binding */ fromHsv),
/* harmony export */   "fromRgb": () => (/* binding */ fromRgb),
/* harmony export */   "getFovQuadrant": () => (/* binding */ getFovQuadrant),
/* harmony export */   "loadImage": () => (/* binding */ loadImage),
/* harmony export */   "loadImage2x": () => (/* binding */ loadImage2x),
/* harmony export */   "serializable": () => (/* binding */ serializable),
/* harmony export */   "serialize": () => (/* binding */ serialize)
/* harmony export */ });
/**
 * The BlendMode enum defines how translucent cells are rendered.
 */
var BlendMode;
(function (BlendMode) {
    /**
     * No blending.  Alpha is ignored.
     */
    BlendMode[BlendMode["None"] = 0] = "None";
    /**
     * Alpha blending.
     *
     * dstRGB = (srcRGB * srcA) + (dstRGB * (1-srcA))
     *
     * dstA = srcA + (dstA * (1-srcA))
     */
    BlendMode[BlendMode["Blend"] = 1] = "Blend";
    /**
     * Additive blending.
     *
     * dstRGB = (srcRGB * srcA) + dstRGB
     *
     * dstA = dstA
     */
    BlendMode[BlendMode["Add"] = 2] = "Add";
})(BlendMode || (BlendMode = {}));

/**
 * Details about box characters.
 * The first element is the array of details for the first box char (0xB3).
 * Each sub array is the count of stems for top, right, bottom, and left.
 */
const BOX_CHAR_DETAILS = [
    [1, 0, 1, 0],
    [1, 0, 1, 1],
    [1, 0, 1, 2],
    [2, 0, 2, 1],
    [0, 0, 2, 1],
    [0, 0, 1, 2],
    [2, 0, 2, 2],
    [2, 0, 2, 0],
    [0, 0, 2, 2],
    [2, 0, 0, 2],
    [2, 0, 0, 1],
    [1, 0, 0, 2],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 1, 1],
    [1, 2, 1, 0],
    [2, 1, 2, 0],
    [2, 2, 0, 0],
    [0, 2, 2, 0],
    [2, 2, 0, 2],
    [0, 2, 2, 2],
    [2, 2, 2, 0],
    [0, 2, 0, 2],
    [2, 2, 2, 2],
    [1, 2, 0, 2],
    [2, 1, 0, 1],
    [0, 2, 1, 2],
    [0, 1, 2, 1],
    [2, 1, 0, 0],
    [1, 2, 0, 0],
    [0, 2, 1, 0],
    [0, 1, 2, 0],
    [2, 1, 2, 1],
    [1, 2, 1, 2],
    [1, 0, 0, 1],
    [0, 1, 1, 0], // 0xDA
];
function isBoxCell(con, x, y) {
    const charCode = con.getCharCode(x, y);
    return charCode !== undefined && charCode >= 0xB3 && charCode <= 0xDA;
}
function getBoxCount(con, x, y, index) {
    if (x < 0 || y < 0 || x >= con.width || y >= con.height) {
        return 0;
    }
    const charCode = con.getCharCode(x, y);
    if (charCode === undefined || charCode < 0xB3 || charCode > 0xDA) {
        return 0;
    }
    return BOX_CHAR_DETAILS[charCode - 0xB3][index];
}
function getBoxCell(up, right, down, left) {
    for (let i = 0; i < BOX_CHAR_DETAILS.length; i++) {
        const row = BOX_CHAR_DETAILS[i];
        if (row[0] === up && row[1] === right && row[2] === down && row[3] === left) {
            return 0xB3 + i;
        }
    }
    return 0;
}
function fixBoxCells(con) {
    for (let y = 0; y < con.height; y++) {
        for (let x = 0; x < con.width; x++) {
            if (isBoxCell(con, x, y)) {
                let up = getBoxCount(con, x, y - 1, 2);
                let right = getBoxCount(con, x + 1, y, 3);
                let down = getBoxCount(con, x, y + 1, 0);
                let left = getBoxCount(con, x - 1, y, 1);
                // There are no single-direction stubs.
                // If we need one, then we create a full vertical or horizontal pipe.
                if (up > 0 && right === 0 && down === 0 && left === 0) {
                    down = up;
                }
                else if (up === 0 && right > 0 && down === 0 && left === 0) {
                    left = right;
                }
                else if (up === 0 && right === 0 && down > 0 && left === 0) {
                    up = down;
                }
                else if (up === 0 && right === 0 && down === 0 && left > 0) {
                    right = left;
                }
                // Vertical and horizontal axis must have same width.
                if (left > 0 && right > 0) {
                    left = right = Math.max(left, right);
                }
                if (up > 0 && down > 0) {
                    up = down = Math.max(up, down);
                }
                const charCode = getBoxCell(up, right, down, left);
                if ((up || right || down || left) && !(charCode >= 0xB3 && charCode <= 0xDA)) {
                    throw new Error('invalid char code! (up=' + up + ', right=' + right + ', down=' + down + ', left=' + left + ')');
                }
                con.drawChar(x, y, charCode);
            }
        }
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * Creates a big-endian 32-bit RGBA color from red, green, and blue components.
 * @param r Red (0-255).
 * @param g Green (0-255).
 * @param b Blue (0-255).
 * @param a Optional alpha (0-255).
 * @return A 32-bit unsigned integer color.
 */
function fromRgb(r, g, b, a) {
    if (a === undefined) {
        a = 255;
    }
    return ((r << 24) + (g << 16) + (b << 8) + a);
}
/**
 * Converts a color from HSV format to RGBA format.
 *
 * Based on: https://stackoverflow.com/a/17243070/2051724
 *
 * @param h Hue (0.0 - 1.0).
 * @param s Saturation (0.0 - 1.0).
 * @param v Value (0.0 - 1.0).
 * @param a Optional alpha (0.0 - 1.0).
 * @return A 32-bit unsigned integer color.
 */
function fromHsv(h, s, v, a) {
    const i = (h * 6) | 0;
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    let r, g, b;
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
        default:
            r = 0;
            g = 0;
            b = 0;
    }
    if (a === undefined) {
        a = 1.0;
    }
    return fromRgb((r * 255) | 0, (g * 255) | 0, (b * 255) | 0, (a * 255) | 0);
}

const Colors = {
    BLACK: fromRgb(0, 0, 0),
    WHITE: fromRgb(0xff, 0xff, 0xff),
    LIGHT_GRAY: fromRgb(0xaa, 0xaa, 0xaa),
    DARK_GRAY: fromRgb(0x55, 0x55, 0x55),
    YELLOW: fromRgb(0xff, 0xff, 0x55),
    BROWN: fromRgb(0xaa, 0x55, 0x00),
    LIGHT_RED: fromRgb(0xff, 0x55, 0x55),
    DARK_RED: fromRgb(0xaa, 0x00, 0x00),
    LIGHT_GREEN: fromRgb(0x55, 0xff, 0x55),
    DARK_GREEN: fromRgb(0x00, 0xaa, 0x00),
    LIGHT_CYAN: fromRgb(0x55, 0xff, 0xff),
    DARK_CYAN: fromRgb(0x00, 0xaa, 0xaa),
    LIGHT_BLUE: fromRgb(0x55, 0x55, 0xff),
    DARK_BLUE: fromRgb(0x00, 0x00, 0xaa),
    LIGHT_MAGENTA: fromRgb(0xff, 0x55, 0xff),
    DARK_MAGENTA: fromRgb(0xaa, 0x00, 0xaa),
    ORANGE: fromRgb(0xff, 0x88, 0x00),
};

const classDefinitions = new Map();
/**
 * Decorates a class to make serializable.
 * Any class with the @serializable decorator will be serialized and deserialized.
 * @param value The TypeScript class to mark as serializable.
 */
function serializable(value) {
    classDefinitions.set(value.name, value);
}
/**
 * Serializes a value to JSON.
 * Handles circular references and class instances.
 * @param obj The root object to serialize.
 * @returns A string representation of the object graph.
 */
function serialize(obj) {
    const instances = [];
    const instancesMap = new WeakMap();
    const root = replace(obj);
    return JSON.stringify({ instances, root });
    function replace(input) {
        if (Array.isArray(input)) {
            return replaceArray(input);
        }
        else if (input && typeof input === 'object') {
            return replaceObject(input);
        }
        else {
            return input;
        }
    }
    function replaceArray(input) {
        const result = [];
        for (let i = 0; i < input.length; i++) {
            result[i] = replace(input[i]);
        }
        return result;
    }
    function replaceObject(input) {
        if (input && input.constructor.name && input.constructor.name !== 'Object') {
            if (!classDefinitions.has(input.constructor.name)) {
                throw new Error(`Class ${input.constructor.name} is not serializable.`);
            }
            if (instancesMap.has(input)) {
                return { $ref: instancesMap.get(input) };
            }
            const $ref = instances.length;
            instances.push({ $type: input.constructor.name });
            instancesMap.set(input, $ref);
            instances[$ref] = Object.assign(Object.assign({}, replaceObjectProperties(input)), { $type: input.constructor.name });
            return { $ref };
        }
        return replaceObjectProperties(input);
    }
    function replaceObjectProperties(input) {
        const result = {};
        for (const key of Object.keys(input)) {
            result[key] = replace(input[key]);
        }
        return result;
    }
}
/**
 * Deserializes a JSON string to an object graph.
 * Handles circular references and class instances.
 * @param str The JSON string to deserialize.
 * @returns The deserialized object graph.
 */
function deserialize(str) {
    const input = JSON.parse(str);
    const instances = input.instances;
    // First, replace all objects with class instances
    for (let i = 0; i < instances.length; i++) {
        const instance = instances[i];
        const classDefinition = classDefinitions.get(instance.$type);
        delete instance.$type;
        instances[i] = Object.create(classDefinition.prototype, Object.getOwnPropertyDescriptors(instance));
    }
    // Second, replace all references in the list of class instances
    for (let i = 0; i < instances.length; i++) {
        replaceObjectProperties(instances[i]);
    }
    // Finally, replace all references in the root object graph
    return replace(input.root);
    function replace(input) {
        if (Array.isArray(input)) {
            return replaceArray(input);
        }
        else if (input && typeof input === 'object') {
            return replaceObject(input);
        }
        else {
            return input;
        }
    }
    function replaceArray(input) {
        for (let i = 0; i < input.length; i++) {
            input[i] = replace(input[i]);
        }
        return input;
    }
    function replaceObject(input) {
        if (isRef(input)) {
            return instances[input.$ref];
        }
        replaceObjectProperties(input);
        return input;
    }
    function replaceObjectProperties(input) {
        for (const [key, value] of Object.entries(input)) {
            input[key] = replace(value);
        }
    }
}
function isRef(value) {
    return !!(value && typeof value === 'object' && '$ref' in value);
}

function convertCharCode(charCode) {
    if (typeof charCode === 'string' && charCode.length > 0) {
        return charCode.charCodeAt(0);
    }
    else {
        return charCode;
    }
}
let Cell = class Cell {
    constructor(x, y, charCode, fg, bg) {
        this.x = x;
        this.y = y;
        if (charCode !== undefined) {
            this.charCode = convertCharCode(charCode);
        }
        else {
            this.charCode = ' '.charCodeAt(0);
        }
        if (fg !== undefined) {
            this.fg = fg;
        }
        else {
            this.fg = Colors.WHITE;
        }
        if (bg !== undefined) {
            this.bg = bg;
        }
        else {
            this.bg = Colors.BLACK;
        }
        this.dirty = true;
        this.blocked = false;
        this.blockedSight = false;
        this.explored = false;
        this.visible = false;
        this.pathId = -1;
        this.g = 0;
        this.h = 0;
        this.prev = null;
    }
    setCharCode(charCode) {
        if (this.charCode !== charCode) {
            this.charCode = charCode;
            this.dirty = true;
        }
    }
    setForeground(fg) {
        if (fg !== undefined && fg !== null && fg !== this.fg) {
            this.fg = fg;
            this.dirty = true;
        }
    }
    setBackground(bg) {
        if (bg !== undefined && bg !== null && bg !== this.bg) {
            this.bg = bg;
            this.dirty = true;
        }
    }
    setValue(charCode, fg, bg) {
        if (typeof charCode === 'string') {
            charCode = charCode.charCodeAt(0);
        }
        if (typeof charCode === 'number') {
            this.setCharCode(charCode);
            if (fg !== undefined) {
                this.setForeground(fg);
            }
            if (bg !== undefined) {
                this.setBackground(bg);
            }
        }
        else {
            this.drawCell(charCode, BlendMode.None);
        }
        return this.dirty;
    }
    drawCell(otherCell, blendMode) {
        const alpha = otherCell.bg & 0xff;
        if (blendMode === BlendMode.None || otherCell.charCode > 0) {
            this.setCharCode(otherCell.charCode);
            this.setForeground(otherCell.fg);
        }
        else if (alpha > 0 && alpha < 255) {
            this.setForeground(this.blendColors(this.fg, otherCell.bg, blendMode));
        }
        if (blendMode === BlendMode.None || alpha === 255) {
            this.setBackground(otherCell.bg);
        }
        else if (alpha > 0) {
            this.setBackground(this.blendColors(this.bg, otherCell.bg, blendMode));
        }
    }
    blendColors(c1, c2, blendMode) {
        const alpha = c2 & 0xff;
        const w1 = (255 - alpha) / 255.0;
        const w2 = 1.0 - w1;
        const r1 = (c1 >> 24) & 0xff;
        const g1 = (c1 >> 16) & 0xff;
        const b1 = (c1 >> 8) & 0xff;
        const r2 = (c2 >> 24) & 0xff;
        const g2 = (c2 >> 16) & 0xff;
        const b2 = (c2 >> 8) & 0xff;
        switch (blendMode) {
            case BlendMode.Blend:
                return fromRgb((w1 * r1 + w2 * r2) | 0, (w1 * g1 + w2 * g2) | 0, (w1 * b1 + w2 * b2) | 0);
            case BlendMode.Add:
                return fromRgb(this.clamp((r1 + w2 * r2) | 0), this.clamp((g1 + w2 * g2) | 0), this.clamp((b1 + w2 * b2) | 0));
            default:
                return c2;
        }
    }
    clamp(x) {
        return Math.min(255, x);
    }
};
Cell = __decorate([
    serializable
], Cell);

// https://en.wikipedia.org/wiki/Code_page_437
// https://en.wikipedia.org/wiki/Block_Elements
// https://en.wikipedia.org/wiki/Box-drawing_character
var Chars;
(function (Chars) {
    Chars[Chars["SMILEY"] = 1] = "SMILEY";
    Chars[Chars["INVERSE_SMILEY"] = 2] = "INVERSE_SMILEY";
    Chars[Chars["HEART"] = 3] = "HEART";
    Chars[Chars["DIAMOND"] = 4] = "DIAMOND";
    Chars[Chars["CLUB"] = 5] = "CLUB";
    Chars[Chars["SPADE"] = 6] = "SPADE";
    Chars[Chars["BULLET"] = 7] = "BULLET";
    Chars[Chars["INVERSE_BULLET"] = 8] = "INVERSE_BULLET";
    Chars[Chars["LIGHT_SHADE"] = 176] = "LIGHT_SHADE";
    Chars[Chars["MEDIUM_SHADE"] = 177] = "MEDIUM_SHADE";
    Chars[Chars["DARK_SHADE"] = 178] = "DARK_SHADE";
    Chars[Chars["BOX_SINGLE_VERTICAL"] = 179] = "BOX_SINGLE_VERTICAL";
    Chars[Chars["BOX_SINGLE_VERTICAL_AND_SINGLE_LEFT"] = 180] = "BOX_SINGLE_VERTICAL_AND_SINGLE_LEFT";
    Chars[Chars["BOX_DOUBLE_VERTICAL_AND_DOUBLE_LEFT"] = 185] = "BOX_DOUBLE_VERTICAL_AND_DOUBLE_LEFT";
    Chars[Chars["BOX_DOUBLE_VERTICAL"] = 186] = "BOX_DOUBLE_VERTICAL";
    Chars[Chars["BOX_DOUBLE_DOWN_AND_DOUBLE_LEFT"] = 187] = "BOX_DOUBLE_DOWN_AND_DOUBLE_LEFT";
    Chars[Chars["BOX_DOUBLE_UP_AND_DOUBLE_LEFT"] = 188] = "BOX_DOUBLE_UP_AND_DOUBLE_LEFT";
    Chars[Chars["BOX_SINGLE_DOWN_AND_SINGLE_LEFT"] = 191] = "BOX_SINGLE_DOWN_AND_SINGLE_LEFT";
    Chars[Chars["BOX_SINGLE_UP_AND_SINGLE_RIGHT"] = 192] = "BOX_SINGLE_UP_AND_SINGLE_RIGHT";
    Chars[Chars["BOX_SINGLE_HORIZONTAL_AND_SINGLE_UP"] = 193] = "BOX_SINGLE_HORIZONTAL_AND_SINGLE_UP";
    Chars[Chars["BOX_SINGLE_HORIZONTAL_AND_SINGLE_DOWN"] = 194] = "BOX_SINGLE_HORIZONTAL_AND_SINGLE_DOWN";
    Chars[Chars["BOX_SINGLE_VERTICAL_AND_SINGLE_RIGHT"] = 195] = "BOX_SINGLE_VERTICAL_AND_SINGLE_RIGHT";
    Chars[Chars["BOX_SINGLE_HORIZONTAL"] = 196] = "BOX_SINGLE_HORIZONTAL";
    Chars[Chars["BOX_SINGLE_VERTICAL_AND_SINGLE_HORIZONTAL"] = 197] = "BOX_SINGLE_VERTICAL_AND_SINGLE_HORIZONTAL";
    Chars[Chars["BOX_DOUBLE_UP_AND_DOUBLE_RIGHT"] = 200] = "BOX_DOUBLE_UP_AND_DOUBLE_RIGHT";
    Chars[Chars["BOX_DOUBLE_DOWN_AND_DOUBLE_RIGHT"] = 201] = "BOX_DOUBLE_DOWN_AND_DOUBLE_RIGHT";
    Chars[Chars["BOX_DOUBLE_HORIZONTAL_AND_DOUBLE_UP"] = 202] = "BOX_DOUBLE_HORIZONTAL_AND_DOUBLE_UP";
    Chars[Chars["BOX_DOUBLE_HORIZONTAL_AND_DOUBLE_DOWN"] = 203] = "BOX_DOUBLE_HORIZONTAL_AND_DOUBLE_DOWN";
    Chars[Chars["BOX_DOUBLE_VERTICAL_AND_DOUBLE_RIGHT"] = 204] = "BOX_DOUBLE_VERTICAL_AND_DOUBLE_RIGHT";
    Chars[Chars["BOX_DOUBLE_HORIZONTAL"] = 205] = "BOX_DOUBLE_HORIZONTAL";
    Chars[Chars["BOX_DOUBLE_VERTICAL_AND_DOUBLE_HORIZONTAL"] = 206] = "BOX_DOUBLE_VERTICAL_AND_DOUBLE_HORIZONTAL";
    Chars[Chars["BOX_SINGLE_UP_AND_SINGLE_LEFT"] = 217] = "BOX_SINGLE_UP_AND_SINGLE_LEFT";
    Chars[Chars["BOX_SINGLE_DOWN_AND_SINGLE_RIGHT"] = 218] = "BOX_SINGLE_DOWN_AND_SINGLE_RIGHT";
    Chars[Chars["BLOCK_FULL"] = 219] = "BLOCK_FULL";
    Chars[Chars["BLOCK_BOTTOM_HALF"] = 220] = "BLOCK_BOTTOM_HALF";
    Chars[Chars["BLOCK_LEFT_HALF"] = 221] = "BLOCK_LEFT_HALF";
    Chars[Chars["BLOCK_RIGHT_HALF"] = 222] = "BLOCK_RIGHT_HALF";
    Chars[Chars["BLOCK_TOP_HALF"] = 223] = "BLOCK_TOP_HALF";
})(Chars || (Chars = {}));

let Console = class Console {
    constructor(width, height, blockedFunc) {
        this.width = width;
        this.height = height;
        this.grid = [];
        this.originX = 0;
        this.originY = 0;
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.radius = 0;
        for (let y = 0; y < height; y++) {
            const row = [];
            for (let x = 0; x < width; x++) {
                row.push(new Cell(x, y));
            }
            this.grid.push(row);
        }
        this.clear();
        if (blockedFunc) {
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    this.grid[y][x].blocked = this.grid[y][x].blockedSight = blockedFunc(x, y);
                }
            }
        }
    }
    clear() {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.drawChar(x, y, 0);
            }
        }
    }
    getCell(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return undefined;
        }
        return this.grid[y][x];
    }
    getCharCode(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return undefined;
        }
        return this.grid[y][x].charCode;
    }
    drawChar(x, y, c, fg, bg) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.grid[y | 0][x | 0].setValue(c, fg, bg);
        }
    }
    drawString(x, y, str, fg, bg) {
        const lines = str.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            for (let j = 0; j < line.length; j++) {
                this.drawChar(x + j, y + i, line.charCodeAt(j), fg, bg);
            }
        }
    }
    drawCenteredString(x, y, str, fg, bg) {
        this.drawString(x - Math.floor(str.length / 2), y, str, fg, bg);
    }
    drawHLine(x, y, width, c, fg, bg) {
        for (let xi = x; xi < x + width; xi++) {
            this.drawChar(xi, y, c, fg, bg);
        }
    }
    drawVLine(x, y, height, c, fg, bg) {
        for (let yi = y; yi < y + height; yi++) {
            this.drawChar(x, yi, c, fg, bg);
        }
    }
    drawRect(x, y, width, height, c, fg, bg) {
        this.drawHLine(x, y, width, c, fg, bg);
        this.drawHLine(x, y + height - 1, width, c, fg, bg);
        this.drawVLine(x, y, height, c, fg, bg);
        this.drawVLine(x + width - 1, y, height, c, fg, bg);
    }
    drawBox(x, y, width, height, topChar, rightChar, bottomChar, leftChar, topLeftChar, topRightChar, bottomRightChar, bottomLeftChar, fg, bg) {
        this.fillRect(x, y, width, height, 0, fg, bg);
        this.drawHLine(x, y, width, topChar);
        this.drawHLine(x, y + height - 1, width, bottomChar);
        this.drawVLine(x, y, height, leftChar);
        this.drawVLine(x + width - 1, y, height, rightChar);
        this.drawChar(x, y, topLeftChar);
        this.drawChar(x + width - 1, y, topRightChar);
        this.drawChar(x, y + height - 1, bottomLeftChar);
        this.drawChar(x + width - 1, y + height - 1, bottomRightChar);
    }
    drawSingleBox(x, y, width, height, fg, bg) {
        this.drawBox(x, y, width, height, Chars.BOX_SINGLE_HORIZONTAL, Chars.BOX_SINGLE_VERTICAL, Chars.BOX_SINGLE_HORIZONTAL, Chars.BOX_SINGLE_VERTICAL, Chars.BOX_SINGLE_DOWN_AND_SINGLE_RIGHT, Chars.BOX_SINGLE_DOWN_AND_SINGLE_LEFT, Chars.BOX_SINGLE_UP_AND_SINGLE_LEFT, Chars.BOX_SINGLE_UP_AND_SINGLE_RIGHT, fg, bg);
    }
    drawDoubleBox(x, y, width, height, fg, bg) {
        this.drawBox(x, y, width, height, Chars.BOX_DOUBLE_HORIZONTAL, Chars.BOX_DOUBLE_VERTICAL, Chars.BOX_DOUBLE_HORIZONTAL, Chars.BOX_DOUBLE_VERTICAL, Chars.BOX_DOUBLE_DOWN_AND_DOUBLE_RIGHT, Chars.BOX_DOUBLE_DOWN_AND_DOUBLE_LEFT, Chars.BOX_DOUBLE_UP_AND_DOUBLE_LEFT, Chars.BOX_DOUBLE_UP_AND_DOUBLE_RIGHT, fg, bg);
    }
    fillRect(x, y, width, height, c, fg, bg) {
        for (let yi = y; yi < y + height; yi++) {
            this.drawHLine(x, yi, width, c, fg, bg);
        }
    }
    drawConsole(dstX, dstY, srcConsole, srcX, srcY, srcWidth, srcHeight, blendMode) {
        blendMode = blendMode || BlendMode.None;
        for (let y = 0; y < srcHeight; y++) {
            for (let x = 0; x < srcWidth; x++) {
                const cell = srcConsole.getCell(srcX + x, srcY + y);
                if (cell) {
                    this.drawCell(dstX + x, dstY + y, cell, blendMode);
                }
            }
        }
    }
    drawCell(x, y, cell, blendMode) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.grid[y][x].drawCell(cell, blendMode);
        }
    }
    setBlocked(x, y, blocked) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.grid[y][x].blocked = blocked;
        }
    }
    setBlockedSight(x, y, blockedSight) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.grid[y][x].blockedSight = blockedSight;
        }
    }
    isVisible(x, y) {
        if (x < this.minX || x > this.maxX || y < this.minY || y > this.maxY) {
            return false;
        }
        return this.grid[y][x].visible;
    }
    isBlocked(x, y) {
        if (x < 0 || x > this.width || y < 0 || y > this.height) {
            return true;
        }
        return this.grid[y][x].blocked;
    }
    isBlockedSight(x, y) {
        if (x < 0 || x > this.width || y < 0 || y > this.height) {
            return true;
        }
        return this.grid[y][x].blockedSight;
    }
    /**
     * Compute the FOV in an octant adjacent to the Y axis
     */
    computeOctantY(deltaX, deltaY) {
        const startSlopes = [];
        const endSlopes = [];
        let iteration = 1;
        let totalObstacles = 0;
        let obstaclesInLastLine = 0;
        let minSlope = 0;
        let x;
        let y;
        let halfSlope;
        let processedCell;
        let visible;
        let extended;
        let centreSlope;
        let startSlope;
        let endSlope;
        let previousEndSlope;
        for (y = this.originY + deltaY; y >= this.minY && y <= this.maxY; y += deltaY, obstaclesInLastLine = totalObstacles, ++iteration) {
            halfSlope = 0.5 / iteration;
            previousEndSlope = -1;
            for (processedCell = Math.floor(minSlope * iteration + 0.5), x = this.originX + processedCell * deltaX; processedCell <= iteration && x >= this.minX && x <= this.maxX; x += deltaX, ++processedCell, previousEndSlope = endSlope) {
                visible = true;
                extended = false;
                centreSlope = processedCell / iteration;
                startSlope = previousEndSlope;
                endSlope = centreSlope + halfSlope;
                if (obstaclesInLastLine > 0) {
                    if (!(this.grid[y - deltaY][x].visible && !this.grid[y - deltaY][x].blockedSight) &&
                        !(this.grid[y - deltaY][x - deltaX].visible && !this.grid[y - deltaY][x - deltaX].blockedSight)) {
                        visible = false;
                    }
                    else {
                        for (let idx = 0; idx < obstaclesInLastLine && visible; ++idx) {
                            if (startSlope <= endSlopes[idx] && endSlope >= startSlopes[idx]) {
                                if (!this.grid[y][x].blockedSight) {
                                    if (centreSlope > startSlopes[idx] && centreSlope < endSlopes[idx]) {
                                        visible = false;
                                        break;
                                    }
                                }
                                else {
                                    if (startSlope >= startSlopes[idx] && endSlope <= endSlopes[idx]) {
                                        visible = false;
                                        break;
                                    }
                                    else {
                                        startSlopes[idx] = Math.min(startSlopes[idx], startSlope);
                                        endSlopes[idx] = Math.max(endSlopes[idx], endSlope);
                                        extended = true;
                                    }
                                }
                            }
                        }
                    }
                }
                if (visible) {
                    this.grid[y][x].visible = true;
                    if (this.grid[y][x].blockedSight) {
                        if (minSlope >= startSlope) {
                            minSlope = endSlope;
                        }
                        else if (!extended) {
                            startSlopes[totalObstacles] = startSlope;
                            endSlopes[totalObstacles++] = endSlope;
                        }
                    }
                }
            }
        }
    }
    /**
     * Compute the FOV in an octant adjacent to the X axis
     */
    computeOctantX(deltaX, deltaY) {
        const startSlopes = [];
        const endSlopes = [];
        let iteration = 1;
        let totalObstacles = 0;
        let obstaclesInLastLine = 0;
        let minSlope = 0;
        let x;
        let y;
        let halfSlope;
        let processedCell;
        let visible;
        let extended;
        let centreSlope;
        let startSlope;
        let endSlope;
        let previousEndSlope;
        for (x = this.originX + deltaX; x >= this.minX && x <= this.maxX; x += deltaX, obstaclesInLastLine = totalObstacles, ++iteration) {
            halfSlope = 0.5 / iteration;
            previousEndSlope = -1;
            for (processedCell = Math.floor(minSlope * iteration + 0.5), y = this.originY + processedCell * deltaY; processedCell <= iteration && y >= this.minY && y <= this.maxY; y += deltaY, ++processedCell, previousEndSlope = endSlope) {
                visible = true;
                extended = false;
                centreSlope = processedCell / iteration;
                startSlope = previousEndSlope;
                endSlope = centreSlope + halfSlope;
                if (obstaclesInLastLine > 0) {
                    if (!(this.grid[y][x - deltaX].visible && !this.grid[y][x - deltaX].blockedSight) &&
                        !(this.grid[y - deltaY][x - deltaX].visible && !this.grid[y - deltaY][x - deltaX].blockedSight)) {
                        visible = false;
                    }
                    else {
                        for (let idx = 0; idx < obstaclesInLastLine && visible; ++idx) {
                            if (startSlope <= endSlopes[idx] && endSlope >= startSlopes[idx]) {
                                if (!this.grid[y][x].blockedSight) {
                                    if (centreSlope > startSlopes[idx] && centreSlope < endSlopes[idx]) {
                                        visible = false;
                                        break;
                                    }
                                }
                                else {
                                    if (startSlope >= startSlopes[idx] && endSlope <= endSlopes[idx]) {
                                        visible = false;
                                        break;
                                    }
                                    else {
                                        startSlopes[idx] = Math.min(startSlopes[idx], startSlope);
                                        endSlopes[idx] = Math.max(endSlopes[idx], endSlope);
                                        extended = true;
                                    }
                                }
                            }
                        }
                    }
                }
                if (visible) {
                    this.grid[y][x].visible = true;
                    if (this.grid[y][x].blockedSight) {
                        if (minSlope >= startSlope) {
                            minSlope = endSlope;
                        }
                        else if (!extended) {
                            startSlopes[totalObstacles] = startSlope;
                            endSlopes[totalObstacles++] = endSlope;
                        }
                    }
                }
            }
        }
    }
    computeFov(originX, originY, radius, opt_noClear, opt_octants) {
        this.originX = originX;
        this.originY = originY;
        this.radius = radius;
        if (opt_noClear) {
            this.minX = Math.min(this.minX, Math.max(0, originX - radius));
            this.minY = Math.min(this.minY, Math.max(0, originY - radius));
            this.maxX = Math.max(this.maxX, Math.min(this.width - 1, originX + radius));
            this.maxY = Math.max(this.maxY, Math.min(this.height - 1, originY + radius));
        }
        else {
            this.minX = Math.max(0, originX - radius);
            this.minY = Math.max(0, originY - radius);
            this.maxX = Math.min(this.width - 1, originX + radius);
            this.maxY = Math.min(this.height - 1, originY + radius);
            for (let y = this.minY; y <= this.maxY; y++) {
                for (let x = this.minX; x <= this.maxX; x++) {
                    this.grid[y][x].visible = false;
                }
            }
        }
        this.grid[originY][originX].visible = true;
        if (opt_octants === undefined) {
            this.computeOctantY(1, 1);
            this.computeOctantX(1, 1);
            this.computeOctantX(1, -1);
            this.computeOctantY(1, -1);
            this.computeOctantY(-1, -1);
            this.computeOctantX(-1, -1);
            this.computeOctantX(-1, 1);
            this.computeOctantY(-1, 1);
        }
        else {
            //   \ 4 | 3 /
            //    \  |  /
            //  5  \ | /  2
            //      \|/
            // ------+-------
            //      /|\
            //  6  / | \  1
            //    /  |  \
            //   / 7 | 0 \
            if (opt_octants & 0x001) {
                this.computeOctantY(1, 1);
            }
            if (opt_octants & 0x002) {
                this.computeOctantX(1, 1);
            }
            if (opt_octants & 0x004) {
                this.computeOctantX(1, -1);
            }
            if (opt_octants & 0x008) {
                this.computeOctantY(1, -1);
            }
            if (opt_octants & 0x010) {
                this.computeOctantY(-1, -1);
            }
            if (opt_octants & 0x020) {
                this.computeOctantX(-1, -1);
            }
            if (opt_octants & 0x040) {
                this.computeOctantX(-1, 1);
            }
            if (opt_octants & 0x080) {
                this.computeOctantY(-1, 1);
            }
        }
    }
    /**
     * All visible tiles are marked as explored.
     */
    updateExplored() {
        for (let y = this.minY; y <= this.maxY; y++) {
            for (let x = this.minX; x <= this.maxX; x++) {
                const tile = this.grid[y][x];
                tile.explored = tile.explored || tile.visible;
            }
        }
    }
};
Console = __decorate([
    serializable
], Console);

class Font {
    constructor(url, charWidth, charHeight, scale, graphical) {
        this.url = url;
        this.charWidth = charWidth;
        this.charHeight = charHeight;
        this.scale = scale || 1.0;
        this.graphical = !!graphical;
    }
}
/**
 * Font image as data URL.
 * IBM terminal font.
 * See img/font.png.
 */
const FONT_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQ' +
    'MAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAAEhklEQVRIx42Sv4oUQRDGC4UzadSwwMUD8' +
    'QEKlbWD4Q58B/NGpTVocKO1wXHUzMAH0AcwMTYVGg5ag0IzEXaRjdZEZKNzkKbHqtnzHypY' +
    '09M9+5uvqr7pbYCuC6ftaRhgONXs30eAh0O1rYDm4IS/eH0B8GxRW2vxo396yu/fb0ZFrW1' +
    'zcOXlPU/XPwK8PGjbWhVwM4KnH61912oK4+zmmHJaQotyt1kvtC2Atdo24iohPDiG/v4eIC' +
    'JsY3Wy8Yvr0DSIBOdxgH6v8wsriWhc8s0AtaK/GzSl1jR0nSjQnwki6FQxNFKjgzO2a7BBq' +
    'ucH7dL4M9z96CIhT1Fs/AgKgcA6dKCxI29DaHNwRJ4EGAU1sU0OG9rmE4SIc3A4FChACqqh' +
    'JRwpxkqh9wxag4DSmEJ5DtpFwAP4GUf6lmKcFFti1BYuQp4xN8kxM2kNhjdkTOiTUeAKGvh' +
    'A1rLpMbYACQzCITlTDRMbLYoEa2JWPSMRFZIupcSzMVKcEUkX+sOG+ChNX2vD8ex6k7OFHL' +
    '0P1655JuPd53WAD+yTv3UrCQiuHmYBbfIxpkImuvpBQBkVb5g4XHv3JkNireG8AO9zDhBZu' +
    '2z2OMZ11S5/RIlyMefMNaZ4GsCz5xcjyM6hHYEjAYEfO8Ig1rklAe9sRIeYAdwyoIBq6YIz' +
    'CAKiWoifA3m3o2AzWcdYKOdY47EIf8QABCuYgIUVmdVMEYEDA0Hmo/3D6KKJbh5mxhP3UsW' +
    'IE97wnEygyizOfOLi2JOJW8CeOblW9IHeKZgv4zxuzDryOmb+4aQH+MXV6e0ywdUcxqCjBW' +
    'l5GpbzZduOG1QEiGXP86T7EfiJfkMQ4OO4H0yqyNC2zlziWEN7Ywuc2fQ4p5BNkS5QYXP2h' +
    '5NtRJh0vCKQidtVJmCGAwDSSQpYggSxiRIyzewsgCh4xxiTPDMh5aj//l7btqkr6rQyIOtL' +
    'ji4lVRQwXdzvus40Y53M33fh50GZwF4ExQeMlvuTggLzSi4ElKczUO7zVtpwdyMKdqZKOWb' +
    '2nDblawPxPmuMwFEWBW+jlZR1eYtS442kiBGMWCi/h1/+GAR6NYOJWiqNJXFygFtrkx5C0O' +
    '3IeFGs67HhEEhmBu/BUOT+0551pXxYIF+Elpi5AKRkLl5GUbCCZddyMv621ujEBPP4vSy2f' +
    'otTx3U+d3WBiFOA6VSGSB49v/M7GBX9FPrDaT2c9qr4PCpwZ7qz813R94dVFIe19v33GlMZ' +
    'UghQFb8BrfE7QBmgBMbrn2B3enn/y3B5+DL8UBAdnejdYdBxeV9ejwoYNTgW0Ok/gA7UG2G' +
    'AzanhL0DG7q4svynwF8UwDPu7u/vD0IudzSltMtVbP+J/gUbR29oJ7Fg9s6Uy+DnpiTCOYc' +
    '4cXOeXMWfsusSw7FOg9x655nax6BlecwpOQQ68WBwp+H2LMQTuOq2RUigzh2Q/R3CWARJIJ' +
    'G199EwOTyKBlQMznshCRGeQ5gHABAQl6M4gLEdAzVaBWMCiANdsayDCHBA/hagKYfielrJI' +
    'lipKKQIA9Nf3wBloTHT6BuAx15zRNa1nAAAAAElFTkSuQmCC';
const DEFAULT_FONT = new Font(FONT_IMAGE, 8, 8);

/**
 * The FovOctants constants provide bitmasks for various directions.
 *
 *     \ 4 | 3 /
 *      \  |  /
 *    5  \ | /  2
 *        \|/
 *   ------+-------
 *        /|\
 *    6  / | \  1
 *      /  |  \
 *     / 7 | 0 \
 *
 */
var FovOctants;
(function (FovOctants) {
    FovOctants[FovOctants["OCTANT_SOUTH_SOUTHEAST"] = 1] = "OCTANT_SOUTH_SOUTHEAST";
    FovOctants[FovOctants["OCTANT_EAST_SOUTHEAST"] = 2] = "OCTANT_EAST_SOUTHEAST";
    FovOctants[FovOctants["OCTANT_EAST_NORTHTHEAST"] = 4] = "OCTANT_EAST_NORTHTHEAST";
    FovOctants[FovOctants["OCTANT_NORTH_NORTHEAST"] = 8] = "OCTANT_NORTH_NORTHEAST";
    FovOctants[FovOctants["OCTANT_NORTH_NORTHWEST"] = 16] = "OCTANT_NORTH_NORTHWEST";
    FovOctants[FovOctants["OCTANT_WEST_NORTHEAST"] = 32] = "OCTANT_WEST_NORTHEAST";
    FovOctants[FovOctants["OCTANT_WEST_SOUTHWEST"] = 64] = "OCTANT_WEST_SOUTHWEST";
    FovOctants[FovOctants["OCTANT_SOUTH_SOUTHWEST"] = 128] = "OCTANT_SOUTH_SOUTHWEST";
})(FovOctants || (FovOctants = {}));
var FovQuadrants;
(function (FovQuadrants) {
    FovQuadrants[FovQuadrants["QUADRANT_SOUTHEAST"] = 3] = "QUADRANT_SOUTHEAST";
    FovQuadrants[FovQuadrants["QUADRANT_EAST"] = 6] = "QUADRANT_EAST";
    FovQuadrants[FovQuadrants["QUADRANT_NORTHEAST"] = 12] = "QUADRANT_NORTHEAST";
    FovQuadrants[FovQuadrants["QUADRANT_NORTH"] = 24] = "QUADRANT_NORTH";
    FovQuadrants[FovQuadrants["QUADRANT_NORTHWEST"] = 48] = "QUADRANT_NORTHWEST";
    FovQuadrants[FovQuadrants["QUADRANT_WEST"] = 96] = "QUADRANT_WEST";
    FovQuadrants[FovQuadrants["QUADRANT_SOUTHWEST"] = 192] = "QUADRANT_SOUTHWEST";
    FovQuadrants[FovQuadrants["QUADRANT_SOUTH"] = 129] = "QUADRANT_SOUTH";
})(FovQuadrants || (FovQuadrants = {}));
function getFovQuadrant(dx, dy) {
    if (dx > 0) {
        if (dy > 0) {
            return FovQuadrants.QUADRANT_SOUTHEAST;
        }
        else if (dy === 0) {
            return FovQuadrants.QUADRANT_EAST;
        }
        else {
            return FovQuadrants.QUADRANT_NORTHEAST;
        }
    }
    else if (dx < 0) {
        if (dy > 0) {
            return FovQuadrants.QUADRANT_SOUTHWEST;
        }
        else if (dy === 0) {
            return FovQuadrants.QUADRANT_WEST;
        }
        else {
            return FovQuadrants.QUADRANT_NORTHWEST;
        }
    }
    else {
        if (dy > 0) {
            return FovQuadrants.QUADRANT_SOUTH;
        }
        else {
            return FovQuadrants.QUADRANT_NORTH;
        }
    }
}

let Point = class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
Point = __decorate([
    serializable
], Point);

let Rect = class Rect {
    constructor(x, y, width, height) {
        this.x = this.left = x;
        this.y = this.top = y;
        this.width = width;
        this.height = height;
        this.x2 = x + width;
        this.y2 = y + height;
    }
    getCenter() {
        return new Point((this.x + this.width / 2) | 0, (this.y + this.height / 2) | 0);
    }
    intersects(other) {
        return this.x <= other.x2 && this.x2 >= other.x && this.y <= other.y2 && this.y2 >= other.y;
    }
    contains(point) {
        return point.x >= this.x && point.x < this.x2 && point.y >= this.y && point.y < this.y2;
    }
};
Rect = __decorate([
    serializable
], Rect);

class DialogState {
    constructor(dialog, rect, contentsOffset) {
        this.dialog = dialog;
        this.rect = rect;
        this.contentsOffset = contentsOffset;
        this.open = false;
        this.count = 0;
    }
}

class DefaultDialogRenderer {
    getState(terminal, dialog) {
        const width = dialog.contentsRect.width + 4;
        const height = dialog.contentsRect.height + 4;
        const x = ((terminal.width - width) / 2) | 0;
        const y = ((terminal.height - height) / 2) | 0;
        return new DialogState(dialog, new Rect(x, y, width, height), new Point(x + 2, y + 2));
    }
    draw(term, dialogState) {
        const dialog = dialogState.dialog;
        const { x, y, width, height } = dialogState.rect;
        term.fillRect(x, y, width, height, 0, Colors.WHITE, Colors.BLACK);
        term.drawSingleBox(x, y, width, height);
        term.drawCenteredString(x + (width / 2) | 0, y, ' ' + dialog.title + ' ');
        dialog.drawContents(term, dialogState.contentsOffset);
    }
}

class GUI {
    constructor(terminal, renderer) {
        this.terminal = terminal;
        this.renderer = renderer || new DefaultDialogRenderer();
        this.dialogs = [];
    }
    add(dialog) {
        this.dialogs.push(this.renderer.getState(this.terminal, dialog));
    }
    /**
     * Handles input for currently active dialog.
     * Returns true if the input was handled.
     * Returns false otherwise.
     */
    handleInput() {
        if (this.dialogs.length === 0) {
            return false;
        }
        const activeIndex = this.dialogs.length - 1;
        const activeState = this.dialogs[this.dialogs.length - 1];
        const activeDialog = activeState.dialog;
        if (activeDialog.handleInput(this.terminal, activeState.contentsOffset)) {
            this.dialogs.splice(activeIndex, 1);
        }
        return true;
    }
    draw() {
        for (let i = 0; i < this.dialogs.length; i++) {
            this.renderer.draw(this.terminal, this.dialogs[i]);
        }
    }
}

class Dialog {
    constructor(contentsRect, title) {
        this.contentsRect = contentsRect;
        this.title = title;
    }
}

/**
 * The delay in frames before input repeating.
 * Time in milliseconds.
 */
const INPUT_REPEAT_DELAY = 200.0;
/**
 * The delay between subsequent repeat firing.
 * Time in milliseconds.
 */
const INPUT_REPEAT_RATE = 1000.0 / 15.0;
/**
 * The Input class represents a pysical input.
 * Example: keyboard key or mouse button.
 */
class Input {
    constructor() {
        this.down = false;
        this.downTime = 0;
        this.repeat = false;
        this.repeatTime = 0;
        this.downCount = 0;
        this.upCount = 100;
    }
    setDown(down) {
        if (this.down !== down) {
            this.down = down;
            this.repeat = false;
            this.downTime = this.repeatTime = performance.now();
        }
    }
    update(time) {
        this.repeat = false;
        if (this.down) {
            this.downCount++;
            this.upCount = 0;
            if (time - this.downTime >= INPUT_REPEAT_DELAY && time - this.repeatTime >= INPUT_REPEAT_RATE) {
                this.repeat = true;
                this.repeatTime = time;
            }
        }
        else {
            this.downCount = 0;
            this.upCount++;
        }
    }
    /**
     * Returns true if the input is "pressed".
     * Pressed is a one time event when the input first goes down.
     * It then repeats on repeat delay.
     */
    isPressed() {
        return this.downCount === 1 || this.repeat;
        // const count = this.downCount;
        // return count === 1 || (count > INPUT_REPEAT_DELAY && count % INPUT_REPEAT_RATE === 0);
    }
    /**
     * Returns true if the input is "clicked".
     * Clicked is a one time event when the input first goes up.
     */
    isClicked() {
        return this.upCount === 1;
    }
}

/**
 * Number of keys to track.
 */
const KEY_COUNT = 256;
class Keyboard {
    /**
     * Creates a new keyboard module.
     *
     * @param el DOM el to attach listeners.
     */
    constructor(el) {
        this.keys = new Array(KEY_COUNT);
        for (let i = 0; i < KEY_COUNT; i++) {
            this.keys[i] = new Input();
        }
        el.addEventListener('keydown', e => this.setKey(e, true));
        el.addEventListener('keyup', e => this.setKey(e, false));
    }
    setKey(e, state) {
        const keyCode = e.keyCode;
        if (keyCode === Keys.VK_F11) {
            // Allow fullscreen requests to go through
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        if (keyCode >= 0 && keyCode < KEY_COUNT) {
            this.keys[keyCode].setDown(state);
        }
    }
    updateKeys(time) {
        for (let i = 0; i < KEY_COUNT; i++) {
            this.keys[i].update(time);
        }
    }
    getKey(keyCode) {
        return keyCode >= 0 && keyCode < KEY_COUNT ? this.keys[keyCode] : null;
    }
}
var Keys;
(function (Keys) {
    Keys[Keys["VK_CANCEL"] = 3] = "VK_CANCEL";
    Keys[Keys["VK_HELP"] = 6] = "VK_HELP";
    Keys[Keys["VK_BACK_SPACE"] = 8] = "VK_BACK_SPACE";
    Keys[Keys["VK_TAB"] = 9] = "VK_TAB";
    Keys[Keys["VK_CLEAR"] = 12] = "VK_CLEAR";
    Keys[Keys["VK_ENTER"] = 13] = "VK_ENTER";
    Keys[Keys["VK_SHIFT"] = 16] = "VK_SHIFT";
    Keys[Keys["VK_CONTROL"] = 17] = "VK_CONTROL";
    Keys[Keys["VK_ALT"] = 18] = "VK_ALT";
    Keys[Keys["VK_PAUSE"] = 19] = "VK_PAUSE";
    Keys[Keys["VK_CAPS_LOCK"] = 20] = "VK_CAPS_LOCK";
    Keys[Keys["VK_ESCAPE"] = 27] = "VK_ESCAPE";
    Keys[Keys["VK_SPACE"] = 32] = "VK_SPACE";
    Keys[Keys["VK_PAGE_UP"] = 33] = "VK_PAGE_UP";
    Keys[Keys["VK_PAGE_DOWN"] = 34] = "VK_PAGE_DOWN";
    Keys[Keys["VK_END"] = 35] = "VK_END";
    Keys[Keys["VK_HOME"] = 36] = "VK_HOME";
    Keys[Keys["VK_LEFT"] = 37] = "VK_LEFT";
    Keys[Keys["VK_UP"] = 38] = "VK_UP";
    Keys[Keys["VK_RIGHT"] = 39] = "VK_RIGHT";
    Keys[Keys["VK_DOWN"] = 40] = "VK_DOWN";
    Keys[Keys["VK_PRINTSCREEN"] = 44] = "VK_PRINTSCREEN";
    Keys[Keys["VK_INSERT"] = 45] = "VK_INSERT";
    Keys[Keys["VK_DELETE"] = 46] = "VK_DELETE";
    Keys[Keys["VK_0"] = 48] = "VK_0";
    Keys[Keys["VK_1"] = 49] = "VK_1";
    Keys[Keys["VK_2"] = 50] = "VK_2";
    Keys[Keys["VK_3"] = 51] = "VK_3";
    Keys[Keys["VK_4"] = 52] = "VK_4";
    Keys[Keys["VK_5"] = 53] = "VK_5";
    Keys[Keys["VK_6"] = 54] = "VK_6";
    Keys[Keys["VK_7"] = 55] = "VK_7";
    Keys[Keys["VK_8"] = 56] = "VK_8";
    Keys[Keys["VK_9"] = 57] = "VK_9";
    Keys[Keys["VK_COLON"] = 58] = "VK_COLON";
    Keys[Keys["VK_SEMICOLON"] = 59] = "VK_SEMICOLON";
    Keys[Keys["VK_LESS_THAN"] = 60] = "VK_LESS_THAN";
    Keys[Keys["VK_EQUALS"] = 61] = "VK_EQUALS";
    Keys[Keys["VK_GREATER_THAN"] = 62] = "VK_GREATER_THAN";
    Keys[Keys["VK_QUESTION_MARK"] = 63] = "VK_QUESTION_MARK";
    Keys[Keys["VK_AT"] = 64] = "VK_AT";
    Keys[Keys["VK_A"] = 65] = "VK_A";
    Keys[Keys["VK_B"] = 66] = "VK_B";
    Keys[Keys["VK_C"] = 67] = "VK_C";
    Keys[Keys["VK_D"] = 68] = "VK_D";
    Keys[Keys["VK_E"] = 69] = "VK_E";
    Keys[Keys["VK_F"] = 70] = "VK_F";
    Keys[Keys["VK_G"] = 71] = "VK_G";
    Keys[Keys["VK_H"] = 72] = "VK_H";
    Keys[Keys["VK_I"] = 73] = "VK_I";
    Keys[Keys["VK_J"] = 74] = "VK_J";
    Keys[Keys["VK_K"] = 75] = "VK_K";
    Keys[Keys["VK_L"] = 76] = "VK_L";
    Keys[Keys["VK_M"] = 77] = "VK_M";
    Keys[Keys["VK_N"] = 78] = "VK_N";
    Keys[Keys["VK_O"] = 79] = "VK_O";
    Keys[Keys["VK_P"] = 80] = "VK_P";
    Keys[Keys["VK_Q"] = 81] = "VK_Q";
    Keys[Keys["VK_R"] = 82] = "VK_R";
    Keys[Keys["VK_S"] = 83] = "VK_S";
    Keys[Keys["VK_T"] = 84] = "VK_T";
    Keys[Keys["VK_U"] = 85] = "VK_U";
    Keys[Keys["VK_V"] = 86] = "VK_V";
    Keys[Keys["VK_W"] = 87] = "VK_W";
    Keys[Keys["VK_X"] = 88] = "VK_X";
    Keys[Keys["VK_Y"] = 89] = "VK_Y";
    Keys[Keys["VK_Z"] = 90] = "VK_Z";
    Keys[Keys["VK_CONTEXT_MENU"] = 93] = "VK_CONTEXT_MENU";
    Keys[Keys["VK_NUMPAD0"] = 96] = "VK_NUMPAD0";
    Keys[Keys["VK_NUMPAD1"] = 97] = "VK_NUMPAD1";
    Keys[Keys["VK_NUMPAD2"] = 98] = "VK_NUMPAD2";
    Keys[Keys["VK_NUMPAD3"] = 99] = "VK_NUMPAD3";
    Keys[Keys["VK_NUMPAD4"] = 100] = "VK_NUMPAD4";
    Keys[Keys["VK_NUMPAD5"] = 101] = "VK_NUMPAD5";
    Keys[Keys["VK_NUMPAD6"] = 102] = "VK_NUMPAD6";
    Keys[Keys["VK_NUMPAD7"] = 103] = "VK_NUMPAD7";
    Keys[Keys["VK_NUMPAD8"] = 104] = "VK_NUMPAD8";
    Keys[Keys["VK_NUMPAD9"] = 105] = "VK_NUMPAD9";
    Keys[Keys["VK_MULTIPLY"] = 106] = "VK_MULTIPLY";
    Keys[Keys["VK_ADD"] = 107] = "VK_ADD";
    Keys[Keys["VK_SEPARATOR"] = 108] = "VK_SEPARATOR";
    Keys[Keys["VK_SUBTRACT"] = 109] = "VK_SUBTRACT";
    Keys[Keys["VK_DECIMAL"] = 110] = "VK_DECIMAL";
    Keys[Keys["VK_DIVIDE"] = 111] = "VK_DIVIDE";
    Keys[Keys["VK_F1"] = 112] = "VK_F1";
    Keys[Keys["VK_F2"] = 113] = "VK_F2";
    Keys[Keys["VK_F3"] = 114] = "VK_F3";
    Keys[Keys["VK_F4"] = 115] = "VK_F4";
    Keys[Keys["VK_F5"] = 116] = "VK_F5";
    Keys[Keys["VK_F6"] = 117] = "VK_F6";
    Keys[Keys["VK_F7"] = 118] = "VK_F7";
    Keys[Keys["VK_F8"] = 119] = "VK_F8";
    Keys[Keys["VK_F9"] = 120] = "VK_F9";
    Keys[Keys["VK_F10"] = 121] = "VK_F10";
    Keys[Keys["VK_F11"] = 122] = "VK_F11";
    Keys[Keys["VK_F12"] = 123] = "VK_F12";
    Keys[Keys["VK_F13"] = 124] = "VK_F13";
    Keys[Keys["VK_F14"] = 125] = "VK_F14";
    Keys[Keys["VK_F15"] = 126] = "VK_F15";
    Keys[Keys["VK_F16"] = 127] = "VK_F16";
    Keys[Keys["VK_F17"] = 128] = "VK_F17";
    Keys[Keys["VK_F18"] = 129] = "VK_F18";
    Keys[Keys["VK_F19"] = 130] = "VK_F19";
    Keys[Keys["VK_F20"] = 131] = "VK_F20";
    Keys[Keys["VK_F21"] = 132] = "VK_F21";
    Keys[Keys["VK_F22"] = 133] = "VK_F22";
    Keys[Keys["VK_F23"] = 134] = "VK_F23";
    Keys[Keys["VK_F24"] = 135] = "VK_F24";
    Keys[Keys["VK_NUM_LOCK"] = 144] = "VK_NUM_LOCK";
    Keys[Keys["VK_SCROLL_LOCK"] = 145] = "VK_SCROLL_LOCK";
    Keys[Keys["VK_CIRCUMFLEX"] = 160] = "VK_CIRCUMFLEX";
    Keys[Keys["VK_EXCLAMATION"] = 161] = "VK_EXCLAMATION";
    Keys[Keys["VK_DOUBLE_QUOTE"] = 162] = "VK_DOUBLE_QUOTE";
    Keys[Keys["VK_HASH"] = 163] = "VK_HASH";
    Keys[Keys["VK_DOLLAR"] = 164] = "VK_DOLLAR";
    Keys[Keys["VK_PERCENT"] = 165] = "VK_PERCENT";
    Keys[Keys["VK_AMPERSAND"] = 166] = "VK_AMPERSAND";
    Keys[Keys["VK_UNDERSCORE"] = 167] = "VK_UNDERSCORE";
    Keys[Keys["VK_OPEN_PAREN"] = 168] = "VK_OPEN_PAREN";
    Keys[Keys["VK_CLOSE_PAREN"] = 169] = "VK_CLOSE_PAREN";
    Keys[Keys["VK_ASTERISK"] = 170] = "VK_ASTERISK";
    Keys[Keys["VK_PLUS"] = 171] = "VK_PLUS";
    Keys[Keys["VK_PIPE"] = 172] = "VK_PIPE";
    Keys[Keys["VK_HYPHEN_MINUS"] = 173] = "VK_HYPHEN_MINUS";
    Keys[Keys["VK_OPEN_CURLY_BRACKET"] = 174] = "VK_OPEN_CURLY_BRACKET";
    Keys[Keys["VK_CLOSE_CURLY_BRACKET"] = 175] = "VK_CLOSE_CURLY_BRACKET";
    Keys[Keys["VK_TILDE"] = 176] = "VK_TILDE";
    Keys[Keys["VK_COMMA"] = 188] = "VK_COMMA";
    Keys[Keys["VK_PERIOD"] = 190] = "VK_PERIOD";
    Keys[Keys["VK_SLASH"] = 191] = "VK_SLASH";
    Keys[Keys["VK_BACK_QUOTE"] = 192] = "VK_BACK_QUOTE";
    Keys[Keys["VK_OPEN_BRACKET"] = 219] = "VK_OPEN_BRACKET";
    Keys[Keys["VK_BACK_SLASH"] = 220] = "VK_BACK_SLASH";
    Keys[Keys["VK_CLOSE_BRACKET"] = 221] = "VK_CLOSE_BRACKET";
    Keys[Keys["VK_QUOTE"] = 222] = "VK_QUOTE";
    Keys[Keys["VK_META"] = 224] = "VK_META";
    Keys[Keys["VK_ALTGR"] = 225] = "VK_ALTGR";
    Keys[Keys["VK_WIN"] = 91] = "VK_WIN";
    Keys[Keys["VK_KANA"] = 21] = "VK_KANA";
    Keys[Keys["VK_HANGUL"] = 21] = "VK_HANGUL";
    Keys[Keys["VK_EISU"] = 22] = "VK_EISU";
    Keys[Keys["VK_JUNJA"] = 23] = "VK_JUNJA";
    Keys[Keys["VK_FINAL"] = 24] = "VK_FINAL";
    Keys[Keys["VK_HANJA"] = 25] = "VK_HANJA";
    Keys[Keys["VK_KANJI"] = 25] = "VK_KANJI";
    Keys[Keys["VK_CONVERT"] = 28] = "VK_CONVERT";
    Keys[Keys["VK_NONCONVERT"] = 29] = "VK_NONCONVERT";
    Keys[Keys["VK_ACCEPT"] = 30] = "VK_ACCEPT";
    Keys[Keys["VK_MODECHANGE"] = 31] = "VK_MODECHANGE";
    Keys[Keys["VK_SELECT"] = 41] = "VK_SELECT";
    Keys[Keys["VK_PRINT"] = 42] = "VK_PRINT";
    Keys[Keys["VK_EXECUTE"] = 43] = "VK_EXECUTE";
    Keys[Keys["VK_SLEEP"] = 95] = "VK_SLEEP";
})(Keys || (Keys = {}));

class MessageDialog extends Dialog {
    constructor(title, message) {
        const lines = message.split('\n');
        let width = title.length;
        for (let i = 0; i < lines.length; i++) {
            width = Math.max(width, lines[i].length);
        }
        const height = lines.length;
        const rect = new Rect(0, 0, width, height);
        super(rect, title);
        this.lines = lines;
    }
    drawContents(console, offset) {
        for (let i = 0; i < this.lines.length; i++) {
            console.drawString(offset.x, offset.y + i, this.lines[i]);
        }
    }
    handleInput(terminal, offset) {
        return terminal.isKeyPressed(Keys.VK_ESCAPE);
    }
}

class SelectDialog extends Dialog {
    constructor(title, options, callback) {
        let width = title.length;
        for (let i = 0; i < options.length; i++) {
            width = Math.max(width, options[i].length + 4);
        }
        const height = options.length;
        const rect = new Rect(0, 0, width, height);
        super(rect, title);
        this.options = options;
        this.callback = callback;
        this.hoverIndex = -1;
    }
    drawContents(console, offset) {
        for (let i = 0; i < this.options.length; i++) {
            const str = String.fromCharCode(65 + i) + ' - ' + this.options[i];
            if (i === this.hoverIndex) {
                console.drawString(offset.x, offset.y + i, str, Colors.BLACK, Colors.WHITE);
            }
            else {
                console.drawString(offset.x, offset.y + i, str, Colors.WHITE, Colors.BLACK);
            }
        }
    }
    handleInput(terminal, offset) {
        this.hoverIndex = -1;
        if (terminal.mouse.x >= offset.x &&
            terminal.mouse.x < offset.x + this.contentsRect.width &&
            terminal.mouse.y >= offset.y &&
            terminal.mouse.y < offset.y + this.contentsRect.height) {
            this.hoverIndex = terminal.mouse.y - offset.y;
            if (terminal.mouse.buttons[0].upCount === 1) {
                this.callback(this.hoverIndex);
                return true;
            }
        }
        for (let i = 0; i < this.options.length; i++) {
            if (terminal.isKeyPressed(Keys.VK_A + i)) {
                this.callback(i);
                return true;
            }
        }
        return terminal.isKeyPressed(Keys.VK_ESCAPE);
    }
    isMouseOverOption(terminal, offset, index) {
        return (terminal.mouse.x >= offset.x &&
            terminal.mouse.x < offset.x + this.contentsRect.width &&
            terminal.mouse.y === offset.y + index);
    }
}

/**
 * All available 2x2 patterns for 2x image loading.
 * Note: The strict IBM CGA font only has halves, not quadrants.
 */
const PATTERNS = [
    { charCode: Chars.BLOCK_TOP_HALF, active: [1, 1, 0, 0] },
    { charCode: Chars.BLOCK_RIGHT_HALF, active: [0, 1, 0, 1] },
];
function loadImage(url, callback) {
    const img = new Image();
    img.onload = () => {
        const w = img.width;
        const h = img.height;
        const data = getImageData(img);
        const result = new Console(w, h);
        let i = 0;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const cell = result.getCell(x, y);
                cell.setBackground(fromRgb(data[i++], data[i++], data[i++], data[i++]));
            }
        }
        callback(result);
    };
    img.src = url;
}
function loadImage2x(url, callback) {
    const img = new Image();
    img.onload = () => {
        const w = img.width;
        const h = img.height;
        const data = getImageData(img);
        const result = new Console(w / 2, h / 2);
        for (let y = 0; y < h; y += 2) {
            for (let x = 0; x < w; x += 2) {
                draw2x2(result, data, x, y, w);
            }
        }
        callback(result);
    };
    img.src = url;
}
function getImageData(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return ctx.getImageData(0, 0, img.width, img.height).data;
}
function draw2x2(con, data, x, y, w) {
    // Top left
    const i1 = 4 * (y * w + x);
    const r1 = data[i1];
    const g1 = data[i1 + 1];
    const b1 = data[i1 + 2];
    // Top right
    const i2 = 4 * (y * w + x + 1);
    const r2 = data[i2];
    const g2 = data[i2 + 1];
    const b2 = data[i2 + 2];
    // Bottom left
    const i3 = 4 * ((y + 1) * w + x);
    const r3 = data[i3];
    const g3 = data[i3 + 1];
    const b3 = data[i3 + 2];
    // Bottom right
    const i4 = 4 * ((y + 1) * w + x + 1);
    const r4 = data[i4];
    const g4 = data[i4 + 1];
    const b4 = data[i4 + 2];
    const colors = [[r1, g1, b1], [r2, g2, b2], [r3, g3, b3], [r4, g4, b4]];
    // For each possible pattern, calculate the total error
    // Find the pattern with minum error
    let minError = Number.MAX_VALUE;
    let bestCharCode = 0;
    let bestBg = null;
    let bestFg = null;
    for (let i = 0; i < PATTERNS.length; i++) {
        const pattern = PATTERNS[i];
        const patternColors = computeColors(pattern.active, colors);
        if (patternColors.error < minError) {
            minError = patternColors.error;
            bestCharCode = pattern.charCode;
            bestBg = patternColors.bg;
            bestFg = patternColors.fg;
        }
    }
    con.drawChar(x / 2, y / 2, bestCharCode, arrayToColor(bestFg), arrayToColor(bestBg));
}
function computeColors(pattern, colors) {
    const sum = [[0, 0, 0], [0, 0, 0]];
    const avg = [[0, 0, 0], [0, 0, 0]];
    const count = [0, 0];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            sum[pattern[i]][j] += colors[i][j];
        }
        count[pattern[i]]++;
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            avg[i][j] = sum[i][j] / count[i];
        }
    }
    let error = 0.0;
    for (let i = 0; i < 4; i++) {
        let cellError = 0.0;
        for (let j = 0; j < 3; j++) {
            const delta = colors[i][j] - avg[pattern[i]][j];
            cellError += delta * delta;
        }
        error += Math.sqrt(cellError);
    }
    return { bg: avg[0], fg: avg[1], error };
}
function arrayToColor(rgb) {
    return fromRgb(rgb[0], rgb[1], rgb[2]);
}

class Mouse {
    constructor(terminal) {
        this.el = terminal.canvas;
        this.width = terminal.width;
        this.height = terminal.height;
        this.prevX = 0;
        this.prevY = 0;
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;
        this.buttons = [new Input(), new Input(), new Input()];
        const el = this.el;
        el.addEventListener('mousedown', e => this.handleEvent(e));
        el.addEventListener('mouseup', e => this.handleEvent(e));
        el.addEventListener('mousemove', e => this.handleEvent(e));
        el.addEventListener('contextmenu', e => this.handleEvent(e));
        const touchEventHandler = this.handleTouchEvent.bind(this);
        el.addEventListener('touchstart', touchEventHandler);
        el.addEventListener('touchend', touchEventHandler);
        el.addEventListener('touchcancel', touchEventHandler);
        el.addEventListener('touchmove', touchEventHandler);
    }
    handleTouchEvent(e) {
        e.stopPropagation();
        e.preventDefault();
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            this.updatePosition(touch.clientX, touch.clientY);
            this.buttons[0].setDown(true);
        }
        else {
            this.buttons[0].setDown(false);
        }
    }
    handleEvent(e) {
        e.stopPropagation();
        e.preventDefault();
        this.updatePosition(e.clientX, e.clientY);
        if (e.type === 'mousedown') {
            this.buttons[e.button].setDown(true);
            this.el.focus();
        }
        if (e.type === 'mouseup') {
            this.buttons[e.button].setDown(false);
        }
    }
    updatePosition(clientX, clientY) {
        let rect = this.el.getBoundingClientRect();
        // If the client rect is not the same aspect ratio as canvas,
        // then we are fullscreen.
        // Need to update client rect accordingly.
        const terminalAspectRatio = this.width / this.height;
        const rectAspectRatio = rect.width / rect.height;
        if (rectAspectRatio - terminalAspectRatio > 0.01) {
            const actualWidth = terminalAspectRatio * rect.height;
            const excess = rect.width - actualWidth;
            rect = new Rect(Math.floor(excess / 2), 0, actualWidth, rect.height);
        }
        if (rectAspectRatio - terminalAspectRatio < -0.01) {
            const actualHeight = rect.width / terminalAspectRatio;
            const excess = rect.height - actualHeight;
            rect = new Rect(0, Math.floor(excess / 2), rect.width, actualHeight);
        }
        this.x = (this.width * (clientX - rect.left) / rect.width) | 0;
        this.y = (this.height * (clientY - rect.top) / rect.height) | 0;
    }
    update(time) {
        this.dx = this.x - this.prevX;
        this.dy = this.y - this.prevY;
        this.prevX = this.x;
        this.prevY = this.y;
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].update(time);
        }
    }
}

const dxs = [-1, 0, 1, -1, 1, -1, 0, 1];
const dys = [-1, -1, -1, 0, 0, 1, 1, 1];
const costs = [1.4, 1, 1.4, 1, 1, 1.4, 1, 1.4];
let pathId = 0;
/**
 * Calculates path between two points using Dijkstra's algorithm.
 *
 * @param source Starting point, must have x and y properties.
 * @param dest Destination point, must have x and y properties.
 * @param maxDist Maximum distance to examine.
 * @return Array of steps if destination found; undefined otherwise.
 */
function computePath(map, source, dest, maxDist) {
    pathId++;
    const sourceCell = map.grid[source.y][source.x];
    sourceCell.pathId = pathId;
    sourceCell.g = 0.0;
    sourceCell.h = Math.hypot(source.x - dest.x, source.y - dest.y);
    sourceCell.prev = null;
    const q = new SortedSet([sourceCell]);
    while (q.size() > 0) {
        const u = q.pop();
        if (u.x === dest.x && u.y === dest.y) {
            return buildPath(u);
        }
        for (let i = 0; i < dxs.length; i++) {
            const x = u.x + dxs[i];
            const y = u.y + dys[i];
            if (x >= 0 && x < map.width && y >= 0 && y < map.height) {
                const v = map.grid[y][x];
                if (v.blocked && v.explored && (x !== dest.x || y !== dest.y)) {
                    continue;
                }
                if (v.pathId !== pathId) {
                    v.pathId = pathId;
                    v.g = Infinity;
                    v.h = Math.hypot(x - dest.x, y - dest.y);
                    v.prev = null;
                }
                const alt = u.g + costs[i];
                if (alt < v.g && alt <= maxDist) {
                    v.g = alt;
                    v.prev = u;
                    q.insert(v);
                }
            }
        }
    }
    return undefined;
}
function buildPath(cell) {
    const result = [];
    let curr = cell;
    while (curr) {
        result.push(curr);
        curr = curr.prev;
    }
    result.reverse();
    return result;
}
class SortedSet {
    constructor(initialValues) {
        this.values = initialValues;
    }
    insert(cell) {
        const array = this.values;
        let low = 0;
        let high = array.length;
        let index = 0;
        while (low < high) {
            const mid = (low + high) >>> 1;
            const midCell = array[mid];
            if (midCell.g + midCell.h > cell.g + cell.h) {
                low = mid + 1;
                index = low;
            }
            else {
                high = mid;
                index = high;
            }
        }
        array.splice(index, 0, cell);
    }
    pop() {
        return this.values.pop();
    }
    size() {
        return this.values.length;
    }
}

/**
 * Random number generator.
 *
 * LCG
 * https://stackoverflow.com/a/424445/2051724
 */
class RNG {
    /**
     * Creates a new random number generator.
     *
     * @param seed The integer seed.
     */
    constructor(seed) {
        // LCG using GCC's constants
        this.m = 0x80000000; // 2**31;
        this.a = 1103515245;
        this.c = 12345;
        this.state = seed || 1;
    }
    nextInt() {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state;
    }
    /**
     * Returns a floating point number between 0.0 and 1.0.
     */
    nextFloat() {
        // returns in range [0,1]
        return this.nextInt() / (this.m - 1);
    }
    /**
     * Returns an integer in the range start (inclusive) to end (exclusive).
     * @param start Lower bound, inclusive.
     * @param end Upper bound, exclusive.
     */
    nextRange(start, end) {
        // returns in range [start, end): including start, excluding end
        // can't modulu nextInt because of weak randomness in lower bits
        const rangeSize = end - start;
        const randomUnder1 = this.nextInt() / this.m;
        const result = start + ((randomUnder1 * rangeSize) | 0);
        if (isNaN(result)) {
            throw new Error('rand nan');
        }
        return result;
    }
    chooseIndex(chances) {
        const total = chances.reduce((a, b) => a + b);
        const roll = this.nextRange(1, total + 1);
        let runningTotal = 0;
        for (let i = 0; i < chances.length; i++) {
            runningTotal += chances[i];
            if (roll <= runningTotal) {
                return i;
            }
        }
        return chances.length - 1;
    }
    chooseKey(chancesMap) {
        const values = Object.keys(chancesMap);
        const chances = values.map(value => chancesMap[value]);
        return values[this.chooseIndex(chances)];
    }
}

/**
 * Vertex shader program.
 *
 * a = attribute vec2 aVertexPosition;
 * b = attribute vec2 aTextureCoord;
 * c = attribute vec3 aFgColor;
 * d = attribute vec3 aBgColor;
 * e = varying vec2 vTextureCoord;
 * f = varying vec4 vFgColor;
 * g = varying vec4 vBgColor;
 */
const VERTEX_SHADER_SOURCE = '#version 300 es\n' +
    'precision highp float;' +
    'in vec2 a;' +
    'in vec2 b;' +
    'in vec3 c;' +
    'in vec3 d;' +
    'out vec2 e;' +
    'out vec4 f;' +
    'out vec4 g;' +
    'void main(void){' +
    'gl_Position=vec4(a.x,a.y,0,1);' +
    'e=b/16.0;' +
    'f=vec4(c.r,c.g,c.b,1);' +
    'g=vec4(d.r,d.g,d.b,1);' +
    '}';
/**
 * Fragment shader program.
 *
 * e = varying vec2 vTextureCoord;
 * f = varying vec4 vFgColor;
 * g = varying vec4 vBgColor;
 * h = uniform bool uGraphicalTiles;
 * s = uniform sampler2D uSampler;
 * o = out vec4 oColor;
 */
const FRAGMENT_SHADER_SOURCE = '#version 300 es\n' +
    'precision highp float;' +
    'in vec2 e;' +
    'in vec4 f;' +
    'in vec4 g;' +
    'uniform bool h;' +
    'uniform sampler2D s;' +
    'out vec4 o;' +
    'void main(void){' +
    'o=texture(s,e);' +
    'if(h){' +
    // Using graphical tiles
    'if(o.a<0.1){' +
    // The current pixel of the foreground sprite is transparent.
    // Draw the background tile instead.
    // Use the background red channel for the tile X coordinate.
    // Use the background green channel for the tile Y coordinate.
    // Use the fractional component of the texture coord for the pixel offset.
    'o=texture(s,g.rg*16.0+fract(e*16.0)/16.0);' +
    '}' +
    '}else{' +
    // Using ASCII characters
    'if(o.r<0.1) {' +
    // Black background, so use bgColor
    'o=g;' +
    '} else {' +
    // White background, so use fgColor
    'o=f;' +
    '}' +
    '}' +
    '}';

/**
 * Linearly interpolates a number in the range 0-max to -1.0-1.0.
 *
 * @param i The value between 0 and max.
 * @param max The maximum value.
 * @returns The interpolated value between -1.0 and 1.0.
 */
function interpolate(i, max) {
    return -1.0 + 2.0 * (i / max);
}
const DEFAULT_OPTIONS = {
    font: DEFAULT_FONT,
};
class Terminal extends Console {
    constructor(canvas, width, height, options) {
        super(width, height);
        options = options || DEFAULT_OPTIONS;
        this.canvas = canvas;
        this.font = options.font || DEFAULT_FONT;
        this.pixelWidth = width * this.font.charWidth;
        this.pixelHeight = height * this.font.charHeight;
        canvas.width = this.pixelWidth;
        canvas.height = this.pixelHeight;
        canvas.style.imageRendering = 'pixelated';
        canvas.style.outline = 'none';
        canvas.tabIndex = 0;
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
        this.keys = new Keyboard(canvas);
        this.mouse = new Mouse(this);
        // Get the WebGL context from the canvas
        const gl = canvas.getContext('webgl2', { antialias: false });
        if (!gl) {
            throw new Error('Unable to initialize WebGL. Your browser may not support it.');
        }
        const program = gl.createProgram();
        if (!program) {
            throw new Error('Unable to initialize WebGL. Your browser may not support it.');
        }
        this.gl = gl;
        this.program = program;
        gl.attachShader(program, this.buildShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE));
        gl.attachShader(program, this.buildShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE));
        gl.linkProgram(program);
        gl.useProgram(program);
        if (this.font.graphical) {
            // Set the flag to ignore foreground/background colors, and use texture
            // directly
            gl.uniform1i(gl.getUniformLocation(program, 'h'), 1);
        }
        this.positionAttribLocation = this.getAttribLocation('a');
        this.textureAttribLocation = this.getAttribLocation('b');
        this.fgColorAttribLocation = this.getAttribLocation('c');
        this.bgColorAttribLocation = this.getAttribLocation('d');
        const cellCount = width * height;
        this.positionsArray = new Float32Array(cellCount * 3 * 4);
        this.indexArray = new Uint16Array(cellCount * 6);
        this.textureArray = new Float32Array(cellCount * 2 * 4);
        this.foregroundUint8Array = new Uint8Array(cellCount * 4 * 4);
        this.foregroundDataView = new DataView(this.foregroundUint8Array.buffer);
        this.backgroundUint8Array = new Uint8Array(cellCount * 4 * 4);
        this.backgroundDataView = new DataView(this.backgroundUint8Array.buffer);
        // Init the positions buffer
        let i = 0;
        let j = 0;
        let k = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                // Top-left
                this.positionsArray[i++] = interpolate(x, width);
                this.positionsArray[i++] = -interpolate(y, height);
                // Top-right
                this.positionsArray[i++] = interpolate(x + 1, width);
                this.positionsArray[i++] = -interpolate(y, height);
                // Bottom-right
                this.positionsArray[i++] = interpolate(x + 1, width);
                this.positionsArray[i++] = -interpolate(y + 1, height);
                // Bottom-left
                this.positionsArray[i++] = interpolate(x, width);
                this.positionsArray[i++] = -interpolate(y + 1, height);
                this.indexArray[j++] = k + 0;
                this.indexArray[j++] = k + 1;
                this.indexArray[j++] = k + 2;
                this.indexArray[j++] = k + 0;
                this.indexArray[j++] = k + 2;
                this.indexArray[j++] = k + 3;
                k += 4;
            }
        }
        this.positionBuffer = gl.createBuffer();
        this.indexBuffer = gl.createBuffer();
        this.textureBuffer = gl.createBuffer();
        this.foregroundBuffer = gl.createBuffer();
        this.backgroundBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.positionsArray, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indexArray, gl.STATIC_DRAW);
        this.texture = this.loadTexture(this.font.url);
        this.lastRenderTime = 0;
        this.renderDelta = 0;
        this.fps = 0;
        this.averageFps = 0;
        this.requestAnimationFrame();
    }
    handleResize() {
        const parent = this.canvas.parentElement;
        if (!parent) {
            return;
        }
        const widthFactor = parent.offsetWidth / this.pixelWidth;
        const heightFactor = parent.offsetHeight / this.pixelHeight;
        const factor = Math.min(widthFactor, heightFactor);
        const width = (factor * this.pixelWidth) | 0;
        const height = (factor * this.pixelHeight) | 0;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
    }
    getAttribLocation(name) {
        const location = this.gl.getAttribLocation(this.program, name);
        this.gl.enableVertexAttribArray(location);
        return location;
    }
    flush() {
        let textureArrayIndex = 0;
        let colorArrayIndex = 0;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const cell = this.getCell(x, y);
                if (!cell.dirty) {
                    textureArrayIndex += 8;
                    colorArrayIndex += 16;
                    continue;
                }
                const textureX = cell.charCode % 16;
                const textureY = (cell.charCode / 16) | 0;
                this.textureArray[textureArrayIndex++] = textureX;
                this.textureArray[textureArrayIndex++] = textureY;
                this.textureArray[textureArrayIndex++] = textureX + 1;
                this.textureArray[textureArrayIndex++] = textureY;
                this.textureArray[textureArrayIndex++] = textureX + 1;
                this.textureArray[textureArrayIndex++] = textureY + 1;
                this.textureArray[textureArrayIndex++] = textureX;
                this.textureArray[textureArrayIndex++] = textureY + 1;
                for (let i = 0; i < 4; i++) {
                    this.foregroundDataView.setUint32(colorArrayIndex, cell.fg, false);
                    this.backgroundDataView.setUint32(colorArrayIndex, cell.bg, false);
                    colorArrayIndex += 4;
                }
                cell.dirty = false;
            }
        }
    }
    isKeyDown(keyCode) {
        const key = this.keys.getKey(keyCode);
        return !!key && key.down;
    }
    isKeyPressed(keyCode) {
        const key = this.keys.getKey(keyCode);
        return !!key && key.isPressed();
    }
    getKeyDownCount(keyCode) {
        const key = this.keys.getKey(keyCode);
        return key ? key.downCount : 0;
    }
    /**
     * Returns a standard roguelike movement key if pressed.
     * Implemented control systems:
     * 1) Numpad arrows
     * 2) VIM keys
     * 3) Normal arrows (4 directions only)
     * 4) Numpad 5 and '.' (period) for "wait"
     * If a key is pressed, returns the movement delta.
     * If no key is pressed, returns undefined.
     * See: http://www.roguebasin.com/index.php?title=Preferred_Key_Controls
     */
    getMovementKey() {
        if (this.isKeyPressed(Keys.VK_NUMPAD1) || this.isKeyPressed(Keys.VK_B)) {
            return new Point(-1, 1);
        }
        if (this.isKeyPressed(Keys.VK_NUMPAD2) || this.isKeyPressed(Keys.VK_J) || this.isKeyPressed(Keys.VK_DOWN)) {
            return new Point(0, 1);
        }
        if (this.isKeyPressed(Keys.VK_NUMPAD3) || this.isKeyPressed(Keys.VK_N)) {
            return new Point(1, 1);
        }
        if (this.isKeyPressed(Keys.VK_NUMPAD4) || this.isKeyPressed(Keys.VK_H) || this.isKeyPressed(Keys.VK_LEFT)) {
            return new Point(-1, 0);
        }
        if (this.isKeyPressed(Keys.VK_NUMPAD5) || this.isKeyPressed(Keys.VK_PERIOD)) {
            return new Point(0, 0);
        }
        if (this.isKeyPressed(Keys.VK_NUMPAD6) || this.isKeyPressed(Keys.VK_L) || this.isKeyPressed(Keys.VK_RIGHT)) {
            return new Point(1, 0);
        }
        if (this.isKeyPressed(Keys.VK_NUMPAD7) || this.isKeyPressed(Keys.VK_Y)) {
            return new Point(-1, -1);
        }
        if (this.isKeyPressed(Keys.VK_NUMPAD8) || this.isKeyPressed(Keys.VK_K) || this.isKeyPressed(Keys.VK_UP)) {
            return new Point(0, -1);
        }
        if (this.isKeyPressed(Keys.VK_NUMPAD9) || this.isKeyPressed(Keys.VK_U)) {
            return new Point(1, -1);
        }
        return undefined;
    }
    buildShader(type, source) {
        const gl = this.gl;
        const sh = gl.createShader(type);
        if (!sh) {
            throw new Error('An error occurred compiling the shader: ');
        }
        gl.shaderSource(sh, source);
        gl.compileShader(sh);
        if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
            throw new Error('An error occurred compiling the shader: ' + gl.getShaderInfoLog(sh));
        }
        return sh;
    }
    /**
     * Initialize a texture and load an image.
     * When the image finished loading copy it into the texture.
     * @param url
     */
    loadTexture(url) {
        const gl = this.gl;
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // Because images have to be download over the internet
        // they might take a moment until they are ready.
        // Until then put a single pixel in the texture so we can
        // use it immediately. When the image has finished downloading
        // we'll update the texture with the contents of the image.
        const level = 0;
        const internalFormat = gl.RGBA;
        const width = 1;
        const height = 1;
        const border = 0;
        const srcFormat = gl.RGBA;
        const srcType = gl.UNSIGNED_BYTE;
        const pixel = new Uint8Array([0, 0, 0, 255]); // opaque black
        gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel);
        const image = new Image();
        image.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        };
        image.src = url;
        return texture;
    }
    //
    // Draw the scene.
    //
    render() {
        const gl = this.gl;
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.viewport(0, 0, this.pixelWidth, this.pixelHeight);
        // Tell WebGL how to pull out the positions from the position
        // buffer into the vertexPosition attribute
        {
            const numComponents = 2;
            const type = gl.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
            gl.vertexAttribPointer(this.positionAttribLocation, numComponents, type, normalize, stride, offset);
        }
        // Tell WebGL how to pull out the texture coordinates from
        // the texture coordinate buffer into the textureCoord attribute.
        {
            const numComponents = 2;
            const type = gl.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.textureArray, gl.DYNAMIC_DRAW);
            gl.vertexAttribPointer(this.textureAttribLocation, numComponents, type, normalize, stride, offset);
        }
        // Foreground color
        {
            const numComponents = 4;
            const type = gl.UNSIGNED_BYTE;
            const normalize = true;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.foregroundBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.foregroundUint8Array, gl.DYNAMIC_DRAW);
            gl.vertexAttribPointer(this.fgColorAttribLocation, numComponents, type, normalize, stride, offset);
        }
        // Background color
        {
            const numComponents = 4;
            const type = gl.UNSIGNED_BYTE;
            const normalize = true;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.backgroundBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.backgroundUint8Array, gl.DYNAMIC_DRAW);
            gl.vertexAttribPointer(this.bgColorAttribLocation, numComponents, type, normalize, stride, offset);
        }
        // Tell WebGL which indices to use to index the vertices
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        // Tell WebGL to use our program when drawing
        gl.useProgram(this.program);
        // Tell WebGL we want to affect texture unit 0
        gl.activeTexture(gl.TEXTURE0);
        // Bind the texture to texture unit 0
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        // Tell the shader we bound the texture to texture unit 0
        {
            const vertexCount = this.width * this.height * 6;
            const type = gl.UNSIGNED_SHORT;
            const offset = 0;
            gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
        }
    }
    requestAnimationFrame() {
        window.requestAnimationFrame((t) => this.renderLoop(t));
    }
    renderLoop(time) {
        if (this.lastRenderTime === 0) {
            this.lastRenderTime = time;
            this.fps = 0;
        }
        else {
            this.renderDelta = time - this.lastRenderTime;
            this.lastRenderTime = time;
            this.fps = 1000.0 / this.renderDelta;
            this.averageFps = 0.95 * this.averageFps + 0.05 * this.fps;
        }
        this.keys.updateKeys(time);
        this.mouse.update(time);
        if (this.update) {
            this.update();
        }
        this.flush();
        this.render();
        this.requestAnimationFrame();
    }
}


//# sourceMappingURL=index.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/esm/index.js");
/* harmony import */ var _ecs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecs */ "./src/ecs.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai */ "./src/ai.js");
/* harmony import */ var _terminal_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terminal/ui */ "./src/terminal/ui.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _ascii_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ascii/loader */ "./src/ascii/loader.js");







//declaring variables with no better homes, yet.
__webpack_require__.g.locationId = {}
//TODO: Load from save file
__webpack_require__.g.golemancer = {
    golems: {
        count: 10,
        cost: 10,
        damage: 1,
        damageCost: 20,
        attackSpeed: 1,
        attackSpeedCost: 100
    },
    currency: {
        parts: 100
    },
    //0:line, 1:box, 2:draw
    placement: {
        index: 0,
    },
    waveNum: 0,
    terminal: {
        x: 122,
        y:72,
        arenaX:82,
        arenaY:52,
        bottomX:82,
        bottomY:72,
        sideX:122,
        sideY:72,
        sideIndex:82,
        sideMove:false,
        sideDir: 1,
        sideOut:false,
        sideDisplay:"none",
        allyHealth:1,
        allyMaxHealth:1,
        enemyHealth:1,
        enemyMaxHealth:1,
        allyCount:0,
        enemyCount:0,
        allyMinHealth:0,
        enemyMinHealth:0
    }
}
//TODO: Load from save file

const terminal = new wglt__WEBPACK_IMPORTED_MODULE_0__.Terminal(document.querySelector('canvas'), golemancer.terminal.x, golemancer.terminal.y)

//WGLT leftovers. Setting the whole map as explored and visible to the player
for (let y = 0; y < terminal.height; y++) {
    for (let x = 0; x < terminal.width; x++) {
        terminal.grid[y][x].visible = true
        terminal.grid[y][x].explored = true
    }
}

//creating world to contain entities in order to enable query
__webpack_require__.g.world = _ecs__WEBPACK_IMPORTED_MODULE_1__["default"].createWorld()
//create main box border
_terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.arenaBorderCreate(golemancer, world)
_terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.bottomMenuBorderCreate(golemancer, world)
//Array of all zombie spawn points to save processing power. 1->750
const spawnZone = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750]
 //query array
__webpack_require__.g.query = {
    all : world.createQuery({
        all: [],
    }),
    enemies : world.createQuery({
        all: [_components__WEBPACK_IMPORTED_MODULE_2__.Enemy],
    }),
    allies : world.createQuery({
        all: [_components__WEBPACK_IMPORTED_MODULE_2__.Ally],
    }),
    action : world.createQuery({
        all: [_components__WEBPACK_IMPORTED_MODULE_2__.Action],
    })
}



    //renderLoop = things to do every loop.
let mousePath = []
let removeBool = false
let mouseStart = {
    x:0,
    y:0
}
terminal.update = function() {
    let time = performance.now()
    golemancer.placement.index = golemancer.placement.index
    //clears screen
    this.clear()
    //sets everything to white on black
    this.fillRect(0, 0, this.width, this.height, 0, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.WHITE, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK)
    //checks all entities if action is available, and then do actions
    ;(0,_ai__WEBPACK_IMPORTED_MODULE_3__.doAction)(time)
    //drawing a path while mous click is down

    //0: left click,2: right click, 1: middle click
    //as soon as the mouse is clicked down
    
//zombie wave spawning
//randomly generate number between 0 (0,0 of spawn zone) and n (max x, max y of spawn zone)
//divide number by x length. Whole numbers is y, modulo is x.
//x: 11-60, y: 1-15
//spawn zombies if no zombies
if (query.enemies.get().length <= 0) {
    let spawnList = []
    golemancer.waveNum++
    let tempSpawnZone = spawnZone
    let zombieCount = Math.min(750, Math.pow(golemancer.waveNum, 2))
    for (let i = 0; i < zombieCount; i++) {
        let spawnPoint = tempSpawnZone[Math.floor(Math.random() * (tempSpawnZone.length - 1))]

        spawnList.push(spawnPoint)
    }
    for(let i = 0;i < spawnList.length;i++) {

        let zombiex = spawnList[i] % 50 + 11
        let zombiey = Math.ceil(spawnList[i] / 50)
        let zombie = world.createPrefab("Zombie")
        zombie.position.x = zombiex
        zombie.position.y = zombiey
        locationId[zombie.position.x + "," + zombie.position.y] = zombie.id
    }
}


//left/right mouse clicking for placing units
if (this.mouse.buttons[0].downCount === 1 && this.mouse.buttons[2].downCount === 0) {
    //sets start of path to mouse coordinates
    mouseStart.x = this.mouse.x
    mouseStart.y = this.mouse.y
}
if (this.mouse.buttons[2].downCount === 1 && this.mouse.buttons[0].downCount === 0) {
    //sets start of path to mouse coordinates
    mouseStart.x = this.mouse.x
    mouseStart.y = this.mouse.y
}
if (mouseStart.x < 81 && mouseStart.y < 51) {
    //right click isn't currently down
    if (this.mouse.buttons[2].downCount == 0) {
    //left mouse is being held down
        if (this.mouse.buttons[0].downCount > 1) {
            mousePath = _terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.placement(this, mouseStart, golemancer.golems.count - query.allies.get().length, mousePath, golemancer.placement.index, removeBool)
        }
        //left mouse goes up
        if (this.mouse.buttons[0].upCount === 1 && mousePath.length > 0 && !removeBool) {
            //line placement
            if (golemancer.placement.index === 0 || golemancer.placement.index === 2) {
                let placeableGolems = golemancer.golems.count - query.allies.get().length
                for(let j = 0; j < placeableGolems; j++) {
                    if (mousePath[j]) {
                        if (mousePath[j].y < 30 || mousePath[j].x > 80 || mousePath[j].y > 50) {
                            placeableGolems++
                            continue
                        } else if (locationId[mousePath[j].x + "," + mousePath[j].y] != undefined) {
                            placeableGolems++
                            continue
                        }
                        let entity = world.createPrefab("Human")
                        entity.position.x = mousePath[j].x
                        entity.position.y = mousePath[j].y
                        locationId[entity.position.x + "," + entity.position.y] = entity.id
                    } else {
                        break
                    }
                }
                mousePath = []
            //box placement
            } else if (golemancer.placement.index === 1) {
                //make a list of the spawn points
                let spawnList = []
                let lineCount = 0
                let placeableGolems = golemancer.golems.count - query.allies.get().length
                //bottom right box
                if (this.mouse.x-mouseStart.x > 0 && this.mouse.y-mouseStart.y > 0) {
                    for (let i = placeableGolems;i > 0 && lineCount < (mousePath[1].y-mousePath[0].y); i = i-(mousePath[1].x-mousePath[0].x)) {
                        for (let xi = mousePath[0].x; xi < mousePath[0].x + Math.min(i, mousePath[1].x-mousePath[0].x); xi++) {
                            spawnList.push({x: xi, y: mousePath[0].y+lineCount})
                            }    
                        lineCount++
                    }
                //bottom left box
                } else if (this.mouse.x-mouseStart.x < 0 && this.mouse.y-mouseStart.y > 0) {
                    for (let i = placeableGolems;i > 0 && lineCount < (mousePath[1].y-mousePath[0].y); i = i-((mousePath[0].x-mousePath[1].x)+1)) {
                        for (let xi = mousePath[1].x+(((mousePath[0].x-mousePath[1].x)+1)-(Math.min(i, (mousePath[0].x-mousePath[1].x)+1))); xi < (mousePath[1].x+(((mousePath[0].x-mousePath[1].x)+1)-(Math.min(i, (mousePath[0].x-mousePath[1].x)+1)))) + (Math.min(i, (mousePath[0].x-mousePath[1].x)+1)); xi++) {
                            spawnList.push({x: xi, y: mousePath[0].y+lineCount})
                        }    
                        lineCount++
                    }
                //top left box
                } else if (this.mouse.x-mouseStart.x < 0 && this.mouse.y-mouseStart.y < 0) {
                    for (let i = placeableGolems;i > 0 && lineCount < (mouseStart.y-this.mouse.y); i = i-((mouseStart.x-this.mouse.x)+1)) {
                        for (let xi = mousePath[1].x+(((mousePath[0].x-mousePath[1].x)+1)-(Math.min(i, (mousePath[0].x-mousePath[1].x)+1))); xi < (mousePath[1].x+(((mousePath[0].x-mousePath[1].x)+1)-(Math.min(i, (mousePath[0].x-mousePath[1].x)+1)))) + (Math.min(i, (mousePath[0].x-mousePath[1].x)+1)); xi++) {
                            spawnList.push({x: xi, y: mousePath[0].y-lineCount})
                        }    
                        lineCount++
                    }
                //top right box
                } else if (this.mouse.x-mouseStart.x > 0 && this.mouse.y-mouseStart.y < 0) {
                    for (let i = placeableGolems;i > 0 && lineCount < (mouseStart.y-this.mouse.y); i = i-(this.mouse.x-mouseStart.x)) {
                        for (let xi = mousePath[0].x; xi < mousePath[0].x + Math.min(i, mousePath[1].x-mousePath[0].x); xi++) {
                            spawnList.push({x: xi, y: mousePath[0].y-lineCount})
                        }    
                        lineCount++
                    }
                }
                //make new entities for the rest
                for (let j = 0; j < golemancer.golems.count && spawnList[j] && locationId[spawnList[j].x + "," + spawnList[j].y] == undefined; j++) {
                    if (spawnList[j].y > 29 && spawnList[j].y < 51 && spawnList[j].x < 82 ) {
                        let entity = world.createPrefab("Human")
                        entity.position.x = spawnList[j].x
                        entity.position.y = spawnList[j].y
                        locationId[entity.position.x + "," + entity.position.y] = entity.id
                    }
                }
                mousePath = []
            }
        }
    }
    //left click is not currently down
    if (this.mouse.buttons[0].downCount == 0) {

        //right mouse is being held down
        if (this.mouse.buttons[2].downCount > 1) {
            removeBool = true
            mousePath = _terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.placement(this, mouseStart, golemancer.golems.count - query.allies.get().length, mousePath, golemancer.placement.index, removeBool)
        }
        //right mouse up
        if (this.mouse.buttons[2].upCount === 1 && mousePath.length > 0 && removeBool) {
            //line remove
            if (golemancer.placement.index === 0 || golemancer.placement.index === 2) {
                for(let j = 0; j < mousePath.length; j++) {
                    let entity = world.getEntity(locationId[mousePath[j].x + "," + mousePath[j].y])
                    if (entity && entity.has(_components__WEBPACK_IMPORTED_MODULE_2__.Ally)) {
                        (0,_functions__WEBPACK_IMPORTED_MODULE_5__.killEntity)(entity)
                    }
                }
            }else if (golemancer.placement.index === 1) {
                    let mouseStart = mousePath[0]
                    let mouseEnd = mousePath[1]
                for (let i = Math.min(mouseStart.x, mouseEnd.x); i < Math.max(mouseStart.x, mouseEnd.x); i++) {
                    for (let j = Math.min(mouseStart.y, mouseEnd.y); j < Math.max(mouseStart.y, mouseEnd.y); j++) {
                        let entity = world.getEntity(locationId[i + "," + j])
                        if (entity && entity.has(_components__WEBPACK_IMPORTED_MODULE_2__.Ally)) {
                            (0,_functions__WEBPACK_IMPORTED_MODULE_5__.killEntity)(entity)
                        }
                    }
                }
            }
            mousePath = []
            removeBool = false
        }
    }

//shop button
} else if (mouseStart.y > 66 && mouseStart.x < 11) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.x < 11 && this.mouse.y > 66) {
        _functions__WEBPACK_IMPORTED_MODULE_5__.buttons.onShopClick()
    }
//buy damage button
} else if (golemancer.terminal.sideOut && golemancer.terminal.sideDisplay == "upgrades" && mouseStart.y > 3 && mouseStart.y < 8 && mouseStart.x > 110 && mouseStart.x < 121) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.y > 3 && this.mouse.y < 8 && this.mouse.x > 110 && this.mouse.x < 121) {
        _functions__WEBPACK_IMPORTED_MODULE_5__.buttons.onBuyDamageClick()
    }
}
//buy attack speed button
 else if (golemancer.terminal.sideOut && golemancer.terminal.sideDisplay == "upgrades" && mouseStart.y > 8 && mouseStart.y < 14 && mouseStart.x > 110 && mouseStart.x < 121) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.y > 8 && this.mouse.y < 14 && this.mouse.x > 110 && this.mouse.x < 121) {
        _functions__WEBPACK_IMPORTED_MODULE_5__.buttons.onBuyAttackSpeedClick()
    }
}
//buy golem
else if (golemancer.terminal.sideOut && golemancer.terminal.sideDisplay == "upgrades" && mouseStart.y > 14 && mouseStart.y < 20 && mouseStart.x > 110 && mouseStart.x < 121) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.y > 14 && this.mouse.y < 20 && this.mouse.x > 110 && this.mouse.x < 121) {
        _functions__WEBPACK_IMPORTED_MODULE_5__.buttons.onBuyGolemClick()
    }
}

//select line
else if (mouseStart.y > 51 && mouseStart.y < 56 && mouseStart.x > 24 && mouseStart.x < 31) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.y > 51 && this.mouse.y < 56 && this.mouse.x > 24 && this.mouse.x < 31) {
        golemancer.placement.index = 0
    }
}
//select box
else if (mouseStart.y > 51 && mouseStart.y < 56 && mouseStart.x > 30 && mouseStart.x < 37) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.y > 51 && this.mouse.y < 56 && this.mouse.x > 30 && this.mouse.x < 37) {
        golemancer.placement.index = 1
    }
}
//select draw
else if (mouseStart.y > 51 && mouseStart.y < 56 && mouseStart.x > 36 && mouseStart.x < 42) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.y > 51 && this.mouse.y < 56 && this.mouse.x > 36 && this.mouse.x < 42) {
        golemancer.placement.index = 2
    }
}
//start drawing stuff

    //drawing UI
    //draw spawn border
    this.drawHLine(1, 29, 80, "-", wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
    //Drawing test pilot player and zombie
    query.all.get().forEach((entity) => {
        if (!entity.isDestroyed) {

            this.drawChar(entity.position.x, entity.position.y, entity.appearance.char, entity.appearance.color), wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;  
    }
    })
    //drawing FPS
    this.drawString(1,1, String(Math.round(this.averageFps*100/100)))
    //if path exists, change cell backgrounds to yellow
    //line placement mode and draw placement mode

    //TODO: Move this into placement.js to be in line with box drawing
    if ((golemancer.placement.index === 0 || golemancer.placement.index === 2) && mousePath.length > 0 && !removeBool) {
        let placeableGolems = golemancer.golems.count - query.allies.get().length
        for (let i=0;i < mousePath.length; i++) {
            let cell = this.getCell(mousePath[i].x, mousePath[i].y)
            if (cell) {
                if (i >= placeableGolems) {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                } else if (locationId[mousePath[i].x + "," + mousePath[i].y]) {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                    placeableGolems++
                } else if (mousePath[i].y < 30 || mousePath[i].x > 80 || mousePath[i].y > 50) {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                    placeableGolems++

                } else {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                }
            }
        }
    } else if ((golemancer.placement.index === 0 || golemancer.placement.index === 2) && mousePath.length > 0 && removeBool) {
        for (let i=0;i < mousePath.length; i++) {
            let cell = this.getCell(mousePath[i].x, mousePath[i].y)
            if (cell) {
                if (locationId[mousePath[i].x + "," + mousePath[i].y]) {
                    let entity = world.getEntity(locationId[mousePath[i].x + "," + mousePath[i].y])
                    if (entity.has(_components__WEBPACK_IMPORTED_MODULE_2__.Ally)) {
                        cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    } else {
                        cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                    }
                } else {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                }
            }
        }
    }
//fix this stupid logic, maybe a new function
    if(golemancer.terminal.sideMove || golemancer.terminal.sideOut) {
        if (golemancer.terminal.sideOut && !golemancer.terminal.sideMove) {
            _terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.sideMenuOut(terminal, golemancer.terminal.sideIndex)
        }
        else if (golemancer.terminal.sideDir == 0) {
            _terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.sideMenuIn(terminal, golemancer.terminal.sideIndex)
        }
        else if (golemancer.terminal.sideDir == 1) {
            _terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.sideMenuOut(terminal, golemancer.terminal.sideIndex)
        }
    }

    //mouse debug
    this.drawString(1,2, "mouse x: " + String(this.mouse.x))
    this.drawString(1,3, "mouse y: " + String(this.mouse.y))
    _terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.bottomMenuUpdate(terminal)
    _terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.sideMenuUpdate(terminal)
    //hacking everything together
    let text = "    _--_\n   /    \\ \n  |      |\n   \\    /\n  .-'   '-.\n/`         `\\\n|           |\n( \\       / )\n| /|     |\\ |\n| ||     || | \n| ||     || |\n| ||     || |\n;;;       ;;;\n  |  \\ /  |\n  |   |   |\n  ;  | |  ;\n  |  | |  |\n  | _| |_ |\n  /  | |  \\\n  |  | |  |\n  |  | |  |\n  /  | |  \\\n<`___| |___`>"
    //this.drawString(83,2, text)
    
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JQa0M7QUFDbEM7QUFDTztBQUNQLG1CQUFtQiw4Q0FBSztBQUN4QjtBQUNBO0FBQ0EsV0FBVyxxQkFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGdDQUFnQyxjQUFjO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixvQkFBb0I7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0JBQW9COztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBc0Q7QUFDNUQsTUFBTSx3REFBd0Q7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0Isd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixlQUFlO0FBQ2YsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCLG1DQUFtQztBQUNuQyxjQUFjO0FBQ2QsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixlQUFlO0FBQ2YsZUFBZTtBQUNmLGVBQWU7QUFDZixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLE1BQU07QUFDTixNQUFNLEtBQUs7QUFDWDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLFNBQVM7QUFDVCxPQUFPLE1BQU07QUFDYjtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ04sTUFBTTtBQUNOLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsa0JBQWtCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRWO0FBQzVWOzs7Ozs7O1VDcnFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VB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dUNBQXVDLGtEQUFxQjtBQUM1RCxrQkFBa0I7QUFDbEIsdUNBQXVDLGtEQUFxQjtBQUM1RDtBQUNBLGtCQUFrQjtBQUNsQix1Q0FBdUMsa0RBQXFCO0FBQzVEO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsdUNBQXVDLCtDQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04scUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2Q0FBSTtBQUN2QywyQ0FBMkMsK0NBQWtCO0FBQzdELHNCQUFzQjtBQUN0QiwyQ0FBMkMsa0RBQXFCO0FBQ2hFO0FBQ0Esa0JBQWtCO0FBQ2xCLHVDQUF1QyxrREFBcUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjO0FBQzFCO0FBQ0E7QUFDQSxZQUFZLHVEQUFhO0FBQ3pCO0FBQ0E7QUFDQSxZQUFZLHdEQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQW1CO0FBQ3ZCLElBQUksMkRBQWlCO0FBQ3JCO0FBQ0Esc01BQXNNLGtDQUFrQyxNQUFNO0FBQzlPO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL3NyYy9hc2NpaS9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL3NyYy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvZWNzLmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL3NyYy90ZXJtaW5hbC9wbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL3NyYy90ZXJtaW5hbC91aS5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vbm9kZV9tb2R1bGVzL2dlb3RpYy9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vbm9kZV9tb2R1bGVzL3dnbHQvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvbGVtYW5jZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5Nb2R1bGFyIEFJOlxyXG4gICAgZnVuY3Rpb25zIGluIG9yZGVyIHRvIG1ha2UgaXQgZWFzeSB0byBzd2l0Y2ggaW4gYW5kIG91dCBkaWZmZXJlbnQgQUkgaW50byBlbmVtaWVzL2dvbGVtcy5cclxuICAgICoqTW92ZW1lbnQqKlxyXG4gICAgem9tYmllIGhvcmRlLWVzcXVlIG1vdmVtZW50XHJcbiAgICBmb3JtYXRpb25hbCBtYXJjaGluZyBmb3J3YXJkXHJcbiAgICBmb3JtYXRpb24gcmVpbmZvcmNpbmcgZnJvbSBzcGF3blxyXG4gICAgKipUYXJnZXR0aW5nKipcclxuICAgIHRhcmdldCBuZWFyZXN0XHJcbiAgICBkdW1iIHRhcmdldCBhZGphY2VudCByYW5kb21cclxuICAgIGZvcm1hdGlvbi1hdHRhY2sgbmVpZ2hib3IncyB0YXJnZXRzXHJcbiAgICBmb3JtYXRpb24tcGhhbGFueCBhdHRhY2sgaW4gY29sdW1ucyBmb3J3YXJkXHJcbiAgICAtLVRhcmdldHRpbmc6IEZpbmQgYSB3YXkgdG8gaW5jbHVkZSByYW5nZVxyXG4gICAgLS1UYXJnZXR0aW5nOiBBZGQgdGFyZ2V0dGluZyBjb29sZG93biB0byByZWR1Y2UgcHJvY2Vzc2luZyBsb2FkLiBJLmUuLCB1cGRhdGUgZXZlcnkgNSBhY3Rpb25zLlxyXG4gICAgVGFyZ2V0IHJhbmRvbSBpbiByYW5nZVxyXG4gICAgVGFyZ2V0IHJhbmRvbSBnbG9iYWxseVxyXG4qL1xyXG5pbXBvcnQgeyBoYXNNb3ZlZCB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgKiBhcyB3Z2x0IGZyb20gXCJ3Z2x0XCJcclxuaW1wb3J0IHsga2lsbEVudGl0eSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiXHJcbmltcG9ydCB7IEVuZW15LCBBbGx5IH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXHJcbmV4cG9ydCBsZXQgZW50aXR5QUkgPSB7XHJcbiAgICBtb3ZlbWVudDoge1xyXG4gICAgICAgIC8vbW92ZSBsaWtlIGEgem9tYmllIGhvcmRlLiBSZXF1aXJlcyBlbnRpdHksIGEgdGFyZ2V0LCBtb3ZlbWVudCBkaXJlY3Rpb25cclxuICAgICAgICBob3JkZTogZnVuY3Rpb24oZW50aXR5KSB7XHJcbiAgICAgICAgICAgIGxldCBjYXJkaW5hbHMgPSBbWzAsMV0sWzEsMV0sWzEsMF0sWzEsLTFdLFswLC0xXSxbLTEsLTFdLFstMSwwXSxbLTEsMV1dXHJcbiAgICAgICAgICAgIC8vZGV0ZXJtaW5lIGNhcmRpbmFsIG1vdmVtZW50IHRvIG5lYXJlc3QgZW5lbXlcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZW50aXR5LmNvbWJhdC54IC0gZW50aXR5LnBvc2l0aW9uLngsIGVudGl0eS5jb21iYXQueSAtIGVudGl0eS5wb3NpdGlvbi55KSogMTgwIC8gTWF0aC5QSVxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd0FuZ2xlID0gaSAqIDQ1IC0gMjIuNVxyXG4gICAgICAgICAgICAgICAgbGV0IGhpZ2hBbmdsZSA9IGkgKiA0NSArIDIyLjVcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnNpZ24obG93QW5nbGUpID09IC0xKSB7bG93QW5nbGUgKz0gMzYwfVxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguc2lnbihhbmdsZSkgPT0gLTEpIHthbmdsZSArPSAzNjB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKGkgPT0gMCAmJiAoYW5nbGUgPj0gMzM3LjUgfHwgYW5nbGUgPD0gMjIuNSkpIHx8IChsb3dBbmdsZSA8PSBhbmdsZSAmJiBhbmdsZSA8PSBoaWdoQW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSBjYXJkaW5hbHNbaV1bMF1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueSA9IGNhcmRpbmFsc1tpXVsxXVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCA9IGlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9kZXRlcm1pbmUgaWYgcGF0aCBmb3J3YXJkIGlzIGVtcHR5XHJcbiAgICAgICAgICAgIGlmICghbG9jYXRpb25JZFsoZW50aXR5LnBvc2l0aW9uLnggKyBlbnRpdHkubW92ZW1lbnQueCkgKyBcIixcIiArIChlbnRpdHkucG9zaXRpb24ueSArIGVudGl0eS5tb3ZlbWVudC55KV0pIHtcclxuICAgICAgICAgICAgICAgIC8vZW1wdHksIG1vdmUgc3RyYWlnaHQgdG93YXJkcyB0YXJnZXRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vZGVjaWRlIHdoaWNoIGRpcmVjdGlvbnMgYXJlIHZpYWJsZSB0byBnbyB0b1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbURpcmVjdGlvbiA9IFtdXHJcbiAgICAgICAgICAgICAgICAvL2Zyb250IGxlZnRcclxuICAgICAgICAgICAgICAgIGlmICghbG9jYXRpb25JZFsoZW50aXR5LnBvc2l0aW9uLnggKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMF0pICsgXCIsXCIgKyAoZW50aXR5LnBvc2l0aW9uLnkgKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMV0pXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbURpcmVjdGlvbi5wdXNoKFwiRnJvbnQgTGVmdFwiKVxyXG4gICAgICAgICAgICAgICAgLy9mcm9udCByaWdodFxyXG4gICAgICAgICAgICAgICAgfSBpZiAoIWxvY2F0aW9uSWRbKGVudGl0eS5wb3NpdGlvbi54ICsgY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgLSAxKSAlIDgpWzBdKSArIFwiLFwiICsgKGVudGl0eS5wb3NpdGlvbi55ICsgY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgLSAxKSAlIDgpWzFdKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24ucHVzaChcIkZyb250IFJpZ2h0XCIpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9zaWRlIGxlZnRcclxuICAgICAgICAgICAgICAgIH0gaWYgKCFsb2NhdGlvbklkWyhlbnRpdHkucG9zaXRpb24ueCArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMikgJSA4KVswXSkgKyBcIixcIiArIChlbnRpdHkucG9zaXRpb24ueSArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMikgJSA4KVsxXSldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tRGlyZWN0aW9uLnB1c2goXCJTaWRlIExlZnRcIilcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NpZGUgcmlnaHRcclxuICAgICAgICAgICAgICAgIH0gaWYgKCFsb2NhdGlvbklkWyhlbnRpdHkucG9zaXRpb24ueCArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMikgJSA4KVswXSkgKyBcIixcIiArIChlbnRpdHkucG9zaXRpb24ueSArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMikgJSA4KVsxXSldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tRGlyZWN0aW9uLnB1c2goXCJTaWRlIFJpZ2h0XCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3JhbmRvbWx5IHBpY2sgYSB2YWxpZCBkaXJlY3Rpb24gdG8gbW92ZSB0bywgb3Igbm9uZVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyYW5kb21EaXJlY3Rpb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tRGlyZWN0aW9uLmxlbmd0aCldKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Zyb250IExlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC54ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgKyAxKSAlIDgpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnkgPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Zyb250IFJpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueCA9IGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMSkgJSA4KVswXVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC55ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgLSAxKSAlIDgpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdTaWRlIExlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC54ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnkgPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDIpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NpZGUgUmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC54ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgLSAyKSAlIDgpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnkgPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDIpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ05vbmUnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnkgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy91cGRhdGUgbG9jYXRpb25JZCBhbmQgc2V0IG5ldyBwb3NpdGlvblxyXG4gICAgICAgICAgICBkZWxldGUgbG9jYXRpb25JZFtlbnRpdHkucG9zaXRpb24ueCArIFwiLFwiICsgZW50aXR5LnBvc2l0aW9uLnldXHJcbiAgICAgICAgICAgIGVudGl0eS5wb3NpdGlvbi54ICs9IGVudGl0eS5tb3ZlbWVudC54XHJcbiAgICAgICAgICAgIGVudGl0eS5wb3NpdGlvbi55ICs9IGVudGl0eS5tb3ZlbWVudC55XHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWRbZW50aXR5LnBvc2l0aW9uLnggKyBcIixcIiArIGVudGl0eS5wb3NpdGlvbi55XSA9IGVudGl0eS5pZFxyXG4gICAgICAgICAgICAvL2luZm9ybXMgYWN0aW9uIHRpbWVyIHRoYXQgdGhlIGxhc3QgYWN0aW9uIHdhcyBtb3ZlbWVudCBhbmQgcmVxdWlyZXMgdmVsb2NpdHkgbXVsdGlwbGllclxyXG4gICAgICAgICAgICBlbnRpdHkuYWRkKGhhc01vdmVkKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0YXJnZXQ6IHtcclxuICAgICAgICAvL3RhcmdldCBuZWFyZXN0LiByZXF1aXJlcyBlbnRpdHksIGFuZCB0ZWFtIG9mIHRhcmdldDogXCJlbmVtaWVzXCIsIFwiYWxsaWVzXCJcclxuICAgICAgICBuZWFyZXN0OiBmdW5jdGlvbihlbnRpdHksIHRlYW0sIGNvb2xkb3duKSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRpdHkuY29tYmF0LnRhcmdldENvb2xkb3duIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eS5jb21iYXQudGFyZ2V0Q29vbGRvd24gPSBjb29sZG93blxyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gMFxyXG4gICAgICAgICAgICAgICAgLy9EZXRlcm1pbmUgY2xvc2VzdCBwbGF5ZXIgYWxseSB0byB6b21iaWVcclxuICAgICAgICAgICAgICAgIHF1ZXJ5W3RlYW1dLmdldCgpLmZvckVhY2goKGVudGl0eVRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmh5cG90KChlbnRpdHkucG9zaXRpb24ueCAtIGVudGl0eVRhcmdldC5wb3NpdGlvbi54KSwoZW50aXR5LnBvc2l0aW9uLnkgLSBlbnRpdHlUYXJnZXQucG9zaXRpb24ueSkpIDwgZGlzdGFuY2UgfHwgZGlzdGFuY2UgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY29tYmF0LnggPSBlbnRpdHlUYXJnZXQucG9zaXRpb24ueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY29tYmF0LnkgPSBlbnRpdHlUYXJnZXQucG9zaXRpb24ueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY29tYmF0LnRhcmdldCA9IGVudGl0eVRhcmdldC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguaHlwb3QoKGVudGl0eS5wb3NpdGlvbi54IC0gZW50aXR5VGFyZ2V0LnBvc2l0aW9uLngpLChlbnRpdHkucG9zaXRpb24ueSAtIGVudGl0eVRhcmdldC5wb3NpdGlvbi55KSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkuY29tYmF0LmRpc3RhbmNlID0gZGlzdGFuY2VcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eS5jb21iYXQudGFyZ2V0Q29vbGRvd24gLT0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3RhcmdldCBhZGphY2VudCwgcmVxdWlyZXMgZW50aXR5LCB0ZWFtIG9mIHRhcmdldDogXCJlbmVtaWVzXCIsIFwiYWxsaWVzXCJcclxuICAgICAgICBhZGphY2VudDogZnVuY3Rpb24oZW50aXR5LCB0ZWFtLCBjb29sZG93bikge1xyXG4gICAgICAgICAgICBpZiAoZW50aXR5LmNvbWJhdC50YXJnZXRDb29sZG93biA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkuY29tYmF0LnRhcmdldENvb2xkb3duID0gY29vbGRvd25cclxuICAgICAgICAgICAgICAgIC8vRGV0ZXJtaW5lIHRhcmdldCBiYXNlZCBvbiBmaXJzdCB6b21iaWUgZm91bmQgd2l0aGluIHJhbmdlIDFcclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21UYXJnZXQgPSBbXVxyXG4gICAgICAgICAgICAgICAgcXVlcnlbdGVhbV0uZ2V0KCkuZm9yRWFjaChlbnRpdHlFbmVteSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVudGl0eS5wb3NpdGlvbi54IC0gZW50aXR5RW5lbXkucG9zaXRpb24ueCkgPD0gMSAmJiBNYXRoLmFicyhlbnRpdHkucG9zaXRpb24ueSAtIGVudGl0eUVuZW15LnBvc2l0aW9uLnkpIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tVGFyZ2V0LnB1c2goW2VudGl0eUVuZW15LmlkLCBlbnRpdHlFbmVteS5wb3NpdGlvbi54LCBlbnRpdHlFbmVteS5wb3NpdGlvbi55XSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tVGFyZ2V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRUYXJnZXQgPSByYW5kb21UYXJnZXRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tVGFyZ2V0Lmxlbmd0aCldXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmNvbWJhdC50YXJnZXQgPSBzZWxlY3RlZFRhcmdldFswXVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5jb21iYXQueCA9IHNlbGVjdGVkVGFyZ2V0WzFdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmNvbWJhdC55ID0gc2VsZWN0ZWRUYXJnZXRbMl1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkuY29tYmF0LnRhcmdldENvb2xkb3duIC09IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vQ29sbGVjdGl2ZSBvZiBhbGwgZW5lbXkgQUlcclxuLy9BSSBuZWVkcyB0byBoYXZlIHRhcmdldHRpbmcsIGF0dGFja2luZywgbW92aW5nXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmVteUFJKGVudGl0eUVuZW15LCB0aW1lKSB7XHJcbiAgICBpZiAoZW50aXR5RW5lbXkuZGVzY3JpcHRpb24ubmFtZSA9PSBcIlpvbWJpZVwiKSB7XHJcbiAgICAgICAgLy9hY3Rpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKHRpbWUgLSBlbnRpdHlFbmVteS5hY3Rpb24ubGFzdCA+PSBlbnRpdHlFbmVteS5hY3Rpb24uYWRqdXN0ZWQpIHtcclxuICAgICAgICAgICAgLy90YXJnZXQgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIGlmICh3b3JsZC5nZXRFbnRpdHkoZW50aXR5RW5lbXkuY29tYmF0LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIC8vdGFyZ2V0IGluIHJhbmdlXHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW50aXR5RW5lbXkuY29tYmF0LnggLSBlbnRpdHlFbmVteS5wb3NpdGlvbi54KSA8PSBlbnRpdHlFbmVteS5jb21iYXQucmFuZ2UgJiYgTWF0aC5hYnMoZW50aXR5RW5lbXkuY29tYmF0LnkgLSBlbnRpdHlFbmVteS5wb3NpdGlvbi55KSA8PSBlbnRpdHlFbmVteS5jb21iYXQucmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2luIHJhbmdlIGFuZCBkb24ndCBtb3ZlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vem9tYmllIHRhcmdldHMgbmVhcmVzdCBhbGx5LCA1c2VjIGNvb2xkb3duLiBTdG9wcyB0dW5uZWwtdmlzaW9uaW5nIGJ1dCBzbG93IHRvIHJlc3BvbmRcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBSS50YXJnZXQubmVhcmVzdChlbnRpdHlFbmVteSwgXCJhbGxpZXNcIiwgNSlcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBSS5tb3ZlbWVudC5ob3JkZShlbnRpdHlFbmVteSkgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3pvbWJpZSB0YXJnZXRzIG5lYXJlc3QgYWxseSwgLjFzZWMgY29vbGRvd25cclxuICAgICAgICAgICAgICAgIGVudGl0eUFJLnRhcmdldC5uZWFyZXN0KGVudGl0eUVuZW15LCBcImFsbGllc1wiLCAuMSkgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9hZGp1c3RlZCBhY3Rpb24gc3BlZWQgPSBhY3Rpb24gc3BlZWQgKyAoYWN0aW9uIHNwZWVkIC0gKHRpbWUgc2luY2UgbGFzdCBhdHRhY2spKVxyXG4gICAgICAgICAgICAgICAgLy9BbnkgYWN0aW9uIGFib3ZlIG9yIGJlbG93IHRoZSBhY3Rpb24gc3BlZWQgd2lsbCBhZGp1c3QgdGhlIG5leHQgYWN0aW9uIGFjY29yZGluZ2x5IHRvIGtlZXAgYWN0aW9uIHNwZWVkIG9uIGF2ZXJhZ2VcclxuICAgICAgICAgICAgICAgIC8vaS5lLiAxMjAwbXMgc2luY2UgbGFzdCBhY3Rpb24gPT0gbmV4dCBhY3Rpb24gaXMgODAwbXMgaW5zdGVhZCBvZiAxMDAwbXNcclxuICAgICAgICAgICAgICAgIC8vbXVsdGlwbGllciBpcyBmb3Igc3BlZWRpbmcgdXAgYWN0aW9ucy4gaS5lLiB2ZWxvY2l0eSBvZiAyID0gbW92ZSB0d2ljZSBhcyBmYXN0LiAxMDAwbXMvMj01MDBtcyBjb29sZG93blxyXG4gICAgICAgICAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5RW5lbXkuaGFzKGhhc01vdmVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSBlbnRpdHlFbmVteS5tb3ZlbWVudC52ZWxvY2l0eVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15LnJlbW92ZShlbnRpdHlFbmVteS5oYXNNb3ZlZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5hY3Rpb24uYWRqdXN0ZWQgPSAoZW50aXR5RW5lbXkuYWN0aW9uLnNwZWVkICsgZW50aXR5RW5lbXkuYWN0aW9uLnNwZWVkIC0gKHRpbWUgLSBlbnRpdHlFbmVteS5hY3Rpb24ubGFzdCkpL211bHRpcGxpZXJcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5hY3Rpb24ubGFzdCA9IHRpbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuZXhwb3J0IGZ1bmN0aW9uIGFsbHlBSShlbnRpdHlBbGx5LCB0aW1lKSB7XHJcbiAgICBpZiAoZW50aXR5QWxseS5kZXNjcmlwdGlvbi5uYW1lID09IFwiSHVtYW5cIikge1xyXG4gICAgICAgIC8vYWN0aW9uIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmICh0aW1lIC0gZW50aXR5QWxseS5hY3Rpb24ubGFzdCA+PSBlbnRpdHlBbGx5LmFjdGlvbi5hZGp1c3RlZCkgeyBcclxuICAgICAgICAgICAgLy9nZXQgYSB0YXJnZXRcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHdvcmxkLmdldEVudGl0eShlbnRpdHlBbGx5LmNvbWJhdC50YXJnZXQpXHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0IHx8IE1hdGguYWJzKGVudGl0eUFsbHkucG9zaXRpb24ueCAtIHRhcmdldC5wb3NpdGlvbi54KSA+IGVudGl0eUFsbHkuY29tYmF0LnJhbmdlICAmJiBNYXRoLmFicyhlbnRpdHlBbGx5LnBvc2l0aW9uLnkgLSB0YXJnZXQucG9zaXRpb24ueSkgPiBlbnRpdHlBbGx5LmNvbWJhdC5yYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgaWYodGFyZ2V0KSB7dGFyZ2V0LmFwcGVhcmFuY2UuY29sb3IgPSB3Z2x0LkNvbG9ycy5EQVJLX0dSRUVOfVxyXG4gICAgICAgICAgICAgICAgZW50aXR5QUkudGFyZ2V0LmFkamFjZW50KGVudGl0eUFsbHksIFwiZW5lbWllc1wiLCAwKVxyXG4gICAgICAgICAgICAvL2hhdmUgYSB0YXJnZXRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hcHBlYXJhbmNlLmNvbG9yID0gd2dsdC5Db2xvcnMuTElHSFRfUkVEXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuZmlyZUV2ZW50KFwiZGFtYWdlLXRha2VuXCIsIHtkYW1hZ2U6Z29sZW1hbmNlci5nb2xlbXMuZGFtYWdlfSlcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaGVhbHRoLmhwIDw9IHRhcmdldC5oZWFsdGgubWluSHApIHtcclxuICAgICAgICAgICAgICAgICAgICBraWxsRW50aXR5KHRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LmNvbWJhdC50YXJnZXQgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5QWxseS5jb21iYXQueCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LmNvbWJhdC55ID0gMFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy90YXJnZXQgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICBpZiAod29ybGQuZ2V0RW50aXR5KGVudGl0eUFsbHkuY29tYmF0LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIGFkamFjZW50IHRvIHRhcmdldFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9hZGp1c3RlZCBhY3Rpb24gc3BlZWQgPSBhY3Rpb24gc3BlZWQgKyAoYWN0aW9uIHNwZWVkIC0gKHRpbWUgc2luY2UgbGFzdCBhdHRhY2spKVxyXG4gICAgICAgICAgICAgICAgLy9BbnkgYWN0aW9uIGFib3ZlIG9yIGJlbG93IHRoZSBhY3Rpb24gc3BlZWQgd2lsbCBhZGp1c3QgdGhlIG5leHQgYWN0aW9uIGFjY29yZGluZ2x5IHRvIGtlZXAgYWN0aW9uIHNwZWVkIG9uIGF2ZXJhZ2VcclxuICAgICAgICAgICAgICAgIC8vaS5lLiAxMjAwbXMgc2luY2UgbGFzdCBhY3Rpb24gPT0gbmV4dCBhY3Rpb24gaXMgODAwbXMgaW5zdGVhZCBvZiAxMDAwbXNcclxuICAgICAgICAgICAgICAgIC8vbXVsdGlwbGllciBpcyBmb3Igc3BlZWRpbmcgdXAgYWN0aW9ucy4gaS5lLiB2ZWxvY2l0eSBvZiAyID0gbW92ZSB0d2ljZSBhcyBmYXN0LiAxMDAwbXMvMj01MDBtcyBjb29sZG93blxyXG4gICAgICAgICAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5QWxseS5oYXMoaGFzTW92ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IGVudGl0eUFsbHkubW92ZW1lbnQudmVsb2NpdHlcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LnJlbW92ZShlbnRpdHlBbGx5Lmhhc01vdmVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9UT0RPOm1vdmUgZ29sZW1hbmNlciBpbnRvIGVudGl0eSBzdGF0c1xyXG4gICAgICAgICAgICAgICAgZW50aXR5QWxseS5hY3Rpb24uYWRqdXN0ZWQgPSAoMTAwMC9nb2xlbWFuY2VyLmdvbGVtcy5hdHRhY2tTcGVlZCArIDEwMDAvZ29sZW1hbmNlci5nb2xlbXMuYXR0YWNrU3BlZWQgLSAodGltZSAtIGVudGl0eUFsbHkuYWN0aW9uLmxhc3QpKS9tdWx0aXBsaWVyXHJcbiAgICAgICAgICAgICAgICAvL2VudGl0eUFsbHkuYWN0aW9uLmFkanVzdGVkID0gKGVudGl0eUFsbHkuYWN0aW9uLnNwZWVkICsgZW50aXR5QWxseS5hY3Rpb24uc3BlZWQgLSAodGltZSAtIGVudGl0eUFsbHkuYWN0aW9uLmxhc3QpKS9tdWx0aXBsaWVyXHJcbiAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LmFjdGlvbi5sYXN0ID0gdGltZVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vcXVlcnkgYWxsIGFuZCBkbyB0aGVpciBuZXh0IGFjdGlvblxyXG4vL1RPRE86IE1vdmVtZW50IGZvciB2ZWxvY2l0eSA+IDEuIEluY3JlbWVudCB0aHJvdWdoIGVhY2ggc3RlcCB0byBkZXRlcm1pbmUgaWYgbmV4dCBzdGVwIGlzIGNsZWFyL2FkamFjZW50IHRvIHRhcmdldFxyXG4vL1RPRE86IE1heWJlIHJhbmRvbWl6ZSB0aGUgZGlyZWN0aW9uIHpvbWJpZXMgZGVjaWRlIHRvIGdvIHdoZW4gYmxvY2tlZC5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvQWN0aW9uKHRpbWUpIHtcclxuICAgIC8vcmVzZXQgc3RhdHMgZm9yIGJvdHRvbSBkaXNwbGF5XHJcbiAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLmVuZW15Q291bnQgPSAwXHJcbiAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLmFsbHlDb3VudCA9IDBcclxuICAgIGdvbGVtYW5jZXIudGVybWluYWwuZW5lbXlIZWFsdGggPSAwXHJcbiAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLmFsbHlIZWFsdGggPSAwXHJcbiAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLmVuZW15TWF4SGVhbHRoID0gMFxyXG4gICAgZ29sZW1hbmNlci50ZXJtaW5hbC5hbGx5TWF4SGVhbHRoID0gMFxyXG4gICAgZ29sZW1hbmNlci50ZXJtaW5hbC5lbmVteU1pbkhlYWx0aCA9IDBcclxuICAgIGdvbGVtYW5jZXIudGVybWluYWwuYWxseU1pbkhlYWx0aCA9IDBcclxuXHJcbiAgICBxdWVyeS5hY3Rpb24uZ2V0KCkuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgaWYgKGVudGl0eS5oYXMoRW5lbXkpKSB7XHJcbiAgICAgICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuZW5lbXlDb3VudCsrXHJcbiAgICAgICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuZW5lbXlIZWFsdGggKz0gZW50aXR5LmhlYWx0aC5ocFxyXG4gICAgICAgICAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLmVuZW15TWF4SGVhbHRoICs9IGVudGl0eS5oZWFsdGgubWF4SHBcclxuICAgICAgICAgICAgZ29sZW1hbmNlci50ZXJtaW5hbC5lbmVteU1pbkhlYWx0aCArPSBlbnRpdHkuaGVhbHRoLm1pbkhwXHJcbiAgICAgICAgICAgIGVuZW15QUkoZW50aXR5LCB0aW1lKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmhhcyhBbGx5KSkge1xyXG4gICAgICAgICAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLmFsbHlDb3VudCsrXHJcbiAgICAgICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuYWxseUhlYWx0aCArPSBlbnRpdHkuaGVhbHRoLmhwXHJcbiAgICAgICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuYWxseU1heEhlYWx0aCArPSBlbnRpdHkuaGVhbHRoLm1heEhwXHJcbiAgICAgICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuYWxseU1pbkhlYWx0aCArPSBlbnRpdHkuaGVhbHRoLm1pbkhwXHJcbiAgICAgICAgICAgIGFsbHlBSShlbnRpdHksIHRpbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSIsImltcG9ydCBodW1hbiBmcm9tICcuL2h1bWFuLnR4dCdcclxuXHJcblxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGh1bWFuXHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiZ2VvdGljXCJcclxuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSBcIndnbHRcIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBbGx5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgfTtcclxufVxyXG4vL2RlY2xhcmluZyBjb21wb25lbnRzXHJcbi8vY2hhciA9IGRpc3BsYXllZCBjaGFyYWN0ZXIsIGNvbG9yID0gZGlzcGxheWVkIGNvbG9yXHJcbmV4cG9ydCBjbGFzcyBBcHBlYXJhbmNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGNoYXI6IFwiQFwiLFxyXG4gICAgICAgIGNvbG9yOiBDb2xvcnMuV0hJVEVcclxuICAgIH1cclxufVxyXG4vL3RhcmdldCA9IGN1cnJlbnQgcHJpbWFyeSB0YXJnZXRcclxuZXhwb3J0IGNsYXNzIENvbWJhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICB0YXJnZXQ6IFwiXCIsXHJcbiAgICAgICAgdGFyZ2V0Q29vbGRvd246IDAsXHJcbiAgICAgICAgcmFuZ2U6IDEsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIGRpc3RhbmNlOiAwLFxyXG4gICAgICAgIGRhbWFnZTogMSxcclxuICAgICAgICBhdHRhY2tTcGVlZDogMTAwMFxyXG4gICAgfVxyXG59XHJcbi8vbmFtZSA9IG5hbWUgb2Ygb2JqZWN0LCBkZXNjID0gZGVzY3JpcHRpb24gb2Ygb2JqZWN0XHJcbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICBkZXNjOiBcIlwiXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgfTtcclxufVxyXG4vL2hwID0gY3VycmVudCBoZWFsdGgsIG1heEhwID0gbWF4aW11bSBoZWFsdGggYWxsb3dlZFxyXG5leHBvcnQgY2xhc3MgaGFzTW92ZWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBIZWFsdGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgaHA6IDEsXHJcbiAgICAgICAgbWF4SHA6IDEsXHJcbiAgICAgICAgbWluSHA6IDBcclxuICAgIH1cclxuICAgIHJlZHVjZShhbW91bnQpIHtcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5ocC1hbW91bnRcclxuICAgIH1cclxuICAgIGhlYWwoYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMuaHArYW1vdW50XHJcbiAgICB9XHJcbiAgICBvbkRhbWFnZVRha2VuKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEuZGFtYWdlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZHVjZShldmVudC5kYXRhLmRhbWFnZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWwoZXZlbnQuZGF0YS5kYW1hZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8veCx5ID0geCx5IGNvb3JkaW5hdGUgcG9zaXRpb24gb24gZGlzcGxheVxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9O1xyXG59XHJcbi8vYWN0aW9uID0gYWN0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcyBpLmUuIGhvdyBmYXN0IGFsbCBhY3Rpb25zIHN1Y2ggYXMgbW92aW5nIGFuZCBhdHRhY2tpbmcgYXJlIGRvbmVcclxuZXhwb3J0IGNsYXNzIEFjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgICBsYXN0OiAwLFxyXG4gICAgICAgIGFkanVzdGVkOiAxMDAwXHJcbiAgICB9XHJcbn1cclxuLy94ID0gaG9yaXpvbnRhbCBtb3ZlbWVudCBzcGVlZCwgeSA9IHZlcnRpY2FsIG1vdmVtZW50IHNwZWVkLiBpLmUuIHBlciBtb3ZlbWVudCBhY3Rpb24gbW92ZSB1cCB0byB4L3kgdmVsb2NpdHkuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICB2ZWxvY2l0eTogMSxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgY2FyZGluYWw6IDBcclxuICAgIH07XHJcbn1cclxuXHJcbiIsImltcG9ydCB7RW5naW5lfSBmcm9tIFwiZ2VvdGljXCI7XHJcbmltcG9ydCB7QWxseSwgQXBwZWFyYW5jZSwgQ29tYmF0LCBEZXNjcmlwdGlvbiwgRW5lbXksIGhhc01vdmVkLCBIZWFsdGgsIFBvc2l0aW9uLCBBY3Rpb24sIE1vdmVtZW50fSBmcm9tIFwiLi9jb21wb25lbnRzXCJcclxuaW1wb3J0ICogYXMgZW50aXRpZXMgZnJvbSBcIi4vZW50aXRpZXNcIlxyXG5cclxuLy9jcmVhdGluZyBnZW90aWMgZW5naW5lXHJcbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoKTtcclxuLy9hc3NvY2lhdGluZyBjb21wb25lbnRzXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChBbGx5KVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoQXBwZWFyYW5jZSlcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KENvbWJhdClcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KERlc2NyaXB0aW9uKVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoRW5lbXkpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChoYXNNb3ZlZClcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEhlYWx0aClcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KFBvc2l0aW9uKVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoQWN0aW9uKVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoTW92ZW1lbnQpXHJcbi8vYXNzb2NpYXRpbmcgcHJlZmFic1xyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoZW50aXRpZXMuQmVpbmcpXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihlbnRpdGllcy5IdW1hbilcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKGVudGl0aWVzLlN0cnVjdHVyZSlcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKGVudGl0aWVzLlpvbWJpZSlcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKGVudGl0aWVzLlZlcnRpY2FsKVxyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoZW50aXRpZXMuSG9yaXpvbnRhbClcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKGVudGl0aWVzLkJvdHRvbUxlZnQpXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihlbnRpdGllcy5Cb3R0b21SaWdodClcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKGVudGl0aWVzLlRvcExlZnQpXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihlbnRpdGllcy5Ub3BSaWdodClcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKGVudGl0aWVzLlRMZWZ0KVxyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoZW50aXRpZXMuVFJpZ2h0KVxyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoZW50aXRpZXMuU2luZ2xlSG9yaXpvbnRhbClcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKGVudGl0aWVzLlNpbmdsZVZlcnRpY2FsKVxyXG5leHBvcnQgZGVmYXVsdCBlbmdpbmU7IiwiaW1wb3J0IHsgQ29sb3JzLCAgfSBmcm9tIFwid2dsdFwiXHJcbi8vZGVmYXVsdCBcIkJlaW5nXCJtb2Igd2l0aCByZWxhdGVkIGNvbXBvbmVudHNcclxuZXhwb3J0IGxldCBCZWluZyA9IHtcclxuICAgIG5hbWU6IFwiQmVpbmdcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkNvbWJhdFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmVpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2M6IFwiTm9uZGVzY3JpcHQgYmVpbmcuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkhlYWx0aFwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBocDogMTAsXHJcbiAgICAgICAgICAgICAgICBtYXhIcDogMTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJQb3NpdGlvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0eXBlOiBcIkFjdGlvblwiLCBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJNb3ZlbWVudFwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgXSxcclxufTtcclxuLy9kZWZhdWx0IFwiSHVtYW5cIiBzdWJ0eXBlIG9mIFwiQmVpbmdcIlxyXG5leHBvcnQgbGV0IEh1bWFuID0ge1xyXG4gICBuYW1lOiBcIkh1bWFuXCIsXHJcbiAgIGluaGVyaXQ6IFwiQmVpbmdcIixcclxuICAgY29tcG9uZW50czogW1xyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJBbGx5XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIixcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgY2hhcjogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogQ29sb3JzLkxJR0hUX01BR0VOVEFcclxuICAgICAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJIdW1hblwiLFxyXG4gICAgICAgICAgICBkZXNjOiBcIkEgaHVtYW4gYmVpbmcuXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgIF0gXHJcbn1cclxuLy9kZWZhdWx0IFwiWm9tYmllXCIgc3VidHlwZSBvZiBcIkJlaW5nXCJcclxuZXhwb3J0IGxldCBab21iaWUgPSB7XHJcbiAgICBuYW1lOiBcIlpvbWJpZVwiLFxyXG4gICAgaW5oZXJpdDogXCJCZWluZ1wiLFxyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLFxyXG4gICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBjaGFyOiBcIlpcIixcclxuICAgICAgICAgICAgY29sb3I6IENvbG9ycy5EQVJLX0dSRUVOXHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICB0eXBlOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgIG5hbWU6IFwiWm9tYmllXCIsXHJcbiAgICAgICAgICAgICBkZXNjOiBcIkEgem9tYmllLlwiXHJcbiAgICAgICAgIH1cclxuICAgICB9LFxyXG4gICAgIHtcclxuICAgICAgICB0eXBlOiBcIkVuZW15XCIsXHJcbiAgICAgICAgcHJvcGVydGllczoge31cclxuICAgICB9LCAgICAgXHJcbiAgICAge1xyXG4gICAgICAgICB0eXBlOiBcIk1vdmVtZW50XCIsXHJcbiAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgIHZlbG9jaXR5OiA1LFxyXG4gICAgICAgICB9LFxyXG4gICAgIH0sXHJcbiAgICBdIFxyXG59XHJcblxyXG5leHBvcnQgbGV0IFN0cnVjdHVyZSA9IHtcclxuICAgIG5hbWU6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIixcclxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogXCJYXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IENvbG9ycy5XSElURVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTdHJ1Y3R1cmVcIixcclxuICAgICAgICAgICAgICAgIGRlc2M6IFwiTm9uZGVzY3JpcHQgc3RydWN0dXJlLlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJQb3NpdGlvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgSG9yaXpvbnRhbCA9IHtcclxuICAgIG5hbWU6IFwiSG9yaXpvbnRhbFwiLFxyXG4gICAgaW5oZXJpdDogXCJTdHJ1Y3R1cmVcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLCBcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyOiAweENELFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGxldCBWZXJ0aWNhbCA9IHtcclxuICAgIG5hbWU6IFwiVmVydGljYWxcIixcclxuICAgIGluaGVyaXQ6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIiwgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogMHhCQSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgQm90dG9tTGVmdCA9IHtcclxuICAgIG5hbWU6IFwiQm90dG9tTGVmdFwiLFxyXG4gICAgaW5oZXJpdDogXCJTdHJ1Y3R1cmVcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLCBcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyOiAweEM4LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGxldCBCb3R0b21SaWdodCA9IHtcclxuICAgIG5hbWU6IFwiQm90dG9tUmlnaHRcIixcclxuICAgIGluaGVyaXQ6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIiwgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogMHhCQyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgVG9wTGVmdCA9IHtcclxuICAgIG5hbWU6IFwiVG9wTGVmdFwiLFxyXG4gICAgaW5oZXJpdDogXCJTdHJ1Y3R1cmVcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLCBcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyOiAweEM5LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGxldCBUb3BSaWdodCA9IHtcclxuICAgIG5hbWU6IFwiVG9wUmlnaHRcIixcclxuICAgIGluaGVyaXQ6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIiwgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogMHhCQixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgVFJpZ2h0ID0ge1xyXG4gICAgbmFtZTogXCJUUmlnaHRcIixcclxuICAgIGluaGVyaXQ6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIiwgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogMHhCOSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgVExlZnQgPSB7XHJcbiAgICBuYW1lOiBcIlRMZWZ0XCIsXHJcbiAgICBpbmhlcml0OiBcIlN0cnVjdHVyZVwiLFxyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJBcHBlYXJhbmNlXCIsIFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXI6IDB4Q0MsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcbmV4cG9ydCBsZXQgU2luZ2xlSG9yaXpvbnRhbCA9IHtcclxuICAgIG5hbWU6IFwiU2luZ2xlIEhvcml6b250YWxcIixcclxuICAgIGluaGVyaXQ6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIiwgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogMHhDNCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgU2luZ2xlVmVydGljYWwgPSB7XHJcbiAgICBuYW1lOiBcIlNpbmdsZSBWZXJ0aWNhbFwiLFxyXG4gICAgaW5oZXJpdDogXCJTdHJ1Y3R1cmVcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLCBcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyOiAweEIzLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSIsImltcG9ydCB7RW5lbXl9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtpbGxFbnRpdHkoZW50aXR5KSB7XHJcbiAgICBpZiAoZW50aXR5LmhhcyhFbmVteSkpIHtcclxuICAgICAgICBnb2xlbWFuY2VyLmN1cnJlbmN5LnBhcnRzICs9IDVcclxuICAgIH1cclxuICAgIGRlbGV0ZSBnbG9iYWwubG9jYXRpb25JZFtlbnRpdHkucG9zaXRpb24ueCArIFwiLFwiICsgZW50aXR5LnBvc2l0aW9uLnldXHJcbiAgICBlbnRpdHkuZGVzdHJveSgpXHJcbn1cclxuXHJcbi8vY2xpY2tpbmcgdGhlIGJ1eSBnb2xlbSBidXR0b24sIGFkanVzdHMgY29zdHMgYW5kIGNvdW50ZXJzLiBDb3N0ID0gMTAqZ29sZW1zXjEuMVxyXG5leHBvcnQgbGV0IG9uQnV5R29sZW1DbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGdvbGVtYW5jZXIuY3VycmVuY3kucGFydHMgPj0gZ29sZW1hbmNlci5nb2xlbXMuY29zdCkge1xyXG4gICAgICAgIGdvbGVtYW5jZXIuZ29sZW1zLmNvdW50KytcclxuICAgICAgICBnb2xlbWFuY2VyLmN1cnJlbmN5LnBhcnRzIC09IGdvbGVtYW5jZXIuZ29sZW1zLmNvc3RcclxuICAgICAgICBnb2xlbWFuY2VyLmdvbGVtcy5jb3N0ID0gTWF0aC5mbG9vcigxMCpNYXRoLnBvdygxLjEsIGdvbGVtYW5jZXIuZ29sZW1zLmNvdW50KSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBvbkJ1eURhbWFnZUNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZ29sZW1hbmNlci5jdXJyZW5jeS5wYXJ0cyA+PSBnb2xlbWFuY2VyLmdvbGVtcy5kYW1hZ2VDb3N0KSB7XHJcbiAgICAgICAgZ29sZW1hbmNlci5nb2xlbXMuZGFtYWdlKytcclxuICAgICAgICBnb2xlbWFuY2VyLmN1cnJlbmN5LnBhcnRzIC09IGdvbGVtYW5jZXIuZ29sZW1zLmRhbWFnZUNvc3RcclxuICAgICAgICBnb2xlbWFuY2VyLmdvbGVtcy5kYW1hZ2VDb3N0ID0gTWF0aC5mbG9vcigyMCpNYXRoLnBvdygxLjEsIGdvbGVtYW5jZXIuZ29sZW1zLmRhbWFnZSkpXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGxldCBvbkJ1eUF0dGFja1NwZWVkQ2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChnb2xlbWFuY2VyLmN1cnJlbmN5LnBhcnRzID49IGdvbGVtYW5jZXIuZ29sZW1zLmF0dGFja1NwZWVkQ29zdCkge1xyXG4gICAgICAgIGdvbGVtYW5jZXIuZ29sZW1zLmF0dGFja1NwZWVkKytcclxuICAgICAgICBnb2xlbWFuY2VyLmN1cnJlbmN5LnBhcnRzIC09IGdvbGVtYW5jZXIuZ29sZW1zLmF0dGFja1NwZWVkQ29zdFxyXG4gICAgICAgIGdvbGVtYW5jZXIuZ29sZW1zLmF0dGFja1NwZWVkQ29zdCA9IE1hdGguZmxvb3IoMTAwKk1hdGgucG93KDEuMSwgZ29sZW1hbmNlci5nb2xlbXMuYXR0YWNrU3BlZWQpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IG9uU2hvcENsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlRGlzcGxheSA9PSBcInVwZ3JhZGVzXCIpIHtcclxuICAgICAgICAvL3Nob3AgaXMgb3BlbiwgY2xvc2Ugc2hvcCBhbmQgc2lkZSB3aW5kb3dcclxuICAgICAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVEaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVNb3ZlID0gdHJ1ZVxyXG4gICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZURpciA9IDBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9zaG9wIGlzIGNsb3NlZC4gT3BlbiBwYW5lbCBpZiBub3Qgb3Blbiwgc3dpdGNoIHRvIHNob3BcclxuICAgICAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVEaXNwbGF5ID0gXCJ1cGdyYWRlc1wiXHJcbiAgICAgICAgaWYgKCFnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVPdXQpIHtcclxuICAgICAgICAgICAgZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlTW92ZSA9IHRydWVcclxuICAgICAgICAgICAgZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlRGlyID0gMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgYnV0dG9ucyA9IHtcclxuICAgIG9uU2hvcENsaWNrLFxyXG4gICAgb25CdXlBdHRhY2tTcGVlZENsaWNrLFxyXG4gICAgb25CdXlEYW1hZ2VDbGljayxcclxuICAgIG9uQnV5R29sZW1DbGlja1xyXG59IiwiaW1wb3J0ICogYXMgd2dsdCBmcm9tIFwid2dsdFwiXHJcbmltcG9ydCB7QWxseX0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIlxyXG5mdW5jdGlvbiBsaW5lKHRlcm1pbmFsLCBtb3VzZVN0YXJ0KSB7XHJcbiAgICByZXR1cm4gd2dsdC5jb21wdXRlUGF0aCh0ZXJtaW5hbCwgbW91c2VTdGFydCwgdGVybWluYWwubW91c2UsIDEwMDApXHJcbn1cclxuZnVuY3Rpb24gYm94UmVtb3ZlKHRlcm1pbmFsLCBtb3VzZVN0YXJ0KSB7XHJcbiAgICBmb3IgKGxldCBpID0gTWF0aC5taW4obW91c2VTdGFydC54LCB0ZXJtaW5hbC5tb3VzZS54KTsgaSA8IE1hdGgubWF4KG1vdXNlU3RhcnQueCwgdGVybWluYWwubW91c2UueCk7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBNYXRoLm1pbihtb3VzZVN0YXJ0LnksIHRlcm1pbmFsLm1vdXNlLnkpOyBqIDwgTWF0aC5tYXgobW91c2VTdGFydC55LCB0ZXJtaW5hbC5tb3VzZS55KTsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbnRpdHkgPSB3b3JsZC5nZXRFbnRpdHkobG9jYXRpb25JZFtpICsgXCIsXCIgKyBqXSlcclxuICAgICAgICAgICAgaWYgKGVudGl0eSAmJiBlbnRpdHkuaGFzKEFsbHkpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHRlcm1pbmFsLmdldENlbGwoZW50aXR5LnBvc2l0aW9uLngsIGVudGl0eS5wb3NpdGlvbi55KVxyXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRCYWNrZ3JvdW5kKHdnbHQuQ29sb3JzLllFTExPVylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBib3godGVybWluYWwsIG1vdXNlU3RhcnQsIGdvbGVtQ291bnQsIHJlbW92ZUJvb2wpIHtcclxuICAgIGxldCBtb3VzZVBhdGggPSBbXVxyXG4gICAgbGV0IGxpbmVDb3VudCA9IDBcclxuXHJcbiAgICAvL2JvdHRvbSByaWdodCBib3hcclxuICAgIGlmICh0ZXJtaW5hbC5tb3VzZS54IC0gbW91c2VTdGFydC54ID4gMCAmJiB0ZXJtaW5hbC5tb3VzZS55IC0gbW91c2VTdGFydC55ID4gMCkge1xyXG4gICAgICAgIHRlcm1pbmFsLmZpbGxSZWN0KG1vdXNlU3RhcnQueCwgbW91c2VTdGFydC55LCB0ZXJtaW5hbC5tb3VzZS54IC0gbW91c2VTdGFydC54LCB0ZXJtaW5hbC5tb3VzZS55IC0gbW91c2VTdGFydC55LCAwLCB1bmRlZmluZWQsIHdnbHQuQ29sb3JzLkRBUktfR1JBWSlcclxuICAgICAgICBpZiAocmVtb3ZlQm9vbCkge1xyXG4gICAgICAgICAgICBib3hSZW1vdmUodGVybWluYWwsIG1vdXNlU3RhcnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGdvbGVtQ291bnQ7IGkgPiAwICYmIGxpbmVDb3VudCA8ICh0ZXJtaW5hbC5tb3VzZS55IC0gbW91c2VTdGFydC55KTsgaSA9IGkgLSAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb3VzZVN0YXJ0LnkgLSBsaW5lQ291bnQgPCAzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlcm1pbmFsLmRyYXdITGluZShtb3VzZVN0YXJ0LngsIG1vdXNlU3RhcnQueSArIGxpbmVDb3VudCwgTWF0aC5taW4oaSwgdGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCksIDAsIHVuZGVmaW5lZCwgd2dsdC5Db2xvcnMuWUVMTE9XKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9ib3R0b20gbGVmdCBib3hcclxuICAgIH0gZWxzZSBpZiAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCA8IDAgJiYgdGVybWluYWwubW91c2UueSAtIG1vdXNlU3RhcnQueSA+IDApIHtcclxuICAgICAgICB0ZXJtaW5hbC5maWxsUmVjdCh0ZXJtaW5hbC5tb3VzZS54LCBtb3VzZVN0YXJ0LnksIChtb3VzZVN0YXJ0LnggLSB0ZXJtaW5hbC5tb3VzZS54KSArIDEsIHRlcm1pbmFsLm1vdXNlLnkgLSBtb3VzZVN0YXJ0LnksIDAsIHVuZGVmaW5lZCwgd2dsdC5Db2xvcnMuREFSS19HUkFZKVxyXG4gICAgICAgIGlmIChyZW1vdmVCb29sKSB7XHJcbiAgICAgICAgICAgIGJveFJlbW92ZSh0ZXJtaW5hbCwgbW91c2VTdGFydClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZ29sZW1Db3VudDsgaSA+IDAgJiYgbGluZUNvdW50IDwgKHRlcm1pbmFsLm1vdXNlLnkgLSBtb3VzZVN0YXJ0LnkpOyBpID0gaSAtICgobW91c2VTdGFydC54IC0gdGVybWluYWwubW91c2UueCkgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlU3RhcnQueSAtIGxpbmVDb3VudCA8IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVybWluYWwuZHJhd0hMaW5lKHRlcm1pbmFsLm1vdXNlLnggKyAoKChtb3VzZVN0YXJ0LnggLSB0ZXJtaW5hbC5tb3VzZS54KSArIDEpIC0gKE1hdGgubWluKGksIChtb3VzZVN0YXJ0LnggLSB0ZXJtaW5hbC5tb3VzZS54KSArIDEpKSksIG1vdXNlU3RhcnQueSArIGxpbmVDb3VudCwgTWF0aC5taW4oaSwgKG1vdXNlU3RhcnQueCAtIHRlcm1pbmFsLm1vdXNlLngpICsgMSksIDAsIHVuZGVmaW5lZCwgd2dsdC5Db2xvcnMuWUVMTE9XKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy90b3AgbGVmdCBib3hcclxuICAgIH0gZWxzZSBpZiAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCA8IDAgJiYgdGVybWluYWwubW91c2UueSAtIG1vdXNlU3RhcnQueSA8IDApIHtcclxuICAgICAgICB0ZXJtaW5hbC5maWxsUmVjdCh0ZXJtaW5hbC5tb3VzZS54LCB0ZXJtaW5hbC5tb3VzZS55ICsgMSwgKG1vdXNlU3RhcnQueCAtIHRlcm1pbmFsLm1vdXNlLngpICsgMSwgbW91c2VTdGFydC55IC0gdGVybWluYWwubW91c2UueSwgMCwgdW5kZWZpbmVkLCB3Z2x0LkNvbG9ycy5EQVJLX0dSQVkpXHJcbiAgICAgICAgaWYgKHJlbW92ZUJvb2wpIHtcclxuICAgICAgICAgICAgYm94UmVtb3ZlKHRlcm1pbmFsLCBtb3VzZVN0YXJ0KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBnb2xlbUNvdW50OyBpID4gMCAmJiBsaW5lQ291bnQgPCAobW91c2VTdGFydC55IC0gdGVybWluYWwubW91c2UueSk7IGkgPSBpIC0gKChtb3VzZVN0YXJ0LnggLSB0ZXJtaW5hbC5tb3VzZS54KSArIDEpKSB7ICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlU3RhcnQueSAtIGxpbmVDb3VudCA8IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3SExpbmUodGVybWluYWwubW91c2UueCArICgoKG1vdXNlU3RhcnQueCAtIHRlcm1pbmFsLm1vdXNlLngpICsgMSkgLSAoTWF0aC5taW4oaSwgKG1vdXNlU3RhcnQueCAtIHRlcm1pbmFsLm1vdXNlLngpICsgMSkpKSwgbW91c2VTdGFydC55IC0gbGluZUNvdW50LCBNYXRoLm1pbihpLCAobW91c2VTdGFydC54IC0gdGVybWluYWwubW91c2UueCkgKyAxKSwgMCwgdW5kZWZpbmVkLCB3Z2x0LkNvbG9ycy5ZRUxMT1cpXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RvcCByaWdodCBib3hcclxuICAgIH0gZWxzZSBpZiAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCA+IDAgJiYgdGVybWluYWwubW91c2UueSAtIG1vdXNlU3RhcnQueSA8IDApIHtcclxuICAgICAgICB0ZXJtaW5hbC5maWxsUmVjdChtb3VzZVN0YXJ0LngsIHRlcm1pbmFsLm1vdXNlLnkgKyAxLCB0ZXJtaW5hbC5tb3VzZS54IC0gbW91c2VTdGFydC54LCBtb3VzZVN0YXJ0LnkgLSB0ZXJtaW5hbC5tb3VzZS55LCAwLCB1bmRlZmluZWQsIHdnbHQuQ29sb3JzLkRBUktfR1JBWSlcclxuICAgICAgICBpZiAocmVtb3ZlQm9vbCkge1xyXG4gICAgICAgICAgICBib3hSZW1vdmUodGVybWluYWwsIG1vdXNlU3RhcnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGdvbGVtQ291bnQ7IGkgPiAwICYmIGxpbmVDb3VudCA8IChtb3VzZVN0YXJ0LnkgLSB0ZXJtaW5hbC5tb3VzZS55KTsgaSA9IGkgLSAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCkpIHsgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAobW91c2VTdGFydC55IC0gbGluZUNvdW50IDwgMzApIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lQ291bnQrK1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRlcm1pbmFsLmRyYXdITGluZShtb3VzZVN0YXJ0LngsIG1vdXNlU3RhcnQueSAtIGxpbmVDb3VudCwgTWF0aC5taW4oaSwgdGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCksIDAsIHVuZGVmaW5lZCwgd2dsdC5Db2xvcnMuWUVMTE9XKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZVBhdGhbMF0gPSBtb3VzZVN0YXJ0XHJcbiAgICBtb3VzZVBhdGhbMV0gPSB7IHg6IHRlcm1pbmFsLm1vdXNlLngsIHk6IHRlcm1pbmFsLm1vdXNlLnkgfVxyXG4gICAgcmV0dXJuIG1vdXNlUGF0aFxyXG59XHJcbmxldCBkcmF3ID0gZnVuY3Rpb24odGVybWluYWwsIG1vdXNlUGF0aCkge1xyXG4gICAgbGV0IG5ld1BhdGggPSBtb3VzZVBhdGhcclxuICAgIGlmIChuZXdQYXRoID09IFtdKSB7bmV3UGF0aFswXSA9IG1vdXNlU3RhcnR9XHJcbiAgICBpZiAobmV3UGF0aC5maW5kSW5kZXgoIHZhbHVlID0+IHZhbHVlLnggID09IHRlcm1pbmFsLm1vdXNlLnggJiYgdmFsdWUueSA9PSB0ZXJtaW5hbC5tb3VzZS55KSA9PSAtMSkge1xyXG4gICAgICAgIG5ld1BhdGgucHVzaCh7eDogdGVybWluYWwubW91c2UueCwgeTogdGVybWluYWwubW91c2UueX0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3UGF0aFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBwbGFjZW1lbnQgPSBmdW5jdGlvbih0ZXJtaW5hbCwgbW91c2VTdGFydCwgZ29sZW1Db3VudCwgbW91c2VQYXRoLCBwbGFjZW1lbnRJbmRleCwgcmVtb3ZlQm9vbCl7XHJcbiAgICBpZiAocGxhY2VtZW50SW5kZXggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbGluZSh0ZXJtaW5hbCwgbW91c2VTdGFydClcclxuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50SW5kZXggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gYm94KHRlcm1pbmFsLCBtb3VzZVN0YXJ0LCBnb2xlbUNvdW50LCByZW1vdmVCb29sKVxyXG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnRJbmRleCA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiBkcmF3KHRlcm1pbmFsLCBtb3VzZVBhdGgpXHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7cGxhY2VtZW50fSBmcm9tIFwiLi9wbGFjZW1lbnRcIlxyXG5pbXBvcnQgKiBhcyB3Z2x0IGZyb20gXCJ3Z2x0XCJcclxuXHJcbiBmdW5jdGlvbiBhcmVuYUJvcmRlckNyZWF0ZShnb2xlbWFuY2VyLCB3b3JsZCkge1xyXG4vL3Rlcm1pbmFsIGJvcmRlclxyXG4vL3RvcFxyXG4gICAgZm9yKCBsZXQgaSA9IDE7IGkgPGdvbGVtYW5jZXIudGVybWluYWwuYXJlbmFYIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHN0cnVjdHVyZSA9IHdvcmxkLmNyZWF0ZVByZWZhYihcIkhvcml6b250YWxcIilcclxuICAgICAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueCA9IGlcclxuICAgICAgICBsb2NhdGlvbklkW3N0cnVjdHVyZS5wb3NpdGlvbi54ICsgXCIsXCIgKyBzdHJ1Y3R1cmUucG9zaXRpb24ueV0gPSBzdHJ1Y3R1cmUuaWRcclxuXHJcbiAgICB9XHJcbiAgICAvL2xlZnRcclxuICAgIGZvciggbGV0IGkgPSAxOyBpIDwgZ29sZW1hbmNlci50ZXJtaW5hbC5hcmVuYVkgLSAxOyBpKyspIHtcclxuICAgICAgICBsZXQgc3RydWN0dXJlID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiVmVydGljYWxcIilcclxuICAgICAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueSA9IGlcclxuICAgICAgICBsb2NhdGlvbklkW3N0cnVjdHVyZS5wb3NpdGlvbi54ICsgXCIsXCIgKyBzdHJ1Y3R1cmUucG9zaXRpb24ueV0gPSBzdHJ1Y3R1cmUuaWRcclxuICAgIH1cclxuICAgIC8vYm90dG9tXHJcbiAgICBmb3IoIGxldCBpID0gMTsgaSA8Z29sZW1hbmNlci50ZXJtaW5hbC5hcmVuYVggLSAxOyBpKyspIHtcclxuICAgICAgICBsZXQgc3RydWN0dXJlID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiSG9yaXpvbnRhbFwiKVxyXG4gICAgICAgIHN0cnVjdHVyZS5wb3NpdGlvbi54ID0gaVxyXG4gICAgICAgIHN0cnVjdHVyZS5wb3NpdGlvbi55ID0gZ29sZW1hbmNlci50ZXJtaW5hbC5hcmVuYVkgLSAxXHJcbiAgICAgICAgbG9jYXRpb25JZFtzdHJ1Y3R1cmUucG9zaXRpb24ueCArIFwiLFwiICsgc3RydWN0dXJlLnBvc2l0aW9uLnldID0gc3RydWN0dXJlLmlkXHJcbiAgICB9XHJcbiAgICAvL3JpZ2h0XHJcbiAgICBmb3IoIGxldCBpID0gMTsgaSA8Z29sZW1hbmNlci50ZXJtaW5hbC5hcmVuYVkgLSAxOyBpKyspIHtcclxuICAgICAgICBsZXQgc3RydWN0dXJlID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiVmVydGljYWxcIilcclxuICAgICAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueSA9IGlcclxuICAgICAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueCA9IGdvbGVtYW5jZXIudGVybWluYWwuYXJlbmFYIC0gMVxyXG4gICAgICAgIGxvY2F0aW9uSWRbc3RydWN0dXJlLnBvc2l0aW9uLnggKyBcIixcIiArIHN0cnVjdHVyZS5wb3NpdGlvbi55XSA9IHN0cnVjdHVyZS5pZFxyXG4gICAgfVxyXG4gICAgd29ybGQuY3JlYXRlUHJlZmFiKFwiVG9wTGVmdFwiLCB7cG9zaXRpb246e3g6IDAseTogMH19KVxyXG4gICAgd29ybGQuY3JlYXRlUHJlZmFiKFwiVG9wUmlnaHRcIiwge3Bvc2l0aW9uOnt4OiBnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWC0xLHk6IDB9fSlcclxuICAgIHdvcmxkLmNyZWF0ZVByZWZhYihcIlRMZWZ0XCIsIHtwb3NpdGlvbjp7eDogMCx5OiBnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWS0xfX0pXHJcbiAgICB3b3JsZC5jcmVhdGVQcmVmYWIoXCJUUmlnaHRcIiwge3Bvc2l0aW9uOnt4OiBnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWC0xLHk6IGdvbGVtYW5jZXIudGVybWluYWwuYXJlbmFZLTF9fSlcclxufVxyXG5cclxuZnVuY3Rpb24gYm90dG9tTWVudUJvcmRlckNyZWF0ZShnb2xlbWFuY2VyLCB3b3JsZCkge1xyXG4vL2xlZnRcclxuZm9yKGxldCBpID0gZ29sZW1hbmNlci50ZXJtaW5hbC5ib3R0b21ZIC0gMjsgaSA+IGdvbGVtYW5jZXIudGVybWluYWwuYXJlbmFZIC0gMTtpLS0pIHtcclxuICAgICAgICBsZXQgc3RydWN0dXJlID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiVmVydGljYWxcIilcclxuICAgICAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueSA9IGlcclxuICAgICAgICBsb2NhdGlvbklkW3N0cnVjdHVyZS5wb3NpdGlvbi54ICsgXCIsXCIgKyBzdHJ1Y3R1cmUucG9zaXRpb24ueV0gPSBzdHJ1Y3R1cmUuaWRcclxuICAgIH1cclxuICAgIC8vYm90dG9tXHJcbiAgICBmb3IoIGxldCBpID0gMTsgaSA8Z29sZW1hbmNlci50ZXJtaW5hbC5ib3R0b21YIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHN0cnVjdHVyZSA9IHdvcmxkLmNyZWF0ZVByZWZhYihcIkhvcml6b250YWxcIilcclxuICAgICAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueCA9IGlcclxuICAgICAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueSA9IGdvbGVtYW5jZXIudGVybWluYWwuYm90dG9tWSAtIDFcclxuICAgICAgICBsb2NhdGlvbklkW3N0cnVjdHVyZS5wb3NpdGlvbi54ICsgXCIsXCIgKyBzdHJ1Y3R1cmUucG9zaXRpb24ueV0gPSBzdHJ1Y3R1cmUuaWRcclxuICAgIH1cclxuICAgIC8vcmlnaHRcclxuICAgIGZvcihsZXQgaSA9IGdvbGVtYW5jZXIudGVybWluYWwuYm90dG9tWSAtIDI7IGkgPiBnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWSAtIDE7aS0tKSB7XHJcbiAgICAgICAgbGV0IHN0cnVjdHVyZSA9IHdvcmxkLmNyZWF0ZVByZWZhYihcIlZlcnRpY2FsXCIpXHJcbiAgICAgICAgc3RydWN0dXJlLnBvc2l0aW9uLnkgPSBpXHJcbiAgICAgICAgc3RydWN0dXJlLnBvc2l0aW9uLnggPSBnb2xlbWFuY2VyLnRlcm1pbmFsLmJvdHRvbVggLSAxXHJcbiAgICAgICAgbG9jYXRpb25JZFtzdHJ1Y3R1cmUucG9zaXRpb24ueCArIFwiLFwiICsgc3RydWN0dXJlLnBvc2l0aW9uLnldID0gc3RydWN0dXJlLmlkXHJcblxyXG4gICAgICAgIHdvcmxkLmNyZWF0ZVByZWZhYihcIkJvdHRvbUxlZnRcIiwge3Bvc2l0aW9uOnt4OiAwLHk6IGdvbGVtYW5jZXIudGVybWluYWwuYm90dG9tWS0xfX0pXHJcbiAgICAgICAgd29ybGQuY3JlYXRlUHJlZmFiKFwiQm90dG9tUmlnaHRcIiwge3Bvc2l0aW9uOnt4OiBnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWC0xLHk6IGdvbGVtYW5jZXIudGVybWluYWwuYm90dG9tWS0xfX0pXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBib3R0b21NZW51VXBkYXRlKHRlcm1pbmFsKSB7XHJcbiAgICBsZXQgYWxseVN0cmluZ0xlbmd0aCA9IE1hdGguZmxvb3IoMjAgKiAoZ29sZW1hbmNlci50ZXJtaW5hbC5hbGx5SGVhbHRoIC8gKGdvbGVtYW5jZXIudGVybWluYWwuYWxseU1heEhlYWx0aCArIE1hdGguYWJzKGdvbGVtYW5jZXIudGVybWluYWwuYWxseU1pbkhlYWx0aCkpKSlcclxuICAgIGxldCBhbGx5U3RyaW5nID0gXCJcIlxyXG4gICAgZm9yICg7YWxseVN0cmluZy5sZW5ndGggPCBhbGx5U3RyaW5nTGVuZ3RoOykge1xyXG4gICAgICAgIGFsbHlTdHJpbmcgKz0gXCIjXCJcclxuICAgIH1cclxuICAgIGxldCBlbmVteVN0cmluZ0xlbmd0aCA9IE1hdGguZmxvb3IoMjAgKiAoZ29sZW1hbmNlci50ZXJtaW5hbC5lbmVteUhlYWx0aCAvIChnb2xlbWFuY2VyLnRlcm1pbmFsLmVuZW15TWF4SGVhbHRoICsgTWF0aC5hYnMoZ29sZW1hbmNlci50ZXJtaW5hbC5lbmVteU1pbkhlYWx0aCkpKSlcclxuICAgIGxldCBlbmVteVN0cmluZyA9IFwiXCJcclxuICAgIGZvciAoO2VuZW15U3RyaW5nLmxlbmd0aCA8IGVuZW15U3RyaW5nTGVuZ3RoOykge1xyXG4gICAgICAgIGVuZW15U3RyaW5nICs9IFwiI1wiXHJcbiAgICB9XHJcbiAgICAvL3J1ZGltZW50YXJ5IGJhclxyXG4gICAgdGVybWluYWwuZHJhd1N0cmluZygxLDUyLCBhbGx5U3RyaW5nICsgXCJcXG5cIiArIGFsbHlTdHJpbmcgKyBcIlxcbiAgICAgKFwiICsgZ29sZW1hbmNlci50ZXJtaW5hbC5hbGx5SGVhbHRoICsgXCIvXCIgKyBnb2xlbWFuY2VyLnRlcm1pbmFsLmFsbHlNYXhIZWFsdGggKyBcIilcXG5BbGxpZXM6IFwiICsgZ29sZW1hbmNlci50ZXJtaW5hbC5hbGx5Q291bnQpXHJcbiAgICAvL3J1ZGltZW50YXJ5IGhlYWx0aCBiYXJcclxuICAgIHRlcm1pbmFsLmRyYXdTdHJpbmcoODEtZW5lbXlTdHJpbmcubGVuZ3RoLDUyLGVuZW15U3RyaW5nICsgXCJcXG5cIiArIGVuZW15U3RyaW5nKVxyXG4gICAgdGVybWluYWwuZHJhd1N0cmluZyg2MSw1NCwgXCIgICAgIChcIiArIGdvbGVtYW5jZXIudGVybWluYWwuZW5lbXlIZWFsdGggKyBcIi9cIiArIGdvbGVtYW5jZXIudGVybWluYWwuZW5lbXlNYXhIZWFsdGggKyBcIilcXG5FbmVtaWVzOiBcIiArIGdvbGVtYW5jZXIudGVybWluYWwuZW5lbXlDb3VudClcclxuXHJcbiAgICAvL3Nob3AgYnV0dG9uXHJcbiAgICBsZXQgYnV0dG9uQ29sb3IgPSB3Z2x0LkNvbG9ycy5XSElURVxyXG4gICAgaWYgKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZURpc3BsYXkgPT0gXCJ1cGdyYWRlc1wiKSB7XHJcbiAgICAgICAgYnV0dG9uQ29sb3IgPSB3Z2x0LkNvbG9ycy5MSUdIVF9HUkVFTlxyXG4gICAgfVxyXG4gICAgdGVybWluYWwuZHJhd0hMaW5lKDEsIGdvbGVtYW5jZXIudGVybWluYWwuYm90dG9tWSAtIDUsIDEwLCAweEM0LCBidXR0b25Db2xvcilcclxuICAgIHRlcm1pbmFsLmRyYXdWTGluZSgxMSwgZ29sZW1hbmNlci50ZXJtaW5hbC5ib3R0b21ZIC0gNCwgMywgMHhCMywgYnV0dG9uQ29sb3IpXHJcbiAgICB0ZXJtaW5hbC5kcmF3U3RyaW5nKDIsIGdvbGVtYW5jZXIudGVybWluYWwuYm90dG9tWSAtIDMsIFwiVVBHUkFERVNcIiwgYnV0dG9uQ29sb3IpXHJcblxyXG4gICAgLy9idXR0b25zIGZvciBsaW5lLCBib3gsIGRyYXdcclxuICAgIGxldCBsaW5lQ29sb3IgPSB3Z2x0LkNvbG9ycy5XSElURVxyXG4gICAgbGV0IGJveENvbG9yID0gd2dsdC5Db2xvcnMuV0hJVEVcclxuICAgIGxldCBkcmF3Q29sb3IgPSB3Z2x0LkNvbG9ycy5XSElURVxyXG5cclxuICAgIHN3aXRjaChnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgbGluZUNvbG9yID0gd2dsdC5Db2xvcnMuTElHSFRfR1JFRU5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBib3hDb2xvciA9IHdnbHQuQ29sb3JzLkxJR0hUX0dSRUVOXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgZHJhd0NvbG9yID0gd2dsdC5Db2xvcnMuTElHSFRfR1JFRU5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRlcm1pbmFsLmRyYXdWTGluZSgyNSwgNTIsIDMsIDB4QjMsIGxpbmVDb2xvcilcclxuICAgIHRlcm1pbmFsLmRyYXdWTGluZSgzMCwgNTIsIDMsIDB4QjMsIGxpbmVDb2xvcilcclxuICAgIHRlcm1pbmFsLmRyYXdITGluZSgyNiwgNTUsIDQsIDB4QzQsIGxpbmVDb2xvcilcclxuICAgIHRlcm1pbmFsLmRyYXdTdHJpbmcoMjYsIDUzLCBcIkxJTkVcIiwgbGluZUNvbG9yKVxyXG5cclxuICAgIHRlcm1pbmFsLmRyYXdWTGluZSgzMSwgNTIsIDMsIDB4QjMsIGJveENvbG9yKVxyXG4gICAgdGVybWluYWwuZHJhd1ZMaW5lKDM2LCA1MiwgMywgMHhCMywgYm94Q29sb3IpXHJcbiAgICB0ZXJtaW5hbC5kcmF3SExpbmUoMzIsIDU1LCA0LCAweEM0LCBib3hDb2xvcilcclxuICAgIHRlcm1pbmFsLmRyYXdTdHJpbmcoMzIsIDUzLCBcIkJPWFwiLCBib3hDb2xvcilcclxuICAgIFxyXG4gICAgdGVybWluYWwuZHJhd1ZMaW5lKDM3LCA1MiwgMywgMHhCMywgZHJhd0NvbG9yKVxyXG4gICAgdGVybWluYWwuZHJhd1ZMaW5lKDQyLCA1MiwgMywgMHhCMywgZHJhd0NvbG9yKVxyXG4gICAgdGVybWluYWwuZHJhd0hMaW5lKDM4LCA1NSwgNCwgMHhDNCwgZHJhd0NvbG9yKVxyXG4gICAgdGVybWluYWwuZHJhd1N0cmluZygzOCwgNTMsIFwiRFJBV1wiLCBkcmF3Q29sb3IpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWRlTWVudU91dCh0ZXJtaW5hbCwgaW5kZXgpIHtcclxuICAgIHRlcm1pbmFsLmRyYXdWTGluZShpbmRleCAtIDEsIDAsZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWSwgMHhCMylcclxuICAgIHRlcm1pbmFsLmRyYXdITGluZShnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWCwgMCwgaW5kZXggLSBnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWCwgMHhDNClcclxuICAgIHRlcm1pbmFsLmRyYXdITGluZShnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWCwgZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWS0xLCBpbmRleCAtIGdvbGVtYW5jZXIudGVybWluYWwuYXJlbmFYLCAweEM0KVxyXG4gICAgaWYoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlT3V0KSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoaW5kZXggPT0gZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWCkge1xyXG4gICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZU1vdmUgPSBmYWxzZVxyXG4gICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZURpciA9IDBcclxuICAgICAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVPdXQgPSB0cnVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZUluZGV4KytcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lkZU1lbnVJbih0ZXJtaW5hbCwgaW5kZXgpIHtcclxuICAgIHRlcm1pbmFsLmRyYXdWTGluZShpbmRleCAtIDEsIDAsZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWSwgMHhCMylcclxuICAgIHRlcm1pbmFsLmRyYXdITGluZShnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWCwgMCwgaW5kZXggLSBnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWCwgMHhDNClcclxuICAgIHRlcm1pbmFsLmRyYXdITGluZShnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWCwgZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWS0xLCBpbmRleCAtIGdvbGVtYW5jZXIudGVybWluYWwuYXJlbmFYLCAweEM0KVxyXG4gICAgaWYgKGluZGV4ID09IGdvbGVtYW5jZXIudGVybWluYWwuYXJlbmFYICsgMSkge1xyXG4gICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZU1vdmUgPSBmYWxzZVxyXG4gICAgICAgIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZURpciA9IDFcclxuICAgICAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVPdXQgPSBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVJbmRleC0tXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZGVNZW51VXBkYXRlKHRlcm1pbmFsKSB7XHJcbiAgICBpZiAoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlT3V0KSB7XHJcbiAgICAgICAgc3dpdGNoKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZURpc3BsYXkpIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwZ3JhZGVzXCI6XHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3U3RyaW5nKGdvbGVtYW5jZXIudGVybWluYWwuYXJlbmFYLCAxLCBcIiAgICAgICAgICAgICAgICBVUEdSQURFU1wiKVxyXG4gICAgICAgICAgICAgICAgdGVybWluYWwuZHJhd1N0cmluZyhnb2xlbWFuY2VyLnRlcm1pbmFsLmFyZW5hWCwgNCxcclxuICAgICAgICAgICAgICAgICAgICBcIkRhbWFnZTogXCIgKyBnb2xlbWFuY2VyLmdvbGVtcy5kYW1hZ2UgKyBcclxuICAgICAgICAgICAgICAgICAgICBcIlxcblxcbkNvc3Q6IFwiICsgZ29sZW1hbmNlci5nb2xlbXMuZGFtYWdlQ29zdCArIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuXFxuXFxuXFxuQXR0YWNrIFNwZWVkOiBcIiArIGdvbGVtYW5jZXIuZ29sZW1zLmF0dGFja1NwZWVkICtcclxuICAgICAgICAgICAgICAgICAgICBcIlxcblxcbkNvc3Q6IFwiICsgZ29sZW1hbmNlci5nb2xlbXMuYXR0YWNrU3BlZWRDb3N0ICsgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5cXG5cXG5cXG5Hb2xlbXM6IFwiICsgZ29sZW1hbmNlci5nb2xlbXMuY291bnQgKyBcclxuICAgICAgICAgICAgICAgICAgICBcIlxcblxcbkNvc3Q6IFwiICsgZ29sZW1hbmNlci5nb2xlbXMuY29zdFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLy9kYW1hZ2UgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgZGFtYWdlQ29sb3IgPSB3Z2x0LkNvbG9ycy5EQVJLX0dSQVlcclxuICAgICAgICAgICAgICAgIGlmIChnb2xlbWFuY2VyLmdvbGVtcy5kYW1hZ2VDb3N0IDw9IGdvbGVtYW5jZXIuY3VycmVuY3kucGFydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYW1hZ2VDb2xvciA9IHdnbHQuQ29sb3JzLldISVRFXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3SExpbmUoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWCAtIDExLCAzLCAxMCwgMHhDNCwgZGFtYWdlQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3SExpbmUoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWCAtIDExLCA3LCAxMCwgMHhDNCwgZGFtYWdlQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3VkxpbmUoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWCAtIDExLCA0LCAzLCAweEIzLCBkYW1hZ2VDb2xvcilcclxuICAgICAgICAgICAgICAgIHRlcm1pbmFsLmRyYXdWTGluZShnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVYIC0gMiwgNCwgMywgMHhCMywgZGFtYWdlQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3U3RyaW5nKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZVggLSA4LCA0LCBcIkJ1eVwiLCBkYW1hZ2VDb2xvcilcclxuICAgICAgICAgICAgICAgIHRlcm1pbmFsLmRyYXdTdHJpbmcoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWCAtIDksIDYsIFwiRGFtYWdlXCIsIGRhbWFnZUNvbG9yKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vQXR0YWNrIFNwZWVkIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja1NwZWVkQ29sb3IgPSB3Z2x0LkNvbG9ycy5EQVJLX0dSQVlcclxuICAgICAgICAgICAgICAgIGlmIChnb2xlbWFuY2VyLmdvbGVtcy5hdHRhY2tTcGVlZENvc3QgPD0gZ29sZW1hbmNlci5jdXJyZW5jeS5wYXJ0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGFja1NwZWVkQ29sb3IgPSB3Z2x0LkNvbG9ycy5XSElURVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGVybWluYWwuZHJhd0hMaW5lKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZVggLSAxMSwgOSwgMTAsIDB4QzQsIGF0dGFja1NwZWVkQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3SExpbmUoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWCAtIDExLCAxMywgMTAsIDB4QzQsIGF0dGFja1NwZWVkQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3VkxpbmUoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWCAtIDExLCAxMCwgMywgMHhCMywgYXR0YWNrU3BlZWRDb2xvcilcclxuICAgICAgICAgICAgICAgIHRlcm1pbmFsLmRyYXdWTGluZShnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVYIC0gMiwgMTAsIDMsIDB4QjMsIGF0dGFja1NwZWVkQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3U3RyaW5nKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZVggLSA4LCAxMCwgXCJCdXlcIiwgYXR0YWNrU3BlZWRDb2xvcilcclxuICAgICAgICAgICAgICAgIHRlcm1pbmFsLmRyYXdTdHJpbmcoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWCAtIDEwLCAxMiwgXCJBdGtTcGVlZFwiLCBhdHRhY2tTcGVlZENvbG9yKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vR29sZW0gYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgZ29sZW1Db2xvciA9IHdnbHQuQ29sb3JzLkRBUktfR1JBWVxyXG4gICAgICAgICAgICAgICAgaWYgKGdvbGVtYW5jZXIuZ29sZW1zLmNvc3QgPD0gZ29sZW1hbmNlci5jdXJyZW5jeS5wYXJ0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdvbGVtQ29sb3IgPSB3Z2x0LkNvbG9ycy5XSElURVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGVybWluYWwuZHJhd0hMaW5lKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZVggLSAxMSwgMTUsIDEwLCAweEM0LCBnb2xlbUNvbG9yKVxyXG4gICAgICAgICAgICAgICAgdGVybWluYWwuZHJhd0hMaW5lKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZVggLSAxMSwgMTksIDEwLCAweEM0LCBnb2xlbUNvbG9yKVxyXG4gICAgICAgICAgICAgICAgdGVybWluYWwuZHJhd1ZMaW5lKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZVggLSAxMSwgMTYsIDMsIDB4QjMsIGdvbGVtQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3VkxpbmUoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlWCAtIDIsIDE2LCAzLCAweEIzLCBnb2xlbUNvbG9yKVxyXG4gICAgICAgICAgICAgICAgdGVybWluYWwuZHJhd1N0cmluZyhnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVYIC0gOCwgMTYsIFwiQnV5XCIsIGdvbGVtQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3U3RyaW5nKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZVggLSA5LCAxOCwgXCJHb2xlbVwiLCBnb2xlbUNvbG9yKVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgbGV0IHVpID0ge1xyXG4gICAgcGxhY2VtZW50LFxyXG4gICAgYXJlbmFCb3JkZXJDcmVhdGUsXHJcbiAgICBib3R0b21NZW51Qm9yZGVyQ3JlYXRlLFxyXG4gICAgYm90dG9tTWVudVVwZGF0ZSxcclxuICAgIHNpZGVNZW51T3V0LFxyXG4gICAgc2lkZU1lbnVJbixcclxuICAgIHNpZGVNZW51VXBkYXRlICAgIFxyXG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmNvbnN0IHByZXNlcnZlQ2FtZWxDYXNlID0gKHN0cmluZykgPT4ge1xuICAgIGxldCBpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcbiAgICBsZXQgaXNMYXN0Q2hhclVwcGVyID0gZmFsc2U7XG4gICAgbGV0IGlzTGFzdExhc3RDaGFyVXBwZXIgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IHN0cmluZ1tpXTtcblxuICAgICAgICBpZiAoaXNMYXN0Q2hhckxvd2VyICYmIC9bXFxwe0x1fV0vdS50ZXN0KGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCBpKSArICctJyArIHN0cmluZy5zbGljZShpKTtcbiAgICAgICAgICAgIGlzTGFzdENoYXJMb3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgaXNMYXN0TGFzdENoYXJVcHBlciA9IGlzTGFzdENoYXJVcHBlcjtcbiAgICAgICAgICAgIGlzTGFzdENoYXJVcHBlciA9IHRydWU7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBpc0xhc3RDaGFyVXBwZXIgJiZcbiAgICAgICAgICAgIGlzTGFzdExhc3RDaGFyVXBwZXIgJiZcbiAgICAgICAgICAgIC9bXFxwe0xsfV0vdS50ZXN0KGNoYXJhY3RlcilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgaSAtIDEpICsgJy0nICsgc3RyaW5nLnNsaWNlKGkgLSAxKTtcbiAgICAgICAgICAgIGlzTGFzdExhc3RDaGFyVXBwZXIgPSBpc0xhc3RDaGFyVXBwZXI7XG4gICAgICAgICAgICBpc0xhc3RDaGFyVXBwZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGlzTGFzdENoYXJMb3dlciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0xhc3RDaGFyTG93ZXIgPVxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlci50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBjaGFyYWN0ZXIgJiZcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIudG9Mb2NhbGVVcHBlckNhc2UoKSAhPT0gY2hhcmFjdGVyO1xuICAgICAgICAgICAgaXNMYXN0TGFzdENoYXJVcHBlciA9IGlzTGFzdENoYXJVcHBlcjtcbiAgICAgICAgICAgIGlzTGFzdENoYXJVcHBlciA9XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09IGNoYXJhY3RlciAmJlxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlci50b0xvY2FsZUxvd2VyQ2FzZSgpICE9PSBjaGFyYWN0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuY29uc3QgY2FtZWxDYXNlID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKCEodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGlucHV0KSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIGlucHV0IHRvIGJlIGBzdHJpbmcgfCBzdHJpbmdbXWAnKTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICAuLi57XG4gICAgICAgICAgICBwYXNjYWxDYXNlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuXG4gICAgY29uc3QgcG9zdFByb2Nlc3MgPSAoeCkgPT5cbiAgICAgICAgb3B0aW9ucy5wYXNjYWxDYXNlID8geC5jaGFyQXQoMCkudG9Mb2NhbGVVcHBlckNhc2UoKSArIHguc2xpY2UoMSkgOiB4O1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXRcbiAgICAgICAgICAgIC5tYXAoKHgpID0+IHgudHJpbSgpKVxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4geC5sZW5ndGgpXG4gICAgICAgICAgICAuam9pbignLScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQudHJpbSgpO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucGFzY2FsQ2FzZVxuICAgICAgICAgICAgPyBpbnB1dC50b0xvY2FsZVVwcGVyQ2FzZSgpXG4gICAgICAgICAgICA6IGlucHV0LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzVXBwZXJDYXNlID0gaW5wdXQgIT09IGlucHV0LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoaGFzVXBwZXJDYXNlKSB7XG4gICAgICAgIGlucHV0ID0gcHJlc2VydmVDYW1lbENhc2UoaW5wdXQpO1xuICAgIH1cblxuICAgIGlucHV0ID0gaW5wdXRcbiAgICAgICAgLnJlcGxhY2UoL15bXy5cXC0gXSsvLCAnJylcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1tfLlxcLSBdKyhbXFxwe0FscGhhfVxccHtOfV9dfCQpL2d1LCAoXywgcDEpID0+XG4gICAgICAgICAgICBwMS50b0xvY2FsZVVwcGVyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UoL1xcZCsoW1xccHtBbHBoYX1cXHB7Tn1fXXwkKS9ndSwgKG0pID0+IG0udG9Mb2NhbGVVcHBlckNhc2UoKSk7XG4gICAgcmV0dXJuIHBvc3RQcm9jZXNzKGlucHV0KTtcbn07XG5cbnZhciBjYW1lbGNhc2UgPSBjYW1lbENhc2U7IC8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5cbnZhciBfZGVmYXVsdCA9IGNhbWVsQ2FzZTtcbmNhbWVsY2FzZS5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbmNvbnN0IGNhbWVsQ2FjaGUgPSB7fTtcbmNvbnN0IGNhbWVsU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2FtZWxDYWNoZVt2YWx1ZV07XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBjYW1lbENhY2hlW3ZhbHVlXSA9IGNhbWVsY2FzZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBjYW1lbENhY2hlW3ZhbHVlXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuY2xhc3MgQ29tcG9uZW50UmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19jYml0JywgMCk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfbWFwJywge30pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGNsYXp6KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGNhbWVsU3RyaW5nKGNsYXp6Lm5hbWUpO1xuICAgICAgICBjbGF6ei5wcm90b3R5cGUuX2NrZXkgPSBrZXk7XG4gICAgICAgIGNsYXp6LnByb3RvdHlwZS5fY2JpdCA9IEJpZ0ludCgrK3RoaXMuX2NiaXQpO1xuICAgICAgICB0aGlzLl9tYXBba2V5XSA9IGNsYXp6O1xuICAgIH1cblxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcFtrZXldO1xuICAgIH1cbn1cblxudmFyIGlzTWVyZ2VhYmxlT2JqZWN0ID0gZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJiAhaXNTcGVjaWFsKHZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuICAgIHZhciBzdHJpbmdWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nIHx8XG4gICAgICAgIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXScgfHxcbiAgICAgICAgaXNSZWFjdEVsZW1lbnQodmFsdWUpXG4gICAgKTtcbn0gLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I1YWM5NjNmYjc5MWQxMjk4ZTdmMzk2MjM2MzgzYmM5NTVmOTE2YzEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjEtTDI1XG5cbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fTtcbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5jbG9uZSAhPT0gZmFsc2UgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh2YWx1ZSlcbiAgICAgICAgPyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9ucylcbiAgICAgICAgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLmN1c3RvbU1lcmdlKSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2U7XG4gICAgfVxuXG4gICAgdmFyIGN1c3RvbU1lcmdlID0gb3B0aW9ucy5jdXN0b21NZXJnZShrZXkpO1xuICAgIHJldHVybiB0eXBlb2YgY3VzdG9tTWVyZ2UgPT09ICdmdW5jdGlvbicgPyBjdXN0b21NZXJnZSA6IGRlZXBtZXJnZTtcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc1xuICAgICAgICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnByb3BlcnR5SXNFbnVtZXJhYmxlKHN5bWJvbCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGFyZ2V0KS5jb25jYXQoZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlJc09uT2JqZWN0KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gcHJvcGVydHkgaW4gb2JqZWN0O1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0gLy8gUHJvdGVjdHMgZnJvbSBwcm90b3R5cGUgcG9pc29uaW5nIGFuZCB1bmV4cGVjdGVkIG1lcmdpbmcgdXAgdGhlIHByb3RvdHlwZSBjaGFpbi5cblxuZnVuY3Rpb24gcHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIHByb3BlcnR5SXNPbk9iamVjdCh0YXJnZXQsIGtleSkgJiYgLy8gUHJvcGVydGllcyBhcmUgc2FmZSB0byBtZXJnZSBpZiB0aGV5IGRvbid0IGV4aXN0IGluIHRoZSB0YXJnZXQgeWV0LFxuICAgICAgICAhKFxuICAgICAgICAgICAgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpICYmIC8vIHVuc2FmZSBpZiB0aGV5IGV4aXN0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sXG4gICAgICAgICAgICBPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXQsIGtleSlcbiAgICAgICAgKVxuICAgICk7IC8vIGFuZCBhbHNvIHVuc2FmZSBpZiB0aGV5J3JlIG5vbmVudW1lcmFibGUuXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG5cbiAgICBpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGdldEtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSxcbiAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRLZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAmJlxuICAgICAgICAgICAgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpKFxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldLFxuICAgICAgICAgICAgICAgIHNvdXJjZVtrZXldLFxuICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoXG4gICAgICAgICAgICAgICAgc291cmNlW2tleV0sXG4gICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuICAgIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgPSBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0IHx8IGlzTWVyZ2VhYmxlT2JqZWN0OyAvLyBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCBpcyBhZGRlZCB0byBgb3B0aW9uc2Agc28gdGhhdCBjdXN0b20gYXJyYXlNZXJnZSgpXG4gICAgLy8gaW1wbGVtZW50YXRpb25zIGNhbiB1c2UgaXQuIFRoZSBjYWxsZXIgbWF5IG5vdCByZXBsYWNlIGl0LlxuXG4gICAgb3B0aW9ucy5jbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkO1xuICAgIHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuICAgIHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuICAgIGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbiAocHJldiwgbmV4dCkge1xuICAgICAgICByZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpO1xuICAgIH0sIHt9KTtcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcbnZhciBjanMgPSBkZWVwbWVyZ2VfMTtcblxuY2xhc3MgUHJlZmFiQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihjbGF6eiwgcHJvcGVydGllcyA9IHt9LCBvdmVyd3JpdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY2xhenogPSBjbGF6ejtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgdGhpcy5vdmVyd3JpdGUgPSBvdmVyd3JpdGU7XG4gICAgfVxuXG4gICAgYXBwbHlUb0VudGl0eShlbnRpdHksIGluaXRpYWxQcm9wcyA9IHt9KSB7XG4gICAgICAgIGlmICghdGhpcy5jbGF6ei5hbGxvd011bHRpcGxlICYmIGVudGl0eS5oYXModGhpcy5jbGF6eikpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBlbnRpdHlbdGhpcy5jbGF6ei5wcm90b3R5cGUuX2NrZXldO1xuICAgICAgICAgICAgZW50aXR5LnJlbW92ZShjb21wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb3BzID0gY2pzKHRoaXMucHJvcGVydGllcywgaW5pdGlhbFByb3BzKTtcbiAgICAgICAgZW50aXR5LmFkZCh0aGlzLmNsYXp6LCBwcm9wcyk7XG4gICAgfVxufVxuXG5jbGFzcyBQcmVmYWIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICduYW1lJywgJycpO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaW5oZXJpdCcsIFtdKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbXBvbmVudHMnLCBbXSk7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBhZGRDb21wb25lbnQocHJlZmFiQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKHByZWZhYkNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgYXBwbHlUb0VudGl0eShlbnRpdHksIHByZWZhYlByb3BzID0ge30pIHtcbiAgICAgICAgdGhpcy5pbmhlcml0LmZvckVhY2goKHBhcmVudCkgPT4ge1xuICAgICAgICAgICAgcGFyZW50LmFwcGx5VG9FbnRpdHkoZW50aXR5LCBwcmVmYWJQcm9wcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhcnJDb21wcyA9IHt9O1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGF6eiA9IGNvbXBvbmVudC5jbGF6ejtcbiAgICAgICAgICAgIGNvbnN0IGNrZXkgPSBjbGF6ei5wcm90b3R5cGUuX2NrZXk7XG4gICAgICAgICAgICBsZXQgaW5pdGlhbENvbXBQcm9wcyA9IHt9O1xuXG4gICAgICAgICAgICBpZiAoY2xhenouYWxsb3dNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGlmIChjbGF6ei5rZXlQcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBjb21wb25lbnQucHJvcGVydGllc1tjbGF6ei5rZXlQcm9wZXJ0eV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZhYlByb3BzW2NrZXldICYmIHByZWZhYlByb3BzW2NrZXldW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxDb21wUHJvcHMgPSBwcmVmYWJQcm9wc1tja2V5XVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhcnJDb21wc1tja2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyQ29tcHNbY2tleV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmFiUHJvcHNbY2tleV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZhYlByb3BzW2NrZXldW2FyckNvbXBzW2NrZXldXVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxDb21wUHJvcHMgPSBwcmVmYWJQcm9wc1tja2V5XVthcnJDb21wc1tja2V5XV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhcnJDb21wc1tja2V5XSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbENvbXBQcm9wcyA9IHByZWZhYlByb3BzW2NrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wb25lbnQuYXBwbHlUb0VudGl0eShlbnRpdHksIGluaXRpYWxDb21wUHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG59XG5cbmNsYXNzIFByZWZhYlJlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfcHJlZmFicycsIHt9KTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19lbmdpbmUnLCBudWxsKTtcblxuICAgICAgICB0aGlzLl9lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuXG4gICAgZGVzZXJpYWxpemUoZGF0YSkge1xuICAgICAgICBjb25zdCByZWdpc3RlcmVkID0gdGhpcy5nZXQoZGF0YS5uYW1lKTtcblxuICAgICAgICBpZiAocmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVmYWIgPSBuZXcgUHJlZmFiKGRhdGEubmFtZSk7XG4gICAgICAgIGxldCBpbmhlcml0O1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaW5oZXJpdCkpIHtcbiAgICAgICAgICAgIGluaGVyaXQgPSBkYXRhLmluaGVyaXQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuaW5oZXJpdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGluaGVyaXQgPSBbZGF0YS5pbmhlcml0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaGVyaXQgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZWZhYi5pbmhlcml0ID0gaW5oZXJpdC5tYXAoKHBhcmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXQocGFyZW50KTtcblxuICAgICAgICAgICAgaWYgKCFyZWYpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIGBQcmVmYWIgXCIke2RhdGEubmFtZX1cIiBjYW5ub3QgaW5oZXJpdCBmcm9tIFByZWZhYiBcIiR7cGFyZW50fVwiIGJlY2F1c2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0ISBQcmVmYWJzIG11c3QgYmUgcmVnaXN0ZXJlZCBpbiB0aGUgcmlnaHQgb3JkZXIuYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlZjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbXBzID0gZGF0YS5jb21wb25lbnRzIHx8IFtdO1xuICAgICAgICBjb21wcy5mb3JFYWNoKChjb21wb25lbnREYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudERhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2tleSA9IGNhbWVsU3RyaW5nKGNvbXBvbmVudERhdGEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xhenogPSB0aGlzLl9lbmdpbmUuX2NvbXBvbmVudHMuZ2V0KGNrZXkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNsYXp6KSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZhYi5hZGRDb21wb25lbnQobmV3IFByZWZhYkNvbXBvbmVudChjbGF6eikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudERhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2tleSA9IGNhbWVsU3RyaW5nKGNvbXBvbmVudERhdGEudHlwZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbGF6eiA9IHRoaXMuX2VuZ2luZS5fY29tcG9uZW50cy5nZXQoY2tleSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZmFiLmFkZENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcmVmYWJDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhenosXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YS5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGEub3ZlcndyaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgVW5yZWNvZ25pemVkIGNvbXBvbmVudCByZWZlcmVuY2UgXCIke2NvbXBvbmVudERhdGF9XCIgaW4gcHJlZmFiIFwiJHtkYXRhLm5hbWV9XCIuIEVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBwcmVmYWIuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcmVmYWI7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoZGF0YSkge1xuICAgICAgICBjb25zdCBwcmVmYWIgPSB0aGlzLmRlc2VyaWFsaXplKGRhdGEpO1xuICAgICAgICB0aGlzLl9wcmVmYWJzW3ByZWZhYi5uYW1lXSA9IHByZWZhYjtcbiAgICB9XG5cbiAgICBnZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlZmFic1tuYW1lXTtcbiAgICB9XG5cbiAgICBjcmVhdGUod29ybGQsIG5hbWUsIHByb3BlcnRpZXMgPSB7fSkge1xuICAgICAgICBjb25zdCBwcmVmYWIgPSB0aGlzLmdldChuYW1lKTtcblxuICAgICAgICBpZiAoIXByZWZhYikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBDb3VsZCBub3QgaW5zdGFudGlhdGUgcHJlZmFiIFwiJHtuYW1lfVwiIHNpbmNlIGl0IGlzIG5vdCByZWdpc3RlcmVkYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHdvcmxkLmNyZWF0ZUVudGl0eSgpO1xuICAgICAgICBlbnRpdHkuX3FlbGlnaWJsZSA9IGZhbHNlO1xuICAgICAgICBwcmVmYWIuYXBwbHlUb0VudGl0eShlbnRpdHksIHByb3BlcnRpZXMpO1xuICAgICAgICBlbnRpdHkuX3FlbGlnaWJsZSA9IHRydWU7XG5cbiAgICAgICAgZW50aXR5Ll9jYW5kaWRhY3koKTtcblxuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbn1cblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBnZXQgd29ybGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eS53b3JsZDtcbiAgICB9XG5cbiAgICBnZXQgYWxsb3dNdWx0aXBsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuYWxsb3dNdWx0aXBsZTtcbiAgICB9XG5cbiAgICBnZXQga2V5UHJvcGVydHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmtleVByb3BlcnR5O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29uc3RydWN0b3IucHJvcGVydGllcywgcHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5lbnRpdHkucmVtb3ZlKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkRlc3Ryb3llZCgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3llZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5lbnRpdHk7XG4gICAgfVxuXG4gICAgX29uRXZlbnQoZXZ0KSB7XG4gICAgICAgIHRoaXMub25FdmVudChldnQpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1tldnQuaGFuZGxlck5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzW2V2dC5oYW5kbGVyTmFtZV0oZXZ0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbkF0dGFjaGVkKGVudGl0eSkge1xuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICAgICAgdGhpcy5vbkF0dGFjaGVkKGVudGl0eSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICBjb25zdCBvYiA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uc3RydWN0b3IucHJvcGVydGllcykge1xuICAgICAgICAgICAgb2Jba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYjtcbiAgICB9XG5cbiAgICBvbkF0dGFjaGVkKGVudGl0eSkge31cblxuICAgIG9uRGVzdHJveWVkKCkge31cblxuICAgIG9uRXZlbnQoZXZ0KSB7fVxufVxuXG5fZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LCAnYWxsb3dNdWx0aXBsZScsIGZhbHNlKTtcblxuX2RlZmluZVByb3BlcnR5KENvbXBvbmVudCwgJ2tleVByb3BlcnR5JywgbnVsbCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQsICdwcm9wZXJ0aWVzJywge30pO1xuXG5jbGFzcyBFbnRpdHlFdmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0YSA9IHt9KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGF0YScsIHt9KTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ3ByZXZlbnRlZCcsIGZhbHNlKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ2hhbmRsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5oYW5kbGVyTmFtZSA9IGNhbWVsU3RyaW5nKGBvbiAke3RoaXMubmFtZX1gKTtcbiAgICB9XG5cbiAgICBpcyhuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG5hbWU7XG4gICAgfVxuXG4gICAgaGFuZGxlKCkge1xuICAgICAgICB0aGlzLmhhbmRsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByZXZlbnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJldmVudCgpIHtcbiAgICAgICAgdGhpcy5wcmV2ZW50ZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuY29uc3QgT05FID0gMW47XG5jb25zdCBzdWJ0cmFjdEJpdCA9IChudW0sIGJpdCkgPT4ge1xuICAgIHJldHVybiBudW0gJiB+KDFuIDw8IGJpdCk7XG59O1xuY29uc3QgYWRkQml0ID0gKG51bSwgYml0KSA9PiB7XG4gICAgcmV0dXJuIG51bSB8IChPTkUgPDwgYml0KTtcbn07XG5jb25zdCBoYXNCaXQgPSAobnVtLCBiaXQpID0+IHtcbiAgICByZXR1cm4gKG51bSA+PiBiaXQpICUgMm4gIT09IDBuO1xufTtcbmNvbnN0IGJpdEludGVyc2VjdGlvbiA9IChuMSwgbjIpID0+IHtcbiAgICByZXR1cm4gbjEgJiBuMjtcbn07XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudCA9IChlbnRpdHksIGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcbiAgICBlbnRpdHlba2V5XSA9IGNvbXBvbmVudDtcbiAgICBlbnRpdHkuY29tcG9uZW50c1trZXldID0gY29tcG9uZW50O1xufTtcblxuY29uc3QgYXR0YWNoQ29tcG9uZW50S2V5ZWQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBjb21wb25lbnQuX2NrZXk7XG5cbiAgICBpZiAoIWVudGl0eS5jb21wb25lbnRzW2tleV0pIHtcbiAgICAgICAgZW50aXR5W2tleV0gPSB7fTtcbiAgICAgICAgZW50aXR5LmNvbXBvbmVudHNba2V5XSA9IHt9O1xuICAgIH1cblxuICAgIGVudGl0eVtrZXldW2NvbXBvbmVudFtjb21wb25lbnQua2V5UHJvcGVydHldXSA9IGNvbXBvbmVudDtcbiAgICBlbnRpdHkuY29tcG9uZW50c1trZXldW2NvbXBvbmVudFtjb21wb25lbnQua2V5UHJvcGVydHldXSA9IGNvbXBvbmVudDtcbn07XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudEFycmF5ID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuXG4gICAgaWYgKCFlbnRpdHkuY29tcG9uZW50c1trZXldKSB7XG4gICAgICAgIGVudGl0eVtrZXldID0gW107XG4gICAgICAgIGVudGl0eS5jb21wb25lbnRzW2tleV0gPSBbXTtcbiAgICB9XG5cbiAgICBlbnRpdHlba2V5XS5wdXNoKGNvbXBvbmVudCk7XG4gICAgZW50aXR5LmNvbXBvbmVudHNba2V5XS5wdXNoKGNvbXBvbmVudCk7XG59O1xuXG5jb25zdCByZW1vdmVDb21wb25lbnQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBjb21wb25lbnQuX2NrZXk7XG4gICAgZGVsZXRlIGVudGl0eVtrZXldO1xuICAgIGRlbGV0ZSBlbnRpdHkuY29tcG9uZW50c1trZXldO1xuICAgIGVudGl0eS5fY2JpdHMgPSBzdWJ0cmFjdEJpdChlbnRpdHkuX2NiaXRzLCBjb21wb25lbnQuX2NiaXQpO1xuXG4gICAgZW50aXR5Ll9jYW5kaWRhY3koKTtcbn07XG5cbmNvbnN0IHJlbW92ZUNvbXBvbmVudEtleWVkID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuICAgIGNvbnN0IGtleVByb3AgPSBjb21wb25lbnRbY29tcG9uZW50LmtleVByb3BlcnR5XTtcbiAgICBkZWxldGUgZW50aXR5W2tleV1ba2V5UHJvcF07XG4gICAgZGVsZXRlIGVudGl0eS5jb21wb25lbnRzW2tleV1ba2V5UHJvcF07XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZW50aXR5W2tleV0pLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBlbnRpdHlba2V5XTtcbiAgICAgICAgZGVsZXRlIGVudGl0eS5jb21wb25lbnRzW2tleV07XG4gICAgICAgIGVudGl0eS5fY2JpdHMgPSBzdWJ0cmFjdEJpdChlbnRpdHkuX2NiaXRzLCBjb21wb25lbnQuX2NiaXQpO1xuXG4gICAgICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG4gICAgfVxufTtcblxuY29uc3QgcmVtb3ZlQ29tcG9uZW50QXJyYXkgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBjb21wb25lbnQuX2NrZXk7XG4gICAgY29uc3QgaWR4ID0gZW50aXR5W2tleV0uaW5kZXhPZihjb21wb25lbnQpO1xuICAgIGVudGl0eVtrZXldLnNwbGljZShpZHgsIDEpO1xuICAgIGVudGl0eS5jb21wb25lbnRzW2tleV0uc3BsaWNlKGlkeCwgMSk7XG5cbiAgICBpZiAoZW50aXR5W2tleV0ubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgZGVsZXRlIGVudGl0eVtrZXldO1xuICAgICAgICBkZWxldGUgZW50aXR5LmNvbXBvbmVudHNba2V5XTtcbiAgICAgICAgZW50aXR5Ll9jYml0cyA9IHN1YnRyYWN0Qml0KGVudGl0eS5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICAgICAgZW50aXR5Ll9jYW5kaWRhY3koKTtcbiAgICB9XG59O1xuXG5jb25zdCBzZXJpYWxpemVDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5zZXJpYWxpemUoKTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUNvbXBvbmVudEFycmF5ID0gKGFycikgPT4ge1xuICAgIHJldHVybiBhcnIubWFwKHNlcmlhbGl6ZUNvbXBvbmVudCk7XG59O1xuXG5jb25zdCBzZXJpYWxpemVDb21wb25lbnRLZXllZCA9IChvYikgPT4ge1xuICAgIGNvbnN0IHNlciA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrIGluIG9iKSB7XG4gICAgICAgIHNlcltrXSA9IHNlcmlhbGl6ZUNvbXBvbmVudChvYltrXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlcjtcbn07XG5cbmNsYXNzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iod29ybGQsIGlkKSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2NiaXRzJywgMG4pO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX3FlbGlnaWJsZScsIHRydWUpO1xuXG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIF9jYW5kaWRhY3koKSB7XG4gICAgICAgIGlmICh0aGlzLl9xZWxpZ2libGUpIHtcbiAgICAgICAgICAgIHRoaXMud29ybGQuX2NhbmRpZGF0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZChjbGF6eiwgcHJvcGVydGllcykge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgY2xhenoocHJvcGVydGllcyk7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5rZXlQcm9wZXJ0eSkge1xuICAgICAgICAgICAgYXR0YWNoQ29tcG9uZW50S2V5ZWQodGhpcywgY29tcG9uZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQuYWxsb3dNdWx0aXBsZSkge1xuICAgICAgICAgICAgYXR0YWNoQ29tcG9uZW50QXJyYXkodGhpcywgY29tcG9uZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF0dGFjaENvbXBvbmVudCh0aGlzLCBjb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2JpdHMgPSBhZGRCaXQodGhpcy5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICAgICAgY29tcG9uZW50Ll9vbkF0dGFjaGVkKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2NhbmRpZGFjeSgpO1xuICAgIH1cblxuICAgIGhhcyhjbGF6eikge1xuICAgICAgICByZXR1cm4gaGFzQml0KHRoaXMuX2NiaXRzLCBjbGF6ei5wcm90b3R5cGUuX2NiaXQpO1xuICAgIH1cblxuICAgIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5rZXlQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcmVtb3ZlQ29tcG9uZW50S2V5ZWQodGhpcywgY29tcG9uZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQuYWxsb3dNdWx0aXBsZSkge1xuICAgICAgICAgICAgcmVtb3ZlQ29tcG9uZW50QXJyYXkodGhpcywgY29tcG9uZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUNvbXBvbmVudCh0aGlzLCBjb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50Ll9vbkRlc3Ryb3llZCgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmNvbXBvbmVudHNba107XG5cbiAgICAgICAgICAgIGlmICh2IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2JpdHMgPSBzdWJ0cmFjdEJpdCh0aGlzLl9jYml0cywgdi5fY2JpdCk7XG5cbiAgICAgICAgICAgICAgICB2Ll9vbkRlc3Ryb3llZCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NiaXRzID0gc3VidHJhY3RCaXQodGhpcy5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Ll9vbkRlc3Ryb3llZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgT2JqZWN0LnZhbHVlcyh2KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYml0cyA9IHN1YnRyYWN0Qml0KHRoaXMuX2NiaXRzLCBjb21wb25lbnQuX2NiaXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5fb25EZXN0cm95ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tdO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29tcG9uZW50c1trXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NhbmRpZGFjeSgpO1xuXG4gICAgICAgIHRoaXMud29ybGQuX2Rlc3Ryb3llZCh0aGlzLmlkKTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBrIGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuY29tcG9uZW50c1trXTtcblxuICAgICAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2tdID0gc2VyaWFsaXplQ29tcG9uZW50KHYpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2tdID0gc2VyaWFsaXplQ29tcG9uZW50QXJyYXkodik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNba10gPSBzZXJpYWxpemVDb21wb25lbnRLZXllZCh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIC4uLmNvbXBvbmVudHMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KG5hbWUsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEVudGl0eUV2ZW50KG5hbWUsIGRhdGEpO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuY29tcG9uZW50c1trZXldO1xuXG4gICAgICAgICAgICBpZiAodiBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHYuX29uRXZlbnQoZXZ0KTtcblxuICAgICAgICAgICAgICAgIGlmIChldnQucHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh2IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdltpXS5fb25FdmVudChldnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQucHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBPYmplY3QudmFsdWVzKHYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5fb25FdmVudChldnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQucHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG59XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgICBjb25zdHJ1Y3Rvcih3b3JsZCwgZmlsdGVycykge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19jYWNoZScsIFtdKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19vbkFkZExpc3RlbmVycycsIFtdKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19vblJlbW92ZUxpc3RlbmVycycsIFtdKTtcblxuICAgICAgICB0aGlzLl93b3JsZCA9IHdvcmxkO1xuICAgICAgICBjb25zdCBhbnkgPSBmaWx0ZXJzLmFueSB8fCBbXTtcbiAgICAgICAgY29uc3QgYWxsID0gZmlsdGVycy5hbGwgfHwgW107XG4gICAgICAgIGNvbnN0IG5vbmUgPSBmaWx0ZXJzLm5vbmUgfHwgW107XG4gICAgICAgIHRoaXMuX2FueSA9IGFueS5yZWR1Y2UoKHMsIGMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhZGRCaXQocywgYy5wcm90b3R5cGUuX2NiaXQpO1xuICAgICAgICB9LCAwbik7XG4gICAgICAgIHRoaXMuX2FsbCA9IGFsbC5yZWR1Y2UoKHMsIGMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhZGRCaXQocywgYy5wcm90b3R5cGUuX2NiaXQpO1xuICAgICAgICB9LCAwbik7XG4gICAgICAgIHRoaXMuX25vbmUgPSBub25lLnJlZHVjZSgocywgYykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFkZEJpdChzLCBjLnByb3RvdHlwZS5fY2JpdCk7XG4gICAgICAgIH0sIDBuKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgb25FbnRpdHlBZGRlZChmbikge1xuICAgICAgICB0aGlzLl9vbkFkZExpc3RlbmVycy5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICBvbkVudGl0eVJlbW92ZWQoZm4pIHtcbiAgICAgICAgdGhpcy5fb25SZW1vdmVMaXN0ZW5lcnMucHVzaChmbik7XG4gICAgfVxuXG4gICAgaGFzKGVudGl0eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZHgoZW50aXR5KSA+PSAwO1xuICAgIH1cblxuICAgIGlkeChlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLmluZGV4T2YoZW50aXR5KTtcbiAgICB9XG5cbiAgICBtYXRjaGVzKGVudGl0eSkge1xuICAgICAgICBjb25zdCBiaXRzID0gZW50aXR5Ll9jYml0cztcbiAgICAgICAgY29uc3QgYW55ID0gdGhpcy5fYW55ID09PSAwbiB8fCBiaXRJbnRlcnNlY3Rpb24oYml0cywgdGhpcy5fYW55KSA+IDA7XG5cbiAgICAgICAgY29uc3QgYWxsID0gYml0SW50ZXJzZWN0aW9uKGJpdHMsIHRoaXMuX2FsbCkgPT09IHRoaXMuX2FsbDtcblxuICAgICAgICBjb25zdCBub25lID0gYml0SW50ZXJzZWN0aW9uKGJpdHMsIHRoaXMuX25vbmUpID09PSAwbjtcbiAgICAgICAgcmV0dXJuIGFueSAmJiBhbGwgJiYgbm9uZTtcbiAgICB9XG5cbiAgICBjYW5kaWRhdGUoZW50aXR5KSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuaWR4KGVudGl0eSk7XG4gICAgICAgIGNvbnN0IGlzVHJhY2tpbmcgPSBpZHggPj0gMDtcblxuICAgICAgICBpZiAoIWVudGl0eS5pc0Rlc3Ryb3llZCAmJiB0aGlzLm1hdGNoZXMoZW50aXR5KSkge1xuICAgICAgICAgICAgaWYgKCFpc1RyYWNraW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGUucHVzaChlbnRpdHkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fb25BZGRMaXN0ZW5lcnMuZm9yRWFjaCgoY2IpID0+IGNiKGVudGl0eSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RyYWNraW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZS5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgICAgICAgdGhpcy5fb25SZW1vdmVMaXN0ZW5lcnMuZm9yRWFjaCgoY2IpID0+IGNiKGVudGl0eSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlID0gW107XG5cbiAgICAgICAgdGhpcy5fd29ybGQuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW5kaWRhdGUoZW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGU7XG4gICAgfVxufVxuXG5jbGFzcyBXb3JsZCB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2lkJywgMCk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfcXVlcmllcycsIFtdKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19lbnRpdGllcycsIG5ldyBNYXAoKSk7XG5cbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuXG4gICAgY3JlYXRlSWQoKSB7XG4gICAgICAgIHJldHVybiArK3RoaXMuX2lkICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgIH1cblxuICAgIGdldEVudGl0eShpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXRpZXMuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICBnZXRFbnRpdGllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzLnZhbHVlcygpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVudGl0eShpZCA9IHRoaXMuY3JlYXRlSWQoKSkge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgRW50aXR5KHRoaXMsIGlkKTtcblxuICAgICAgICB0aGlzLl9lbnRpdGllcy5zZXQoaWQsIGVudGl0eSk7XG5cbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG5cbiAgICBkZXN0cm95RW50aXR5KGlkKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZ2V0RW50aXR5KGlkKTtcblxuICAgICAgICBpZiAoZW50aXR5KSB7XG4gICAgICAgICAgICBlbnRpdHkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveUVudGl0aWVzKCkge1xuICAgICAgICB0aGlzLl9lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgIGVudGl0eS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUVudGl0aWVzKCk7XG4gICAgICAgIHRoaXMuX2lkID0gMDtcbiAgICAgICAgdGhpcy5fcXVlcmllcyA9IFtdO1xuICAgICAgICB0aGlzLl9lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVRdWVyeShmaWx0ZXJzKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KHRoaXMsIGZpbHRlcnMpO1xuXG4gICAgICAgIHRoaXMuX3F1ZXJpZXMucHVzaChxdWVyeSk7XG5cbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNyZWF0ZVByZWZhYihuYW1lLCBwcm9wZXJ0aWVzID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5naW5lLl9wcmVmYWJzLmNyZWF0ZSh0aGlzLCBuYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemUoZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QganNvbiA9IFtdO1xuICAgICAgICBjb25zdCBsaXN0ID0gZW50aXRpZXMgfHwgdGhpcy5fZW50aXRpZXM7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAganNvbi5wdXNoKGUuc2VyaWFsaXplKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVudGl0aWVzOiBqc29uLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbnRpdHlEYXRhIG9mIGRhdGEuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yR2V0RW50aXR5QnlJZChlbnRpdHlEYXRhLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgZW50aXR5RGF0YSBvZiBkYXRhLmVudGl0aWVzKSB7XG4gICAgICAgICAgICB0aGlzLl9kZXNlcmlhbGl6ZUVudGl0eShlbnRpdHlEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jcmVhdGVPckdldEVudGl0eUJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW50aXR5KGlkKSB8fCB0aGlzLmNyZWF0ZUVudGl0eShpZCk7XG4gICAgfVxuXG4gICAgX2Rlc2VyaWFsaXplRW50aXR5KGRhdGEpIHtcbiAgICAgICAgY29uc3QgeyBpZCwgLi4uY29tcG9uZW50cyB9ID0gZGF0YTtcblxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLl9jcmVhdGVPckdldEVudGl0eUJ5SWQoaWQpO1xuXG4gICAgICAgIGVudGl0eS5fcWVsaWdpYmxlID0gZmFsc2U7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNvbXBvbmVudHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGNhbWVsU3RyaW5nKGtleSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuZW5naW5lLl9jb21wb25lbnRzLmdldCh0eXBlKTtcblxuICAgICAgICAgICAgaWYgKGRlZi5hbGxvd011bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh2YWx1ZSkuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuYWRkKGRlZiwgZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVudGl0eS5hZGQoZGVmLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbnRpdHkuX3FlbGlnaWJsZSA9IHRydWU7XG5cbiAgICAgICAgZW50aXR5Ll9jYW5kaWRhY3koKTtcbiAgICB9XG5cbiAgICBfY2FuZGlkYXRlKGVudGl0eSkge1xuICAgICAgICB0aGlzLl9xdWVyaWVzLmZvckVhY2goKHEpID0+IHEuY2FuZGlkYXRlKGVudGl0eSkpO1xuICAgIH1cblxuICAgIF9kZXN0cm95ZWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzLmRlbGV0ZShpZCk7XG4gICAgfVxufVxuXG5jbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19jb21wb25lbnRzJywgbmV3IENvbXBvbmVudFJlZ2lzdHJ5KCkpO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX3ByZWZhYnMnLCBuZXcgUHJlZmFiUmVnaXN0cnkodGhpcykpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGNsYXp6KSB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMucmVnaXN0ZXIoY2xhenopO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyUHJlZmFiKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcHJlZmFicy5yZWdpc3RlcihkYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGVXb3JsZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBXb3JsZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkZXN0cm95V29ybGQod29ybGQpIHtcbiAgICAgICAgd29ybGQuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29tcG9uZW50LCBFbmdpbmUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqXG4gKiBUaGUgQmxlbmRNb2RlIGVudW0gZGVmaW5lcyBob3cgdHJhbnNsdWNlbnQgY2VsbHMgYXJlIHJlbmRlcmVkLlxuICovXG52YXIgQmxlbmRNb2RlO1xuKGZ1bmN0aW9uIChCbGVuZE1vZGUpIHtcbiAgICAvKipcbiAgICAgKiBObyBibGVuZGluZy4gIEFscGhhIGlzIGlnbm9yZWQuXG4gICAgICovXG4gICAgQmxlbmRNb2RlW0JsZW5kTW9kZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIC8qKlxuICAgICAqIEFscGhhIGJsZW5kaW5nLlxuICAgICAqXG4gICAgICogZHN0UkdCID0gKHNyY1JHQiAqIHNyY0EpICsgKGRzdFJHQiAqICgxLXNyY0EpKVxuICAgICAqXG4gICAgICogZHN0QSA9IHNyY0EgKyAoZHN0QSAqICgxLXNyY0EpKVxuICAgICAqL1xuICAgIEJsZW5kTW9kZVtCbGVuZE1vZGVbXCJCbGVuZFwiXSA9IDFdID0gXCJCbGVuZFwiO1xuICAgIC8qKlxuICAgICAqIEFkZGl0aXZlIGJsZW5kaW5nLlxuICAgICAqXG4gICAgICogZHN0UkdCID0gKHNyY1JHQiAqIHNyY0EpICsgZHN0UkdCXG4gICAgICpcbiAgICAgKiBkc3RBID0gZHN0QVxuICAgICAqL1xuICAgIEJsZW5kTW9kZVtCbGVuZE1vZGVbXCJBZGRcIl0gPSAyXSA9IFwiQWRkXCI7XG59KShCbGVuZE1vZGUgfHwgKEJsZW5kTW9kZSA9IHt9KSk7XG5cbi8qKlxuICogRGV0YWlscyBhYm91dCBib3ggY2hhcmFjdGVycy5cbiAqIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBhcnJheSBvZiBkZXRhaWxzIGZvciB0aGUgZmlyc3QgYm94IGNoYXIgKDB4QjMpLlxuICogRWFjaCBzdWIgYXJyYXkgaXMgdGhlIGNvdW50IG9mIHN0ZW1zIGZvciB0b3AsIHJpZ2h0LCBib3R0b20sIGFuZCBsZWZ0LlxuICovXG5jb25zdCBCT1hfQ0hBUl9ERVRBSUxTID0gW1xuICAgIFsxLCAwLCAxLCAwXSxcbiAgICBbMSwgMCwgMSwgMV0sXG4gICAgWzEsIDAsIDEsIDJdLFxuICAgIFsyLCAwLCAyLCAxXSxcbiAgICBbMCwgMCwgMiwgMV0sXG4gICAgWzAsIDAsIDEsIDJdLFxuICAgIFsyLCAwLCAyLCAyXSxcbiAgICBbMiwgMCwgMiwgMF0sXG4gICAgWzAsIDAsIDIsIDJdLFxuICAgIFsyLCAwLCAwLCAyXSxcbiAgICBbMiwgMCwgMCwgMV0sXG4gICAgWzEsIDAsIDAsIDJdLFxuICAgIFswLCAwLCAxLCAxXSxcbiAgICBbMSwgMSwgMCwgMF0sXG4gICAgWzEsIDEsIDAsIDFdLFxuICAgIFswLCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMF0sXG4gICAgWzAsIDEsIDAsIDFdLFxuICAgIFsxLCAxLCAxLCAxXSxcbiAgICBbMSwgMiwgMSwgMF0sXG4gICAgWzIsIDEsIDIsIDBdLFxuICAgIFsyLCAyLCAwLCAwXSxcbiAgICBbMCwgMiwgMiwgMF0sXG4gICAgWzIsIDIsIDAsIDJdLFxuICAgIFswLCAyLCAyLCAyXSxcbiAgICBbMiwgMiwgMiwgMF0sXG4gICAgWzAsIDIsIDAsIDJdLFxuICAgIFsyLCAyLCAyLCAyXSxcbiAgICBbMSwgMiwgMCwgMl0sXG4gICAgWzIsIDEsIDAsIDFdLFxuICAgIFswLCAyLCAxLCAyXSxcbiAgICBbMCwgMSwgMiwgMV0sXG4gICAgWzIsIDEsIDAsIDBdLFxuICAgIFsxLCAyLCAwLCAwXSxcbiAgICBbMCwgMiwgMSwgMF0sXG4gICAgWzAsIDEsIDIsIDBdLFxuICAgIFsyLCAxLCAyLCAxXSxcbiAgICBbMSwgMiwgMSwgMl0sXG4gICAgWzEsIDAsIDAsIDFdLFxuICAgIFswLCAxLCAxLCAwXSwgLy8gMHhEQVxuXTtcbmZ1bmN0aW9uIGlzQm94Q2VsbChjb24sIHgsIHkpIHtcbiAgICBjb25zdCBjaGFyQ29kZSA9IGNvbi5nZXRDaGFyQ29kZSh4LCB5KTtcbiAgICByZXR1cm4gY2hhckNvZGUgIT09IHVuZGVmaW5lZCAmJiBjaGFyQ29kZSA+PSAweEIzICYmIGNoYXJDb2RlIDw9IDB4REE7XG59XG5mdW5jdGlvbiBnZXRCb3hDb3VudChjb24sIHgsIHksIGluZGV4KSB7XG4gICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPj0gY29uLndpZHRoIHx8IHkgPj0gY29uLmhlaWdodCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgY2hhckNvZGUgPSBjb24uZ2V0Q2hhckNvZGUoeCwgeSk7XG4gICAgaWYgKGNoYXJDb2RlID09PSB1bmRlZmluZWQgfHwgY2hhckNvZGUgPCAweEIzIHx8IGNoYXJDb2RlID4gMHhEQSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIEJPWF9DSEFSX0RFVEFJTFNbY2hhckNvZGUgLSAweEIzXVtpbmRleF07XG59XG5mdW5jdGlvbiBnZXRCb3hDZWxsKHVwLCByaWdodCwgZG93biwgbGVmdCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQk9YX0NIQVJfREVUQUlMUy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBCT1hfQ0hBUl9ERVRBSUxTW2ldO1xuICAgICAgICBpZiAocm93WzBdID09PSB1cCAmJiByb3dbMV0gPT09IHJpZ2h0ICYmIHJvd1syXSA9PT0gZG93biAmJiByb3dbM10gPT09IGxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiAweEIzICsgaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGZpeEJveENlbGxzKGNvbikge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY29uLmhlaWdodDsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY29uLndpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChpc0JveENlbGwoY29uLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgIGxldCB1cCA9IGdldEJveENvdW50KGNvbiwgeCwgeSAtIDEsIDIpO1xuICAgICAgICAgICAgICAgIGxldCByaWdodCA9IGdldEJveENvdW50KGNvbiwgeCArIDEsIHksIDMpO1xuICAgICAgICAgICAgICAgIGxldCBkb3duID0gZ2V0Qm94Q291bnQoY29uLCB4LCB5ICsgMSwgMCk7XG4gICAgICAgICAgICAgICAgbGV0IGxlZnQgPSBnZXRCb3hDb3VudChjb24sIHggLSAxLCB5LCAxKTtcbiAgICAgICAgICAgICAgICAvLyBUaGVyZSBhcmUgbm8gc2luZ2xlLWRpcmVjdGlvbiBzdHVicy5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBuZWVkIG9uZSwgdGhlbiB3ZSBjcmVhdGUgYSBmdWxsIHZlcnRpY2FsIG9yIGhvcml6b250YWwgcGlwZS5cbiAgICAgICAgICAgICAgICBpZiAodXAgPiAwICYmIHJpZ2h0ID09PSAwICYmIGRvd24gPT09IDAgJiYgbGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb3duID0gdXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVwID09PSAwICYmIHJpZ2h0ID4gMCAmJiBkb3duID09PSAwICYmIGxlZnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1cCA9PT0gMCAmJiByaWdodCA9PT0gMCAmJiBkb3duID4gMCAmJiBsZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwID0gZG93bjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXAgPT09IDAgJiYgcmlnaHQgPT09IDAgJiYgZG93biA9PT0gMCAmJiBsZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFZlcnRpY2FsIGFuZCBob3Jpem9udGFsIGF4aXMgbXVzdCBoYXZlIHNhbWUgd2lkdGguXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQgPiAwICYmIHJpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQgPSBNYXRoLm1heChsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1cCA+IDAgJiYgZG93biA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXAgPSBkb3duID0gTWF0aC5tYXgodXAsIGRvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyQ29kZSA9IGdldEJveENlbGwodXAsIHJpZ2h0LCBkb3duLCBsZWZ0KTtcbiAgICAgICAgICAgICAgICBpZiAoKHVwIHx8IHJpZ2h0IHx8IGRvd24gfHwgbGVmdCkgJiYgIShjaGFyQ29kZSA+PSAweEIzICYmIGNoYXJDb2RlIDw9IDB4REEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBjaGFyIGNvZGUhICh1cD0nICsgdXAgKyAnLCByaWdodD0nICsgcmlnaHQgKyAnLCBkb3duPScgKyBkb3duICsgJywgbGVmdD0nICsgbGVmdCArICcpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbi5kcmF3Q2hhcih4LCB5LCBjaGFyQ29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBiaWctZW5kaWFuIDMyLWJpdCBSR0JBIGNvbG9yIGZyb20gcmVkLCBncmVlbiwgYW5kIGJsdWUgY29tcG9uZW50cy5cbiAqIEBwYXJhbSByIFJlZCAoMC0yNTUpLlxuICogQHBhcmFtIGcgR3JlZW4gKDAtMjU1KS5cbiAqIEBwYXJhbSBiIEJsdWUgKDAtMjU1KS5cbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhICgwLTI1NSkuXG4gKiBAcmV0dXJuIEEgMzItYml0IHVuc2lnbmVkIGludGVnZXIgY29sb3IuXG4gKi9cbmZ1bmN0aW9uIGZyb21SZ2IociwgZywgYiwgYSkge1xuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYSA9IDI1NTtcbiAgICB9XG4gICAgcmV0dXJuICgociA8PCAyNCkgKyAoZyA8PCAxNikgKyAoYiA8PCA4KSArIGEpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gSFNWIGZvcm1hdCB0byBSR0JBIGZvcm1hdC5cbiAqXG4gKiBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE3MjQzMDcwLzIwNTE3MjRcbiAqXG4gKiBAcGFyYW0gaCBIdWUgKDAuMCAtIDEuMCkuXG4gKiBAcGFyYW0gcyBTYXR1cmF0aW9uICgwLjAgLSAxLjApLlxuICogQHBhcmFtIHYgVmFsdWUgKDAuMCAtIDEuMCkuXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSAoMC4wIC0gMS4wKS5cbiAqIEByZXR1cm4gQSAzMi1iaXQgdW5zaWduZWQgaW50ZWdlciBjb2xvci5cbiAqL1xuZnVuY3Rpb24gZnJvbUhzdihoLCBzLCB2LCBhKSB7XG4gICAgY29uc3QgaSA9IChoICogNikgfCAwO1xuICAgIGNvbnN0IGYgPSBoICogNiAtIGk7XG4gICAgY29uc3QgcCA9IHYgKiAoMSAtIHMpO1xuICAgIGNvbnN0IHEgPSB2ICogKDEgLSBmICogcyk7XG4gICAgY29uc3QgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcbiAgICBsZXQgciwgZywgYjtcbiAgICBzd2l0Y2ggKGkgJSA2KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHIgPSB2LCBnID0gdCwgYiA9IHA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgciA9IHEsIGcgPSB2LCBiID0gcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByID0gcCwgZyA9IHYsIGIgPSB0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHIgPSBwLCBnID0gcSwgYiA9IHY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgciA9IHQsIGcgPSBwLCBiID0gdjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByID0gdiwgZyA9IHAsIGIgPSBxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByID0gMDtcbiAgICAgICAgICAgIGcgPSAwO1xuICAgICAgICAgICAgYiA9IDA7XG4gICAgfVxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYSA9IDEuMDtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21SZ2IoKHIgKiAyNTUpIHwgMCwgKGcgKiAyNTUpIHwgMCwgKGIgKiAyNTUpIHwgMCwgKGEgKiAyNTUpIHwgMCk7XG59XG5cbmNvbnN0IENvbG9ycyA9IHtcbiAgICBCTEFDSzogZnJvbVJnYigwLCAwLCAwKSxcbiAgICBXSElURTogZnJvbVJnYigweGZmLCAweGZmLCAweGZmKSxcbiAgICBMSUdIVF9HUkFZOiBmcm9tUmdiKDB4YWEsIDB4YWEsIDB4YWEpLFxuICAgIERBUktfR1JBWTogZnJvbVJnYigweDU1LCAweDU1LCAweDU1KSxcbiAgICBZRUxMT1c6IGZyb21SZ2IoMHhmZiwgMHhmZiwgMHg1NSksXG4gICAgQlJPV046IGZyb21SZ2IoMHhhYSwgMHg1NSwgMHgwMCksXG4gICAgTElHSFRfUkVEOiBmcm9tUmdiKDB4ZmYsIDB4NTUsIDB4NTUpLFxuICAgIERBUktfUkVEOiBmcm9tUmdiKDB4YWEsIDB4MDAsIDB4MDApLFxuICAgIExJR0hUX0dSRUVOOiBmcm9tUmdiKDB4NTUsIDB4ZmYsIDB4NTUpLFxuICAgIERBUktfR1JFRU46IGZyb21SZ2IoMHgwMCwgMHhhYSwgMHgwMCksXG4gICAgTElHSFRfQ1lBTjogZnJvbVJnYigweDU1LCAweGZmLCAweGZmKSxcbiAgICBEQVJLX0NZQU46IGZyb21SZ2IoMHgwMCwgMHhhYSwgMHhhYSksXG4gICAgTElHSFRfQkxVRTogZnJvbVJnYigweDU1LCAweDU1LCAweGZmKSxcbiAgICBEQVJLX0JMVUU6IGZyb21SZ2IoMHgwMCwgMHgwMCwgMHhhYSksXG4gICAgTElHSFRfTUFHRU5UQTogZnJvbVJnYigweGZmLCAweDU1LCAweGZmKSxcbiAgICBEQVJLX01BR0VOVEE6IGZyb21SZ2IoMHhhYSwgMHgwMCwgMHhhYSksXG4gICAgT1JBTkdFOiBmcm9tUmdiKDB4ZmYsIDB4ODgsIDB4MDApLFxufTtcblxuY29uc3QgY2xhc3NEZWZpbml0aW9ucyA9IG5ldyBNYXAoKTtcbi8qKlxuICogRGVjb3JhdGVzIGEgY2xhc3MgdG8gbWFrZSBzZXJpYWxpemFibGUuXG4gKiBBbnkgY2xhc3Mgd2l0aCB0aGUgQHNlcmlhbGl6YWJsZSBkZWNvcmF0b3Igd2lsbCBiZSBzZXJpYWxpemVkIGFuZCBkZXNlcmlhbGl6ZWQuXG4gKiBAcGFyYW0gdmFsdWUgVGhlIFR5cGVTY3JpcHQgY2xhc3MgdG8gbWFyayBhcyBzZXJpYWxpemFibGUuXG4gKi9cbmZ1bmN0aW9uIHNlcmlhbGl6YWJsZSh2YWx1ZSkge1xuICAgIGNsYXNzRGVmaW5pdGlvbnMuc2V0KHZhbHVlLm5hbWUsIHZhbHVlKTtcbn1cbi8qKlxuICogU2VyaWFsaXplcyBhIHZhbHVlIHRvIEpTT04uXG4gKiBIYW5kbGVzIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIGNsYXNzIGluc3RhbmNlcy5cbiAqIEBwYXJhbSBvYmogVGhlIHJvb3Qgb2JqZWN0IHRvIHNlcmlhbGl6ZS5cbiAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QgZ3JhcGguXG4gKi9cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgICBjb25zdCBpbnN0YW5jZXMgPSBbXTtcbiAgICBjb25zdCBpbnN0YW5jZXNNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgIGNvbnN0IHJvb3QgPSByZXBsYWNlKG9iaik7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgaW5zdGFuY2VzLCByb290IH0pO1xuICAgIGZ1bmN0aW9uIHJlcGxhY2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZUFycmF5KGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbnB1dCAmJiB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZU9iamVjdChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZUFycmF5KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRbaV0gPSByZXBsYWNlKGlucHV0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBsYWNlT2JqZWN0KGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5jb25zdHJ1Y3Rvci5uYW1lICYmIGlucHV0LmNvbnN0cnVjdG9yLm5hbWUgIT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoIWNsYXNzRGVmaW5pdGlvbnMuaGFzKGlucHV0LmNvbnN0cnVjdG9yLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDbGFzcyAke2lucHV0LmNvbnN0cnVjdG9yLm5hbWV9IGlzIG5vdCBzZXJpYWxpemFibGUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2VzTWFwLmhhcyhpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAkcmVmOiBpbnN0YW5jZXNNYXAuZ2V0KGlucHV0KSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgJHJlZiA9IGluc3RhbmNlcy5sZW5ndGg7XG4gICAgICAgICAgICBpbnN0YW5jZXMucHVzaCh7ICR0eXBlOiBpbnB1dC5jb25zdHJ1Y3Rvci5uYW1lIH0pO1xuICAgICAgICAgICAgaW5zdGFuY2VzTWFwLnNldChpbnB1dCwgJHJlZik7XG4gICAgICAgICAgICBpbnN0YW5jZXNbJHJlZl0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlcGxhY2VPYmplY3RQcm9wZXJ0aWVzKGlucHV0KSksIHsgJHR5cGU6IGlucHV0LmNvbnN0cnVjdG9yLm5hbWUgfSk7XG4gICAgICAgICAgICByZXR1cm4geyAkcmVmIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcGxhY2VPYmplY3RQcm9wZXJ0aWVzKGlucHV0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZU9iamVjdFByb3BlcnRpZXMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGlucHV0KSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSByZXBsYWNlKGlucHV0W2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYSBKU09OIHN0cmluZyB0byBhbiBvYmplY3QgZ3JhcGguXG4gKiBIYW5kbGVzIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIGNsYXNzIGluc3RhbmNlcy5cbiAqIEBwYXJhbSBzdHIgVGhlIEpTT04gc3RyaW5nIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybnMgVGhlIGRlc2VyaWFsaXplZCBvYmplY3QgZ3JhcGguXG4gKi9cbmZ1bmN0aW9uIGRlc2VyaWFsaXplKHN0cikge1xuICAgIGNvbnN0IGlucHV0ID0gSlNPTi5wYXJzZShzdHIpO1xuICAgIGNvbnN0IGluc3RhbmNlcyA9IGlucHV0Lmluc3RhbmNlcztcbiAgICAvLyBGaXJzdCwgcmVwbGFjZSBhbGwgb2JqZWN0cyB3aXRoIGNsYXNzIGluc3RhbmNlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzW2ldO1xuICAgICAgICBjb25zdCBjbGFzc0RlZmluaXRpb24gPSBjbGFzc0RlZmluaXRpb25zLmdldChpbnN0YW5jZS4kdHlwZSk7XG4gICAgICAgIGRlbGV0ZSBpbnN0YW5jZS4kdHlwZTtcbiAgICAgICAgaW5zdGFuY2VzW2ldID0gT2JqZWN0LmNyZWF0ZShjbGFzc0RlZmluaXRpb24ucHJvdG90eXBlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhpbnN0YW5jZSkpO1xuICAgIH1cbiAgICAvLyBTZWNvbmQsIHJlcGxhY2UgYWxsIHJlZmVyZW5jZXMgaW4gdGhlIGxpc3Qgb2YgY2xhc3MgaW5zdGFuY2VzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVwbGFjZU9iamVjdFByb3BlcnRpZXMoaW5zdGFuY2VzW2ldKTtcbiAgICB9XG4gICAgLy8gRmluYWxseSwgcmVwbGFjZSBhbGwgcmVmZXJlbmNlcyBpbiB0aGUgcm9vdCBvYmplY3QgZ3JhcGhcbiAgICByZXR1cm4gcmVwbGFjZShpbnB1dC5yb290KTtcbiAgICBmdW5jdGlvbiByZXBsYWNlKGlucHV0KSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VBcnJheShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQgJiYgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VPYmplY3QoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VBcnJheShpbnB1dCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbnB1dFtpXSA9IHJlcGxhY2UoaW5wdXRbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZU9iamVjdChpbnB1dCkge1xuICAgICAgICBpZiAoaXNSZWYoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VzW2lucHV0LiRyZWZdO1xuICAgICAgICB9XG4gICAgICAgIHJlcGxhY2VPYmplY3RQcm9wZXJ0aWVzKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBsYWNlT2JqZWN0UHJvcGVydGllcyhpbnB1dCkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhpbnB1dCkpIHtcbiAgICAgICAgICAgIGlucHV0W2tleV0gPSByZXBsYWNlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGlzUmVmKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJyRyZWYnIGluIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY29udmVydENoYXJDb2RlKGNoYXJDb2RlKSB7XG4gICAgaWYgKHR5cGVvZiBjaGFyQ29kZSA9PT0gJ3N0cmluZycgJiYgY2hhckNvZGUubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gY2hhckNvZGUuY2hhckNvZGVBdCgwKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGFyQ29kZTtcbiAgICB9XG59XG5sZXQgQ2VsbCA9IGNsYXNzIENlbGwge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNoYXJDb2RlLCBmZywgYmcpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgaWYgKGNoYXJDb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhckNvZGUgPSBjb252ZXJ0Q2hhckNvZGUoY2hhckNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFyQ29kZSA9ICcgJy5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZnID0gZmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZnID0gQ29sb3JzLldISVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmJnID0gYmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJnID0gQ29sb3JzLkJMQUNLO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ibG9ja2VkU2lnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5leHBsb3JlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXRoSWQgPSAtMTtcbiAgICAgICAgdGhpcy5nID0gMDtcbiAgICAgICAgdGhpcy5oID0gMDtcbiAgICAgICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB9XG4gICAgc2V0Q2hhckNvZGUoY2hhckNvZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhckNvZGUgIT09IGNoYXJDb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJDb2RlID0gY2hhckNvZGU7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRGb3JlZ3JvdW5kKGZnKSB7XG4gICAgICAgIGlmIChmZyAhPT0gdW5kZWZpbmVkICYmIGZnICE9PSBudWxsICYmIGZnICE9PSB0aGlzLmZnKSB7XG4gICAgICAgICAgICB0aGlzLmZnID0gZmc7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRCYWNrZ3JvdW5kKGJnKSB7XG4gICAgICAgIGlmIChiZyAhPT0gdW5kZWZpbmVkICYmIGJnICE9PSBudWxsICYmIGJnICE9PSB0aGlzLmJnKSB7XG4gICAgICAgICAgICB0aGlzLmJnID0gYmc7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRWYWx1ZShjaGFyQ29kZSwgZmcsIGJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hhckNvZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjaGFyQ29kZSA9IGNoYXJDb2RlLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjaGFyQ29kZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2hhckNvZGUoY2hhckNvZGUpO1xuICAgICAgICAgICAgaWYgKGZnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZvcmVncm91bmQoZmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJhY2tncm91bmQoYmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kcmF3Q2VsbChjaGFyQ29kZSwgQmxlbmRNb2RlLk5vbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRpcnR5O1xuICAgIH1cbiAgICBkcmF3Q2VsbChvdGhlckNlbGwsIGJsZW5kTW9kZSkge1xuICAgICAgICBjb25zdCBhbHBoYSA9IG90aGVyQ2VsbC5iZyAmIDB4ZmY7XG4gICAgICAgIGlmIChibGVuZE1vZGUgPT09IEJsZW5kTW9kZS5Ob25lIHx8IG90aGVyQ2VsbC5jaGFyQ29kZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2hhckNvZGUob3RoZXJDZWxsLmNoYXJDb2RlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yZWdyb3VuZChvdGhlckNlbGwuZmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFscGhhID4gMCAmJiBhbHBoYSA8IDI1NSkge1xuICAgICAgICAgICAgdGhpcy5zZXRGb3JlZ3JvdW5kKHRoaXMuYmxlbmRDb2xvcnModGhpcy5mZywgb3RoZXJDZWxsLmJnLCBibGVuZE1vZGUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxlbmRNb2RlID09PSBCbGVuZE1vZGUuTm9uZSB8fCBhbHBoYSA9PT0gMjU1KSB7XG4gICAgICAgICAgICB0aGlzLnNldEJhY2tncm91bmQob3RoZXJDZWxsLmJnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbHBoYSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmFja2dyb3VuZCh0aGlzLmJsZW5kQ29sb3JzKHRoaXMuYmcsIG90aGVyQ2VsbC5iZywgYmxlbmRNb2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmxlbmRDb2xvcnMoYzEsIGMyLCBibGVuZE1vZGUpIHtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBjMiAmIDB4ZmY7XG4gICAgICAgIGNvbnN0IHcxID0gKDI1NSAtIGFscGhhKSAvIDI1NS4wO1xuICAgICAgICBjb25zdCB3MiA9IDEuMCAtIHcxO1xuICAgICAgICBjb25zdCByMSA9IChjMSA+PiAyNCkgJiAweGZmO1xuICAgICAgICBjb25zdCBnMSA9IChjMSA+PiAxNikgJiAweGZmO1xuICAgICAgICBjb25zdCBiMSA9IChjMSA+PiA4KSAmIDB4ZmY7XG4gICAgICAgIGNvbnN0IHIyID0gKGMyID4+IDI0KSAmIDB4ZmY7XG4gICAgICAgIGNvbnN0IGcyID0gKGMyID4+IDE2KSAmIDB4ZmY7XG4gICAgICAgIGNvbnN0IGIyID0gKGMyID4+IDgpICYgMHhmZjtcbiAgICAgICAgc3dpdGNoIChibGVuZE1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgQmxlbmRNb2RlLkJsZW5kOlxuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tUmdiKCh3MSAqIHIxICsgdzIgKiByMikgfCAwLCAodzEgKiBnMSArIHcyICogZzIpIHwgMCwgKHcxICogYjEgKyB3MiAqIGIyKSB8IDApO1xuICAgICAgICAgICAgY2FzZSBCbGVuZE1vZGUuQWRkOlxuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tUmdiKHRoaXMuY2xhbXAoKHIxICsgdzIgKiByMikgfCAwKSwgdGhpcy5jbGFtcCgoZzEgKyB3MiAqIGcyKSB8IDApLCB0aGlzLmNsYW1wKChiMSArIHcyICogYjIpIHwgMCkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gYzI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xhbXAoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oMjU1LCB4KTtcbiAgICB9XG59O1xuQ2VsbCA9IF9fZGVjb3JhdGUoW1xuICAgIHNlcmlhbGl6YWJsZVxuXSwgQ2VsbCk7XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvZGVfcGFnZV80Mzdcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jsb2NrX0VsZW1lbnRzXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Cb3gtZHJhd2luZ19jaGFyYWN0ZXJcbnZhciBDaGFycztcbihmdW5jdGlvbiAoQ2hhcnMpIHtcbiAgICBDaGFyc1tDaGFyc1tcIlNNSUxFWVwiXSA9IDFdID0gXCJTTUlMRVlcIjtcbiAgICBDaGFyc1tDaGFyc1tcIklOVkVSU0VfU01JTEVZXCJdID0gMl0gPSBcIklOVkVSU0VfU01JTEVZXCI7XG4gICAgQ2hhcnNbQ2hhcnNbXCJIRUFSVFwiXSA9IDNdID0gXCJIRUFSVFwiO1xuICAgIENoYXJzW0NoYXJzW1wiRElBTU9ORFwiXSA9IDRdID0gXCJESUFNT05EXCI7XG4gICAgQ2hhcnNbQ2hhcnNbXCJDTFVCXCJdID0gNV0gPSBcIkNMVUJcIjtcbiAgICBDaGFyc1tDaGFyc1tcIlNQQURFXCJdID0gNl0gPSBcIlNQQURFXCI7XG4gICAgQ2hhcnNbQ2hhcnNbXCJCVUxMRVRcIl0gPSA3XSA9IFwiQlVMTEVUXCI7XG4gICAgQ2hhcnNbQ2hhcnNbXCJJTlZFUlNFX0JVTExFVFwiXSA9IDhdID0gXCJJTlZFUlNFX0JVTExFVFwiO1xuICAgIENoYXJzW0NoYXJzW1wiTElHSFRfU0hBREVcIl0gPSAxNzZdID0gXCJMSUdIVF9TSEFERVwiO1xuICAgIENoYXJzW0NoYXJzW1wiTUVESVVNX1NIQURFXCJdID0gMTc3XSA9IFwiTUVESVVNX1NIQURFXCI7XG4gICAgQ2hhcnNbQ2hhcnNbXCJEQVJLX1NIQURFXCJdID0gMTc4XSA9IFwiREFSS19TSEFERVwiO1xuICAgIENoYXJzW0NoYXJzW1wiQk9YX1NJTkdMRV9WRVJUSUNBTFwiXSA9IDE3OV0gPSBcIkJPWF9TSU5HTEVfVkVSVElDQUxcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9MRUZUXCJdID0gMTgwXSA9IFwiQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX0xFRlRcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJPWF9ET1VCTEVfVkVSVElDQUxfQU5EX0RPVUJMRV9MRUZUXCJdID0gMTg1XSA9IFwiQk9YX0RPVUJMRV9WRVJUSUNBTF9BTkRfRE9VQkxFX0xFRlRcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJPWF9ET1VCTEVfVkVSVElDQUxcIl0gPSAxODZdID0gXCJCT1hfRE9VQkxFX1ZFUlRJQ0FMXCI7XG4gICAgQ2hhcnNbQ2hhcnNbXCJCT1hfRE9VQkxFX0RPV05fQU5EX0RPVUJMRV9MRUZUXCJdID0gMTg3XSA9IFwiQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfTEVGVFwiO1xuICAgIENoYXJzW0NoYXJzW1wiQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX0xFRlRcIl0gPSAxODhdID0gXCJCT1hfRE9VQkxFX1VQX0FORF9ET1VCTEVfTEVGVFwiO1xuICAgIENoYXJzW0NoYXJzW1wiQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfTEVGVFwiXSA9IDE5MV0gPSBcIkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX0xFRlRcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9SSUdIVFwiXSA9IDE5Ml0gPSBcIkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9SSUdIVFwiO1xuICAgIENoYXJzW0NoYXJzW1wiQk9YX1NJTkdMRV9IT1JJWk9OVEFMX0FORF9TSU5HTEVfVVBcIl0gPSAxOTNdID0gXCJCT1hfU0lOR0xFX0hPUklaT05UQUxfQU5EX1NJTkdMRV9VUFwiO1xuICAgIENoYXJzW0NoYXJzW1wiQk9YX1NJTkdMRV9IT1JJWk9OVEFMX0FORF9TSU5HTEVfRE9XTlwiXSA9IDE5NF0gPSBcIkJPWF9TSU5HTEVfSE9SSVpPTlRBTF9BTkRfU0lOR0xFX0RPV05cIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9SSUdIVFwiXSA9IDE5NV0gPSBcIkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9SSUdIVFwiO1xuICAgIENoYXJzW0NoYXJzW1wiQk9YX1NJTkdMRV9IT1JJWk9OVEFMXCJdID0gMTk2XSA9IFwiQk9YX1NJTkdMRV9IT1JJWk9OVEFMXCI7XG4gICAgQ2hhcnNbQ2hhcnNbXCJCT1hfU0lOR0xFX1ZFUlRJQ0FMX0FORF9TSU5HTEVfSE9SSVpPTlRBTFwiXSA9IDE5N10gPSBcIkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9IT1JJWk9OVEFMXCI7XG4gICAgQ2hhcnNbQ2hhcnNbXCJCT1hfRE9VQkxFX1VQX0FORF9ET1VCTEVfUklHSFRcIl0gPSAyMDBdID0gXCJCT1hfRE9VQkxFX1VQX0FORF9ET1VCTEVfUklHSFRcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX1JJR0hUXCJdID0gMjAxXSA9IFwiQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfUklHSFRcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJPWF9ET1VCTEVfSE9SSVpPTlRBTF9BTkRfRE9VQkxFX1VQXCJdID0gMjAyXSA9IFwiQk9YX0RPVUJMRV9IT1JJWk9OVEFMX0FORF9ET1VCTEVfVVBcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJPWF9ET1VCTEVfSE9SSVpPTlRBTF9BTkRfRE9VQkxFX0RPV05cIl0gPSAyMDNdID0gXCJCT1hfRE9VQkxFX0hPUklaT05UQUxfQU5EX0RPVUJMRV9ET1dOXCI7XG4gICAgQ2hhcnNbQ2hhcnNbXCJCT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfUklHSFRcIl0gPSAyMDRdID0gXCJCT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfUklHSFRcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJPWF9ET1VCTEVfSE9SSVpPTlRBTFwiXSA9IDIwNV0gPSBcIkJPWF9ET1VCTEVfSE9SSVpPTlRBTFwiO1xuICAgIENoYXJzW0NoYXJzW1wiQk9YX0RPVUJMRV9WRVJUSUNBTF9BTkRfRE9VQkxFX0hPUklaT05UQUxcIl0gPSAyMDZdID0gXCJCT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfSE9SSVpPTlRBTFwiO1xuICAgIENoYXJzW0NoYXJzW1wiQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX0xFRlRcIl0gPSAyMTddID0gXCJCT1hfU0lOR0xFX1VQX0FORF9TSU5HTEVfTEVGVFwiO1xuICAgIENoYXJzW0NoYXJzW1wiQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfUklHSFRcIl0gPSAyMThdID0gXCJCT1hfU0lOR0xFX0RPV05fQU5EX1NJTkdMRV9SSUdIVFwiO1xuICAgIENoYXJzW0NoYXJzW1wiQkxPQ0tfRlVMTFwiXSA9IDIxOV0gPSBcIkJMT0NLX0ZVTExcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJMT0NLX0JPVFRPTV9IQUxGXCJdID0gMjIwXSA9IFwiQkxPQ0tfQk9UVE9NX0hBTEZcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJMT0NLX0xFRlRfSEFMRlwiXSA9IDIyMV0gPSBcIkJMT0NLX0xFRlRfSEFMRlwiO1xuICAgIENoYXJzW0NoYXJzW1wiQkxPQ0tfUklHSFRfSEFMRlwiXSA9IDIyMl0gPSBcIkJMT0NLX1JJR0hUX0hBTEZcIjtcbiAgICBDaGFyc1tDaGFyc1tcIkJMT0NLX1RPUF9IQUxGXCJdID0gMjIzXSA9IFwiQkxPQ0tfVE9QX0hBTEZcIjtcbn0pKENoYXJzIHx8IChDaGFycyA9IHt9KSk7XG5cbmxldCBDb25zb2xlID0gY2xhc3MgQ29uc29sZSB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgYmxvY2tlZEZ1bmMpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5ncmlkID0gW107XG4gICAgICAgIHRoaXMub3JpZ2luWCA9IDA7XG4gICAgICAgIHRoaXMub3JpZ2luWSA9IDA7XG4gICAgICAgIHRoaXMubWluWCA9IDA7XG4gICAgICAgIHRoaXMubWF4WCA9IDA7XG4gICAgICAgIHRoaXMubWluWSA9IDA7XG4gICAgICAgIHRoaXMubWF4WSA9IDA7XG4gICAgICAgIHRoaXMucmFkaXVzID0gMDtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgQ2VsbCh4LCB5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdyaWQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgaWYgKGJsb2NrZWRGdW5jKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFt5XVt4XS5ibG9ja2VkID0gdGhpcy5ncmlkW3ldW3hdLmJsb2NrZWRTaWdodCA9IGJsb2NrZWRGdW5jKHgsIHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NoYXIoeCwgeSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2VsbCh4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID49IHRoaXMud2lkdGggfHwgeSA+PSB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkW3ldW3hdO1xuICAgIH1cbiAgICBnZXRDaGFyQ29kZSh4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID49IHRoaXMud2lkdGggfHwgeSA+PSB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkW3ldW3hdLmNoYXJDb2RlO1xuICAgIH1cbiAgICBkcmF3Q2hhcih4LCB5LCBjLCBmZywgYmcpIHtcbiAgICAgICAgaWYgKHggPj0gMCAmJiB4IDwgdGhpcy53aWR0aCAmJiB5ID49IDAgJiYgeSA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbeSB8IDBdW3ggfCAwXS5zZXRWYWx1ZShjLCBmZywgYmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdTdHJpbmcoeCwgeSwgc3RyLCBmZywgYmcpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaGFyKHggKyBqLCB5ICsgaSwgbGluZS5jaGFyQ29kZUF0KGopLCBmZywgYmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdDZW50ZXJlZFN0cmluZyh4LCB5LCBzdHIsIGZnLCBiZykge1xuICAgICAgICB0aGlzLmRyYXdTdHJpbmcoeCAtIE1hdGguZmxvb3Ioc3RyLmxlbmd0aCAvIDIpLCB5LCBzdHIsIGZnLCBiZyk7XG4gICAgfVxuICAgIGRyYXdITGluZSh4LCB5LCB3aWR0aCwgYywgZmcsIGJnKSB7XG4gICAgICAgIGZvciAobGV0IHhpID0geDsgeGkgPCB4ICsgd2lkdGg7IHhpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXIoeGksIHksIGMsIGZnLCBiZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd1ZMaW5lKHgsIHksIGhlaWdodCwgYywgZmcsIGJnKSB7XG4gICAgICAgIGZvciAobGV0IHlpID0geTsgeWkgPCB5ICsgaGVpZ2h0OyB5aSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdDaGFyKHgsIHlpLCBjLCBmZywgYmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGMsIGZnLCBiZykge1xuICAgICAgICB0aGlzLmRyYXdITGluZSh4LCB5LCB3aWR0aCwgYywgZmcsIGJnKTtcbiAgICAgICAgdGhpcy5kcmF3SExpbmUoeCwgeSArIGhlaWdodCAtIDEsIHdpZHRoLCBjLCBmZywgYmcpO1xuICAgICAgICB0aGlzLmRyYXdWTGluZSh4LCB5LCBoZWlnaHQsIGMsIGZnLCBiZyk7XG4gICAgICAgIHRoaXMuZHJhd1ZMaW5lKHggKyB3aWR0aCAtIDEsIHksIGhlaWdodCwgYywgZmcsIGJnKTtcbiAgICB9XG4gICAgZHJhd0JveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0b3BDaGFyLCByaWdodENoYXIsIGJvdHRvbUNoYXIsIGxlZnRDaGFyLCB0b3BMZWZ0Q2hhciwgdG9wUmlnaHRDaGFyLCBib3R0b21SaWdodENoYXIsIGJvdHRvbUxlZnRDaGFyLCBmZywgYmcpIHtcbiAgICAgICAgdGhpcy5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAwLCBmZywgYmcpO1xuICAgICAgICB0aGlzLmRyYXdITGluZSh4LCB5LCB3aWR0aCwgdG9wQ2hhcik7XG4gICAgICAgIHRoaXMuZHJhd0hMaW5lKHgsIHkgKyBoZWlnaHQgLSAxLCB3aWR0aCwgYm90dG9tQ2hhcik7XG4gICAgICAgIHRoaXMuZHJhd1ZMaW5lKHgsIHksIGhlaWdodCwgbGVmdENoYXIpO1xuICAgICAgICB0aGlzLmRyYXdWTGluZSh4ICsgd2lkdGggLSAxLCB5LCBoZWlnaHQsIHJpZ2h0Q2hhcik7XG4gICAgICAgIHRoaXMuZHJhd0NoYXIoeCwgeSwgdG9wTGVmdENoYXIpO1xuICAgICAgICB0aGlzLmRyYXdDaGFyKHggKyB3aWR0aCAtIDEsIHksIHRvcFJpZ2h0Q2hhcik7XG4gICAgICAgIHRoaXMuZHJhd0NoYXIoeCwgeSArIGhlaWdodCAtIDEsIGJvdHRvbUxlZnRDaGFyKTtcbiAgICAgICAgdGhpcy5kcmF3Q2hhcih4ICsgd2lkdGggLSAxLCB5ICsgaGVpZ2h0IC0gMSwgYm90dG9tUmlnaHRDaGFyKTtcbiAgICB9XG4gICAgZHJhd1NpbmdsZUJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmZywgYmcpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQsIENoYXJzLkJPWF9TSU5HTEVfSE9SSVpPTlRBTCwgQ2hhcnMuQk9YX1NJTkdMRV9WRVJUSUNBTCwgQ2hhcnMuQk9YX1NJTkdMRV9IT1JJWk9OVEFMLCBDaGFycy5CT1hfU0lOR0xFX1ZFUlRJQ0FMLCBDaGFycy5CT1hfU0lOR0xFX0RPV05fQU5EX1NJTkdMRV9SSUdIVCwgQ2hhcnMuQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfTEVGVCwgQ2hhcnMuQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX0xFRlQsIENoYXJzLkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9SSUdIVCwgZmcsIGJnKTtcbiAgICB9XG4gICAgZHJhd0RvdWJsZUJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmZywgYmcpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQsIENoYXJzLkJPWF9ET1VCTEVfSE9SSVpPTlRBTCwgQ2hhcnMuQk9YX0RPVUJMRV9WRVJUSUNBTCwgQ2hhcnMuQk9YX0RPVUJMRV9IT1JJWk9OVEFMLCBDaGFycy5CT1hfRE9VQkxFX1ZFUlRJQ0FMLCBDaGFycy5CT1hfRE9VQkxFX0RPV05fQU5EX0RPVUJMRV9SSUdIVCwgQ2hhcnMuQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfTEVGVCwgQ2hhcnMuQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX0xFRlQsIENoYXJzLkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9SSUdIVCwgZmcsIGJnKTtcbiAgICB9XG4gICAgZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgYywgZmcsIGJnKSB7XG4gICAgICAgIGZvciAobGV0IHlpID0geTsgeWkgPCB5ICsgaGVpZ2h0OyB5aSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdITGluZSh4LCB5aSwgd2lkdGgsIGMsIGZnLCBiZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd0NvbnNvbGUoZHN0WCwgZHN0WSwgc3JjQ29uc29sZSwgc3JjWCwgc3JjWSwgc3JjV2lkdGgsIHNyY0hlaWdodCwgYmxlbmRNb2RlKSB7XG4gICAgICAgIGJsZW5kTW9kZSA9IGJsZW5kTW9kZSB8fCBCbGVuZE1vZGUuTm9uZTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzcmNIZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzcmNXaWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHNyY0NvbnNvbGUuZ2V0Q2VsbChzcmNYICsgeCwgc3JjWSArIHkpO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NlbGwoZHN0WCArIHgsIGRzdFkgKyB5LCBjZWxsLCBibGVuZE1vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3Q2VsbCh4LCB5LCBjZWxsLCBibGVuZE1vZGUpIHtcbiAgICAgICAgaWYgKHggPj0gMCAmJiB4IDwgdGhpcy53aWR0aCAmJiB5ID49IDAgJiYgeSA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbeV1beF0uZHJhd0NlbGwoY2VsbCwgYmxlbmRNb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRCbG9ja2VkKHgsIHksIGJsb2NrZWQpIHtcbiAgICAgICAgaWYgKHggPj0gMCAmJiB4IDwgdGhpcy53aWR0aCAmJiB5ID49IDAgJiYgeSA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbeV1beF0uYmxvY2tlZCA9IGJsb2NrZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0QmxvY2tlZFNpZ2h0KHgsIHksIGJsb2NrZWRTaWdodCkge1xuICAgICAgICBpZiAoeCA+PSAwICYmIHggPCB0aGlzLndpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt5XVt4XS5ibG9ja2VkU2lnaHQgPSBibG9ja2VkU2lnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNWaXNpYmxlKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPCB0aGlzLm1pblggfHwgeCA+IHRoaXMubWF4WCB8fCB5IDwgdGhpcy5taW5ZIHx8IHkgPiB0aGlzLm1heFkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkW3ldW3hdLnZpc2libGU7XG4gICAgfVxuICAgIGlzQmxvY2tlZCh4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgMCB8fCB4ID4gdGhpcy53aWR0aCB8fCB5IDwgMCB8fCB5ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRbeV1beF0uYmxvY2tlZDtcbiAgICB9XG4gICAgaXNCbG9ja2VkU2lnaHQoeCwgeSkge1xuICAgICAgICBpZiAoeCA8IDAgfHwgeCA+IHRoaXMud2lkdGggfHwgeSA8IDAgfHwgeSA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkW3ldW3hdLmJsb2NrZWRTaWdodDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgRk9WIGluIGFuIG9jdGFudCBhZGphY2VudCB0byB0aGUgWSBheGlzXG4gICAgICovXG4gICAgY29tcHV0ZU9jdGFudFkoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRTbG9wZXMgPSBbXTtcbiAgICAgICAgY29uc3QgZW5kU2xvcGVzID0gW107XG4gICAgICAgIGxldCBpdGVyYXRpb24gPSAxO1xuICAgICAgICBsZXQgdG90YWxPYnN0YWNsZXMgPSAwO1xuICAgICAgICBsZXQgb2JzdGFjbGVzSW5MYXN0TGluZSA9IDA7XG4gICAgICAgIGxldCBtaW5TbG9wZSA9IDA7XG4gICAgICAgIGxldCB4O1xuICAgICAgICBsZXQgeTtcbiAgICAgICAgbGV0IGhhbGZTbG9wZTtcbiAgICAgICAgbGV0IHByb2Nlc3NlZENlbGw7XG4gICAgICAgIGxldCB2aXNpYmxlO1xuICAgICAgICBsZXQgZXh0ZW5kZWQ7XG4gICAgICAgIGxldCBjZW50cmVTbG9wZTtcbiAgICAgICAgbGV0IHN0YXJ0U2xvcGU7XG4gICAgICAgIGxldCBlbmRTbG9wZTtcbiAgICAgICAgbGV0IHByZXZpb3VzRW5kU2xvcGU7XG4gICAgICAgIGZvciAoeSA9IHRoaXMub3JpZ2luWSArIGRlbHRhWTsgeSA+PSB0aGlzLm1pblkgJiYgeSA8PSB0aGlzLm1heFk7IHkgKz0gZGVsdGFZLCBvYnN0YWNsZXNJbkxhc3RMaW5lID0gdG90YWxPYnN0YWNsZXMsICsraXRlcmF0aW9uKSB7XG4gICAgICAgICAgICBoYWxmU2xvcGUgPSAwLjUgLyBpdGVyYXRpb247XG4gICAgICAgICAgICBwcmV2aW91c0VuZFNsb3BlID0gLTE7XG4gICAgICAgICAgICBmb3IgKHByb2Nlc3NlZENlbGwgPSBNYXRoLmZsb29yKG1pblNsb3BlICogaXRlcmF0aW9uICsgMC41KSwgeCA9IHRoaXMub3JpZ2luWCArIHByb2Nlc3NlZENlbGwgKiBkZWx0YVg7IHByb2Nlc3NlZENlbGwgPD0gaXRlcmF0aW9uICYmIHggPj0gdGhpcy5taW5YICYmIHggPD0gdGhpcy5tYXhYOyB4ICs9IGRlbHRhWCwgKytwcm9jZXNzZWRDZWxsLCBwcmV2aW91c0VuZFNsb3BlID0gZW5kU2xvcGUpIHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBleHRlbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNlbnRyZVNsb3BlID0gcHJvY2Vzc2VkQ2VsbCAvIGl0ZXJhdGlvbjtcbiAgICAgICAgICAgICAgICBzdGFydFNsb3BlID0gcHJldmlvdXNFbmRTbG9wZTtcbiAgICAgICAgICAgICAgICBlbmRTbG9wZSA9IGNlbnRyZVNsb3BlICsgaGFsZlNsb3BlO1xuICAgICAgICAgICAgICAgIGlmIChvYnN0YWNsZXNJbkxhc3RMaW5lID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmdyaWRbeSAtIGRlbHRhWV1beF0udmlzaWJsZSAmJiAhdGhpcy5ncmlkW3kgLSBkZWx0YVldW3hdLmJsb2NrZWRTaWdodCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICEodGhpcy5ncmlkW3kgLSBkZWx0YVldW3ggLSBkZWx0YVhdLnZpc2libGUgJiYgIXRoaXMuZ3JpZFt5IC0gZGVsdGFZXVt4IC0gZGVsdGFYXS5ibG9ja2VkU2lnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBvYnN0YWNsZXNJbkxhc3RMaW5lICYmIHZpc2libGU7ICsraWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0U2xvcGUgPD0gZW5kU2xvcGVzW2lkeF0gJiYgZW5kU2xvcGUgPj0gc3RhcnRTbG9wZXNbaWR4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ3JpZFt5XVt4XS5ibG9ja2VkU2lnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZW50cmVTbG9wZSA+IHN0YXJ0U2xvcGVzW2lkeF0gJiYgY2VudHJlU2xvcGUgPCBlbmRTbG9wZXNbaWR4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFNsb3BlID49IHN0YXJ0U2xvcGVzW2lkeF0gJiYgZW5kU2xvcGUgPD0gZW5kU2xvcGVzW2lkeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFNsb3Blc1tpZHhdID0gTWF0aC5taW4oc3RhcnRTbG9wZXNbaWR4XSwgc3RhcnRTbG9wZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kU2xvcGVzW2lkeF0gPSBNYXRoLm1heChlbmRTbG9wZXNbaWR4XSwgZW5kU2xvcGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbeV1beF0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbeV1beF0uYmxvY2tlZFNpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWluU2xvcGUgPj0gc3RhcnRTbG9wZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblNsb3BlID0gZW5kU2xvcGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghZXh0ZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFNsb3Blc1t0b3RhbE9ic3RhY2xlc10gPSBzdGFydFNsb3BlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZFNsb3Blc1t0b3RhbE9ic3RhY2xlcysrXSA9IGVuZFNsb3BlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgdGhlIEZPViBpbiBhbiBvY3RhbnQgYWRqYWNlbnQgdG8gdGhlIFggYXhpc1xuICAgICAqL1xuICAgIGNvbXB1dGVPY3RhbnRYKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0U2xvcGVzID0gW107XG4gICAgICAgIGNvbnN0IGVuZFNsb3BlcyA9IFtdO1xuICAgICAgICBsZXQgaXRlcmF0aW9uID0gMTtcbiAgICAgICAgbGV0IHRvdGFsT2JzdGFjbGVzID0gMDtcbiAgICAgICAgbGV0IG9ic3RhY2xlc0luTGFzdExpbmUgPSAwO1xuICAgICAgICBsZXQgbWluU2xvcGUgPSAwO1xuICAgICAgICBsZXQgeDtcbiAgICAgICAgbGV0IHk7XG4gICAgICAgIGxldCBoYWxmU2xvcGU7XG4gICAgICAgIGxldCBwcm9jZXNzZWRDZWxsO1xuICAgICAgICBsZXQgdmlzaWJsZTtcbiAgICAgICAgbGV0IGV4dGVuZGVkO1xuICAgICAgICBsZXQgY2VudHJlU2xvcGU7XG4gICAgICAgIGxldCBzdGFydFNsb3BlO1xuICAgICAgICBsZXQgZW5kU2xvcGU7XG4gICAgICAgIGxldCBwcmV2aW91c0VuZFNsb3BlO1xuICAgICAgICBmb3IgKHggPSB0aGlzLm9yaWdpblggKyBkZWx0YVg7IHggPj0gdGhpcy5taW5YICYmIHggPD0gdGhpcy5tYXhYOyB4ICs9IGRlbHRhWCwgb2JzdGFjbGVzSW5MYXN0TGluZSA9IHRvdGFsT2JzdGFjbGVzLCArK2l0ZXJhdGlvbikge1xuICAgICAgICAgICAgaGFsZlNsb3BlID0gMC41IC8gaXRlcmF0aW9uO1xuICAgICAgICAgICAgcHJldmlvdXNFbmRTbG9wZSA9IC0xO1xuICAgICAgICAgICAgZm9yIChwcm9jZXNzZWRDZWxsID0gTWF0aC5mbG9vcihtaW5TbG9wZSAqIGl0ZXJhdGlvbiArIDAuNSksIHkgPSB0aGlzLm9yaWdpblkgKyBwcm9jZXNzZWRDZWxsICogZGVsdGFZOyBwcm9jZXNzZWRDZWxsIDw9IGl0ZXJhdGlvbiAmJiB5ID49IHRoaXMubWluWSAmJiB5IDw9IHRoaXMubWF4WTsgeSArPSBkZWx0YVksICsrcHJvY2Vzc2VkQ2VsbCwgcHJldmlvdXNFbmRTbG9wZSA9IGVuZFNsb3BlKSB7XG4gICAgICAgICAgICAgICAgdmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXh0ZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjZW50cmVTbG9wZSA9IHByb2Nlc3NlZENlbGwgLyBpdGVyYXRpb247XG4gICAgICAgICAgICAgICAgc3RhcnRTbG9wZSA9IHByZXZpb3VzRW5kU2xvcGU7XG4gICAgICAgICAgICAgICAgZW5kU2xvcGUgPSBjZW50cmVTbG9wZSArIGhhbGZTbG9wZTtcbiAgICAgICAgICAgICAgICBpZiAob2JzdGFjbGVzSW5MYXN0TGluZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5ncmlkW3ldW3ggLSBkZWx0YVhdLnZpc2libGUgJiYgIXRoaXMuZ3JpZFt5XVt4IC0gZGVsdGFYXS5ibG9ja2VkU2lnaHQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhKHRoaXMuZ3JpZFt5IC0gZGVsdGFZXVt4IC0gZGVsdGFYXS52aXNpYmxlICYmICF0aGlzLmdyaWRbeSAtIGRlbHRhWV1beCAtIGRlbHRhWF0uYmxvY2tlZFNpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgb2JzdGFjbGVzSW5MYXN0TGluZSAmJiB2aXNpYmxlOyArK2lkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFNsb3BlIDw9IGVuZFNsb3Blc1tpZHhdICYmIGVuZFNsb3BlID49IHN0YXJ0U2xvcGVzW2lkeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdyaWRbeV1beF0uYmxvY2tlZFNpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VudHJlU2xvcGUgPiBzdGFydFNsb3Blc1tpZHhdICYmIGNlbnRyZVNsb3BlIDwgZW5kU2xvcGVzW2lkeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRTbG9wZSA+PSBzdGFydFNsb3Blc1tpZHhdICYmIGVuZFNsb3BlIDw9IGVuZFNsb3Blc1tpZHhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRTbG9wZXNbaWR4XSA9IE1hdGgubWluKHN0YXJ0U2xvcGVzW2lkeF0sIHN0YXJ0U2xvcGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZFNsb3Blc1tpZHhdID0gTWF0aC5tYXgoZW5kU2xvcGVzW2lkeF0sIGVuZFNsb3BlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkW3ldW3hdLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW3ldW3hdLmJsb2NrZWRTaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pblNsb3BlID49IHN0YXJ0U2xvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5TbG9wZSA9IGVuZFNsb3BlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWV4dGVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRTbG9wZXNbdG90YWxPYnN0YWNsZXNdID0gc3RhcnRTbG9wZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRTbG9wZXNbdG90YWxPYnN0YWNsZXMrK10gPSBlbmRTbG9wZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlRm92KG9yaWdpblgsIG9yaWdpblksIHJhZGl1cywgb3B0X25vQ2xlYXIsIG9wdF9vY3RhbnRzKSB7XG4gICAgICAgIHRoaXMub3JpZ2luWCA9IG9yaWdpblg7XG4gICAgICAgIHRoaXMub3JpZ2luWSA9IG9yaWdpblk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICBpZiAob3B0X25vQ2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMubWluWCA9IE1hdGgubWluKHRoaXMubWluWCwgTWF0aC5tYXgoMCwgb3JpZ2luWCAtIHJhZGl1cykpO1xuICAgICAgICAgICAgdGhpcy5taW5ZID0gTWF0aC5taW4odGhpcy5taW5ZLCBNYXRoLm1heCgwLCBvcmlnaW5ZIC0gcmFkaXVzKSk7XG4gICAgICAgICAgICB0aGlzLm1heFggPSBNYXRoLm1heCh0aGlzLm1heFgsIE1hdGgubWluKHRoaXMud2lkdGggLSAxLCBvcmlnaW5YICsgcmFkaXVzKSk7XG4gICAgICAgICAgICB0aGlzLm1heFkgPSBNYXRoLm1heCh0aGlzLm1heFksIE1hdGgubWluKHRoaXMuaGVpZ2h0IC0gMSwgb3JpZ2luWSArIHJhZGl1cykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taW5YID0gTWF0aC5tYXgoMCwgb3JpZ2luWCAtIHJhZGl1cyk7XG4gICAgICAgICAgICB0aGlzLm1pblkgPSBNYXRoLm1heCgwLCBvcmlnaW5ZIC0gcmFkaXVzKTtcbiAgICAgICAgICAgIHRoaXMubWF4WCA9IE1hdGgubWluKHRoaXMud2lkdGggLSAxLCBvcmlnaW5YICsgcmFkaXVzKTtcbiAgICAgICAgICAgIHRoaXMubWF4WSA9IE1hdGgubWluKHRoaXMuaGVpZ2h0IC0gMSwgb3JpZ2luWSArIHJhZGl1cyk7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5taW5ZOyB5IDw9IHRoaXMubWF4WTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMubWluWDsgeCA8PSB0aGlzLm1heFg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbeV1beF0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWRbb3JpZ2luWV1bb3JpZ2luWF0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChvcHRfb2N0YW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVPY3RhbnRZKDEsIDEpO1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlT2N0YW50WCgxLCAxKTtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZU9jdGFudFgoMSwgLTEpO1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlT2N0YW50WSgxLCAtMSk7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVPY3RhbnRZKC0xLCAtMSk7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVPY3RhbnRYKC0xLCAtMSk7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVPY3RhbnRYKC0xLCAxKTtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZU9jdGFudFkoLTEsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gICBcXCA0IHwgMyAvXG4gICAgICAgICAgICAvLyAgICBcXCAgfCAgL1xuICAgICAgICAgICAgLy8gIDUgIFxcIHwgLyAgMlxuICAgICAgICAgICAgLy8gICAgICBcXHwvXG4gICAgICAgICAgICAvLyAtLS0tLS0rLS0tLS0tLVxuICAgICAgICAgICAgLy8gICAgICAvfFxcXG4gICAgICAgICAgICAvLyAgNiAgLyB8IFxcICAxXG4gICAgICAgICAgICAvLyAgICAvICB8ICBcXFxuICAgICAgICAgICAgLy8gICAvIDcgfCAwIFxcXG4gICAgICAgICAgICBpZiAob3B0X29jdGFudHMgJiAweDAwMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZU9jdGFudFkoMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0X29jdGFudHMgJiAweDAwMikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZU9jdGFudFgoMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0X29jdGFudHMgJiAweDAwNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZU9jdGFudFgoMSwgLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdF9vY3RhbnRzICYgMHgwMDgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVPY3RhbnRZKDEsIC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRfb2N0YW50cyAmIDB4MDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlT2N0YW50WSgtMSwgLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdF9vY3RhbnRzICYgMHgwMjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVPY3RhbnRYKC0xLCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0X29jdGFudHMgJiAweDA0MCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZU9jdGFudFgoLTEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdF9vY3RhbnRzICYgMHgwODApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVPY3RhbnRZKC0xLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGwgdmlzaWJsZSB0aWxlcyBhcmUgbWFya2VkIGFzIGV4cGxvcmVkLlxuICAgICAqL1xuICAgIHVwZGF0ZUV4cGxvcmVkKCkge1xuICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5taW5ZOyB5IDw9IHRoaXMubWF4WTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5taW5YOyB4IDw9IHRoaXMubWF4WDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRoaXMuZ3JpZFt5XVt4XTtcbiAgICAgICAgICAgICAgICB0aWxlLmV4cGxvcmVkID0gdGlsZS5leHBsb3JlZCB8fCB0aWxlLnZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuQ29uc29sZSA9IF9fZGVjb3JhdGUoW1xuICAgIHNlcmlhbGl6YWJsZVxuXSwgQ29uc29sZSk7XG5cbmNsYXNzIEZvbnQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgY2hhcldpZHRoLCBjaGFySGVpZ2h0LCBzY2FsZSwgZ3JhcGhpY2FsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmNoYXJXaWR0aCA9IGNoYXJXaWR0aDtcbiAgICAgICAgdGhpcy5jaGFySGVpZ2h0ID0gY2hhckhlaWdodDtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgICAgICAgdGhpcy5ncmFwaGljYWwgPSAhIWdyYXBoaWNhbDtcbiAgICB9XG59XG4vKipcbiAqIEZvbnQgaW1hZ2UgYXMgZGF0YSBVUkwuXG4gKiBJQk0gdGVybWluYWwgZm9udC5cbiAqIFNlZSBpbWcvZm9udC5wbmcuXG4gKi9cbmNvbnN0IEZPTlRfSU1BR0UgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQVEnICtcbiAgICAnTUFBQUQ1OFBPSUFBQUFCbEJNVkVVQUFBRC8vLytsMlovZEFBQUVoa2xFUVZSSXg0MlN2NG9VUVJER0M0VXphZFN3d01VRDgnICtcbiAgICAnUUVLbGJXRDRRNThCL05HcFRWb2NLTzF3WEhVek1BSDBBY3dNVFlWR2c1YWcwSXpFWGFSamRaRVpLTnprS2JIcXRuekh5cFknICtcbiAgICAnMDlNOSs1dXZxcjdwYllDdUM2ZnRhUmhnT05YczMwZUFoME8xcllEbTRJUy9lSDBCOEd4UlcydnhvMzk2eXUvZmIwWkZyVzEnICtcbiAgICAnemNPWGxQVS9YUHdLOFBHamJXaFZ3TTRLbkg2MTkxMm9LNCt6bW1ISmFRb3R5dDFrdnRDMkF0ZG8yNGlvaFBEaUcvdjRlSUMnICtcbiAgICAnSnNZM1d5OFl2cjBEU0lCT2R4Z0g2djh3c3JpV2hjOHMwQXRhSy9HelNsMWpSMG5TalFud2tpNkZReE5GS2pnek8yYTdCQnEnICtcbiAgICAndWNIN2RMNE05ejk2Q0loVDFGcy9BZ0tnY0E2ZEtDeEkyOURhSE53Uko0RUdBVTFzVTBPRzlybUU0U0ljM0E0RkNoQUNxcWgnICtcbiAgICAnSlJ3cHhrcWg5d3hhZzREU21FSjVEdHBGd0FQNEdVZjZsbUtjRkZ0aTFCWXVRcDR4TjhreE0ya05oamRrVE9pVFVlQUtHdmgnICtcbiAgICAnQTFyTHBNYllBQ1F6Q0lUbFREUk1iTFlvRWEySldQU01SRlpJdXBjU3pNVktjRVVrWCtzT0crQ2hOWDJ2RDhleDZrN09GSEwnICtcbiAgICAnMFAxNjU1SnVQZDUzV0FEK3lUdjNVckNRaXVIbVlCYmZJeHBrSW11dnBCUUJrVmI1ZzRYSHYzSmtOaXJlRzhBTzl6RGhCWnUnICtcbiAgICAnMnoyT01aMTFTNS9SSWx5TWVmTU5hWjRHc0N6NXhjanlNNmhIWUVqQVlFZk84SWcxcmtsQWU5c1JJZVlBZHd5b0lCcTZZSXonICtcbiAgICAnQ0FLaVdvaWZBM20zbzJBeldjZFlLT2RZNDdFSWY4UUFCQ3VZZ0lVVm1kVk1FWUVEQTBIbW8vM0Q2S0tKYmg1bXhoUDNVc1cnICtcbiAgICAnSUU5N3duRXlneWl6T2ZPTGkySk9KVzhDZU9ibFc5SUhlS1pndjR6eHV6RHJ5T21iKzRhUUgrTVhWNmUweXdkVWN4cUNqQlcnICtcbiAgICAnbDVHcGJ6WmR1T0cxUUVpR1hQODZUN0VmaUpma01RNE9PNEgweXF5TkMyemx6aVdFTjdZd3VjMmZRNHA1Qk5rUzVRWVhQMmgnICtcbiAgICAnNU50UkpoMHZDS1FpZHRWSm1DR0F3RFNTUXBZZ2dTeGlSSXl6ZXdzZ0NoNHh4aVRQRE1oNWFqLy9sN2J0cWtyNnJReUlPdEwnICtcbiAgICAnamk0bFZSUXdYZHp2dXM0MFk1M00zM2ZoNTBHWndGNEV4UWVNbHZ1VGdnTHpTaTRFbEtjelVPN3pWdHB3ZHlNS2RxWktPV2InICtcbiAgICAnMm5EYmxhd1B4UG11TXdGRVdCVytqbFpSMWVZdFM0NDJraUJHTVdDaS9oMS8rR0FSNk5ZT0pXaXFOSlhGeWdGdHJreDVDME8nICtcbiAgICAnM0llRkdzNjdIaEVFaG1CdS9CVU9UKzA1NTFwWHhZSUYrRWxwaTVBS1JrTGw1R1ViQ0NaZGR5TXY2MjF1akVCUFA0dlN5MmYnICtcbiAgICAnb3RUeDNVK2QzV0JpRk9BNlZTR1NCNDl2L003R0JYOUZQckRhVDJjOXFyNFBDcHdaN3F6ODEzUjk0ZFZGSWUxOXYzM0dsTVonICtcbiAgICAnVWdoUUZiOEJyZkU3UUJtZ0JNYnJuMkIzZW5uL3kzQjUrREw4VUJBZG5lamRZZEJ4ZVY5ZWp3b1lOVGdXME9rL2dBN1VHMkcnICtcbiAgICAnQXphbmhMMERHN3E0c3Z5bndGOFV3RFB1N3UvdkQwSXVkelNsdE10VmJQK0ovZ1ViUjI5b0o3Rmc5czZVeStEbnBpVENPWWMnICtcbiAgICAnNGNYT2VYTVdmc3VzU3c3Rk9nOXg2NTVuYXg2QmxlY3dwT1FRNjhXQndwK0gyTE1RVHVPcTJSVWlnemgyUS9SM0NXQVJKSUonICtcbiAgICAnRzE5OUV3T1R5S0JsUU16bnNoQ1JHZVE1Z0hBQkFRbDZNNGdMRWRBelZhQldNQ2lBTmRzYXlEQ0hCQS9oYWdLWWZpZWxySkknICtcbiAgICAnbGlwS0tRSUE5TmYzd0Jsb1RIVDZCdUF4MTV6Uk5hMW5BQUFBQUVsRlRrU3VRbUNDJztcbmNvbnN0IERFRkFVTFRfRk9OVCA9IG5ldyBGb250KEZPTlRfSU1BR0UsIDgsIDgpO1xuXG4vKipcbiAqIFRoZSBGb3ZPY3RhbnRzIGNvbnN0YW50cyBwcm92aWRlIGJpdG1hc2tzIGZvciB2YXJpb3VzIGRpcmVjdGlvbnMuXG4gKlxuICogICAgIFxcIDQgfCAzIC9cbiAqICAgICAgXFwgIHwgIC9cbiAqICAgIDUgIFxcIHwgLyAgMlxuICogICAgICAgIFxcfC9cbiAqICAgLS0tLS0tKy0tLS0tLS1cbiAqICAgICAgICAvfFxcXG4gKiAgICA2ICAvIHwgXFwgIDFcbiAqICAgICAgLyAgfCAgXFxcbiAqICAgICAvIDcgfCAwIFxcXG4gKlxuICovXG52YXIgRm92T2N0YW50cztcbihmdW5jdGlvbiAoRm92T2N0YW50cykge1xuICAgIEZvdk9jdGFudHNbRm92T2N0YW50c1tcIk9DVEFOVF9TT1VUSF9TT1VUSEVBU1RcIl0gPSAxXSA9IFwiT0NUQU5UX1NPVVRIX1NPVVRIRUFTVFwiO1xuICAgIEZvdk9jdGFudHNbRm92T2N0YW50c1tcIk9DVEFOVF9FQVNUX1NPVVRIRUFTVFwiXSA9IDJdID0gXCJPQ1RBTlRfRUFTVF9TT1VUSEVBU1RcIjtcbiAgICBGb3ZPY3RhbnRzW0Zvdk9jdGFudHNbXCJPQ1RBTlRfRUFTVF9OT1JUSFRIRUFTVFwiXSA9IDRdID0gXCJPQ1RBTlRfRUFTVF9OT1JUSFRIRUFTVFwiO1xuICAgIEZvdk9jdGFudHNbRm92T2N0YW50c1tcIk9DVEFOVF9OT1JUSF9OT1JUSEVBU1RcIl0gPSA4XSA9IFwiT0NUQU5UX05PUlRIX05PUlRIRUFTVFwiO1xuICAgIEZvdk9jdGFudHNbRm92T2N0YW50c1tcIk9DVEFOVF9OT1JUSF9OT1JUSFdFU1RcIl0gPSAxNl0gPSBcIk9DVEFOVF9OT1JUSF9OT1JUSFdFU1RcIjtcbiAgICBGb3ZPY3RhbnRzW0Zvdk9jdGFudHNbXCJPQ1RBTlRfV0VTVF9OT1JUSEVBU1RcIl0gPSAzMl0gPSBcIk9DVEFOVF9XRVNUX05PUlRIRUFTVFwiO1xuICAgIEZvdk9jdGFudHNbRm92T2N0YW50c1tcIk9DVEFOVF9XRVNUX1NPVVRIV0VTVFwiXSA9IDY0XSA9IFwiT0NUQU5UX1dFU1RfU09VVEhXRVNUXCI7XG4gICAgRm92T2N0YW50c1tGb3ZPY3RhbnRzW1wiT0NUQU5UX1NPVVRIX1NPVVRIV0VTVFwiXSA9IDEyOF0gPSBcIk9DVEFOVF9TT1VUSF9TT1VUSFdFU1RcIjtcbn0pKEZvdk9jdGFudHMgfHwgKEZvdk9jdGFudHMgPSB7fSkpO1xudmFyIEZvdlF1YWRyYW50cztcbihmdW5jdGlvbiAoRm92UXVhZHJhbnRzKSB7XG4gICAgRm92UXVhZHJhbnRzW0ZvdlF1YWRyYW50c1tcIlFVQURSQU5UX1NPVVRIRUFTVFwiXSA9IDNdID0gXCJRVUFEUkFOVF9TT1VUSEVBU1RcIjtcbiAgICBGb3ZRdWFkcmFudHNbRm92UXVhZHJhbnRzW1wiUVVBRFJBTlRfRUFTVFwiXSA9IDZdID0gXCJRVUFEUkFOVF9FQVNUXCI7XG4gICAgRm92UXVhZHJhbnRzW0ZvdlF1YWRyYW50c1tcIlFVQURSQU5UX05PUlRIRUFTVFwiXSA9IDEyXSA9IFwiUVVBRFJBTlRfTk9SVEhFQVNUXCI7XG4gICAgRm92UXVhZHJhbnRzW0ZvdlF1YWRyYW50c1tcIlFVQURSQU5UX05PUlRIXCJdID0gMjRdID0gXCJRVUFEUkFOVF9OT1JUSFwiO1xuICAgIEZvdlF1YWRyYW50c1tGb3ZRdWFkcmFudHNbXCJRVUFEUkFOVF9OT1JUSFdFU1RcIl0gPSA0OF0gPSBcIlFVQURSQU5UX05PUlRIV0VTVFwiO1xuICAgIEZvdlF1YWRyYW50c1tGb3ZRdWFkcmFudHNbXCJRVUFEUkFOVF9XRVNUXCJdID0gOTZdID0gXCJRVUFEUkFOVF9XRVNUXCI7XG4gICAgRm92UXVhZHJhbnRzW0ZvdlF1YWRyYW50c1tcIlFVQURSQU5UX1NPVVRIV0VTVFwiXSA9IDE5Ml0gPSBcIlFVQURSQU5UX1NPVVRIV0VTVFwiO1xuICAgIEZvdlF1YWRyYW50c1tGb3ZRdWFkcmFudHNbXCJRVUFEUkFOVF9TT1VUSFwiXSA9IDEyOV0gPSBcIlFVQURSQU5UX1NPVVRIXCI7XG59KShGb3ZRdWFkcmFudHMgfHwgKEZvdlF1YWRyYW50cyA9IHt9KSk7XG5mdW5jdGlvbiBnZXRGb3ZRdWFkcmFudChkeCwgZHkpIHtcbiAgICBpZiAoZHggPiAwKSB7XG4gICAgICAgIGlmIChkeSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBGb3ZRdWFkcmFudHMuUVVBRFJBTlRfU09VVEhFQVNUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gRm92UXVhZHJhbnRzLlFVQURSQU5UX0VBU1Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gRm92UXVhZHJhbnRzLlFVQURSQU5UX05PUlRIRUFTVDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkeCA8IDApIHtcbiAgICAgICAgaWYgKGR5ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvdlF1YWRyYW50cy5RVUFEUkFOVF9TT1VUSFdFU1Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBGb3ZRdWFkcmFudHMuUVVBRFJBTlRfV0VTVDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBGb3ZRdWFkcmFudHMuUVVBRFJBTlRfTk9SVEhXRVNUO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZHkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gRm92UXVhZHJhbnRzLlFVQURSQU5UX1NPVVRIO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEZvdlF1YWRyYW50cy5RVUFEUkFOVF9OT1JUSDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IFBvaW50ID0gY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59O1xuUG9pbnQgPSBfX2RlY29yYXRlKFtcbiAgICBzZXJpYWxpemFibGVcbl0sIFBvaW50KTtcblxubGV0IFJlY3QgPSBjbGFzcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMubGVmdCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHRoaXMudG9wID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54MiA9IHggKyB3aWR0aDtcbiAgICAgICAgdGhpcy55MiA9IHkgKyBoZWlnaHQ7XG4gICAgfVxuICAgIGdldENlbnRlcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCgodGhpcy54ICsgdGhpcy53aWR0aCAvIDIpIHwgMCwgKHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMikgfCAwKTtcbiAgICB9XG4gICAgaW50ZXJzZWN0cyhvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy54IDw9IG90aGVyLngyICYmIHRoaXMueDIgPj0gb3RoZXIueCAmJiB0aGlzLnkgPD0gb3RoZXIueTIgJiYgdGhpcy55MiA+PSBvdGhlci55O1xuICAgIH1cbiAgICBjb250YWlucyhwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA+PSB0aGlzLnggJiYgcG9pbnQueCA8IHRoaXMueDIgJiYgcG9pbnQueSA+PSB0aGlzLnkgJiYgcG9pbnQueSA8IHRoaXMueTI7XG4gICAgfVxufTtcblJlY3QgPSBfX2RlY29yYXRlKFtcbiAgICBzZXJpYWxpemFibGVcbl0sIFJlY3QpO1xuXG5jbGFzcyBEaWFsb2dTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoZGlhbG9nLCByZWN0LCBjb250ZW50c09mZnNldCkge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IGRpYWxvZztcbiAgICAgICAgdGhpcy5yZWN0ID0gcmVjdDtcbiAgICAgICAgdGhpcy5jb250ZW50c09mZnNldCA9IGNvbnRlbnRzT2Zmc2V0O1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgfVxufVxuXG5jbGFzcyBEZWZhdWx0RGlhbG9nUmVuZGVyZXIge1xuICAgIGdldFN0YXRlKHRlcm1pbmFsLCBkaWFsb2cpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBkaWFsb2cuY29udGVudHNSZWN0LndpZHRoICsgNDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGlhbG9nLmNvbnRlbnRzUmVjdC5oZWlnaHQgKyA0O1xuICAgICAgICBjb25zdCB4ID0gKCh0ZXJtaW5hbC53aWR0aCAtIHdpZHRoKSAvIDIpIHwgMDtcbiAgICAgICAgY29uc3QgeSA9ICgodGVybWluYWwuaGVpZ2h0IC0gaGVpZ2h0KSAvIDIpIHwgMDtcbiAgICAgICAgcmV0dXJuIG5ldyBEaWFsb2dTdGF0ZShkaWFsb2csIG5ldyBSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpLCBuZXcgUG9pbnQoeCArIDIsIHkgKyAyKSk7XG4gICAgfVxuICAgIGRyYXcodGVybSwgZGlhbG9nU3RhdGUpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZGlhbG9nU3RhdGUuZGlhbG9nO1xuICAgICAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGRpYWxvZ1N0YXRlLnJlY3Q7XG4gICAgICAgIHRlcm0uZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgQ29sb3JzLldISVRFLCBDb2xvcnMuQkxBQ0spO1xuICAgICAgICB0ZXJtLmRyYXdTaW5nbGVCb3goeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRlcm0uZHJhd0NlbnRlcmVkU3RyaW5nKHggKyAod2lkdGggLyAyKSB8IDAsIHksICcgJyArIGRpYWxvZy50aXRsZSArICcgJyk7XG4gICAgICAgIGRpYWxvZy5kcmF3Q29udGVudHModGVybSwgZGlhbG9nU3RhdGUuY29udGVudHNPZmZzZXQpO1xuICAgIH1cbn1cblxuY2xhc3MgR1VJIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbCwgcmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy50ZXJtaW5hbCA9IHRlcm1pbmFsO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXIgfHwgbmV3IERlZmF1bHREaWFsb2dSZW5kZXJlcigpO1xuICAgICAgICB0aGlzLmRpYWxvZ3MgPSBbXTtcbiAgICB9XG4gICAgYWRkKGRpYWxvZykge1xuICAgICAgICB0aGlzLmRpYWxvZ3MucHVzaCh0aGlzLnJlbmRlcmVyLmdldFN0YXRlKHRoaXMudGVybWluYWwsIGRpYWxvZykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGlucHV0IGZvciBjdXJyZW50bHkgYWN0aXZlIGRpYWxvZy5cbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGlucHV0IHdhcyBoYW5kbGVkLlxuICAgICAqIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGhhbmRsZUlucHV0KCkge1xuICAgICAgICBpZiAodGhpcy5kaWFsb2dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5kaWFsb2dzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVN0YXRlID0gdGhpcy5kaWFsb2dzW3RoaXMuZGlhbG9ncy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgYWN0aXZlRGlhbG9nID0gYWN0aXZlU3RhdGUuZGlhbG9nO1xuICAgICAgICBpZiAoYWN0aXZlRGlhbG9nLmhhbmRsZUlucHV0KHRoaXMudGVybWluYWwsIGFjdGl2ZVN0YXRlLmNvbnRlbnRzT2Zmc2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dzLnNwbGljZShhY3RpdmVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaWFsb2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmRyYXcodGhpcy50ZXJtaW5hbCwgdGhpcy5kaWFsb2dzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgRGlhbG9nIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50c1JlY3QsIHRpdGxlKSB7XG4gICAgICAgIHRoaXMuY29udGVudHNSZWN0ID0gY29udGVudHNSZWN0O1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkZWxheSBpbiBmcmFtZXMgYmVmb3JlIGlucHV0IHJlcGVhdGluZy5cbiAqIFRpbWUgaW4gbWlsbGlzZWNvbmRzLlxuICovXG5jb25zdCBJTlBVVF9SRVBFQVRfREVMQVkgPSAyMDAuMDtcbi8qKlxuICogVGhlIGRlbGF5IGJldHdlZW4gc3Vic2VxdWVudCByZXBlYXQgZmlyaW5nLlxuICogVGltZSBpbiBtaWxsaXNlY29uZHMuXG4gKi9cbmNvbnN0IElOUFVUX1JFUEVBVF9SQVRFID0gMTAwMC4wIC8gMTUuMDtcbi8qKlxuICogVGhlIElucHV0IGNsYXNzIHJlcHJlc2VudHMgYSBweXNpY2FsIGlucHV0LlxuICogRXhhbXBsZToga2V5Ym9hcmQga2V5IG9yIG1vdXNlIGJ1dHRvbi5cbiAqL1xuY2xhc3MgSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duVGltZSA9IDA7XG4gICAgICAgIHRoaXMucmVwZWF0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVwZWF0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZG93bkNvdW50ID0gMDtcbiAgICAgICAgdGhpcy51cENvdW50ID0gMTAwO1xuICAgIH1cbiAgICBzZXREb3duKGRvd24pIHtcbiAgICAgICAgaWYgKHRoaXMuZG93biAhPT0gZG93bikge1xuICAgICAgICAgICAgdGhpcy5kb3duID0gZG93bjtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvd25UaW1lID0gdGhpcy5yZXBlYXRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZG93bikge1xuICAgICAgICAgICAgdGhpcy5kb3duQ291bnQrKztcbiAgICAgICAgICAgIHRoaXMudXBDb3VudCA9IDA7XG4gICAgICAgICAgICBpZiAodGltZSAtIHRoaXMuZG93blRpbWUgPj0gSU5QVVRfUkVQRUFUX0RFTEFZICYmIHRpbWUgLSB0aGlzLnJlcGVhdFRpbWUgPj0gSU5QVVRfUkVQRUFUX1JBVEUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBlYXRUaW1lID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG93bkNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMudXBDb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaW5wdXQgaXMgXCJwcmVzc2VkXCIuXG4gICAgICogUHJlc3NlZCBpcyBhIG9uZSB0aW1lIGV2ZW50IHdoZW4gdGhlIGlucHV0IGZpcnN0IGdvZXMgZG93bi5cbiAgICAgKiBJdCB0aGVuIHJlcGVhdHMgb24gcmVwZWF0IGRlbGF5LlxuICAgICAqL1xuICAgIGlzUHJlc3NlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG93bkNvdW50ID09PSAxIHx8IHRoaXMucmVwZWF0O1xuICAgICAgICAvLyBjb25zdCBjb3VudCA9IHRoaXMuZG93bkNvdW50O1xuICAgICAgICAvLyByZXR1cm4gY291bnQgPT09IDEgfHwgKGNvdW50ID4gSU5QVVRfUkVQRUFUX0RFTEFZICYmIGNvdW50ICUgSU5QVVRfUkVQRUFUX1JBVEUgPT09IDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGlucHV0IGlzIFwiY2xpY2tlZFwiLlxuICAgICAqIENsaWNrZWQgaXMgYSBvbmUgdGltZSBldmVudCB3aGVuIHRoZSBpbnB1dCBmaXJzdCBnb2VzIHVwLlxuICAgICAqL1xuICAgIGlzQ2xpY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBDb3VudCA9PT0gMTtcbiAgICB9XG59XG5cbi8qKlxuICogTnVtYmVyIG9mIGtleXMgdG8gdHJhY2suXG4gKi9cbmNvbnN0IEtFWV9DT1VOVCA9IDI1NjtcbmNsYXNzIEtleWJvYXJkIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGtleWJvYXJkIG1vZHVsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbCBET00gZWwgdG8gYXR0YWNoIGxpc3RlbmVycy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgICB0aGlzLmtleXMgPSBuZXcgQXJyYXkoS0VZX0NPVU5UKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBLRVlfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2ldID0gbmV3IElucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5zZXRLZXkoZSwgdHJ1ZSkpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4gdGhpcy5zZXRLZXkoZSwgZmFsc2UpKTtcbiAgICB9XG4gICAgc2V0S2V5KGUsIHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICAgIGlmIChrZXlDb2RlID09PSBLZXlzLlZLX0YxMSkge1xuICAgICAgICAgICAgLy8gQWxsb3cgZnVsbHNjcmVlbiByZXF1ZXN0cyB0byBnbyB0aHJvdWdoXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoa2V5Q29kZSA+PSAwICYmIGtleUNvZGUgPCBLRVlfQ09VTlQpIHtcbiAgICAgICAgICAgIHRoaXMua2V5c1trZXlDb2RlXS5zZXREb3duKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVLZXlzKHRpbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBLRVlfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2ldLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRLZXkoa2V5Q29kZSkge1xuICAgICAgICByZXR1cm4ga2V5Q29kZSA+PSAwICYmIGtleUNvZGUgPCBLRVlfQ09VTlQgPyB0aGlzLmtleXNba2V5Q29kZV0gOiBudWxsO1xuICAgIH1cbn1cbnZhciBLZXlzO1xuKGZ1bmN0aW9uIChLZXlzKSB7XG4gICAgS2V5c1tLZXlzW1wiVktfQ0FOQ0VMXCJdID0gM10gPSBcIlZLX0NBTkNFTFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0hFTFBcIl0gPSA2XSA9IFwiVktfSEVMUFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0JBQ0tfU1BBQ0VcIl0gPSA4XSA9IFwiVktfQkFDS19TUEFDRVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1RBQlwiXSA9IDldID0gXCJWS19UQUJcIjtcbiAgICBLZXlzW0tleXNbXCJWS19DTEVBUlwiXSA9IDEyXSA9IFwiVktfQ0xFQVJcIjtcbiAgICBLZXlzW0tleXNbXCJWS19FTlRFUlwiXSA9IDEzXSA9IFwiVktfRU5URVJcIjtcbiAgICBLZXlzW0tleXNbXCJWS19TSElGVFwiXSA9IDE2XSA9IFwiVktfU0hJRlRcIjtcbiAgICBLZXlzW0tleXNbXCJWS19DT05UUk9MXCJdID0gMTddID0gXCJWS19DT05UUk9MXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfQUxUXCJdID0gMThdID0gXCJWS19BTFRcIjtcbiAgICBLZXlzW0tleXNbXCJWS19QQVVTRVwiXSA9IDE5XSA9IFwiVktfUEFVU0VcIjtcbiAgICBLZXlzW0tleXNbXCJWS19DQVBTX0xPQ0tcIl0gPSAyMF0gPSBcIlZLX0NBUFNfTE9DS1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX0VTQ0FQRVwiXSA9IDI3XSA9IFwiVktfRVNDQVBFXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfU1BBQ0VcIl0gPSAzMl0gPSBcIlZLX1NQQUNFXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfUEFHRV9VUFwiXSA9IDMzXSA9IFwiVktfUEFHRV9VUFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1BBR0VfRE9XTlwiXSA9IDM0XSA9IFwiVktfUEFHRV9ET1dOXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfRU5EXCJdID0gMzVdID0gXCJWS19FTkRcIjtcbiAgICBLZXlzW0tleXNbXCJWS19IT01FXCJdID0gMzZdID0gXCJWS19IT01FXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfTEVGVFwiXSA9IDM3XSA9IFwiVktfTEVGVFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1VQXCJdID0gMzhdID0gXCJWS19VUFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1JJR0hUXCJdID0gMzldID0gXCJWS19SSUdIVFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0RPV05cIl0gPSA0MF0gPSBcIlZLX0RPV05cIjtcbiAgICBLZXlzW0tleXNbXCJWS19QUklOVFNDUkVFTlwiXSA9IDQ0XSA9IFwiVktfUFJJTlRTQ1JFRU5cIjtcbiAgICBLZXlzW0tleXNbXCJWS19JTlNFUlRcIl0gPSA0NV0gPSBcIlZLX0lOU0VSVFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0RFTEVURVwiXSA9IDQ2XSA9IFwiVktfREVMRVRFXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfMFwiXSA9IDQ4XSA9IFwiVktfMFwiO1xuICAgIEtleXNbS2V5c1tcIlZLXzFcIl0gPSA0OV0gPSBcIlZLXzFcIjtcbiAgICBLZXlzW0tleXNbXCJWS18yXCJdID0gNTBdID0gXCJWS18yXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfM1wiXSA9IDUxXSA9IFwiVktfM1wiO1xuICAgIEtleXNbS2V5c1tcIlZLXzRcIl0gPSA1Ml0gPSBcIlZLXzRcIjtcbiAgICBLZXlzW0tleXNbXCJWS181XCJdID0gNTNdID0gXCJWS181XCI7XG4gICAgS2V5c1tLZXlzW1wiVktfNlwiXSA9IDU0XSA9IFwiVktfNlwiO1xuICAgIEtleXNbS2V5c1tcIlZLXzdcIl0gPSA1NV0gPSBcIlZLXzdcIjtcbiAgICBLZXlzW0tleXNbXCJWS184XCJdID0gNTZdID0gXCJWS184XCI7XG4gICAgS2V5c1tLZXlzW1wiVktfOVwiXSA9IDU3XSA9IFwiVktfOVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0NPTE9OXCJdID0gNThdID0gXCJWS19DT0xPTlwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1NFTUlDT0xPTlwiXSA9IDU5XSA9IFwiVktfU0VNSUNPTE9OXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfTEVTU19USEFOXCJdID0gNjBdID0gXCJWS19MRVNTX1RIQU5cIjtcbiAgICBLZXlzW0tleXNbXCJWS19FUVVBTFNcIl0gPSA2MV0gPSBcIlZLX0VRVUFMU1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX0dSRUFURVJfVEhBTlwiXSA9IDYyXSA9IFwiVktfR1JFQVRFUl9USEFOXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfUVVFU1RJT05fTUFSS1wiXSA9IDYzXSA9IFwiVktfUVVFU1RJT05fTUFSS1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX0FUXCJdID0gNjRdID0gXCJWS19BVFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0FcIl0gPSA2NV0gPSBcIlZLX0FcIjtcbiAgICBLZXlzW0tleXNbXCJWS19CXCJdID0gNjZdID0gXCJWS19CXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfQ1wiXSA9IDY3XSA9IFwiVktfQ1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX0RcIl0gPSA2OF0gPSBcIlZLX0RcIjtcbiAgICBLZXlzW0tleXNbXCJWS19FXCJdID0gNjldID0gXCJWS19FXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfRlwiXSA9IDcwXSA9IFwiVktfRlwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0dcIl0gPSA3MV0gPSBcIlZLX0dcIjtcbiAgICBLZXlzW0tleXNbXCJWS19IXCJdID0gNzJdID0gXCJWS19IXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfSVwiXSA9IDczXSA9IFwiVktfSVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0pcIl0gPSA3NF0gPSBcIlZLX0pcIjtcbiAgICBLZXlzW0tleXNbXCJWS19LXCJdID0gNzVdID0gXCJWS19LXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfTFwiXSA9IDc2XSA9IFwiVktfTFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX01cIl0gPSA3N10gPSBcIlZLX01cIjtcbiAgICBLZXlzW0tleXNbXCJWS19OXCJdID0gNzhdID0gXCJWS19OXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfT1wiXSA9IDc5XSA9IFwiVktfT1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX1BcIl0gPSA4MF0gPSBcIlZLX1BcIjtcbiAgICBLZXlzW0tleXNbXCJWS19RXCJdID0gODFdID0gXCJWS19RXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfUlwiXSA9IDgyXSA9IFwiVktfUlwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1NcIl0gPSA4M10gPSBcIlZLX1NcIjtcbiAgICBLZXlzW0tleXNbXCJWS19UXCJdID0gODRdID0gXCJWS19UXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfVVwiXSA9IDg1XSA9IFwiVktfVVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1ZcIl0gPSA4Nl0gPSBcIlZLX1ZcIjtcbiAgICBLZXlzW0tleXNbXCJWS19XXCJdID0gODddID0gXCJWS19XXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfWFwiXSA9IDg4XSA9IFwiVktfWFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1lcIl0gPSA4OV0gPSBcIlZLX1lcIjtcbiAgICBLZXlzW0tleXNbXCJWS19aXCJdID0gOTBdID0gXCJWS19aXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfQ09OVEVYVF9NRU5VXCJdID0gOTNdID0gXCJWS19DT05URVhUX01FTlVcIjtcbiAgICBLZXlzW0tleXNbXCJWS19OVU1QQUQwXCJdID0gOTZdID0gXCJWS19OVU1QQUQwXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfTlVNUEFEMVwiXSA9IDk3XSA9IFwiVktfTlVNUEFEMVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX05VTVBBRDJcIl0gPSA5OF0gPSBcIlZLX05VTVBBRDJcIjtcbiAgICBLZXlzW0tleXNbXCJWS19OVU1QQUQzXCJdID0gOTldID0gXCJWS19OVU1QQUQzXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfTlVNUEFENFwiXSA9IDEwMF0gPSBcIlZLX05VTVBBRDRcIjtcbiAgICBLZXlzW0tleXNbXCJWS19OVU1QQUQ1XCJdID0gMTAxXSA9IFwiVktfTlVNUEFENVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX05VTVBBRDZcIl0gPSAxMDJdID0gXCJWS19OVU1QQUQ2XCI7XG4gICAgS2V5c1tLZXlzW1wiVktfTlVNUEFEN1wiXSA9IDEwM10gPSBcIlZLX05VTVBBRDdcIjtcbiAgICBLZXlzW0tleXNbXCJWS19OVU1QQUQ4XCJdID0gMTA0XSA9IFwiVktfTlVNUEFEOFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX05VTVBBRDlcIl0gPSAxMDVdID0gXCJWS19OVU1QQUQ5XCI7XG4gICAgS2V5c1tLZXlzW1wiVktfTVVMVElQTFlcIl0gPSAxMDZdID0gXCJWS19NVUxUSVBMWVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0FERFwiXSA9IDEwN10gPSBcIlZLX0FERFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1NFUEFSQVRPUlwiXSA9IDEwOF0gPSBcIlZLX1NFUEFSQVRPUlwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1NVQlRSQUNUXCJdID0gMTA5XSA9IFwiVktfU1VCVFJBQ1RcIjtcbiAgICBLZXlzW0tleXNbXCJWS19ERUNJTUFMXCJdID0gMTEwXSA9IFwiVktfREVDSU1BTFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0RJVklERVwiXSA9IDExMV0gPSBcIlZLX0RJVklERVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxXCJdID0gMTEyXSA9IFwiVktfRjFcIjtcbiAgICBLZXlzW0tleXNbXCJWS19GMlwiXSA9IDExM10gPSBcIlZLX0YyXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfRjNcIl0gPSAxMTRdID0gXCJWS19GM1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX0Y0XCJdID0gMTE1XSA9IFwiVktfRjRcIjtcbiAgICBLZXlzW0tleXNbXCJWS19GNVwiXSA9IDExNl0gPSBcIlZLX0Y1XCI7XG4gICAgS2V5c1tLZXlzW1wiVktfRjZcIl0gPSAxMTddID0gXCJWS19GNlwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0Y3XCJdID0gMTE4XSA9IFwiVktfRjdcIjtcbiAgICBLZXlzW0tleXNbXCJWS19GOFwiXSA9IDExOV0gPSBcIlZLX0Y4XCI7XG4gICAgS2V5c1tLZXlzW1wiVktfRjlcIl0gPSAxMjBdID0gXCJWS19GOVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxMFwiXSA9IDEyMV0gPSBcIlZLX0YxMFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxMVwiXSA9IDEyMl0gPSBcIlZLX0YxMVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxMlwiXSA9IDEyM10gPSBcIlZLX0YxMlwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxM1wiXSA9IDEyNF0gPSBcIlZLX0YxM1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxNFwiXSA9IDEyNV0gPSBcIlZLX0YxNFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxNVwiXSA9IDEyNl0gPSBcIlZLX0YxNVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxNlwiXSA9IDEyN10gPSBcIlZLX0YxNlwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxN1wiXSA9IDEyOF0gPSBcIlZLX0YxN1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxOFwiXSA9IDEyOV0gPSBcIlZLX0YxOFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YxOVwiXSA9IDEzMF0gPSBcIlZLX0YxOVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YyMFwiXSA9IDEzMV0gPSBcIlZLX0YyMFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YyMVwiXSA9IDEzMl0gPSBcIlZLX0YyMVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YyMlwiXSA9IDEzM10gPSBcIlZLX0YyMlwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YyM1wiXSA9IDEzNF0gPSBcIlZLX0YyM1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX0YyNFwiXSA9IDEzNV0gPSBcIlZLX0YyNFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX05VTV9MT0NLXCJdID0gMTQ0XSA9IFwiVktfTlVNX0xPQ0tcIjtcbiAgICBLZXlzW0tleXNbXCJWS19TQ1JPTExfTE9DS1wiXSA9IDE0NV0gPSBcIlZLX1NDUk9MTF9MT0NLXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfQ0lSQ1VNRkxFWFwiXSA9IDE2MF0gPSBcIlZLX0NJUkNVTUZMRVhcIjtcbiAgICBLZXlzW0tleXNbXCJWS19FWENMQU1BVElPTlwiXSA9IDE2MV0gPSBcIlZLX0VYQ0xBTUFUSU9OXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfRE9VQkxFX1FVT1RFXCJdID0gMTYyXSA9IFwiVktfRE9VQkxFX1FVT1RFXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfSEFTSFwiXSA9IDE2M10gPSBcIlZLX0hBU0hcIjtcbiAgICBLZXlzW0tleXNbXCJWS19ET0xMQVJcIl0gPSAxNjRdID0gXCJWS19ET0xMQVJcIjtcbiAgICBLZXlzW0tleXNbXCJWS19QRVJDRU5UXCJdID0gMTY1XSA9IFwiVktfUEVSQ0VOVFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0FNUEVSU0FORFwiXSA9IDE2Nl0gPSBcIlZLX0FNUEVSU0FORFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1VOREVSU0NPUkVcIl0gPSAxNjddID0gXCJWS19VTkRFUlNDT1JFXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfT1BFTl9QQVJFTlwiXSA9IDE2OF0gPSBcIlZLX09QRU5fUEFSRU5cIjtcbiAgICBLZXlzW0tleXNbXCJWS19DTE9TRV9QQVJFTlwiXSA9IDE2OV0gPSBcIlZLX0NMT1NFX1BBUkVOXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfQVNURVJJU0tcIl0gPSAxNzBdID0gXCJWS19BU1RFUklTS1wiO1xuICAgIEtleXNbS2V5c1tcIlZLX1BMVVNcIl0gPSAxNzFdID0gXCJWS19QTFVTXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfUElQRVwiXSA9IDE3Ml0gPSBcIlZLX1BJUEVcIjtcbiAgICBLZXlzW0tleXNbXCJWS19IWVBIRU5fTUlOVVNcIl0gPSAxNzNdID0gXCJWS19IWVBIRU5fTUlOVVNcIjtcbiAgICBLZXlzW0tleXNbXCJWS19PUEVOX0NVUkxZX0JSQUNLRVRcIl0gPSAxNzRdID0gXCJWS19PUEVOX0NVUkxZX0JSQUNLRVRcIjtcbiAgICBLZXlzW0tleXNbXCJWS19DTE9TRV9DVVJMWV9CUkFDS0VUXCJdID0gMTc1XSA9IFwiVktfQ0xPU0VfQ1VSTFlfQlJBQ0tFVFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1RJTERFXCJdID0gMTc2XSA9IFwiVktfVElMREVcIjtcbiAgICBLZXlzW0tleXNbXCJWS19DT01NQVwiXSA9IDE4OF0gPSBcIlZLX0NPTU1BXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfUEVSSU9EXCJdID0gMTkwXSA9IFwiVktfUEVSSU9EXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfU0xBU0hcIl0gPSAxOTFdID0gXCJWS19TTEFTSFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0JBQ0tfUVVPVEVcIl0gPSAxOTJdID0gXCJWS19CQUNLX1FVT1RFXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfT1BFTl9CUkFDS0VUXCJdID0gMjE5XSA9IFwiVktfT1BFTl9CUkFDS0VUXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfQkFDS19TTEFTSFwiXSA9IDIyMF0gPSBcIlZLX0JBQ0tfU0xBU0hcIjtcbiAgICBLZXlzW0tleXNbXCJWS19DTE9TRV9CUkFDS0VUXCJdID0gMjIxXSA9IFwiVktfQ0xPU0VfQlJBQ0tFVFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1FVT1RFXCJdID0gMjIyXSA9IFwiVktfUVVPVEVcIjtcbiAgICBLZXlzW0tleXNbXCJWS19NRVRBXCJdID0gMjI0XSA9IFwiVktfTUVUQVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0FMVEdSXCJdID0gMjI1XSA9IFwiVktfQUxUR1JcIjtcbiAgICBLZXlzW0tleXNbXCJWS19XSU5cIl0gPSA5MV0gPSBcIlZLX1dJTlwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0tBTkFcIl0gPSAyMV0gPSBcIlZLX0tBTkFcIjtcbiAgICBLZXlzW0tleXNbXCJWS19IQU5HVUxcIl0gPSAyMV0gPSBcIlZLX0hBTkdVTFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0VJU1VcIl0gPSAyMl0gPSBcIlZLX0VJU1VcIjtcbiAgICBLZXlzW0tleXNbXCJWS19KVU5KQVwiXSA9IDIzXSA9IFwiVktfSlVOSkFcIjtcbiAgICBLZXlzW0tleXNbXCJWS19GSU5BTFwiXSA9IDI0XSA9IFwiVktfRklOQUxcIjtcbiAgICBLZXlzW0tleXNbXCJWS19IQU5KQVwiXSA9IDI1XSA9IFwiVktfSEFOSkFcIjtcbiAgICBLZXlzW0tleXNbXCJWS19LQU5KSVwiXSA9IDI1XSA9IFwiVktfS0FOSklcIjtcbiAgICBLZXlzW0tleXNbXCJWS19DT05WRVJUXCJdID0gMjhdID0gXCJWS19DT05WRVJUXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfTk9OQ09OVkVSVFwiXSA9IDI5XSA9IFwiVktfTk9OQ09OVkVSVFwiO1xuICAgIEtleXNbS2V5c1tcIlZLX0FDQ0VQVFwiXSA9IDMwXSA9IFwiVktfQUNDRVBUXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfTU9ERUNIQU5HRVwiXSA9IDMxXSA9IFwiVktfTU9ERUNIQU5HRVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1NFTEVDVFwiXSA9IDQxXSA9IFwiVktfU0VMRUNUXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfUFJJTlRcIl0gPSA0Ml0gPSBcIlZLX1BSSU5UXCI7XG4gICAgS2V5c1tLZXlzW1wiVktfRVhFQ1VURVwiXSA9IDQzXSA9IFwiVktfRVhFQ1VURVwiO1xuICAgIEtleXNbS2V5c1tcIlZLX1NMRUVQXCJdID0gOTVdID0gXCJWS19TTEVFUFwiO1xufSkoS2V5cyB8fCAoS2V5cyA9IHt9KSk7XG5cbmNsYXNzIE1lc3NhZ2VEaWFsb2cgZXh0ZW5kcyBEaWFsb2cge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gbWVzc2FnZS5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGxldCB3aWR0aCA9IHRpdGxlLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbGluZXNbaV0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoZWlnaHQgPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgc3VwZXIocmVjdCwgdGl0bGUpO1xuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gICAgfVxuICAgIGRyYXdDb250ZW50cyhjb25zb2xlLCBvZmZzZXQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRyYXdTdHJpbmcob2Zmc2V0LngsIG9mZnNldC55ICsgaSwgdGhpcy5saW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlSW5wdXQodGVybWluYWwsIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGVybWluYWwuaXNLZXlQcmVzc2VkKEtleXMuVktfRVNDQVBFKTtcbiAgICB9XG59XG5cbmNsYXNzIFNlbGVjdERpYWxvZyBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHRpdGxlLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBvcHRpb25zW2ldLmxlbmd0aCArIDQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9wdGlvbnMubGVuZ3RoO1xuICAgICAgICBjb25zdCByZWN0ID0gbmV3IFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHN1cGVyKHJlY3QsIHRpdGxlKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmhvdmVySW5kZXggPSAtMTtcbiAgICB9XG4gICAgZHJhd0NvbnRlbnRzKGNvbnNvbGUsIG9mZnNldCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpICsgJyAtICcgKyB0aGlzLm9wdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5ob3ZlckluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kcmF3U3RyaW5nKG9mZnNldC54LCBvZmZzZXQueSArIGksIHN0ciwgQ29sb3JzLkJMQUNLLCBDb2xvcnMuV0hJVEUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kcmF3U3RyaW5nKG9mZnNldC54LCBvZmZzZXQueSArIGksIHN0ciwgQ29sb3JzLldISVRFLCBDb2xvcnMuQkxBQ0spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUlucHV0KHRlcm1pbmFsLCBvZmZzZXQpIHtcbiAgICAgICAgdGhpcy5ob3ZlckluZGV4ID0gLTE7XG4gICAgICAgIGlmICh0ZXJtaW5hbC5tb3VzZS54ID49IG9mZnNldC54ICYmXG4gICAgICAgICAgICB0ZXJtaW5hbC5tb3VzZS54IDwgb2Zmc2V0LnggKyB0aGlzLmNvbnRlbnRzUmVjdC53aWR0aCAmJlxuICAgICAgICAgICAgdGVybWluYWwubW91c2UueSA+PSBvZmZzZXQueSAmJlxuICAgICAgICAgICAgdGVybWluYWwubW91c2UueSA8IG9mZnNldC55ICsgdGhpcy5jb250ZW50c1JlY3QuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVySW5kZXggPSB0ZXJtaW5hbC5tb3VzZS55IC0gb2Zmc2V0Lnk7XG4gICAgICAgICAgICBpZiAodGVybWluYWwubW91c2UuYnV0dG9uc1swXS51cENvdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmhvdmVySW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGVybWluYWwuaXNLZXlQcmVzc2VkKEtleXMuVktfQSArIGkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVybWluYWwuaXNLZXlQcmVzc2VkKEtleXMuVktfRVNDQVBFKTtcbiAgICB9XG4gICAgaXNNb3VzZU92ZXJPcHRpb24odGVybWluYWwsIG9mZnNldCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICh0ZXJtaW5hbC5tb3VzZS54ID49IG9mZnNldC54ICYmXG4gICAgICAgICAgICB0ZXJtaW5hbC5tb3VzZS54IDwgb2Zmc2V0LnggKyB0aGlzLmNvbnRlbnRzUmVjdC53aWR0aCAmJlxuICAgICAgICAgICAgdGVybWluYWwubW91c2UueSA9PT0gb2Zmc2V0LnkgKyBpbmRleCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFsbCBhdmFpbGFibGUgMngyIHBhdHRlcm5zIGZvciAyeCBpbWFnZSBsb2FkaW5nLlxuICogTm90ZTogVGhlIHN0cmljdCBJQk0gQ0dBIGZvbnQgb25seSBoYXMgaGFsdmVzLCBub3QgcXVhZHJhbnRzLlxuICovXG5jb25zdCBQQVRURVJOUyA9IFtcbiAgICB7IGNoYXJDb2RlOiBDaGFycy5CTE9DS19UT1BfSEFMRiwgYWN0aXZlOiBbMSwgMSwgMCwgMF0gfSxcbiAgICB7IGNoYXJDb2RlOiBDaGFycy5CTE9DS19SSUdIVF9IQUxGLCBhY3RpdmU6IFswLCAxLCAwLCAxXSB9LFxuXTtcbmZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdyA9IGltZy53aWR0aDtcbiAgICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRJbWFnZURhdGEoaW1nKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENvbnNvbGUodywgaCk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJlc3VsdC5nZXRDZWxsKHgsIHkpO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QmFja2dyb3VuZChmcm9tUmdiKGRhdGFbaSsrXSwgZGF0YVtpKytdLCBkYXRhW2krK10sIGRhdGFbaSsrXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfTtcbiAgICBpbWcuc3JjID0gdXJsO1xufVxuZnVuY3Rpb24gbG9hZEltYWdlMngodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBpbWcuaGVpZ2h0O1xuICAgICAgICBjb25zdCBkYXRhID0gZ2V0SW1hZ2VEYXRhKGltZyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDb25zb2xlKHcgLyAyLCBoIC8gMik7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSArPSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHggKz0gMikge1xuICAgICAgICAgICAgICAgIGRyYXcyeDIocmVzdWx0LCBkYXRhLCB4LCB5LCB3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IHVybDtcbn1cbmZ1bmN0aW9uIGdldEltYWdlRGF0YShpbWcpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgIHJldHVybiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCkuZGF0YTtcbn1cbmZ1bmN0aW9uIGRyYXcyeDIoY29uLCBkYXRhLCB4LCB5LCB3KSB7XG4gICAgLy8gVG9wIGxlZnRcbiAgICBjb25zdCBpMSA9IDQgKiAoeSAqIHcgKyB4KTtcbiAgICBjb25zdCByMSA9IGRhdGFbaTFdO1xuICAgIGNvbnN0IGcxID0gZGF0YVtpMSArIDFdO1xuICAgIGNvbnN0IGIxID0gZGF0YVtpMSArIDJdO1xuICAgIC8vIFRvcCByaWdodFxuICAgIGNvbnN0IGkyID0gNCAqICh5ICogdyArIHggKyAxKTtcbiAgICBjb25zdCByMiA9IGRhdGFbaTJdO1xuICAgIGNvbnN0IGcyID0gZGF0YVtpMiArIDFdO1xuICAgIGNvbnN0IGIyID0gZGF0YVtpMiArIDJdO1xuICAgIC8vIEJvdHRvbSBsZWZ0XG4gICAgY29uc3QgaTMgPSA0ICogKCh5ICsgMSkgKiB3ICsgeCk7XG4gICAgY29uc3QgcjMgPSBkYXRhW2kzXTtcbiAgICBjb25zdCBnMyA9IGRhdGFbaTMgKyAxXTtcbiAgICBjb25zdCBiMyA9IGRhdGFbaTMgKyAyXTtcbiAgICAvLyBCb3R0b20gcmlnaHRcbiAgICBjb25zdCBpNCA9IDQgKiAoKHkgKyAxKSAqIHcgKyB4ICsgMSk7XG4gICAgY29uc3QgcjQgPSBkYXRhW2k0XTtcbiAgICBjb25zdCBnNCA9IGRhdGFbaTQgKyAxXTtcbiAgICBjb25zdCBiNCA9IGRhdGFbaTQgKyAyXTtcbiAgICBjb25zdCBjb2xvcnMgPSBbW3IxLCBnMSwgYjFdLCBbcjIsIGcyLCBiMl0sIFtyMywgZzMsIGIzXSwgW3I0LCBnNCwgYjRdXTtcbiAgICAvLyBGb3IgZWFjaCBwb3NzaWJsZSBwYXR0ZXJuLCBjYWxjdWxhdGUgdGhlIHRvdGFsIGVycm9yXG4gICAgLy8gRmluZCB0aGUgcGF0dGVybiB3aXRoIG1pbnVtIGVycm9yXG4gICAgbGV0IG1pbkVycm9yID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICBsZXQgYmVzdENoYXJDb2RlID0gMDtcbiAgICBsZXQgYmVzdEJnID0gbnVsbDtcbiAgICBsZXQgYmVzdEZnID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBBVFRFUk5TLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBQQVRURVJOU1tpXTtcbiAgICAgICAgY29uc3QgcGF0dGVybkNvbG9ycyA9IGNvbXB1dGVDb2xvcnMocGF0dGVybi5hY3RpdmUsIGNvbG9ycyk7XG4gICAgICAgIGlmIChwYXR0ZXJuQ29sb3JzLmVycm9yIDwgbWluRXJyb3IpIHtcbiAgICAgICAgICAgIG1pbkVycm9yID0gcGF0dGVybkNvbG9ycy5lcnJvcjtcbiAgICAgICAgICAgIGJlc3RDaGFyQ29kZSA9IHBhdHRlcm4uY2hhckNvZGU7XG4gICAgICAgICAgICBiZXN0QmcgPSBwYXR0ZXJuQ29sb3JzLmJnO1xuICAgICAgICAgICAgYmVzdEZnID0gcGF0dGVybkNvbG9ycy5mZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb24uZHJhd0NoYXIoeCAvIDIsIHkgLyAyLCBiZXN0Q2hhckNvZGUsIGFycmF5VG9Db2xvcihiZXN0RmcpLCBhcnJheVRvQ29sb3IoYmVzdEJnKSk7XG59XG5mdW5jdGlvbiBjb21wdXRlQ29sb3JzKHBhdHRlcm4sIGNvbG9ycykge1xuICAgIGNvbnN0IHN1bSA9IFtbMCwgMCwgMF0sIFswLCAwLCAwXV07XG4gICAgY29uc3QgYXZnID0gW1swLCAwLCAwXSwgWzAsIDAsIDBdXTtcbiAgICBjb25zdCBjb3VudCA9IFswLCAwXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICAgICAgc3VtW3BhdHRlcm5baV1dW2pdICs9IGNvbG9yc1tpXVtqXTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudFtwYXR0ZXJuW2ldXSsrO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICAgICAgYXZnW2ldW2pdID0gc3VtW2ldW2pdIC8gY291bnRbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGVycm9yID0gMC4wO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGxldCBjZWxsRXJyb3IgPSAwLjA7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNvbG9yc1tpXVtqXSAtIGF2Z1twYXR0ZXJuW2ldXVtqXTtcbiAgICAgICAgICAgIGNlbGxFcnJvciArPSBkZWx0YSAqIGRlbHRhO1xuICAgICAgICB9XG4gICAgICAgIGVycm9yICs9IE1hdGguc3FydChjZWxsRXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4geyBiZzogYXZnWzBdLCBmZzogYXZnWzFdLCBlcnJvciB9O1xufVxuZnVuY3Rpb24gYXJyYXlUb0NvbG9yKHJnYikge1xuICAgIHJldHVybiBmcm9tUmdiKHJnYlswXSwgcmdiWzFdLCByZ2JbMl0pO1xufVxuXG5jbGFzcyBNb3VzZSB7XG4gICAgY29uc3RydWN0b3IodGVybWluYWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IHRlcm1pbmFsLmNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHRlcm1pbmFsLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRlcm1pbmFsLmhlaWdodDtcbiAgICAgICAgdGhpcy5wcmV2WCA9IDA7XG4gICAgICAgIHRoaXMucHJldlkgPSAwO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLmR4ID0gMDtcbiAgICAgICAgdGhpcy5keSA9IDA7XG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtuZXcgSW5wdXQoKSwgbmV3IElucHV0KCksIG5ldyBJbnB1dCgpXTtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMuaGFuZGxlRXZlbnQoZSkpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZSA9PiB0aGlzLmhhbmRsZUV2ZW50KGUpKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLmhhbmRsZUV2ZW50KGUpKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBlID0+IHRoaXMuaGFuZGxlRXZlbnQoZSkpO1xuICAgICAgICBjb25zdCB0b3VjaEV2ZW50SGFuZGxlciA9IHRoaXMuaGFuZGxlVG91Y2hFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hFdmVudEhhbmRsZXIpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaEV2ZW50SGFuZGxlcik7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRIYW5kbGVyKTtcbiAgICB9XG4gICAgaGFuZGxlVG91Y2hFdmVudChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24odG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnNbMF0uc2V0RG93bih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uc1swXS5zZXREb3duKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnNbZS5idXR0b25dLnNldERvd24odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNldXAnKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnNbZS5idXR0b25dLnNldERvd24oZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVBvc2l0aW9uKGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgICAgbGV0IHJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAvLyBJZiB0aGUgY2xpZW50IHJlY3QgaXMgbm90IHRoZSBzYW1lIGFzcGVjdCByYXRpbyBhcyBjYW52YXMsXG4gICAgICAgIC8vIHRoZW4gd2UgYXJlIGZ1bGxzY3JlZW4uXG4gICAgICAgIC8vIE5lZWQgdG8gdXBkYXRlIGNsaWVudCByZWN0IGFjY29yZGluZ2x5LlxuICAgICAgICBjb25zdCB0ZXJtaW5hbEFzcGVjdFJhdGlvID0gdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0O1xuICAgICAgICBjb25zdCByZWN0QXNwZWN0UmF0aW8gPSByZWN0LndpZHRoIC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIGlmIChyZWN0QXNwZWN0UmF0aW8gLSB0ZXJtaW5hbEFzcGVjdFJhdGlvID4gMC4wMSkge1xuICAgICAgICAgICAgY29uc3QgYWN0dWFsV2lkdGggPSB0ZXJtaW5hbEFzcGVjdFJhdGlvICogcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBleGNlc3MgPSByZWN0LndpZHRoIC0gYWN0dWFsV2lkdGg7XG4gICAgICAgICAgICByZWN0ID0gbmV3IFJlY3QoTWF0aC5mbG9vcihleGNlc3MgLyAyKSwgMCwgYWN0dWFsV2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVjdEFzcGVjdFJhdGlvIC0gdGVybWluYWxBc3BlY3RSYXRpbyA8IC0wLjAxKSB7XG4gICAgICAgICAgICBjb25zdCBhY3R1YWxIZWlnaHQgPSByZWN0LndpZHRoIC8gdGVybWluYWxBc3BlY3RSYXRpbztcbiAgICAgICAgICAgIGNvbnN0IGV4Y2VzcyA9IHJlY3QuaGVpZ2h0IC0gYWN0dWFsSGVpZ2h0O1xuICAgICAgICAgICAgcmVjdCA9IG5ldyBSZWN0KDAsIE1hdGguZmxvb3IoZXhjZXNzIC8gMiksIHJlY3Qud2lkdGgsIGFjdHVhbEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54ID0gKHRoaXMud2lkdGggKiAoY2xpZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoKSB8IDA7XG4gICAgICAgIHRoaXMueSA9ICh0aGlzLmhlaWdodCAqIChjbGllbnRZIC0gcmVjdC50b3ApIC8gcmVjdC5oZWlnaHQpIHwgMDtcbiAgICB9XG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgdGhpcy5keCA9IHRoaXMueCAtIHRoaXMucHJldlg7XG4gICAgICAgIHRoaXMuZHkgPSB0aGlzLnkgLSB0aGlzLnByZXZZO1xuICAgICAgICB0aGlzLnByZXZYID0gdGhpcy54O1xuICAgICAgICB0aGlzLnByZXZZID0gdGhpcy55O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25zW2ldLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZHhzID0gWy0xLCAwLCAxLCAtMSwgMSwgLTEsIDAsIDFdO1xuY29uc3QgZHlzID0gWy0xLCAtMSwgLTEsIDAsIDAsIDEsIDEsIDFdO1xuY29uc3QgY29zdHMgPSBbMS40LCAxLCAxLjQsIDEsIDEsIDEuNCwgMSwgMS40XTtcbmxldCBwYXRoSWQgPSAwO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHBhdGggYmV0d2VlbiB0d28gcG9pbnRzIHVzaW5nIERpamtzdHJhJ3MgYWxnb3JpdGhtLlxuICpcbiAqIEBwYXJhbSBzb3VyY2UgU3RhcnRpbmcgcG9pbnQsIG11c3QgaGF2ZSB4IGFuZCB5IHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gZGVzdCBEZXN0aW5hdGlvbiBwb2ludCwgbXVzdCBoYXZlIHggYW5kIHkgcHJvcGVydGllcy5cbiAqIEBwYXJhbSBtYXhEaXN0IE1heGltdW0gZGlzdGFuY2UgdG8gZXhhbWluZS5cbiAqIEByZXR1cm4gQXJyYXkgb2Ygc3RlcHMgaWYgZGVzdGluYXRpb24gZm91bmQ7IHVuZGVmaW5lZCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVQYXRoKG1hcCwgc291cmNlLCBkZXN0LCBtYXhEaXN0KSB7XG4gICAgcGF0aElkKys7XG4gICAgY29uc3Qgc291cmNlQ2VsbCA9IG1hcC5ncmlkW3NvdXJjZS55XVtzb3VyY2UueF07XG4gICAgc291cmNlQ2VsbC5wYXRoSWQgPSBwYXRoSWQ7XG4gICAgc291cmNlQ2VsbC5nID0gMC4wO1xuICAgIHNvdXJjZUNlbGwuaCA9IE1hdGguaHlwb3Qoc291cmNlLnggLSBkZXN0LngsIHNvdXJjZS55IC0gZGVzdC55KTtcbiAgICBzb3VyY2VDZWxsLnByZXYgPSBudWxsO1xuICAgIGNvbnN0IHEgPSBuZXcgU29ydGVkU2V0KFtzb3VyY2VDZWxsXSk7XG4gICAgd2hpbGUgKHEuc2l6ZSgpID4gMCkge1xuICAgICAgICBjb25zdCB1ID0gcS5wb3AoKTtcbiAgICAgICAgaWYgKHUueCA9PT0gZGVzdC54ICYmIHUueSA9PT0gZGVzdC55KSB7XG4gICAgICAgICAgICByZXR1cm4gYnVpbGRQYXRoKHUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gdS54ICsgZHhzW2ldO1xuICAgICAgICAgICAgY29uc3QgeSA9IHUueSArIGR5c1tpXTtcbiAgICAgICAgICAgIGlmICh4ID49IDAgJiYgeCA8IG1hcC53aWR0aCAmJiB5ID49IDAgJiYgeSA8IG1hcC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gbWFwLmdyaWRbeV1beF07XG4gICAgICAgICAgICAgICAgaWYgKHYuYmxvY2tlZCAmJiB2LmV4cGxvcmVkICYmICh4ICE9PSBkZXN0LnggfHwgeSAhPT0gZGVzdC55KSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHYucGF0aElkICE9PSBwYXRoSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdi5wYXRoSWQgPSBwYXRoSWQ7XG4gICAgICAgICAgICAgICAgICAgIHYuZyA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgICAgICB2LmggPSBNYXRoLmh5cG90KHggLSBkZXN0LngsIHkgLSBkZXN0LnkpO1xuICAgICAgICAgICAgICAgICAgICB2LnByZXYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBhbHQgPSB1LmcgKyBjb3N0c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoYWx0IDwgdi5nICYmIGFsdCA8PSBtYXhEaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHYuZyA9IGFsdDtcbiAgICAgICAgICAgICAgICAgICAgdi5wcmV2ID0gdTtcbiAgICAgICAgICAgICAgICAgICAgcS5pbnNlcnQodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBidWlsZFBhdGgoY2VsbCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBjdXJyID0gY2VsbDtcbiAgICB3aGlsZSAoY3Vycikge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyKTtcbiAgICAgICAgY3VyciA9IGN1cnIucHJldjtcbiAgICB9XG4gICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuY2xhc3MgU29ydGVkU2V0IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gaW5pdGlhbFZhbHVlcztcbiAgICB9XG4gICAgaW5zZXJ0KGNlbGwpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgbGV0IGxvdyA9IDA7XG4gICAgICAgIGxldCBoaWdoID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgICAgICAgY29uc3QgbWlkID0gKGxvdyArIGhpZ2gpID4+PiAxO1xuICAgICAgICAgICAgY29uc3QgbWlkQ2VsbCA9IGFycmF5W21pZF07XG4gICAgICAgICAgICBpZiAobWlkQ2VsbC5nICsgbWlkQ2VsbC5oID4gY2VsbC5nICsgY2VsbC5oKSB7XG4gICAgICAgICAgICAgICAgbG93ID0gbWlkICsgMTtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGxvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhpZ2ggPSBtaWQ7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBoaWdoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMCwgY2VsbCk7XG4gICAgfVxuICAgIHBvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLnBvcCgpO1xuICAgIH1cbiAgICBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSYW5kb20gbnVtYmVyIGdlbmVyYXRvci5cbiAqXG4gKiBMQ0dcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MjQ0NDUvMjA1MTcyNFxuICovXG5jbGFzcyBSTkcge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VlZCBUaGUgaW50ZWdlciBzZWVkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlZWQpIHtcbiAgICAgICAgLy8gTENHIHVzaW5nIEdDQydzIGNvbnN0YW50c1xuICAgICAgICB0aGlzLm0gPSAweDgwMDAwMDAwOyAvLyAyKiozMTtcbiAgICAgICAgdGhpcy5hID0gMTEwMzUxNTI0NTtcbiAgICAgICAgdGhpcy5jID0gMTIzNDU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzZWVkIHx8IDE7XG4gICAgfVxuICAgIG5leHRJbnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAodGhpcy5hICogdGhpcy5zdGF0ZSArIHRoaXMuYykgJSB0aGlzLm07XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIGJldHdlZW4gMC4wIGFuZCAxLjAuXG4gICAgICovXG4gICAgbmV4dEZsb2F0KCkge1xuICAgICAgICAvLyByZXR1cm5zIGluIHJhbmdlIFswLDFdXG4gICAgICAgIHJldHVybiB0aGlzLm5leHRJbnQoKSAvICh0aGlzLm0gLSAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZSBzdGFydCAoaW5jbHVzaXZlKSB0byBlbmQgKGV4Y2x1c2l2ZSkuXG4gICAgICogQHBhcmFtIHN0YXJ0IExvd2VyIGJvdW5kLCBpbmNsdXNpdmUuXG4gICAgICogQHBhcmFtIGVuZCBVcHBlciBib3VuZCwgZXhjbHVzaXZlLlxuICAgICAqL1xuICAgIG5leHRSYW5nZShzdGFydCwgZW5kKSB7XG4gICAgICAgIC8vIHJldHVybnMgaW4gcmFuZ2UgW3N0YXJ0LCBlbmQpOiBpbmNsdWRpbmcgc3RhcnQsIGV4Y2x1ZGluZyBlbmRcbiAgICAgICAgLy8gY2FuJ3QgbW9kdWx1IG5leHRJbnQgYmVjYXVzZSBvZiB3ZWFrIHJhbmRvbW5lc3MgaW4gbG93ZXIgYml0c1xuICAgICAgICBjb25zdCByYW5nZVNpemUgPSBlbmQgLSBzdGFydDtcbiAgICAgICAgY29uc3QgcmFuZG9tVW5kZXIxID0gdGhpcy5uZXh0SW50KCkgLyB0aGlzLm07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0YXJ0ICsgKChyYW5kb21VbmRlcjEgKiByYW5nZVNpemUpIHwgMCk7XG4gICAgICAgIGlmIChpc05hTihyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JhbmQgbmFuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgY2hvb3NlSW5kZXgoY2hhbmNlcykge1xuICAgICAgICBjb25zdCB0b3RhbCA9IGNoYW5jZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG4gICAgICAgIGNvbnN0IHJvbGwgPSB0aGlzLm5leHRSYW5nZSgxLCB0b3RhbCArIDEpO1xuICAgICAgICBsZXQgcnVubmluZ1RvdGFsID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBydW5uaW5nVG90YWwgKz0gY2hhbmNlc1tpXTtcbiAgICAgICAgICAgIGlmIChyb2xsIDw9IHJ1bm5pbmdUb3RhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuY2VzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGNob29zZUtleShjaGFuY2VzTWFwKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5rZXlzKGNoYW5jZXNNYXApO1xuICAgICAgICBjb25zdCBjaGFuY2VzID0gdmFsdWVzLm1hcCh2YWx1ZSA9PiBjaGFuY2VzTWFwW3ZhbHVlXSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXNbdGhpcy5jaG9vc2VJbmRleChjaGFuY2VzKV07XG4gICAgfVxufVxuXG4vKipcbiAqIFZlcnRleCBzaGFkZXIgcHJvZ3JhbS5cbiAqXG4gKiBhID0gYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xuICogYiA9IGF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7XG4gKiBjID0gYXR0cmlidXRlIHZlYzMgYUZnQ29sb3I7XG4gKiBkID0gYXR0cmlidXRlIHZlYzMgYUJnQ29sb3I7XG4gKiBlID0gdmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7XG4gKiBmID0gdmFyeWluZyB2ZWM0IHZGZ0NvbG9yO1xuICogZyA9IHZhcnlpbmcgdmVjNCB2QmdDb2xvcjtcbiAqL1xuY29uc3QgVkVSVEVYX1NIQURFUl9TT1VSQ0UgPSAnI3ZlcnNpb24gMzAwIGVzXFxuJyArXG4gICAgJ3ByZWNpc2lvbiBoaWdocCBmbG9hdDsnICtcbiAgICAnaW4gdmVjMiBhOycgK1xuICAgICdpbiB2ZWMyIGI7JyArXG4gICAgJ2luIHZlYzMgYzsnICtcbiAgICAnaW4gdmVjMyBkOycgK1xuICAgICdvdXQgdmVjMiBlOycgK1xuICAgICdvdXQgdmVjNCBmOycgK1xuICAgICdvdXQgdmVjNCBnOycgK1xuICAgICd2b2lkIG1haW4odm9pZCl7JyArXG4gICAgJ2dsX1Bvc2l0aW9uPXZlYzQoYS54LGEueSwwLDEpOycgK1xuICAgICdlPWIvMTYuMDsnICtcbiAgICAnZj12ZWM0KGMucixjLmcsYy5iLDEpOycgK1xuICAgICdnPXZlYzQoZC5yLGQuZyxkLmIsMSk7JyArXG4gICAgJ30nO1xuLyoqXG4gKiBGcmFnbWVudCBzaGFkZXIgcHJvZ3JhbS5cbiAqXG4gKiBlID0gdmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7XG4gKiBmID0gdmFyeWluZyB2ZWM0IHZGZ0NvbG9yO1xuICogZyA9IHZhcnlpbmcgdmVjNCB2QmdDb2xvcjtcbiAqIGggPSB1bmlmb3JtIGJvb2wgdUdyYXBoaWNhbFRpbGVzO1xuICogcyA9IHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xuICogbyA9IG91dCB2ZWM0IG9Db2xvcjtcbiAqL1xuY29uc3QgRlJBR01FTlRfU0hBREVSX1NPVVJDRSA9ICcjdmVyc2lvbiAzMDAgZXNcXG4nICtcbiAgICAncHJlY2lzaW9uIGhpZ2hwIGZsb2F0OycgK1xuICAgICdpbiB2ZWMyIGU7JyArXG4gICAgJ2luIHZlYzQgZjsnICtcbiAgICAnaW4gdmVjNCBnOycgK1xuICAgICd1bmlmb3JtIGJvb2wgaDsnICtcbiAgICAndW5pZm9ybSBzYW1wbGVyMkQgczsnICtcbiAgICAnb3V0IHZlYzQgbzsnICtcbiAgICAndm9pZCBtYWluKHZvaWQpeycgK1xuICAgICdvPXRleHR1cmUocyxlKTsnICtcbiAgICAnaWYoaCl7JyArXG4gICAgLy8gVXNpbmcgZ3JhcGhpY2FsIHRpbGVzXG4gICAgJ2lmKG8uYTwwLjEpeycgK1xuICAgIC8vIFRoZSBjdXJyZW50IHBpeGVsIG9mIHRoZSBmb3JlZ3JvdW5kIHNwcml0ZSBpcyB0cmFuc3BhcmVudC5cbiAgICAvLyBEcmF3IHRoZSBiYWNrZ3JvdW5kIHRpbGUgaW5zdGVhZC5cbiAgICAvLyBVc2UgdGhlIGJhY2tncm91bmQgcmVkIGNoYW5uZWwgZm9yIHRoZSB0aWxlIFggY29vcmRpbmF0ZS5cbiAgICAvLyBVc2UgdGhlIGJhY2tncm91bmQgZ3JlZW4gY2hhbm5lbCBmb3IgdGhlIHRpbGUgWSBjb29yZGluYXRlLlxuICAgIC8vIFVzZSB0aGUgZnJhY3Rpb25hbCBjb21wb25lbnQgb2YgdGhlIHRleHR1cmUgY29vcmQgZm9yIHRoZSBwaXhlbCBvZmZzZXQuXG4gICAgJ289dGV4dHVyZShzLGcucmcqMTYuMCtmcmFjdChlKjE2LjApLzE2LjApOycgK1xuICAgICd9JyArXG4gICAgJ31lbHNleycgK1xuICAgIC8vIFVzaW5nIEFTQ0lJIGNoYXJhY3RlcnNcbiAgICAnaWYoby5yPDAuMSkgeycgK1xuICAgIC8vIEJsYWNrIGJhY2tncm91bmQsIHNvIHVzZSBiZ0NvbG9yXG4gICAgJ289ZzsnICtcbiAgICAnfSBlbHNlIHsnICtcbiAgICAvLyBXaGl0ZSBiYWNrZ3JvdW5kLCBzbyB1c2UgZmdDb2xvclxuICAgICdvPWY7JyArXG4gICAgJ30nICtcbiAgICAnfScgK1xuICAgICd9JztcblxuLyoqXG4gKiBMaW5lYXJseSBpbnRlcnBvbGF0ZXMgYSBudW1iZXIgaW4gdGhlIHJhbmdlIDAtbWF4IHRvIC0xLjAtMS4wLlxuICpcbiAqIEBwYXJhbSBpIFRoZSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIG1heC5cbiAqIEBwYXJhbSBtYXggVGhlIG1heGltdW0gdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGJldHdlZW4gLTEuMCBhbmQgMS4wLlxuICovXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShpLCBtYXgpIHtcbiAgICByZXR1cm4gLTEuMCArIDIuMCAqIChpIC8gbWF4KTtcbn1cbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgICBmb250OiBERUZBVUxUX0ZPTlQsXG59O1xuY2xhc3MgVGVybWluYWwgZXh0ZW5kcyBDb25zb2xlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IERFRkFVTFRfT1BUSU9OUztcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZm9udCA9IG9wdGlvbnMuZm9udCB8fCBERUZBVUxUX0ZPTlQ7XG4gICAgICAgIHRoaXMucGl4ZWxXaWR0aCA9IHdpZHRoICogdGhpcy5mb250LmNoYXJXaWR0aDtcbiAgICAgICAgdGhpcy5waXhlbEhlaWdodCA9IGhlaWdodCAqIHRoaXMuZm9udC5jaGFySGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLnBpeGVsV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnBpeGVsSGVpZ2h0O1xuICAgICAgICBjYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbiAgICAgICAgY2FudmFzLnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gICAgICAgIGNhbnZhcy50YWJJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aGlzLmhhbmRsZVJlc2l6ZSgpKTtcbiAgICAgICAgdGhpcy5rZXlzID0gbmV3IEtleWJvYXJkKGNhbnZhcyk7XG4gICAgICAgIHRoaXMubW91c2UgPSBuZXcgTW91c2UodGhpcyk7XG4gICAgICAgIC8vIEdldCB0aGUgV2ViR0wgY29udGV4dCBmcm9tIHRoZSBjYW52YXNcbiAgICAgICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJywgeyBhbnRpYWxpYXM6IGZhbHNlIH0pO1xuICAgICAgICBpZiAoIWdsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBpbml0aWFsaXplIFdlYkdMLiBZb3VyIGJyb3dzZXIgbWF5IG5vdCBzdXBwb3J0IGl0LicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgICAgIGlmICghcHJvZ3JhbSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTC4gWW91ciBicm93c2VyIG1heSBub3Qgc3VwcG9ydCBpdC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB0aGlzLmJ1aWxkU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIsIFZFUlRFWF9TSEFERVJfU09VUkNFKSk7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB0aGlzLmJ1aWxkU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUiwgRlJBR01FTlRfU0hBREVSX1NPVVJDRSkpO1xuICAgICAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgaWYgKHRoaXMuZm9udC5ncmFwaGljYWwpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZmxhZyB0byBpZ25vcmUgZm9yZWdyb3VuZC9iYWNrZ3JvdW5kIGNvbG9ycywgYW5kIHVzZSB0ZXh0dXJlXG4gICAgICAgICAgICAvLyBkaXJlY3RseVxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaCcpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uQXR0cmliTG9jYXRpb24gPSB0aGlzLmdldEF0dHJpYkxvY2F0aW9uKCdhJyk7XG4gICAgICAgIHRoaXMudGV4dHVyZUF0dHJpYkxvY2F0aW9uID0gdGhpcy5nZXRBdHRyaWJMb2NhdGlvbignYicpO1xuICAgICAgICB0aGlzLmZnQ29sb3JBdHRyaWJMb2NhdGlvbiA9IHRoaXMuZ2V0QXR0cmliTG9jYXRpb24oJ2MnKTtcbiAgICAgICAgdGhpcy5iZ0NvbG9yQXR0cmliTG9jYXRpb24gPSB0aGlzLmdldEF0dHJpYkxvY2F0aW9uKCdkJyk7XG4gICAgICAgIGNvbnN0IGNlbGxDb3VudCA9IHdpZHRoICogaGVpZ2h0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uc0FycmF5ID0gbmV3IEZsb2F0MzJBcnJheShjZWxsQ291bnQgKiAzICogNCk7XG4gICAgICAgIHRoaXMuaW5kZXhBcnJheSA9IG5ldyBVaW50MTZBcnJheShjZWxsQ291bnQgKiA2KTtcbiAgICAgICAgdGhpcy50ZXh0dXJlQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGNlbGxDb3VudCAqIDIgKiA0KTtcbiAgICAgICAgdGhpcy5mb3JlZ3JvdW5kVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KGNlbGxDb3VudCAqIDQgKiA0KTtcbiAgICAgICAgdGhpcy5mb3JlZ3JvdW5kRGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5mb3JlZ3JvdW5kVWludDhBcnJheS5idWZmZXIpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoY2VsbENvdW50ICogNCAqIDQpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmREYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLmJhY2tncm91bmRVaW50OEFycmF5LmJ1ZmZlcik7XG4gICAgICAgIC8vIEluaXQgdGhlIHBvc2l0aW9ucyBidWZmZXJcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgIGxldCBrID0gMDtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgLy8gVG9wLWxlZnRcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc0FycmF5W2krK10gPSBpbnRlcnBvbGF0ZSh4LCB3aWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNBcnJheVtpKytdID0gLWludGVycG9sYXRlKHksIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8gVG9wLXJpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNBcnJheVtpKytdID0gaW50ZXJwb2xhdGUoeCArIDEsIHdpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc0FycmF5W2krK10gPSAtaW50ZXJwb2xhdGUoeSwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyBCb3R0b20tcmlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc0FycmF5W2krK10gPSBpbnRlcnBvbGF0ZSh4ICsgMSwgd2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zQXJyYXlbaSsrXSA9IC1pbnRlcnBvbGF0ZSh5ICsgMSwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyBCb3R0b20tbGVmdFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zQXJyYXlbaSsrXSA9IGludGVycG9sYXRlKHgsIHdpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc0FycmF5W2krK10gPSAtaW50ZXJwb2xhdGUoeSArIDEsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5W2orK10gPSBrICsgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4QXJyYXlbaisrXSA9IGsgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheVtqKytdID0gayArIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5W2orK10gPSBrICsgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4QXJyYXlbaisrXSA9IGsgKyAyO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheVtqKytdID0gayArIDM7XG4gICAgICAgICAgICAgICAgayArPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb25CdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICB0aGlzLnRleHR1cmVCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5mb3JlZ3JvdW5kQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5wb3NpdGlvbkJ1ZmZlcik7XG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnBvc2l0aW9uc0FycmF5LCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kZXhCdWZmZXIpO1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGV4QXJyYXksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5sb2FkVGV4dHVyZSh0aGlzLmZvbnQudXJsKTtcbiAgICAgICAgdGhpcy5sYXN0UmVuZGVyVGltZSA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyRGVsdGEgPSAwO1xuICAgICAgICB0aGlzLmZwcyA9IDA7XG4gICAgICAgIHRoaXMuYXZlcmFnZUZwcyA9IDA7XG4gICAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgfVxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5jYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aWR0aEZhY3RvciA9IHBhcmVudC5vZmZzZXRXaWR0aCAvIHRoaXMucGl4ZWxXaWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0RmFjdG9yID0gcGFyZW50Lm9mZnNldEhlaWdodCAvIHRoaXMucGl4ZWxIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGZhY3RvciA9IE1hdGgubWluKHdpZHRoRmFjdG9yLCBoZWlnaHRGYWN0b3IpO1xuICAgICAgICBjb25zdCB3aWR0aCA9IChmYWN0b3IgKiB0aGlzLnBpeGVsV2lkdGgpIHwgMDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gKGZhY3RvciAqIHRoaXMucGl4ZWxIZWlnaHQpIHwgMDtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgfVxuICAgIGdldEF0dHJpYkxvY2F0aW9uKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgbmFtZSk7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24pO1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgfVxuICAgIGZsdXNoKCkge1xuICAgICAgICBsZXQgdGV4dHVyZUFycmF5SW5kZXggPSAwO1xuICAgICAgICBsZXQgY29sb3JBcnJheUluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGwoeCwgeSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsLmRpcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVBcnJheUluZGV4ICs9IDg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yQXJyYXlJbmRleCArPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVYID0gY2VsbC5jaGFyQ29kZSAlIDE2O1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVZID0gKGNlbGwuY2hhckNvZGUgLyAxNikgfCAwO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZUFycmF5W3RleHR1cmVBcnJheUluZGV4KytdID0gdGV4dHVyZVg7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlQXJyYXlbdGV4dHVyZUFycmF5SW5kZXgrK10gPSB0ZXh0dXJlWTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVBcnJheVt0ZXh0dXJlQXJyYXlJbmRleCsrXSA9IHRleHR1cmVYICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVBcnJheVt0ZXh0dXJlQXJyYXlJbmRleCsrXSA9IHRleHR1cmVZO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZUFycmF5W3RleHR1cmVBcnJheUluZGV4KytdID0gdGV4dHVyZVggKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZUFycmF5W3RleHR1cmVBcnJheUluZGV4KytdID0gdGV4dHVyZVkgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZUFycmF5W3RleHR1cmVBcnJheUluZGV4KytdID0gdGV4dHVyZVg7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlQXJyYXlbdGV4dHVyZUFycmF5SW5kZXgrK10gPSB0ZXh0dXJlWSArIDE7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JlZ3JvdW5kRGF0YVZpZXcuc2V0VWludDMyKGNvbG9yQXJyYXlJbmRleCwgY2VsbC5mZywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmREYXRhVmlldy5zZXRVaW50MzIoY29sb3JBcnJheUluZGV4LCBjZWxsLmJnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yQXJyYXlJbmRleCArPSA0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNLZXlEb3duKGtleUNvZGUpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5rZXlzLmdldEtleShrZXlDb2RlKTtcbiAgICAgICAgcmV0dXJuICEha2V5ICYmIGtleS5kb3duO1xuICAgIH1cbiAgICBpc0tleVByZXNzZWQoa2V5Q29kZSkge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmtleXMuZ2V0S2V5KGtleUNvZGUpO1xuICAgICAgICByZXR1cm4gISFrZXkgJiYga2V5LmlzUHJlc3NlZCgpO1xuICAgIH1cbiAgICBnZXRLZXlEb3duQ291bnQoa2V5Q29kZSkge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmtleXMuZ2V0S2V5KGtleUNvZGUpO1xuICAgICAgICByZXR1cm4ga2V5ID8ga2V5LmRvd25Db3VudCA6IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdGFuZGFyZCByb2d1ZWxpa2UgbW92ZW1lbnQga2V5IGlmIHByZXNzZWQuXG4gICAgICogSW1wbGVtZW50ZWQgY29udHJvbCBzeXN0ZW1zOlxuICAgICAqIDEpIE51bXBhZCBhcnJvd3NcbiAgICAgKiAyKSBWSU0ga2V5c1xuICAgICAqIDMpIE5vcm1hbCBhcnJvd3MgKDQgZGlyZWN0aW9ucyBvbmx5KVxuICAgICAqIDQpIE51bXBhZCA1IGFuZCAnLicgKHBlcmlvZCkgZm9yIFwid2FpdFwiXG4gICAgICogSWYgYSBrZXkgaXMgcHJlc3NlZCwgcmV0dXJucyB0aGUgbW92ZW1lbnQgZGVsdGEuXG4gICAgICogSWYgbm8ga2V5IGlzIHByZXNzZWQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgICAqIFNlZTogaHR0cDovL3d3dy5yb2d1ZWJhc2luLmNvbS9pbmRleC5waHA/dGl0bGU9UHJlZmVycmVkX0tleV9Db250cm9sc1xuICAgICAqL1xuICAgIGdldE1vdmVtZW50S2V5KCkge1xuICAgICAgICBpZiAodGhpcy5pc0tleVByZXNzZWQoS2V5cy5WS19OVU1QQUQxKSB8fCB0aGlzLmlzS2V5UHJlc3NlZChLZXlzLlZLX0IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KC0xLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0tleVByZXNzZWQoS2V5cy5WS19OVU1QQUQyKSB8fCB0aGlzLmlzS2V5UHJlc3NlZChLZXlzLlZLX0opIHx8IHRoaXMuaXNLZXlQcmVzc2VkKEtleXMuVktfRE9XTikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNLZXlQcmVzc2VkKEtleXMuVktfTlVNUEFEMykgfHwgdGhpcy5pc0tleVByZXNzZWQoS2V5cy5WS19OKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCgxLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0tleVByZXNzZWQoS2V5cy5WS19OVU1QQUQ0KSB8fCB0aGlzLmlzS2V5UHJlc3NlZChLZXlzLlZLX0gpIHx8IHRoaXMuaXNLZXlQcmVzc2VkKEtleXMuVktfTEVGVCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoLTEsIDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzS2V5UHJlc3NlZChLZXlzLlZLX05VTVBBRDUpIHx8IHRoaXMuaXNLZXlQcmVzc2VkKEtleXMuVktfUEVSSU9EKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0tleVByZXNzZWQoS2V5cy5WS19OVU1QQUQ2KSB8fCB0aGlzLmlzS2V5UHJlc3NlZChLZXlzLlZLX0wpIHx8IHRoaXMuaXNLZXlQcmVzc2VkKEtleXMuVktfUklHSFQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KDEsIDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzS2V5UHJlc3NlZChLZXlzLlZLX05VTVBBRDcpIHx8IHRoaXMuaXNLZXlQcmVzc2VkKEtleXMuVktfWSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoLTEsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0tleVByZXNzZWQoS2V5cy5WS19OVU1QQUQ4KSB8fCB0aGlzLmlzS2V5UHJlc3NlZChLZXlzLlZLX0spIHx8IHRoaXMuaXNLZXlQcmVzc2VkKEtleXMuVktfVVApKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KDAsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0tleVByZXNzZWQoS2V5cy5WS19OVU1QQUQ5KSB8fCB0aGlzLmlzS2V5UHJlc3NlZChLZXlzLlZLX1UpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KDEsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBidWlsZFNoYWRlcih0eXBlLCBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBjb25zdCBzaCA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgICAgICAgaWYgKCFzaCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCBjb21waWxpbmcgdGhlIHNoYWRlcjogJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoLCBzb3VyY2UpO1xuICAgICAgICBnbC5jb21waWxlU2hhZGVyKHNoKTtcbiAgICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2gsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCBjb21waWxpbmcgdGhlIHNoYWRlcjogJyArIGdsLmdldFNoYWRlckluZm9Mb2coc2gpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2g7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYSB0ZXh0dXJlIGFuZCBsb2FkIGFuIGltYWdlLlxuICAgICAqIFdoZW4gdGhlIGltYWdlIGZpbmlzaGVkIGxvYWRpbmcgY29weSBpdCBpbnRvIHRoZSB0ZXh0dXJlLlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBsb2FkVGV4dHVyZSh1cmwpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICAgICAgLy8gQmVjYXVzZSBpbWFnZXMgaGF2ZSB0byBiZSBkb3dubG9hZCBvdmVyIHRoZSBpbnRlcm5ldFxuICAgICAgICAvLyB0aGV5IG1pZ2h0IHRha2UgYSBtb21lbnQgdW50aWwgdGhleSBhcmUgcmVhZHkuXG4gICAgICAgIC8vIFVudGlsIHRoZW4gcHV0IGEgc2luZ2xlIHBpeGVsIGluIHRoZSB0ZXh0dXJlIHNvIHdlIGNhblxuICAgICAgICAvLyB1c2UgaXQgaW1tZWRpYXRlbHkuIFdoZW4gdGhlIGltYWdlIGhhcyBmaW5pc2hlZCBkb3dubG9hZGluZ1xuICAgICAgICAvLyB3ZSdsbCB1cGRhdGUgdGhlIHRleHR1cmUgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGltYWdlLlxuICAgICAgICBjb25zdCBsZXZlbCA9IDA7XG4gICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAxO1xuICAgICAgICBjb25zdCBib3JkZXIgPSAwO1xuICAgICAgICBjb25zdCBzcmNGb3JtYXQgPSBnbC5SR0JBO1xuICAgICAgICBjb25zdCBzcmNUeXBlID0gZ2wuVU5TSUdORURfQllURTtcbiAgICAgICAgY29uc3QgcGl4ZWwgPSBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMjU1XSk7IC8vIG9wYXF1ZSBibGFja1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgd2lkdGgsIGhlaWdodCwgYm9yZGVyLCBzcmNGb3JtYXQsIHNyY1R5cGUsIHBpeGVsKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgc3JjRm9ybWF0LCBzcmNUeXBlLCBpbWFnZSk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG4gICAgLy9cbiAgICAvLyBEcmF3IHRoZSBzY2VuZS5cbiAgICAvL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgICAgIGdsLmNsZWFyRGVwdGgoMS4wKTtcbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgICAgICBnbC52aWV3cG9ydCgwLCAwLCB0aGlzLnBpeGVsV2lkdGgsIHRoaXMucGl4ZWxIZWlnaHQpO1xuICAgICAgICAvLyBUZWxsIFdlYkdMIGhvdyB0byBwdWxsIG91dCB0aGUgcG9zaXRpb25zIGZyb20gdGhlIHBvc2l0aW9uXG4gICAgICAgIC8vIGJ1ZmZlciBpbnRvIHRoZSB2ZXJ0ZXhQb3NpdGlvbiBhdHRyaWJ1dGVcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IDI7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2wuRkxPQVQ7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmlkZSA9IDA7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMucG9zaXRpb25CdWZmZXIpO1xuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnBvc2l0aW9uQXR0cmliTG9jYXRpb24sIG51bUNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlbGwgV2ViR0wgaG93IHRvIHB1bGwgb3V0IHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGVzIGZyb21cbiAgICAgICAgLy8gdGhlIHRleHR1cmUgY29vcmRpbmF0ZSBidWZmZXIgaW50byB0aGUgdGV4dHVyZUNvb3JkIGF0dHJpYnV0ZS5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IDI7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2wuRkxPQVQ7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmlkZSA9IDA7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudGV4dHVyZUJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy50ZXh0dXJlQXJyYXksIGdsLkRZTkFNSUNfRFJBVyk7XG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudGV4dHVyZUF0dHJpYkxvY2F0aW9uLCBudW1Db21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3JlZ3JvdW5kIGNvbG9yXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG51bUNvbXBvbmVudHMgPSA0O1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEU7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3Qgc3RyaWRlID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5mb3JlZ3JvdW5kQnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmZvcmVncm91bmRVaW50OEFycmF5LCBnbC5EWU5BTUlDX0RSQVcpO1xuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmZnQ29sb3JBdHRyaWJMb2NhdGlvbiwgbnVtQ29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQmFja2dyb3VuZCBjb2xvclxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBudW1Db21wb25lbnRzID0gNDtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmlkZSA9IDA7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYmFja2dyb3VuZEJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5iYWNrZ3JvdW5kVWludDhBcnJheSwgZ2wuRFlOQU1JQ19EUkFXKTtcbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5iZ0NvbG9yQXR0cmliTG9jYXRpb24sIG51bUNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlbGwgV2ViR0wgd2hpY2ggaW5kaWNlcyB0byB1c2UgdG8gaW5kZXggdGhlIHZlcnRpY2VzXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kZXhCdWZmZXIpO1xuICAgICAgICAvLyBUZWxsIFdlYkdMIHRvIHVzZSBvdXIgcHJvZ3JhbSB3aGVuIGRyYXdpbmdcbiAgICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICAvLyBUZWxsIFdlYkdMIHdlIHdhbnQgdG8gYWZmZWN0IHRleHR1cmUgdW5pdCAwXG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuICAgICAgICAvLyBCaW5kIHRoZSB0ZXh0dXJlIHRvIHRleHR1cmUgdW5pdCAwXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZSk7XG4gICAgICAgIC8vIFRlbGwgdGhlIHNoYWRlciB3ZSBib3VuZCB0aGUgdGV4dHVyZSB0byB0ZXh0dXJlIHVuaXQgMFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhDb3VudCA9IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodCAqIDY7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZ2wuVU5TSUdORURfU0hPUlQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgdmVydGV4Q291bnQsIHR5cGUsIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0KSA9PiB0aGlzLnJlbmRlckxvb3AodCkpO1xuICAgIH1cbiAgICByZW5kZXJMb29wKHRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFJlbmRlclRpbWUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlbmRlclRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJEZWx0YSA9IHRpbWUgLSB0aGlzLmxhc3RSZW5kZXJUaW1lO1xuICAgICAgICAgICAgdGhpcy5sYXN0UmVuZGVyVGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLmZwcyA9IDEwMDAuMCAvIHRoaXMucmVuZGVyRGVsdGE7XG4gICAgICAgICAgICB0aGlzLmF2ZXJhZ2VGcHMgPSAwLjk1ICogdGhpcy5hdmVyYWdlRnBzICsgMC4wNSAqIHRoaXMuZnBzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5cy51cGRhdGVLZXlzKHRpbWUpO1xuICAgICAgICB0aGlzLm1vdXNlLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEJsZW5kTW9kZSwgQ2VsbCwgQ2hhcnMsIENvbG9ycywgQ29uc29sZSwgREVGQVVMVF9GT05ULCBEZWZhdWx0RGlhbG9nUmVuZGVyZXIsIERpYWxvZywgRGlhbG9nU3RhdGUsIEZvbnQsIEZvdk9jdGFudHMsIEZvdlF1YWRyYW50cywgR1VJLCBLZXlib2FyZCwgS2V5cywgTWVzc2FnZURpYWxvZywgTW91c2UsIFBvaW50LCBSTkcsIFJlY3QsIFNlbGVjdERpYWxvZywgVGVybWluYWwsIGNvbXB1dGVQYXRoLCBkZXNlcmlhbGl6ZSwgZml4Qm94Q2VsbHMsIGZyb21Ic3YsIGZyb21SZ2IsIGdldEZvdlF1YWRyYW50LCBsb2FkSW1hZ2UsIGxvYWRJbWFnZTJ4LCBzZXJpYWxpemFibGUsIHNlcmlhbGl6ZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgKiBhcyB3Z2x0IGZyb20gXCJ3Z2x0XCJcclxuaW1wb3J0IGVuZ2luZSBmcm9tICcuL2VjcydcclxuaW1wb3J0IHtBbGx5LCBBcHBlYXJhbmNlLCBDb21iYXQsIERlc2NyaXB0aW9uLCBFbmVteSwgaGFzTW92ZWQsIEhlYWx0aCwgUG9zaXRpb24sIEFjdGlvbiwgTW92ZW1lbnR9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQge2RvQWN0aW9ufSBmcm9tIFwiLi9haVwiXHJcbmltcG9ydCB7dWl9IGZyb20gXCIuL3Rlcm1pbmFsL3VpXCJcclxuaW1wb3J0IHtraWxsRW50aXR5LCBidXR0b25zfSBmcm9tIFwiLi9mdW5jdGlvbnNcIlxyXG5pbXBvcnQgYXNjaWlBcnQgZnJvbSBcIi4vYXNjaWkvbG9hZGVyXCJcclxuLy9kZWNsYXJpbmcgdmFyaWFibGVzIHdpdGggbm8gYmV0dGVyIGhvbWVzLCB5ZXQuXHJcbmdsb2JhbC5sb2NhdGlvbklkID0ge31cclxuLy9UT0RPOiBMb2FkIGZyb20gc2F2ZSBmaWxlXHJcbmdsb2JhbC5nb2xlbWFuY2VyID0ge1xyXG4gICAgZ29sZW1zOiB7XHJcbiAgICAgICAgY291bnQ6IDEwLFxyXG4gICAgICAgIGNvc3Q6IDEwLFxyXG4gICAgICAgIGRhbWFnZTogMSxcclxuICAgICAgICBkYW1hZ2VDb3N0OiAyMCxcclxuICAgICAgICBhdHRhY2tTcGVlZDogMSxcclxuICAgICAgICBhdHRhY2tTcGVlZENvc3Q6IDEwMFxyXG4gICAgfSxcclxuICAgIGN1cnJlbmN5OiB7XHJcbiAgICAgICAgcGFydHM6IDEwMFxyXG4gICAgfSxcclxuICAgIC8vMDpsaW5lLCAxOmJveCwgMjpkcmF3XHJcbiAgICBwbGFjZW1lbnQ6IHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgIH0sXHJcbiAgICB3YXZlTnVtOiAwLFxyXG4gICAgdGVybWluYWw6IHtcclxuICAgICAgICB4OiAxMjIsXHJcbiAgICAgICAgeTo3MixcclxuICAgICAgICBhcmVuYVg6ODIsXHJcbiAgICAgICAgYXJlbmFZOjUyLFxyXG4gICAgICAgIGJvdHRvbVg6ODIsXHJcbiAgICAgICAgYm90dG9tWTo3MixcclxuICAgICAgICBzaWRlWDoxMjIsXHJcbiAgICAgICAgc2lkZVk6NzIsXHJcbiAgICAgICAgc2lkZUluZGV4OjgyLFxyXG4gICAgICAgIHNpZGVNb3ZlOmZhbHNlLFxyXG4gICAgICAgIHNpZGVEaXI6IDEsXHJcbiAgICAgICAgc2lkZU91dDpmYWxzZSxcclxuICAgICAgICBzaWRlRGlzcGxheTpcIm5vbmVcIixcclxuICAgICAgICBhbGx5SGVhbHRoOjEsXHJcbiAgICAgICAgYWxseU1heEhlYWx0aDoxLFxyXG4gICAgICAgIGVuZW15SGVhbHRoOjEsXHJcbiAgICAgICAgZW5lbXlNYXhIZWFsdGg6MSxcclxuICAgICAgICBhbGx5Q291bnQ6MCxcclxuICAgICAgICBlbmVteUNvdW50OjAsXHJcbiAgICAgICAgYWxseU1pbkhlYWx0aDowLFxyXG4gICAgICAgIGVuZW15TWluSGVhbHRoOjBcclxuICAgIH1cclxufVxyXG4vL1RPRE86IExvYWQgZnJvbSBzYXZlIGZpbGVcclxuXHJcbmNvbnN0IHRlcm1pbmFsID0gbmV3IHdnbHQuVGVybWluYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyksIGdvbGVtYW5jZXIudGVybWluYWwueCwgZ29sZW1hbmNlci50ZXJtaW5hbC55KVxyXG5cclxuLy9XR0xUIGxlZnRvdmVycy4gU2V0dGluZyB0aGUgd2hvbGUgbWFwIGFzIGV4cGxvcmVkIGFuZCB2aXNpYmxlIHRvIHRoZSBwbGF5ZXJcclxuZm9yIChsZXQgeSA9IDA7IHkgPCB0ZXJtaW5hbC5oZWlnaHQ7IHkrKykge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0ZXJtaW5hbC53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgdGVybWluYWwuZ3JpZFt5XVt4XS52aXNpYmxlID0gdHJ1ZVxyXG4gICAgICAgIHRlcm1pbmFsLmdyaWRbeV1beF0uZXhwbG9yZWQgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3JlYXRpbmcgd29ybGQgdG8gY29udGFpbiBlbnRpdGllcyBpbiBvcmRlciB0byBlbmFibGUgcXVlcnlcclxuZ2xvYmFsLndvcmxkID0gZW5naW5lLmNyZWF0ZVdvcmxkKClcclxuLy9jcmVhdGUgbWFpbiBib3ggYm9yZGVyXHJcbnVpLmFyZW5hQm9yZGVyQ3JlYXRlKGdvbGVtYW5jZXIsIHdvcmxkKVxyXG51aS5ib3R0b21NZW51Qm9yZGVyQ3JlYXRlKGdvbGVtYW5jZXIsIHdvcmxkKVxyXG4vL0FycmF5IG9mIGFsbCB6b21iaWUgc3Bhd24gcG9pbnRzIHRvIHNhdmUgcHJvY2Vzc2luZyBwb3dlci4gMS0+NzUwXHJcbmNvbnN0IHNwYXduWm9uZSA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NSw0Niw0Nyw0OCw0OSw1MCw1MSw1Miw1Myw1NCw1NSw1Niw1Nyw1OCw1OSw2MCw2MSw2Miw2Myw2NCw2NSw2Niw2Nyw2OCw2OSw3MCw3MSw3Miw3Myw3NCw3NSw3Niw3Nyw3OCw3OSw4MCw4MSw4Miw4Myw4NCw4NSw4Niw4Nyw4OCw4OSw5MCw5MSw5Miw5Myw5NCw5NSw5Niw5Nyw5OCw5OSwxMDAsMTAxLDEwMiwxMDMsMTA0LDEwNSwxMDYsMTA3LDEwOCwxMDksMTEwLDExMSwxMTIsMTEzLDExNCwxMTUsMTE2LDExNywxMTgsMTE5LDEyMCwxMjEsMTIyLDEyMywxMjQsMTI1LDEyNiwxMjcsMTI4LDEyOSwxMzAsMTMxLDEzMiwxMzMsMTM0LDEzNSwxMzYsMTM3LDEzOCwxMzksMTQwLDE0MSwxNDIsMTQzLDE0NCwxNDUsMTQ2LDE0NywxNDgsMTQ5LDE1MCwxNTEsMTUyLDE1MywxNTQsMTU1LDE1NiwxNTcsMTU4LDE1OSwxNjAsMTYxLDE2MiwxNjMsMTY0LDE2NSwxNjYsMTY3LDE2OCwxNjksMTcwLDE3MSwxNzIsMTczLDE3NCwxNzUsMTc2LDE3NywxNzgsMTc5LDE4MCwxODEsMTgyLDE4MywxODQsMTg1LDE4NiwxODcsMTg4LDE4OSwxOTAsMTkxLDE5MiwxOTMsMTk0LDE5NSwxOTYsMTk3LDE5OCwxOTksMjAwLDIwMSwyMDIsMjAzLDIwNCwyMDUsMjA2LDIwNywyMDgsMjA5LDIxMCwyMTEsMjEyLDIxMywyMTQsMjE1LDIxNiwyMTcsMjE4LDIxOSwyMjAsMjIxLDIyMiwyMjMsMjI0LDIyNSwyMjYsMjI3LDIyOCwyMjksMjMwLDIzMSwyMzIsMjMzLDIzNCwyMzUsMjM2LDIzNywyMzgsMjM5LDI0MCwyNDEsMjQyLDI0MywyNDQsMjQ1LDI0NiwyNDcsMjQ4LDI0OSwyNTAsMjUxLDI1MiwyNTMsMjU0LDI1NSwyNTYsMjU3LDI1OCwyNTksMjYwLDI2MSwyNjIsMjYzLDI2NCwyNjUsMjY2LDI2NywyNjgsMjY5LDI3MCwyNzEsMjcyLDI3MywyNzQsMjc1LDI3NiwyNzcsMjc4LDI3OSwyODAsMjgxLDI4MiwyODMsMjg0LDI4NSwyODYsMjg3LDI4OCwyODksMjkwLDI5MSwyOTIsMjkzLDI5NCwyOTUsMjk2LDI5NywyOTgsMjk5LDMwMCwzMDEsMzAyLDMwMywzMDQsMzA1LDMwNiwzMDcsMzA4LDMwOSwzMTAsMzExLDMxMiwzMTMsMzE0LDMxNSwzMTYsMzE3LDMxOCwzMTksMzIwLDMyMSwzMjIsMzIzLDMyNCwzMjUsMzI2LDMyNywzMjgsMzI5LDMzMCwzMzEsMzMyLDMzMywzMzQsMzM1LDMzNiwzMzcsMzM4LDMzOSwzNDAsMzQxLDM0MiwzNDMsMzQ0LDM0NSwzNDYsMzQ3LDM0OCwzNDksMzUwLDM1MSwzNTIsMzUzLDM1NCwzNTUsMzU2LDM1NywzNTgsMzU5LDM2MCwzNjEsMzYyLDM2MywzNjQsMzY1LDM2NiwzNjcsMzY4LDM2OSwzNzAsMzcxLDM3MiwzNzMsMzc0LDM3NSwzNzYsMzc3LDM3OCwzNzksMzgwLDM4MSwzODIsMzgzLDM4NCwzODUsMzg2LDM4NywzODgsMzg5LDM5MCwzOTEsMzkyLDM5MywzOTQsMzk1LDM5NiwzOTcsMzk4LDM5OSw0MDAsNDAxLDQwMiw0MDMsNDA0LDQwNSw0MDYsNDA3LDQwOCw0MDksNDEwLDQxMSw0MTIsNDEzLDQxNCw0MTUsNDE2LDQxNyw0MTgsNDE5LDQyMCw0MjEsNDIyLDQyMyw0MjQsNDI1LDQyNiw0MjcsNDI4LDQyOSw0MzAsNDMxLDQzMiw0MzMsNDM0LDQzNSw0MzYsNDM3LDQzOCw0MzksNDQwLDQ0MSw0NDIsNDQzLDQ0NCw0NDUsNDQ2LDQ0Nyw0NDgsNDQ5LDQ1MCw0NTEsNDUyLDQ1Myw0NTQsNDU1LDQ1Niw0NTcsNDU4LDQ1OSw0NjAsNDYxLDQ2Miw0NjMsNDY0LDQ2NSw0NjYsNDY3LDQ2OCw0NjksNDcwLDQ3MSw0NzIsNDczLDQ3NCw0NzUsNDc2LDQ3Nyw0NzgsNDc5LDQ4MCw0ODEsNDgyLDQ4Myw0ODQsNDg1LDQ4Niw0ODcsNDg4LDQ4OSw0OTAsNDkxLDQ5Miw0OTMsNDk0LDQ5NSw0OTYsNDk3LDQ5OCw0OTksNTAwLDUwMSw1MDIsNTAzLDUwNCw1MDUsNTA2LDUwNyw1MDgsNTA5LDUxMCw1MTEsNTEyLDUxMyw1MTQsNTE1LDUxNiw1MTcsNTE4LDUxOSw1MjAsNTIxLDUyMiw1MjMsNTI0LDUyNSw1MjYsNTI3LDUyOCw1MjksNTMwLDUzMSw1MzIsNTMzLDUzNCw1MzUsNTM2LDUzNyw1MzgsNTM5LDU0MCw1NDEsNTQyLDU0Myw1NDQsNTQ1LDU0Niw1NDcsNTQ4LDU0OSw1NTAsNTUxLDU1Miw1NTMsNTU0LDU1NSw1NTYsNTU3LDU1OCw1NTksNTYwLDU2MSw1NjIsNTYzLDU2NCw1NjUsNTY2LDU2Nyw1NjgsNTY5LDU3MCw1NzEsNTcyLDU3Myw1NzQsNTc1LDU3Niw1NzcsNTc4LDU3OSw1ODAsNTgxLDU4Miw1ODMsNTg0LDU4NSw1ODYsNTg3LDU4OCw1ODksNTkwLDU5MSw1OTIsNTkzLDU5NCw1OTUsNTk2LDU5Nyw1OTgsNTk5LDYwMCw2MDEsNjAyLDYwMyw2MDQsNjA1LDYwNiw2MDcsNjA4LDYwOSw2MTAsNjExLDYxMiw2MTMsNjE0LDYxNSw2MTYsNjE3LDYxOCw2MTksNjIwLDYyMSw2MjIsNjIzLDYyNCw2MjUsNjI2LDYyNyw2MjgsNjI5LDYzMCw2MzEsNjMyLDYzMyw2MzQsNjM1LDYzNiw2MzcsNjM4LDYzOSw2NDAsNjQxLDY0Miw2NDMsNjQ0LDY0NSw2NDYsNjQ3LDY0OCw2NDksNjUwLDY1MSw2NTIsNjUzLDY1NCw2NTUsNjU2LDY1Nyw2NTgsNjU5LDY2MCw2NjEsNjYyLDY2Myw2NjQsNjY1LDY2Niw2NjcsNjY4LDY2OSw2NzAsNjcxLDY3Miw2NzMsNjc0LDY3NSw2NzYsNjc3LDY3OCw2NzksNjgwLDY4MSw2ODIsNjgzLDY4NCw2ODUsNjg2LDY4Nyw2ODgsNjg5LDY5MCw2OTEsNjkyLDY5Myw2OTQsNjk1LDY5Niw2OTcsNjk4LDY5OSw3MDAsNzAxLDcwMiw3MDMsNzA0LDcwNSw3MDYsNzA3LDcwOCw3MDksNzEwLDcxMSw3MTIsNzEzLDcxNCw3MTUsNzE2LDcxNyw3MTgsNzE5LDcyMCw3MjEsNzIyLDcyMyw3MjQsNzI1LDcyNiw3MjcsNzI4LDcyOSw3MzAsNzMxLDczMiw3MzMsNzM0LDczNSw3MzYsNzM3LDczOCw3MzksNzQwLDc0MSw3NDIsNzQzLDc0NCw3NDUsNzQ2LDc0Nyw3NDgsNzQ5LDc1MF1cclxuIC8vcXVlcnkgYXJyYXlcclxuZ2xvYmFsLnF1ZXJ5ID0ge1xyXG4gICAgYWxsIDogd29ybGQuY3JlYXRlUXVlcnkoe1xyXG4gICAgICAgIGFsbDogW10sXHJcbiAgICB9KSxcclxuICAgIGVuZW1pZXMgOiB3b3JsZC5jcmVhdGVRdWVyeSh7XHJcbiAgICAgICAgYWxsOiBbRW5lbXldLFxyXG4gICAgfSksXHJcbiAgICBhbGxpZXMgOiB3b3JsZC5jcmVhdGVRdWVyeSh7XHJcbiAgICAgICAgYWxsOiBbQWxseV0sXHJcbiAgICB9KSxcclxuICAgIGFjdGlvbiA6IHdvcmxkLmNyZWF0ZVF1ZXJ5KHtcclxuICAgICAgICBhbGw6IFtBY3Rpb25dLFxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG4gICAgLy9yZW5kZXJMb29wID0gdGhpbmdzIHRvIGRvIGV2ZXJ5IGxvb3AuXHJcbmxldCBtb3VzZVBhdGggPSBbXVxyXG5sZXQgcmVtb3ZlQm9vbCA9IGZhbHNlXHJcbmxldCBtb3VzZVN0YXJ0ID0ge1xyXG4gICAgeDowLFxyXG4gICAgeTowXHJcbn1cclxudGVybWluYWwudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICBnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCA9IGdvbGVtYW5jZXIucGxhY2VtZW50LmluZGV4XHJcbiAgICAvL2NsZWFycyBzY3JlZW5cclxuICAgIHRoaXMuY2xlYXIoKVxyXG4gICAgLy9zZXRzIGV2ZXJ5dGhpbmcgdG8gd2hpdGUgb24gYmxhY2tcclxuICAgIHRoaXMuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIHdnbHQuQ29sb3JzLldISVRFLCB3Z2x0LkNvbG9ycy5CTEFDSylcclxuICAgIC8vY2hlY2tzIGFsbCBlbnRpdGllcyBpZiBhY3Rpb24gaXMgYXZhaWxhYmxlLCBhbmQgdGhlbiBkbyBhY3Rpb25zXHJcbiAgICBkb0FjdGlvbih0aW1lKVxyXG4gICAgLy9kcmF3aW5nIGEgcGF0aCB3aGlsZSBtb3VzIGNsaWNrIGlzIGRvd25cclxuXHJcbiAgICAvLzA6IGxlZnQgY2xpY2ssMjogcmlnaHQgY2xpY2ssIDE6IG1pZGRsZSBjbGlja1xyXG4gICAgLy9hcyBzb29uIGFzIHRoZSBtb3VzZSBpcyBjbGlja2VkIGRvd25cclxuICAgIFxyXG4vL3pvbWJpZSB3YXZlIHNwYXduaW5nXHJcbi8vcmFuZG9tbHkgZ2VuZXJhdGUgbnVtYmVyIGJldHdlZW4gMCAoMCwwIG9mIHNwYXduIHpvbmUpIGFuZCBuIChtYXggeCwgbWF4IHkgb2Ygc3Bhd24gem9uZSlcclxuLy9kaXZpZGUgbnVtYmVyIGJ5IHggbGVuZ3RoLiBXaG9sZSBudW1iZXJzIGlzIHksIG1vZHVsbyBpcyB4LlxyXG4vL3g6IDExLTYwLCB5OiAxLTE1XHJcbi8vc3Bhd24gem9tYmllcyBpZiBubyB6b21iaWVzXHJcbmlmIChxdWVyeS5lbmVtaWVzLmdldCgpLmxlbmd0aCA8PSAwKSB7XHJcbiAgICBsZXQgc3Bhd25MaXN0ID0gW11cclxuICAgIGdvbGVtYW5jZXIud2F2ZU51bSsrXHJcbiAgICBsZXQgdGVtcFNwYXduWm9uZSA9IHNwYXduWm9uZVxyXG4gICAgbGV0IHpvbWJpZUNvdW50ID0gTWF0aC5taW4oNzUwLCBNYXRoLnBvdyhnb2xlbWFuY2VyLndhdmVOdW0sIDIpKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB6b21iaWVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHNwYXduUG9pbnQgPSB0ZW1wU3Bhd25ab25lW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0ZW1wU3Bhd25ab25lLmxlbmd0aCAtIDEpKV1cclxuXHJcbiAgICAgICAgc3Bhd25MaXN0LnB1c2goc3Bhd25Qb2ludClcclxuICAgIH1cclxuICAgIGZvcihsZXQgaSA9IDA7aSA8IHNwYXduTGlzdC5sZW5ndGg7aSsrKSB7XHJcblxyXG4gICAgICAgIGxldCB6b21iaWV4ID0gc3Bhd25MaXN0W2ldICUgNTAgKyAxMVxyXG4gICAgICAgIGxldCB6b21iaWV5ID0gTWF0aC5jZWlsKHNwYXduTGlzdFtpXSAvIDUwKVxyXG4gICAgICAgIGxldCB6b21iaWUgPSB3b3JsZC5jcmVhdGVQcmVmYWIoXCJab21iaWVcIilcclxuICAgICAgICB6b21iaWUucG9zaXRpb24ueCA9IHpvbWJpZXhcclxuICAgICAgICB6b21iaWUucG9zaXRpb24ueSA9IHpvbWJpZXlcclxuICAgICAgICBsb2NhdGlvbklkW3pvbWJpZS5wb3NpdGlvbi54ICsgXCIsXCIgKyB6b21iaWUucG9zaXRpb24ueV0gPSB6b21iaWUuaWRcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vbGVmdC9yaWdodCBtb3VzZSBjbGlja2luZyBmb3IgcGxhY2luZyB1bml0c1xyXG5pZiAodGhpcy5tb3VzZS5idXR0b25zWzBdLmRvd25Db3VudCA9PT0gMSAmJiB0aGlzLm1vdXNlLmJ1dHRvbnNbMl0uZG93bkNvdW50ID09PSAwKSB7XHJcbiAgICAvL3NldHMgc3RhcnQgb2YgcGF0aCB0byBtb3VzZSBjb29yZGluYXRlc1xyXG4gICAgbW91c2VTdGFydC54ID0gdGhpcy5tb3VzZS54XHJcbiAgICBtb3VzZVN0YXJ0LnkgPSB0aGlzLm1vdXNlLnlcclxufVxyXG5pZiAodGhpcy5tb3VzZS5idXR0b25zWzJdLmRvd25Db3VudCA9PT0gMSAmJiB0aGlzLm1vdXNlLmJ1dHRvbnNbMF0uZG93bkNvdW50ID09PSAwKSB7XHJcbiAgICAvL3NldHMgc3RhcnQgb2YgcGF0aCB0byBtb3VzZSBjb29yZGluYXRlc1xyXG4gICAgbW91c2VTdGFydC54ID0gdGhpcy5tb3VzZS54XHJcbiAgICBtb3VzZVN0YXJ0LnkgPSB0aGlzLm1vdXNlLnlcclxufVxyXG5pZiAobW91c2VTdGFydC54IDwgODEgJiYgbW91c2VTdGFydC55IDwgNTEpIHtcclxuICAgIC8vcmlnaHQgY2xpY2sgaXNuJ3QgY3VycmVudGx5IGRvd25cclxuICAgIGlmICh0aGlzLm1vdXNlLmJ1dHRvbnNbMl0uZG93bkNvdW50ID09IDApIHtcclxuICAgIC8vbGVmdCBtb3VzZSBpcyBiZWluZyBoZWxkIGRvd25cclxuICAgICAgICBpZiAodGhpcy5tb3VzZS5idXR0b25zWzBdLmRvd25Db3VudCA+IDEpIHtcclxuICAgICAgICAgICAgbW91c2VQYXRoID0gdWkucGxhY2VtZW50KHRoaXMsIG1vdXNlU3RhcnQsIGdvbGVtYW5jZXIuZ29sZW1zLmNvdW50IC0gcXVlcnkuYWxsaWVzLmdldCgpLmxlbmd0aCwgbW91c2VQYXRoLCBnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCwgcmVtb3ZlQm9vbClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9sZWZ0IG1vdXNlIGdvZXMgdXBcclxuICAgICAgICBpZiAodGhpcy5tb3VzZS5idXR0b25zWzBdLnVwQ291bnQgPT09IDEgJiYgbW91c2VQYXRoLmxlbmd0aCA+IDAgJiYgIXJlbW92ZUJvb2wpIHtcclxuICAgICAgICAgICAgLy9saW5lIHBsYWNlbWVudFxyXG4gICAgICAgICAgICBpZiAoZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDAgfHwgZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwbGFjZWFibGVHb2xlbXMgPSBnb2xlbWFuY2VyLmdvbGVtcy5jb3VudCAtIHF1ZXJ5LmFsbGllcy5nZXQoKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwbGFjZWFibGVHb2xlbXM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3VzZVBhdGhbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdXNlUGF0aFtqXS55IDwgMzAgfHwgbW91c2VQYXRoW2pdLnggPiA4MCB8fCBtb3VzZVBhdGhbal0ueSA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWFibGVHb2xlbXMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbklkW21vdXNlUGF0aFtqXS54ICsgXCIsXCIgKyBtb3VzZVBhdGhbal0ueV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWFibGVHb2xlbXMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5ID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiSHVtYW5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvc2l0aW9uLnggPSBtb3VzZVBhdGhbal0ueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9zaXRpb24ueSA9IG1vdXNlUGF0aFtqXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWRbZW50aXR5LnBvc2l0aW9uLnggKyBcIixcIiArIGVudGl0eS5wb3NpdGlvbi55XSA9IGVudGl0eS5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbW91c2VQYXRoID0gW11cclxuICAgICAgICAgICAgLy9ib3ggcGxhY2VtZW50XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vbWFrZSBhIGxpc3Qgb2YgdGhlIHNwYXduIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwYXduTGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZUNvdW50ID0gMFxyXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlYWJsZUdvbGVtcyA9IGdvbGVtYW5jZXIuZ29sZW1zLmNvdW50IC0gcXVlcnkuYWxsaWVzLmdldCgpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgLy9ib3R0b20gcmlnaHQgYm94XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3VzZS54LW1vdXNlU3RhcnQueCA+IDAgJiYgdGhpcy5tb3VzZS55LW1vdXNlU3RhcnQueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcGxhY2VhYmxlR29sZW1zO2kgPiAwICYmIGxpbmVDb3VudCA8IChtb3VzZVBhdGhbMV0ueS1tb3VzZVBhdGhbMF0ueSk7IGkgPSBpLShtb3VzZVBhdGhbMV0ueC1tb3VzZVBhdGhbMF0ueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeGkgPSBtb3VzZVBhdGhbMF0ueDsgeGkgPCBtb3VzZVBhdGhbMF0ueCArIE1hdGgubWluKGksIG1vdXNlUGF0aFsxXS54LW1vdXNlUGF0aFswXS54KTsgeGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25MaXN0LnB1c2goe3g6IHhpLCB5OiBtb3VzZVBhdGhbMF0ueStsaW5lQ291bnR9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2JvdHRvbSBsZWZ0IGJveFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdXNlLngtbW91c2VTdGFydC54IDwgMCAmJiB0aGlzLm1vdXNlLnktbW91c2VTdGFydC55ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwbGFjZWFibGVHb2xlbXM7aSA+IDAgJiYgbGluZUNvdW50IDwgKG1vdXNlUGF0aFsxXS55LW1vdXNlUGF0aFswXS55KTsgaSA9IGktKChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeGkgPSBtb3VzZVBhdGhbMV0ueCsoKChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSktKE1hdGgubWluKGksIChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSkpKTsgeGkgPCAobW91c2VQYXRoWzFdLngrKCgobW91c2VQYXRoWzBdLngtbW91c2VQYXRoWzFdLngpKzEpLShNYXRoLm1pbihpLCAobW91c2VQYXRoWzBdLngtbW91c2VQYXRoWzFdLngpKzEpKSkpICsgKE1hdGgubWluKGksIChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSkpOyB4aSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGF3bkxpc3QucHVzaCh7eDogeGksIHk6IG1vdXNlUGF0aFswXS55K2xpbmVDb3VudH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy90b3AgbGVmdCBib3hcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3VzZS54LW1vdXNlU3RhcnQueCA8IDAgJiYgdGhpcy5tb3VzZS55LW1vdXNlU3RhcnQueSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcGxhY2VhYmxlR29sZW1zO2kgPiAwICYmIGxpbmVDb3VudCA8IChtb3VzZVN0YXJ0LnktdGhpcy5tb3VzZS55KTsgaSA9IGktKChtb3VzZVN0YXJ0LngtdGhpcy5tb3VzZS54KSsxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4aSA9IG1vdXNlUGF0aFsxXS54KygoKG1vdXNlUGF0aFswXS54LW1vdXNlUGF0aFsxXS54KSsxKS0oTWF0aC5taW4oaSwgKG1vdXNlUGF0aFswXS54LW1vdXNlUGF0aFsxXS54KSsxKSkpOyB4aSA8IChtb3VzZVBhdGhbMV0ueCsoKChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSktKE1hdGgubWluKGksIChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSkpKSkgKyAoTWF0aC5taW4oaSwgKG1vdXNlUGF0aFswXS54LW1vdXNlUGF0aFsxXS54KSsxKSk7IHhpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduTGlzdC5wdXNoKHt4OiB4aSwgeTogbW91c2VQYXRoWzBdLnktbGluZUNvdW50fSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3RvcCByaWdodCBib3hcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3VzZS54LW1vdXNlU3RhcnQueCA+IDAgJiYgdGhpcy5tb3VzZS55LW1vdXNlU3RhcnQueSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcGxhY2VhYmxlR29sZW1zO2kgPiAwICYmIGxpbmVDb3VudCA8IChtb3VzZVN0YXJ0LnktdGhpcy5tb3VzZS55KTsgaSA9IGktKHRoaXMubW91c2UueC1tb3VzZVN0YXJ0LngpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHhpID0gbW91c2VQYXRoWzBdLng7IHhpIDwgbW91c2VQYXRoWzBdLnggKyBNYXRoLm1pbihpLCBtb3VzZVBhdGhbMV0ueC1tb3VzZVBhdGhbMF0ueCk7IHhpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduTGlzdC5wdXNoKHt4OiB4aSwgeTogbW91c2VQYXRoWzBdLnktbGluZUNvdW50fSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL21ha2UgbmV3IGVudGl0aWVzIGZvciB0aGUgcmVzdFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnb2xlbWFuY2VyLmdvbGVtcy5jb3VudCAmJiBzcGF3bkxpc3Rbal0gJiYgbG9jYXRpb25JZFtzcGF3bkxpc3Rbal0ueCArIFwiLFwiICsgc3Bhd25MaXN0W2pdLnldID09IHVuZGVmaW5lZDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwYXduTGlzdFtqXS55ID4gMjkgJiYgc3Bhd25MaXN0W2pdLnkgPCA1MSAmJiBzcGF3bkxpc3Rbal0ueCA8IDgyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5ID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiSHVtYW5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvc2l0aW9uLnggPSBzcGF3bkxpc3Rbal0ueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9zaXRpb24ueSA9IHNwYXduTGlzdFtqXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWRbZW50aXR5LnBvc2l0aW9uLnggKyBcIixcIiArIGVudGl0eS5wb3NpdGlvbi55XSA9IGVudGl0eS5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1vdXNlUGF0aCA9IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2xlZnQgY2xpY2sgaXMgbm90IGN1cnJlbnRseSBkb3duXHJcbiAgICBpZiAodGhpcy5tb3VzZS5idXR0b25zWzBdLmRvd25Db3VudCA9PSAwKSB7XHJcblxyXG4gICAgICAgIC8vcmlnaHQgbW91c2UgaXMgYmVpbmcgaGVsZCBkb3duXHJcbiAgICAgICAgaWYgKHRoaXMubW91c2UuYnV0dG9uc1syXS5kb3duQ291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUJvb2wgPSB0cnVlXHJcbiAgICAgICAgICAgIG1vdXNlUGF0aCA9IHVpLnBsYWNlbWVudCh0aGlzLCBtb3VzZVN0YXJ0LCBnb2xlbWFuY2VyLmdvbGVtcy5jb3VudCAtIHF1ZXJ5LmFsbGllcy5nZXQoKS5sZW5ndGgsIG1vdXNlUGF0aCwgZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXgsIHJlbW92ZUJvb2wpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vcmlnaHQgbW91c2UgdXBcclxuICAgICAgICBpZiAodGhpcy5tb3VzZS5idXR0b25zWzJdLnVwQ291bnQgPT09IDEgJiYgbW91c2VQYXRoLmxlbmd0aCA+IDAgJiYgcmVtb3ZlQm9vbCkge1xyXG4gICAgICAgICAgICAvL2xpbmUgcmVtb3ZlXHJcbiAgICAgICAgICAgIGlmIChnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCA9PT0gMCB8fCBnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG1vdXNlUGF0aC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHkgPSB3b3JsZC5nZXRFbnRpdHkobG9jYXRpb25JZFttb3VzZVBhdGhbal0ueCArIFwiLFwiICsgbW91c2VQYXRoW2pdLnldKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRpdHkgJiYgZW50aXR5LmhhcyhBbGx5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBraWxsRW50aXR5KGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3VzZVN0YXJ0ID0gbW91c2VQYXRoWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdXNlRW5kID0gbW91c2VQYXRoWzFdXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gTWF0aC5taW4obW91c2VTdGFydC54LCBtb3VzZUVuZC54KTsgaSA8IE1hdGgubWF4KG1vdXNlU3RhcnQueCwgbW91c2VFbmQueCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBNYXRoLm1pbihtb3VzZVN0YXJ0LnksIG1vdXNlRW5kLnkpOyBqIDwgTWF0aC5tYXgobW91c2VTdGFydC55LCBtb3VzZUVuZC55KTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHkgPSB3b3JsZC5nZXRFbnRpdHkobG9jYXRpb25JZFtpICsgXCIsXCIgKyBqXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eSAmJiBlbnRpdHkuaGFzKEFsbHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBraWxsRW50aXR5KGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb3VzZVBhdGggPSBbXVxyXG4gICAgICAgICAgICByZW1vdmVCb29sID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4vL3Nob3AgYnV0dG9uXHJcbn0gZWxzZSBpZiAobW91c2VTdGFydC55ID4gNjYgJiYgbW91c2VTdGFydC54IDwgMTEpIHtcclxuICAgIGlmICh0aGlzLm1vdXNlLmJ1dHRvbnNbMF0udXBDb3VudCA9PT0gMSAmJiB0aGlzLm1vdXNlLnggPCAxMSAmJiB0aGlzLm1vdXNlLnkgPiA2Nikge1xyXG4gICAgICAgIGJ1dHRvbnMub25TaG9wQ2xpY2soKVxyXG4gICAgfVxyXG4vL2J1eSBkYW1hZ2UgYnV0dG9uXHJcbn0gZWxzZSBpZiAoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlT3V0ICYmIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZURpc3BsYXkgPT0gXCJ1cGdyYWRlc1wiICYmIG1vdXNlU3RhcnQueSA+IDMgJiYgbW91c2VTdGFydC55IDwgOCAmJiBtb3VzZVN0YXJ0LnggPiAxMTAgJiYgbW91c2VTdGFydC54IDwgMTIxKSB7XHJcbiAgICBpZiAodGhpcy5tb3VzZS5idXR0b25zWzBdLnVwQ291bnQgPT09IDEgJiYgdGhpcy5tb3VzZS55ID4gMyAmJiB0aGlzLm1vdXNlLnkgPCA4ICYmIHRoaXMubW91c2UueCA+IDExMCAmJiB0aGlzLm1vdXNlLnggPCAxMjEpIHtcclxuICAgICAgICBidXR0b25zLm9uQnV5RGFtYWdlQ2xpY2soKVxyXG4gICAgfVxyXG59XHJcbi8vYnV5IGF0dGFjayBzcGVlZCBidXR0b25cclxuIGVsc2UgaWYgKGdvbGVtYW5jZXIudGVybWluYWwuc2lkZU91dCAmJiBnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVEaXNwbGF5ID09IFwidXBncmFkZXNcIiAmJiBtb3VzZVN0YXJ0LnkgPiA4ICYmIG1vdXNlU3RhcnQueSA8IDE0ICYmIG1vdXNlU3RhcnQueCA+IDExMCAmJiBtb3VzZVN0YXJ0LnggPCAxMjEpIHtcclxuICAgIGlmICh0aGlzLm1vdXNlLmJ1dHRvbnNbMF0udXBDb3VudCA9PT0gMSAmJiB0aGlzLm1vdXNlLnkgPiA4ICYmIHRoaXMubW91c2UueSA8IDE0ICYmIHRoaXMubW91c2UueCA+IDExMCAmJiB0aGlzLm1vdXNlLnggPCAxMjEpIHtcclxuICAgICAgICBidXR0b25zLm9uQnV5QXR0YWNrU3BlZWRDbGljaygpXHJcbiAgICB9XHJcbn1cclxuLy9idXkgZ29sZW1cclxuZWxzZSBpZiAoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlT3V0ICYmIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZURpc3BsYXkgPT0gXCJ1cGdyYWRlc1wiICYmIG1vdXNlU3RhcnQueSA+IDE0ICYmIG1vdXNlU3RhcnQueSA8IDIwICYmIG1vdXNlU3RhcnQueCA+IDExMCAmJiBtb3VzZVN0YXJ0LnggPCAxMjEpIHtcclxuICAgIGlmICh0aGlzLm1vdXNlLmJ1dHRvbnNbMF0udXBDb3VudCA9PT0gMSAmJiB0aGlzLm1vdXNlLnkgPiAxNCAmJiB0aGlzLm1vdXNlLnkgPCAyMCAmJiB0aGlzLm1vdXNlLnggPiAxMTAgJiYgdGhpcy5tb3VzZS54IDwgMTIxKSB7XHJcbiAgICAgICAgYnV0dG9ucy5vbkJ1eUdvbGVtQ2xpY2soKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL3NlbGVjdCBsaW5lXHJcbmVsc2UgaWYgKG1vdXNlU3RhcnQueSA+IDUxICYmIG1vdXNlU3RhcnQueSA8IDU2ICYmIG1vdXNlU3RhcnQueCA+IDI0ICYmIG1vdXNlU3RhcnQueCA8IDMxKSB7XHJcbiAgICBpZiAodGhpcy5tb3VzZS5idXR0b25zWzBdLnVwQ291bnQgPT09IDEgJiYgdGhpcy5tb3VzZS55ID4gNTEgJiYgdGhpcy5tb3VzZS55IDwgNTYgJiYgdGhpcy5tb3VzZS54ID4gMjQgJiYgdGhpcy5tb3VzZS54IDwgMzEpIHtcclxuICAgICAgICBnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCA9IDBcclxuICAgIH1cclxufVxyXG4vL3NlbGVjdCBib3hcclxuZWxzZSBpZiAobW91c2VTdGFydC55ID4gNTEgJiYgbW91c2VTdGFydC55IDwgNTYgJiYgbW91c2VTdGFydC54ID4gMzAgJiYgbW91c2VTdGFydC54IDwgMzcpIHtcclxuICAgIGlmICh0aGlzLm1vdXNlLmJ1dHRvbnNbMF0udXBDb3VudCA9PT0gMSAmJiB0aGlzLm1vdXNlLnkgPiA1MSAmJiB0aGlzLm1vdXNlLnkgPCA1NiAmJiB0aGlzLm1vdXNlLnggPiAzMCAmJiB0aGlzLm1vdXNlLnggPCAzNykge1xyXG4gICAgICAgIGdvbGVtYW5jZXIucGxhY2VtZW50LmluZGV4ID0gMVxyXG4gICAgfVxyXG59XHJcbi8vc2VsZWN0IGRyYXdcclxuZWxzZSBpZiAobW91c2VTdGFydC55ID4gNTEgJiYgbW91c2VTdGFydC55IDwgNTYgJiYgbW91c2VTdGFydC54ID4gMzYgJiYgbW91c2VTdGFydC54IDwgNDIpIHtcclxuICAgIGlmICh0aGlzLm1vdXNlLmJ1dHRvbnNbMF0udXBDb3VudCA9PT0gMSAmJiB0aGlzLm1vdXNlLnkgPiA1MSAmJiB0aGlzLm1vdXNlLnkgPCA1NiAmJiB0aGlzLm1vdXNlLnggPiAzNiAmJiB0aGlzLm1vdXNlLnggPCA0Mikge1xyXG4gICAgICAgIGdvbGVtYW5jZXIucGxhY2VtZW50LmluZGV4ID0gMlxyXG4gICAgfVxyXG59XHJcbi8vc3RhcnQgZHJhd2luZyBzdHVmZlxyXG5cclxuICAgIC8vZHJhd2luZyBVSVxyXG4gICAgLy9kcmF3IHNwYXduIGJvcmRlclxyXG4gICAgdGhpcy5kcmF3SExpbmUoMSwgMjksIDgwLCBcIi1cIiwgd2dsdC5Db2xvcnMuREFSS19HUkFZKVxyXG4gICAgLy9EcmF3aW5nIHRlc3QgcGlsb3QgcGxheWVyIGFuZCB6b21iaWVcclxuICAgIHF1ZXJ5LmFsbC5nZXQoKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgICBpZiAoIWVudGl0eS5pc0Rlc3Ryb3llZCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kcmF3Q2hhcihlbnRpdHkucG9zaXRpb24ueCwgZW50aXR5LnBvc2l0aW9uLnksIGVudGl0eS5hcHBlYXJhbmNlLmNoYXIsIGVudGl0eS5hcHBlYXJhbmNlLmNvbG9yKSwgd2dsdC5Db2xvcnMuQkxBQ0s7ICBcclxuICAgIH1cclxuICAgIH0pXHJcbiAgICAvL2RyYXdpbmcgRlBTXHJcbiAgICB0aGlzLmRyYXdTdHJpbmcoMSwxLCBTdHJpbmcoTWF0aC5yb3VuZCh0aGlzLmF2ZXJhZ2VGcHMqMTAwLzEwMCkpKVxyXG4gICAgLy9pZiBwYXRoIGV4aXN0cywgY2hhbmdlIGNlbGwgYmFja2dyb3VuZHMgdG8geWVsbG93XHJcbiAgICAvL2xpbmUgcGxhY2VtZW50IG1vZGUgYW5kIGRyYXcgcGxhY2VtZW50IG1vZGVcclxuXHJcbiAgICAvL1RPRE86IE1vdmUgdGhpcyBpbnRvIHBsYWNlbWVudC5qcyB0byBiZSBpbiBsaW5lIHdpdGggYm94IGRyYXdpbmdcclxuICAgIGlmICgoZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDAgfHwgZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDIpICYmIG1vdXNlUGF0aC5sZW5ndGggPiAwICYmICFyZW1vdmVCb29sKSB7XHJcbiAgICAgICAgbGV0IHBsYWNlYWJsZUdvbGVtcyA9IGdvbGVtYW5jZXIuZ29sZW1zLmNvdW50IC0gcXVlcnkuYWxsaWVzLmdldCgpLmxlbmd0aFxyXG4gICAgICAgIGZvciAobGV0IGk9MDtpIDwgbW91c2VQYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5nZXRDZWxsKG1vdXNlUGF0aFtpXS54LCBtb3VzZVBhdGhbaV0ueSlcclxuICAgICAgICAgICAgaWYgKGNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID49IHBsYWNlYWJsZUdvbGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QmFja2dyb3VuZCh3Z2x0LkNvbG9ycy5EQVJLX0dSQVkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uSWRbbW91c2VQYXRoW2ldLnggKyBcIixcIiArIG1vdXNlUGF0aFtpXS55XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QmFja2dyb3VuZCh3Z2x0LkNvbG9ycy5EQVJLX0dSQVkpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VhYmxlR29sZW1zKytcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW91c2VQYXRoW2ldLnkgPCAzMCB8fCBtb3VzZVBhdGhbaV0ueCA+IDgwIHx8IG1vdXNlUGF0aFtpXS55ID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEJhY2tncm91bmQod2dsdC5Db2xvcnMuREFSS19HUkFZKVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlYWJsZUdvbGVtcysrXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEJhY2tncm91bmQod2dsdC5Db2xvcnMuWUVMTE9XKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgoZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDAgfHwgZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDIpICYmIG1vdXNlUGF0aC5sZW5ndGggPiAwICYmIHJlbW92ZUJvb2wpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7aSA8IG1vdXNlUGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHRoaXMuZ2V0Q2VsbChtb3VzZVBhdGhbaV0ueCwgbW91c2VQYXRoW2ldLnkpXHJcbiAgICAgICAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25JZFttb3VzZVBhdGhbaV0ueCArIFwiLFwiICsgbW91c2VQYXRoW2ldLnldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eSA9IHdvcmxkLmdldEVudGl0eShsb2NhdGlvbklkW21vdXNlUGF0aFtpXS54ICsgXCIsXCIgKyBtb3VzZVBhdGhbaV0ueV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eS5oYXMoQWxseSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRCYWNrZ3JvdW5kKHdnbHQuQ29sb3JzLllFTExPVylcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEJhY2tncm91bmQod2dsdC5Db2xvcnMuREFSS19HUkFZKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRCYWNrZ3JvdW5kKHdnbHQuQ29sb3JzLkRBUktfR1JBWSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuLy9maXggdGhpcyBzdHVwaWQgbG9naWMsIG1heWJlIGEgbmV3IGZ1bmN0aW9uXHJcbiAgICBpZihnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVNb3ZlIHx8IGdvbGVtYW5jZXIudGVybWluYWwuc2lkZU91dCkge1xyXG4gICAgICAgIGlmIChnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVPdXQgJiYgIWdvbGVtYW5jZXIudGVybWluYWwuc2lkZU1vdmUpIHtcclxuICAgICAgICAgICAgdWkuc2lkZU1lbnVPdXQodGVybWluYWwsIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZUluZGV4KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVEaXIgPT0gMCkge1xyXG4gICAgICAgICAgICB1aS5zaWRlTWVudUluKHRlcm1pbmFsLCBnb2xlbWFuY2VyLnRlcm1pbmFsLnNpZGVJbmRleClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ29sZW1hbmNlci50ZXJtaW5hbC5zaWRlRGlyID09IDEpIHtcclxuICAgICAgICAgICAgdWkuc2lkZU1lbnVPdXQodGVybWluYWwsIGdvbGVtYW5jZXIudGVybWluYWwuc2lkZUluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL21vdXNlIGRlYnVnXHJcbiAgICB0aGlzLmRyYXdTdHJpbmcoMSwyLCBcIm1vdXNlIHg6IFwiICsgU3RyaW5nKHRoaXMubW91c2UueCkpXHJcbiAgICB0aGlzLmRyYXdTdHJpbmcoMSwzLCBcIm1vdXNlIHk6IFwiICsgU3RyaW5nKHRoaXMubW91c2UueSkpXHJcbiAgICB1aS5ib3R0b21NZW51VXBkYXRlKHRlcm1pbmFsKVxyXG4gICAgdWkuc2lkZU1lbnVVcGRhdGUodGVybWluYWwpXHJcbiAgICAvL2hhY2tpbmcgZXZlcnl0aGluZyB0b2dldGhlclxyXG4gICAgbGV0IHRleHQgPSBcIiAgICBfLS1fXFxuICAgLyAgICBcXFxcIFxcbiAgfCAgICAgIHxcXG4gICBcXFxcICAgIC9cXG4gIC4tJyAgICctLlxcbi9gICAgICAgICAgYFxcXFxcXG58ICAgICAgICAgICB8XFxuKCBcXFxcICAgICAgIC8gKVxcbnwgL3wgICAgIHxcXFxcIHxcXG58IHx8ICAgICB8fCB8IFxcbnwgfHwgICAgIHx8IHxcXG58IHx8ICAgICB8fCB8XFxuOzs7ICAgICAgIDs7O1xcbiAgfCAgXFxcXCAvICB8XFxuICB8ICAgfCAgIHxcXG4gIDsgIHwgfCAgO1xcbiAgfCAgfCB8ICB8XFxuICB8IF98IHxfIHxcXG4gIC8gIHwgfCAgXFxcXFxcbiAgfCAgfCB8ICB8XFxuICB8ICB8IHwgIHxcXG4gIC8gIHwgfCAgXFxcXFxcbjxgX19ffCB8X19fYD5cIlxyXG4gICAgLy90aGlzLmRyYXdTdHJpbmcoODMsMiwgdGV4dClcclxuICAgIFxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==