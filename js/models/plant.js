class Plant {


    static all = []
   


    constructor({id, name, plant_type , image, garden_id, water_level}){
   
        

        this.id = id,
        this.name = name,
        this.plantType = plant_type,
        this.image = image,
        this.gardenID = garden_id,
        this.waterLevel = water_level,

        Plant.all.push(this)
        
     
    }



}



makePlantCard =(plant)=>{ 
    //    debugger
    
    return `

        <h2 id="name" data-id="${plant.id}">Plant Name: ${plant.name}</h2>
        <h2 id="plantType"> Plant Type: ${plant.plantType} </h2>>
        <img src= "${plant.image}" alt="plant" width="100" height="200">
        <p> ${plant.waterLevel} Water Level </p>
        <button data-id="${plant.id}" class="waterLevel-btn"> water </button>
    

        `

}

renderPlant =(plant)=> {  


    

    const cardDiv = document.createElement("div")

  
    cardDiv.classList.add("card")
 
    cardDiv.setAttribute("data-id", plant.gardenID)
    
    cardDiv.id = plant.id

    cardDiv.innerHTML = makePlantCard(plant)
    //  debugger
   
    
    console.log(plant);
    const collectionDiv = document.getElementById(plant.gardenID)
    
    collectionDiv.append(cardDiv);
    
    // debugger
    
}