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

        <h4 id="name" data-id="${plant.gardenID}"> Plant Name: ${plant.name} </h4>
        <img src= "${plant.image}" alt="plant" width="150" height="150">
        <h4 id="plantType"> Plant Type: ${plant.plantType} </h4>
        <p> Water Level : ${plant.waterLevel}  </p>
        <button data-id="${plant.id}" class="waterLevel-btn"> water+ </button>
        <button data-id="${plant.id}" class="delete-btn"> dig out </button>

        `

}

renderPlant =(plant)=> {  


    

    const cardDiv = document.createElement("div")

  
    cardDiv.classList.add("card")
 
    cardDiv.setAttribute("data-id", plant.gardenID)
    
    cardDiv.id = plant.gardenID

    cardDiv.innerHTML = makePlantCard(plant)
    //  debugger
   
    
    console.log(plant);

    const collectionDiv = document.getElementById(plant["gardenID"])
    
    // debugger
    collectionDiv.append(cardDiv);
    

    // debugger
    
}


const samplePlant = new Plant({id:99, name: "Cempasuchil", plant_type: "Flower", image:"https://static.educalingo.com/img/es/800/tagetes-erecta.jpg", water_level:3, garden_id: 99})
const samplePlant2 = new Plant({id:9, name: "Orchid", plant_type: "Flower", image:"https://assets.eflorist.com/assets/products/PHR_/TPL05-1A.jpg", water_level:6, garden_id: 1})
console.log(samplePlant2);


renderPlant(samplePlant2);

