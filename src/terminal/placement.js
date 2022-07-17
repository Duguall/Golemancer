import * as wglt from "wglt"
import {Ally} from "../components"
function line(terminal, mouseStart) {
    return wglt.computePath(terminal, mouseStart, terminal.mouse, 1000)
}
function boxRemove(terminal, mouseStart) {
    for (let i = Math.min(mouseStart.x, terminal.mouse.x); i < Math.max(mouseStart.x, terminal.mouse.x); i++) {
        for (let j = Math.min(mouseStart.y, terminal.mouse.y); j < Math.max(mouseStart.y, terminal.mouse.y); j++) {
            let entity = world.getEntity(locationId[i + "," + j])
            if (entity && entity.has(Ally)) {
                let cell = terminal.getCell(entity.position.x, entity.position.y)
                cell.setBackground(wglt.Colors.YELLOW)
            }
        }
    }
}
function box(terminal, mouseStart, golemCount, removeBool) {
    let mousePath = []
    let lineCount = 0

    //bottom right box
    if (terminal.mouse.x - mouseStart.x > 0 && terminal.mouse.y - mouseStart.y > 0) {
        terminal.fillRect(mouseStart.x, mouseStart.y, terminal.mouse.x - mouseStart.x, terminal.mouse.y - mouseStart.y, 0, undefined, wglt.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (terminal.mouse.y - mouseStart.y); i = i - (terminal.mouse.x - mouseStart.x)) {
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {
                    terminal.drawHLine(mouseStart.x, mouseStart.y + lineCount, Math.min(i, terminal.mouse.x - mouseStart.x), 0, undefined, wglt.Colors.YELLOW)
                    lineCount++
                }
            }
        }
        //bottom left box
    } else if (terminal.mouse.x - mouseStart.x < 0 && terminal.mouse.y - mouseStart.y > 0) {
        terminal.fillRect(terminal.mouse.x, mouseStart.y, (mouseStart.x - terminal.mouse.x) + 1, terminal.mouse.y - mouseStart.y, 0, undefined, wglt.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (terminal.mouse.y - mouseStart.y); i = i - ((mouseStart.x - terminal.mouse.x) + 1)) {
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {
                    terminal.drawHLine(terminal.mouse.x + (((mouseStart.x - terminal.mouse.x) + 1) - (Math.min(i, (mouseStart.x - terminal.mouse.x) + 1))), mouseStart.y + lineCount, Math.min(i, (mouseStart.x - terminal.mouse.x) + 1), 0, undefined, wglt.Colors.YELLOW)
                    lineCount++
                }
            }
        }
        //top left box
    } else if (terminal.mouse.x - mouseStart.x < 0 && terminal.mouse.y - mouseStart.y < 0) {
        terminal.fillRect(terminal.mouse.x, terminal.mouse.y + 1, (mouseStart.x - terminal.mouse.x) + 1, mouseStart.y - terminal.mouse.y, 0, undefined, wglt.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (mouseStart.y - terminal.mouse.y); i = i - ((mouseStart.x - terminal.mouse.x) + 1)) {    
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {        
                    terminal.drawHLine(terminal.mouse.x + (((mouseStart.x - terminal.mouse.x) + 1) - (Math.min(i, (mouseStart.x - terminal.mouse.x) + 1))), mouseStart.y - lineCount, Math.min(i, (mouseStart.x - terminal.mouse.x) + 1), 0, undefined, wglt.Colors.YELLOW)
                    lineCount++
                }
            }
        }
        //top right box
    } else if (terminal.mouse.x - mouseStart.x > 0 && terminal.mouse.y - mouseStart.y < 0) {
        terminal.fillRect(mouseStart.x, terminal.mouse.y + 1, terminal.mouse.x - mouseStart.x, mouseStart.y - terminal.mouse.y, 0, undefined, wglt.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (mouseStart.y - terminal.mouse.y); i = i - (terminal.mouse.x - mouseStart.x)) {    
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {        
                    terminal.drawHLine(mouseStart.x, mouseStart.y - lineCount, Math.min(i, terminal.mouse.x - mouseStart.x), 0, undefined, wglt.Colors.YELLOW)
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


export let placement = function(terminal, mouseStart, golemCount, mousePath, placementIndex, removeBool){
    if (placementIndex === 0) {
        return line(terminal, mouseStart)
    } else if (placementIndex === 1) {
        return box(terminal, mouseStart, golemCount, removeBool)
    } else if (placementIndex === 2) {
        return draw(terminal, mousePath)
    }

}
