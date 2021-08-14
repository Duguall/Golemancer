import { Component } from "geotic"
import { Colors } from "wglt"


export class Ally extends Component {
    static properties = {
    };
}
//declaring components
//char = displayed character, color = displayed color
export class Appearance extends Component {
    static properties = {
        char: "@",
        color: Colors.WHITE
    }
}
//target = current primary target
export class Combat extends Component {
    static properties = {
        target: "",
        x: 0,
        y: 0,
        distance: 0
    }
}
//name = name of object, desc = description of object
export class Description extends Component {
    static properties = {
        desc: ""
    }
}
export class Enemy extends Component {
    static properties = {
    };
}
//hp = current health, maxHp = maximum health allowed
export class Health extends Component {
    static properties = {
        hp: 1,
        maxHp: 1
    }  
}
//x,y = x,y coordinate position on display
export class Position extends Component {
    static properties = {
        x: 0,
        y: 0
    };
}
//action = action speed in milliseconds i.e. how fast all actions such as moving and attacking are done
export class Action extends Component {
    static properties = {
        speed: 1000,
        last: 0,
        adjusted: 1000
    }
}
//x = horizontal movement speed, y = vertical movement speed. i.e. per movement action move up to x/y velocity.
export class Movement extends Component {
    static properties = {
        velocity: 0,
        x: 0,
        y: 0 
    };
}

