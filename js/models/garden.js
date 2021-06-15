class Garden{


    static all = []
   


    
    constructor({id, name, gardener_name, likes, location }){
   

        this.id = id
        this.name = name,
        this.gardener_name = gardener_name,
        this.likes = likes,
        this.location = location,

        Garden.all.push(this)
        
     
    }

}


makeACard =()=>{ console.log(this)
        
    return `

        <h2 id="name" data-id="${this.id}">${this.name}</h2>
        <h2 id="location"> ${this.location} </h2>
        <h2> Gardener: ${this.gardener_name}</h2>
        <p> ${this.likes} Rakes Up </p>
        <button data-id="${this.id}" class="like-btn"> I Like</button>
    

        `

}

renderGarden =(garden)=> {  

    const cardDiv = document.createElement("div")

  
    cardDiv.classList.add("card")
 
      cardDiv.setAttribute("data-id", garden.id)
    
      cardDiv.id = garden.id

        cardDiv.innerHTML = this.makeACard()
    
    
    const collectionDiv = document.querySelector("#garden-collection")
    
    collectionDiv.append(cardDiv)
    
    
    
} 