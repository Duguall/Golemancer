import {Enemy} from "./components"

export function killEntity(entity) {
    if (entity.has(Enemy)) {
        golemancer.currency.parts += 5
    }
    delete global.locationId[entity.position.x + "," + entity.position.y]
    entity.destroy()
}

//clicking the buy golem button, adjusts costs and counters. Cost = 10*golems^1.1
export let onBuyGolemClick = function() {
    if (golemancer.currency.parts >= golemancer.golems.cost) {
        golemancer.golems.count++
        golemancer.currency.parts -= golemancer.golems.cost
        golemancer.golems.cost = Math.floor(10*Math.pow(1.1, golemancer.golems.count))
    }
}

export let onBuyDamageClick = function() {
    if (golemancer.currency.parts >= golemancer.golems.damageCost) {
        golemancer.golems.damage++
        golemancer.currency.parts -= golemancer.golems.damageCost
        golemancer.golems.damageCost = Math.floor(20*Math.pow(1.1, golemancer.golems.damage))
    }
}
export let onBuyAttackSpeedClick = function() {
    if (golemancer.currency.parts >= golemancer.golems.attackSpeedCost) {
        golemancer.golems.attackSpeed++
        golemancer.currency.parts -= golemancer.golems.attackSpeedCost
        golemancer.golems.attackSpeedCost = Math.floor(100*Math.pow(1.1, golemancer.golems.attackSpeed))
    }
}

export let onShopClick = function() {
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


export let buttons = {
    onShopClick,
    onBuyAttackSpeedClick,
    onBuyDamageClick,
    onBuyGolemClick
}