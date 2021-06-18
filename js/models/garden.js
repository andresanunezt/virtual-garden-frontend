class Garden{


    static all = []
   


    
    constructor({id, name, likes, location, gardener_name}){
   

        this.id = id,
        this.name = name,
        this.gardenerName = gardener_name,
        this.likes = likes,
        this.location = location,

        Garden.all.push(this)
        
        // debugger
     
    }

    

}


makeACard =(garden)=>{ 
    //    debugger
    
    return `
        <br>
        <h5> -------------------------------- </h5>
        <br>
        <h2 id="name" data-id="${garden.id}">Garden Name: ${garden.name}</h2>
        <h3 id="location"> Location: ${garden.location} </h3>
        <h3> Gardener: ${garden.gardenerName}</h3>
        <p> ${garden.likes} Rakes Up </p>
        <button data-id="${garden.id}" class="like-btn"> I Like</button>
        <button data-id="${garden.id}" class="delete-btn"> Delete </button>
       
        <br>
        <br>
        <br>
        <div class="container" style="text-align:center">
    
        <form class="add-plant-form" data-form="${garden.id}">
        <h4> Add Plant to ${garden.name}</h4>
        <input type="hidden" id="${garden.id}" name="gardenID" value="${garden.id}">
        <h5>Name:</h5>
        <input
        type="text"
        name="name"
        value=""
        placeholder="Plant Name"
        class="input-text"
        />

      <h5>Plant Type:</h5>
      <input
        type="text"
        name="plantType"
        value=""
        placeholder="Type"
        class="input-text"
      />

      <h5>Picture:</h5>
      <input
      type="text"
      name="image"
      value=""
      placeholder="Add image"
      class="input-text"
      />

      <input
    
        type="submit"
        name="submit"
        value="Plant"
        class="addPlant"
      />
    </form>
  </div>
      <div data-garden="${garden.id}" class="plant-container">  
        <h2> Plants: </h2>
      </div>
        
  `


debugger
}



renderGarden =(garden)=> {  

    
    const cardDiv = document.createElement("div")

    cardDiv.classList.add("card")
 
    cardDiv.setAttribute("data-id", garden.id)
    
    cardDiv.id = garden.id

    cardDiv.innerHTML = makeACard(garden)
    //  debugger
    console.log(garden);

    const collectionDiv = document.querySelector("#garden-collection");
    
    collectionDiv.append(cardDiv);
    
    // debugger
    
}


const sampleGarden = new Garden({id:99,name: "Bro's Garden", likes: 333, location: "Home", gardener_name: "Bro"})

console.log(sampleGarden);
 
 
//  debugger
// sampleGarden.renderGarden(sampleGarden)
 
// debugger





// console.log(document.querySelector("#garden-collection"));



