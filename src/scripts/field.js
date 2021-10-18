let storedPlantsArray = []

export const addPlant = (seedObj) => {
storedPlantsArray.push(seedObj)
}

export const usePlants = () => {
    return storedPlantsArray
}

// console.log(storedPlantsArray)
