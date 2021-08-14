import { Colors } from "wglt"
//default "Being"mob with related components
export let Being = {
    name: "Being",
    components: [
        {
            type: "Appearance",
              properties: {
                    char: "@",
                    color: Colors.WHITE
            }
        },
        {
            type: "Combat",
            properties: {
                target: "",
                x: 0,
                y: 0
            },
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
               hp: 1,
               maxHp: 1
            },
        },
        {
            type: "Position",
            properties: {
                x: 0,
                y: 0
            },
        },
        {
            type: "Action",
            properties: {
                speed: 1000,
                last: 0,
                adjusted: 1000,
            }
        },
        {
            type: "Movement",
            properties: {
                velocity: 0,
                x: 0,
                y: 0,
                cardinal: 0
            },
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
                color: Colors.YELLOW
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
            x: 0,
            y: 0,
            cardinal: 0
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
             velocity: 1,
             x: 0,
             y: 0,
             cardinal: 0
         },
     },
    ] 
};