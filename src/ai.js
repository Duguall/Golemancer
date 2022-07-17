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
import { hasMoved } from "./components"
import * as wglt from "wglt"
import { killEntity } from "./functions"
import { Enemy, Ally } from "./components"
export let entityAI = {
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
            entity.add(hasMoved)
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
export function enemyAI(entityEnemy, time) {
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
                if (entityEnemy.has(hasMoved)) {
                    multiplier = entityEnemy.movement.velocity
                    entityEnemy.remove(entityEnemy.hasMoved)
                }
                    entityEnemy.action.adjusted = (entityEnemy.action.speed + entityEnemy.action.speed - (time - entityEnemy.action.last))/multiplier
                    entityEnemy.action.last = time
            }
        }
    }
export function allyAI(entityAlly, time) {
    if (entityAlly.description.name == "Human") {
        //action available
        if (time - entityAlly.action.last >= entityAlly.action.adjusted) { 
            //get a target
            let target = world.getEntity(entityAlly.combat.target)
            if (!target || Math.abs(entityAlly.position.x - target.position.x) > entityAlly.combat.range  && Math.abs(entityAlly.position.y - target.position.y) > entityAlly.combat.range) {
                if(target) {target.appearance.color = wglt.Colors.DARK_GREEN}
                entityAI.target.adjacent(entityAlly, "enemies", 0)
            //have a target
            } else {
                target.appearance.color = wglt.Colors.LIGHT_RED
                target.fireEvent("damage-taken", {damage:golemancer.golems.damage})
                if (target.health.hp <= target.health.minHp) {
                    killEntity(target)
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
                if (entityAlly.has(hasMoved)) {
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
export function doAction(time) {
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
        if (entity.has(Enemy)) {
            golemancer.terminal.enemyCount++
            golemancer.terminal.enemyHealth += entity.health.hp
            golemancer.terminal.enemyMaxHealth += entity.health.maxHp
            golemancer.terminal.enemyMinHealth += entity.health.minHp
            enemyAI(entity, time)
        } else if (entity.has(Ally)) {
            golemancer.terminal.allyCount++
            golemancer.terminal.allyHealth += entity.health.hp
            golemancer.terminal.allyMaxHealth += entity.health.maxHp
            golemancer.terminal.allyMinHealth += entity.health.minHp
            allyAI(entity, time)
        }
        
    })
}