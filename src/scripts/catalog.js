




export const Catalog = (harvestedPlants) => {
    let html = ""
    for (const plantObj of harvestedPlants) {
        html += ` <section class="plant"> ${plantObj.type} </section>`
    }
    return html
}

