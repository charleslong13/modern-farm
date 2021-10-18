import {createPlan} from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import {createPotato} from "./seeds/potato.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js" 
import {createSoybean} from "./seeds/soybean.js"
import {createCorn} from "./seeds/corn.js"
import {plantSeeds} from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { usePlants } from "./field.js"


const creatingPlan = createPlan()
plantSeeds(creatingPlan)
// console.log(plantYoSeeds)

// console.log(creatingPlan)

const getPlantArray = usePlants()
const harvestedPlants = harvestPlants(getPlantArray)
console.log(harvestedPlants)


import { Catalog } from "./catalog.js"
const getCatalog = Catalog(harvestedPlants)
console.log(getCatalog)


let containerHTML= document.querySelector(".container") 
containerHTML.innerHTML = getCatalog






// console.log("Welcome to the main module")

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// import { addPlant } from "./field.js"
// import { usePlants } from "./field.js"


// let seed = {
//     type: "Potato",
//         height: 32,
//         output: 2
//     }

// addPlant(seed)
// let usedPlants = usePlants()
// console.log(usedPlants)


