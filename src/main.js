import * as wglt from "wglt"
import engine from './ecs'
import {Ally, Appearance, Combat, Description, Enemy, hasMoved, Health, Position, Action, Movement} from "./components"
import {doAction} from "./ai"
import {ui} from "./terminal/ui"
import {killEntity, buttons} from "./functions"
import asciiArt from "./ascii/loader"
//declaring variables with no better homes, yet.
global.locationId = {}
//TODO: Load from save file
global.golemancer = {
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

const terminal = new wglt.Terminal(document.querySelector('canvas'), golemancer.terminal.x, golemancer.terminal.y)

//WGLT leftovers. Setting the whole map as explored and visible to the player
for (let y = 0; y < terminal.height; y++) {
    for (let x = 0; x < terminal.width; x++) {
        terminal.grid[y][x].visible = true
        terminal.grid[y][x].explored = true
    }
}

//creating world to contain entities in order to enable query
global.world = engine.createWorld()
//create main box border
ui.arenaBorderCreate(golemancer, world)
ui.bottomMenuBorderCreate(golemancer, world)
//Array of all zombie spawn points to save processing power. 1->750
const spawnZone = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750]
 //query array
global.query = {
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
    this.fillRect(0, 0, this.width, this.height, 0, wglt.Colors.WHITE, wglt.Colors.BLACK)
    //checks all entities if action is available, and then do actions
    doAction(time)
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
            mousePath = ui.placement(this, mouseStart, golemancer.golems.count - query.allies.get().length, mousePath, golemancer.placement.index, removeBool)
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
            mousePath = ui.placement(this, mouseStart, golemancer.golems.count - query.allies.get().length, mousePath, golemancer.placement.index, removeBool)
        }
        //right mouse up
        if (this.mouse.buttons[2].upCount === 1 && mousePath.length > 0 && removeBool) {
            //line remove
            if (golemancer.placement.index === 0 || golemancer.placement.index === 2) {
                for(let j = 0; j < mousePath.length; j++) {
                    let entity = world.getEntity(locationId[mousePath[j].x + "," + mousePath[j].y])
                    if (entity && entity.has(Ally)) {
                        killEntity(entity)
                    }
                }
            }else if (golemancer.placement.index === 1) {
                    let mouseStart = mousePath[0]
                    let mouseEnd = mousePath[1]
                for (let i = Math.min(mouseStart.x, mouseEnd.x); i < Math.max(mouseStart.x, mouseEnd.x); i++) {
                    for (let j = Math.min(mouseStart.y, mouseEnd.y); j < Math.max(mouseStart.y, mouseEnd.y); j++) {
                        let entity = world.getEntity(locationId[i + "," + j])
                        if (entity && entity.has(Ally)) {
                            killEntity(entity)
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
        buttons.onShopClick()
    }
//buy damage button
} else if (golemancer.terminal.sideOut && golemancer.terminal.sideDisplay == "upgrades" && mouseStart.y > 3 && mouseStart.y < 8 && mouseStart.x > 110 && mouseStart.x < 121) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.y > 3 && this.mouse.y < 8 && this.mouse.x > 110 && this.mouse.x < 121) {
        buttons.onBuyDamageClick()
    }
}
//buy attack speed button
 else if (golemancer.terminal.sideOut && golemancer.terminal.sideDisplay == "upgrades" && mouseStart.y > 8 && mouseStart.y < 14 && mouseStart.x > 110 && mouseStart.x < 121) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.y > 8 && this.mouse.y < 14 && this.mouse.x > 110 && this.mouse.x < 121) {
        buttons.onBuyAttackSpeedClick()
    }
}
//buy golem
else if (golemancer.terminal.sideOut && golemancer.terminal.sideDisplay == "upgrades" && mouseStart.y > 14 && mouseStart.y < 20 && mouseStart.x > 110 && mouseStart.x < 121) {
    if (this.mouse.buttons[0].upCount === 1 && this.mouse.y > 14 && this.mouse.y < 20 && this.mouse.x > 110 && this.mouse.x < 121) {
        buttons.onBuyGolemClick()
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
    this.drawHLine(1, 29, 80, "-", wglt.Colors.DARK_GRAY)
    //Drawing test pilot player and zombie
    query.all.get().forEach((entity) => {
        if (!entity.isDestroyed) {

            this.drawChar(entity.position.x, entity.position.y, entity.appearance.char, entity.appearance.color), wglt.Colors.BLACK;  
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
                    cell.setBackground(wglt.Colors.DARK_GRAY)
                } else if (locationId[mousePath[i].x + "," + mousePath[i].y]) {
                    cell.setBackground(wglt.Colors.DARK_GRAY)
                    placeableGolems++
                } else if (mousePath[i].y < 30 || mousePath[i].x > 80 || mousePath[i].y > 50) {
                    cell.setBackground(wglt.Colors.DARK_GRAY)
                    placeableGolems++

                } else {
                    cell.setBackground(wglt.Colors.YELLOW)
                }
            }
        }
    } else if ((golemancer.placement.index === 0 || golemancer.placement.index === 2) && mousePath.length > 0 && removeBool) {
        for (let i=0;i < mousePath.length; i++) {
            let cell = this.getCell(mousePath[i].x, mousePath[i].y)
            if (cell) {
                if (locationId[mousePath[i].x + "," + mousePath[i].y]) {
                    let entity = world.getEntity(locationId[mousePath[i].x + "," + mousePath[i].y])
                    if (entity.has(Ally)) {
                        cell.setBackground(wglt.Colors.YELLOW)
                    } else {
                        cell.setBackground(wglt.Colors.DARK_GRAY)
                    }
                } else {
                    cell.setBackground(wglt.Colors.DARK_GRAY)
                }
            }
        }
    }
//fix this stupid logic, maybe a new function
    if(golemancer.terminal.sideMove || golemancer.terminal.sideOut) {
        if (golemancer.terminal.sideOut && !golemancer.terminal.sideMove) {
            ui.sideMenuOut(terminal, golemancer.terminal.sideIndex)
        }
        else if (golemancer.terminal.sideDir == 0) {
            ui.sideMenuIn(terminal, golemancer.terminal.sideIndex)
        }
        else if (golemancer.terminal.sideDir == 1) {
            ui.sideMenuOut(terminal, golemancer.terminal.sideIndex)
        }
    }

    //mouse debug
    this.drawString(1,2, "mouse x: " + String(this.mouse.x))
    this.drawString(1,3, "mouse y: " + String(this.mouse.y))
    ui.bottomMenuUpdate(terminal)
    ui.sideMenuUpdate(terminal)
    //hacking everything together
    let text = "    _--_\n   /    \\ \n  |      |\n   \\    /\n  .-'   '-.\n/`         `\\\n|           |\n( \\       / )\n| /|     |\\ |\n| ||     || | \n| ||     || |\n| ||     || |\n;;;       ;;;\n  |  \\ /  |\n  |   |   |\n  ;  | |  ;\n  |  | |  |\n  | _| |_ |\n  /  | |  \\\n  |  | |  |\n  |  | |  |\n  /  | |  \\\n<`___| |___`>"
    //this.drawString(83,2, text)
    
}
