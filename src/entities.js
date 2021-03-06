import { Colors,  } from "wglt"
//default "Being"mob with related components
export let Being = {
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
export let Human = {
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
                color: Colors.LIGHT_MAGENTA
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
export let Zombie = {
    name: "Zombie",
    inherit: "Being",
    components: [
    {
        type: "Appearance",
          properties: {
            char: "Z",
            color: Colors.DARK_GREEN
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

export let Structure = {
    name: "Structure",
    components: [
        {
            type: "Appearance",
              properties: {
                    char: "X",
                    color: Colors.WHITE
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

export let Horizontal = {
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

export let Vertical = {
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

export let BottomLeft = {
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

export let BottomRight = {
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

export let TopLeft = {
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

export let TopRight = {
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

export let TRight = {
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

export let TLeft = {
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
export let SingleHorizontal = {
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

export let SingleVertical = {
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