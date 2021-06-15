class Garden{


    static all = []
   


    
    constructor({id, name, likes, location, gardener_name}){
   

        this.id = id,
        this.name = name,
        this.gardenerName = gardener_name,
        this.likes = likes,
        this.location = location,

        Garden.all.push(this)
        
     
    }

    

}


makeACard =(garden)=>{ 
    //    debugger
    
    return `

        <h2 id="name" data-id="${garden.id}">Garden Name: ${garden.name}</h2>
        <h2 id="location"> Location: ${garden.location} </h2>
        <h2> Gardener: ${garden.gardenerName}</h2>
        <p> ${garden.likes} Rakes Up </p>
        <button data-id="${garden.id}" class="like-btn"> I Like</button>
    

        `

}

renderGarden =(garden)=> {  

    const cardDiv = document.createElement("div")

  
    cardDiv.classList.add("card")
 
    cardDiv.setAttribute("data-id", garden.id)
    
    cardDiv.id = garden.id

    cardDiv.innerHTML = this.makeACard(garden)
    
   
    console.log(document.querySelector("#garden-collection"));
    console.log(garden);
    console.log(this)
    const collectionDiv = document.querySelector("#garden-collection");
    
    collectionDiv.append(cardDiv);
    
    
    
}


const sampleGarden = new Garden({id:99,name: "Bro's Garden", likes: 333, location: "Home", gardener_name: "Bro"})

console.log(sampleGarden);
 
renderGarden(sampleGarden);
 
debugger





console.log(document.querySelector("#garden-collection"));



