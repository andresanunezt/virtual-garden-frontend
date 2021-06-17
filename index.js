document.addEventListener("click", (event)=>{ console.log(" Clicked on == ", event.target) }  )

let showTheForm = false;




document.addEventListener("DOMContentLoaded", function() {

    const gardenFormContainer = document.querySelector(".container");
    

    
    const formButton = document.querySelector("#new-garden-btn");

    formButton.addEventListener("click", () => {

        
        showTheForm = !showTheForm;
       

       
        if (showTheForm) {
        gardenFormContainer.style.display = "block";
        } else {
        gardenFormContainer.style.display = "none";
        }

    });



    API.fetchAllGardens()
    API.fetchAllPlants()
    renderGarden(sampleGarden);
    
   
    const samplePlant = new Plant({id:99, name: "Cempasuchil", plant_type: "Flower", image:"https://static.educalingo.com/img/es/800/tagetes-erecta.jpg", water_level:3, garden_id: 99});
    const samplePlant2 = new Plant({id:9, name: "Orchid", plant_type: "Flower", image:"https://assets.eflorist.com/assets/products/PHR_/TPL05-1A.jpg", water_level:6, garden_id: 1});
    console.log(samplePlant2);
    renderPlant(samplePlant);
    // renderPlant(samplePlant2);

//    debugger


   
     const newGardenForm = document.getElementById("add-garden-form");
    
     console.log(newGardenForm);

     // const newGardenForm = document.getElementById("add-garden-form");
     newGardenForm.addEventListener("submit", event =>{ event.preventDefault();



        const name = event.target.name.value
        const location = event.target.location.value
        const gardenerName = event.target.gardener_name.value
        const submit = event.target.submit
        
        
        fetch(API.API_DATABASE_URL, {
        
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({
        
                "name": name,
                "location": location,
                "gardener_name": gardenerName,
                "likes": 0,
                  
          })
        
        })
        .then(response => response.json())
        .then(post => renderGarden(post))
        
        
        
          event.target.reset()
         
        
        })
// debugger


const gardenCollection = document.querySelector("#garden-collection")



gardenCollection.addEventListener("click", event =>{ 
    
    event.preventDefault(); 

  
  if(event.target.matches(".delete-btn")){   
    
    console.log(event.target) 
    
    
    const id = event.target.dataset.id
    
    const gardenToDelete = document.getElementById(id)
    
    
    fetch(`${API.API_DATABASE_URL}/${id}`, {
        
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
        
    })
    .then(response => response.json())
    .then( 
        
        
        // event.target.closest(".card").remove() 
        
        gardenToDelete.remove()
        
        
        )        
        
     }
        

     if (event.target.matches(".like-btn") ) {   
                       
       

    const pTagWithLikes = event.target.closest(".card").querySelector("p")

    debugger
    
    const likeCount = parseInt(pTagWithLikes.textContent)  
 
    const newLikes =  likeCount + 1
    
    const id = event.target.dataset.id
    
    // Make a PATCH/EDIT to   >  /toys/:id
    const bodyObj = {
        
        likes: newLikes
        
    } 
    
    
    
    
    fetch(`${API.API_DATABASE_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyObj),
    })
    .then(r => r.json())
    .then(updatedGarden => {
        
        console.log(updatedGarden)
       
        pTagWithLikes.textContent = `${updatedGarden.likes} rakes up`
        
    })
   
    
}


    
    })


})


    







  


