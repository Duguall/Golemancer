import { Colors } from "wglt"
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
        },
        {
            type: "Position",
        },
        {
            type: "Action",
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
    { type: "Action",
        properties: {
            speed: 1000
        }    
    },
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
    {
        type: "Health",
        properties: {
            hp: 10,
            maxHp: 10
        },
    },
    {
        type: "Movement",
        properties: {
            velocity: 1,
        },
    }
   ] 
};
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
         type: "Health",
         properties: {
             hp: 10,
             maxHp: 10
         },
     },
 
     {
         type: "Movement",
         properties: {
             velocity: 50,
         },
     },
    ] 
};

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