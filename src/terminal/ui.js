import {placement} from "./placement"
import * as wglt from "wglt"

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
    let buttonColor = wglt.Colors.WHITE
    if (golemancer.terminal.sideDisplay == "upgrades") {
        buttonColor = wglt.Colors.LIGHT_GREEN
    }
    terminal.drawHLine(1, golemancer.terminal.bottomY - 5, 10, 0xC4, buttonColor)
    terminal.drawVLine(11, golemancer.terminal.bottomY - 4, 3, 0xB3, buttonColor)
    terminal.drawString(2, golemancer.terminal.bottomY - 3, "UPGRADES", buttonColor)

    //buttons for line, box, draw
    let lineColor = wglt.Colors.WHITE
    let boxColor = wglt.Colors.WHITE
    let drawColor = wglt.Colors.WHITE

    switch(golemancer.placement.index) {
        case 0:
            lineColor = wglt.Colors.LIGHT_GREEN
            break;
        case 1:
            boxColor = wglt.Colors.LIGHT_GREEN
            break;
        case 2:
            drawColor = wglt.Colors.LIGHT_GREEN
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
                let damageColor = wglt.Colors.DARK_GRAY
                if (golemancer.golems.damageCost <= golemancer.currency.parts) {
                    damageColor = wglt.Colors.WHITE
                }
                terminal.drawHLine(golemancer.terminal.sideX - 11, 3, 10, 0xC4, damageColor)
                terminal.drawHLine(golemancer.terminal.sideX - 11, 7, 10, 0xC4, damageColor)
                terminal.drawVLine(golemancer.terminal.sideX - 11, 4, 3, 0xB3, damageColor)
                terminal.drawVLine(golemancer.terminal.sideX - 2, 4, 3, 0xB3, damageColor)
                terminal.drawString(golemancer.terminal.sideX - 8, 4, "Buy", damageColor)
                terminal.drawString(golemancer.terminal.sideX - 9, 6, "Damage", damageColor)

                //Attack Speed button
                let attackSpeedColor = wglt.Colors.DARK_GRAY
                if (golemancer.golems.attackSpeedCost <= golemancer.currency.parts) {
                    attackSpeedColor = wglt.Colors.WHITE
                }
                terminal.drawHLine(golemancer.terminal.sideX - 11, 9, 10, 0xC4, attackSpeedColor)
                terminal.drawHLine(golemancer.terminal.sideX - 11, 13, 10, 0xC4, attackSpeedColor)
                terminal.drawVLine(golemancer.terminal.sideX - 11, 10, 3, 0xB3, attackSpeedColor)
                terminal.drawVLine(golemancer.terminal.sideX - 2, 10, 3, 0xB3, attackSpeedColor)
                terminal.drawString(golemancer.terminal.sideX - 8, 10, "Buy", attackSpeedColor)
                terminal.drawString(golemancer.terminal.sideX - 10, 12, "AtkSpeed", attackSpeedColor)

                //Golem button
                let golemColor = wglt.Colors.DARK_GRAY
                if (golemancer.golems.cost <= golemancer.currency.parts) {
                    golemColor = wglt.Colors.WHITE
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
export let ui = {
    placement,
    arenaBorderCreate,
    bottomMenuBorderCreate,
    bottomMenuUpdate,
    sideMenuOut,
    sideMenuIn,
    sideMenuUpdate    
}