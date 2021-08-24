use recipe_organiser;
db.dropDatabase();


db.recipes.insertMany([
    {
        name: "bbq rub",
        machineNumber: 12,
        ingredients: [
            {name: "salt", kg: 20.87},
            {name: "carmine", kg: 100},
            {name: "brownsugar", kg: 217.00}
        ],
        weight:500.00
    },
    {
        name: "fish flavour",
        machineNumber: 9,
        ingredients: [
            {name:"salt", kg:20.87},
            {name:"carmine", kg:100},
            {name:"brown sugar", kg:217.00},
            {name:"fish powder", kg:19},
            {name:"lemon flv", kg:14}
        ],
        weight:249.00
    },
    {
        name: "spicy bangers",
        machineNumber: 2,
        ingredients: [
            {name:"salt", kg:20.87},
            {name:"carmine", kg:100},
            {name:"chilli", kg:217.00},
            {name:"paprika", kg:19},
            {name:"smoke flv", kg:14}
        ],
        weight:100.00
    }
]);



