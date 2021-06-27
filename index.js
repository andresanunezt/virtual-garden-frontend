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
        

     const newGardenForm = document.getElementById("add-garden-form");
  
     newGardenForm.addEventListener("submit", event =>{ event.preventDefault();

        const name = event.target.name.value
        const location = event.target.location.value
        const gardenerName = event.target.gardener_name.value
        
        const bodyObj = {

          name: name,
          location: location,
          gardener_name: gardenerName,
          likes: 0

        }

        API.gardenPostFetch(bodyObj);
       
        // fetch(API.API_DATABASE_URL, {
        
        //   method: "POST",
        //   headers: { "Content-Type": "application/json"},
        //   body: JSON.stringify({
        
        //         "name": name,
        //         "location": location,
        //         "gardener_name": gardenerName,
        //         "likes": 0,
                  
        //   })
        
        // })
        // .then(response => response.json())
        // .then(post =>{ 
        
        // const newGarden = new Garden(post);
        // renderGarden(newGarden);
        // // debugger

        // console.log(post)
        
        // }
        // )
        
        
        // debugger
          event.target.reset()
         
        
        })



      const gardenCollection = document.querySelector("#garden-collection")

      gardenCollection.addEventListener("click", event =>{ event.preventDefault(); 

      if(event.target.matches(".delete-btn")){   
    
        const id = event.target.dataset.id
    
        const gardenToDelete = document.getElementById(id)

        API.deleteGardenFetch(id, gardenToDelete)
    
    //     fetch(`${API.API_DATABASE_URL}/${id}`,{
    //     method: "DELETE",
    //     headers: { "Content-Type": "application/json" }
        
    //     })
    // .then(response => response.text())
    // .then(gardenToDelete.remove())        
        
     }
    
     if(event.target.matches(".dig-out-button"))  {   
    
        console.log(event.target) 
        
        
        const id = event.target.dataset.id;
        
        const idNumber = parseInt(id)
        
        const argumentForQS = "div[data-plant=" + `'${idNumber}'` + ']'
    

        const plantToDeleteFrontend = document.querySelector(argumentForQS)
        
        // const  = document.querySelector(id)
        
        
        API.deletePlantFetch(idNumber, plantToDeleteFrontend)
        // debugger
        // const plantToDeleteFrontend = document.querySelector(idNumber).getElementsByClassName("plant-card")[0];
         // debugger
         // fetch(`${API.PLANT_DATABASE_URL}/${idNumber}`, {
        //     method: "DELETE",
        //     headers: { "Content-Type": "application/json" }    
        // })
        // .then(response => response.text())
        // .then(
        //     plantToDeleteFrontend.remove()
        //     )        
            
         }

     if (event.target.matches(".like-btn") ) {   
                       
       

    const pTagWithLikes = event.target.closest(".card").querySelector("p")

    // debugger
    
    const likeCount = parseInt(pTagWithLikes.textContent)  
 
    const newLikes =  likeCount + 1
    
    const id = event.target.dataset.id
    
    
    const bodyObj = {
        
        likes: newLikes
        
    } 
    
    
    
    API.gardenLikesPatchFetch(id, bodyObj, pTagWithLikes)
    // fetch(`${API.API_DATABASE_URL}/${id}`, {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(bodyObj),
    // })
    // .then(r => r.json())
    // .then(updatedGarden => {
        
    //     console.log(updatedGarden)
       
    //     pTagWithLikes.textContent = `${updatedGarden.likes} rakes up`
        
    // })
   
    
}

if (event.target.matches(".waterLevel-btn") ) {   
                       
       

    const pTagWithWaterLevel = event.target.closest(".plant-card").querySelector("p")

    
    const waterLevelNumber = parseInt(pTagWithWaterLevel.innerText)
   
 
    const newWaterLevel =  waterLevelNumber + 1
    
    // debugger

    const id = event.target.dataset.id
    
    
    const bodyObj = {
        
        water_level: newWaterLevel
        
    } 
    
    
    API.plantWaterLevelPatchFetch(id, bodyObj, pTagWithWaterLevel)
    
    
    // fetch(`${API.PLANT_DATABASE_URL}/${id}`, {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(bodyObj),
    // })
    // .then(r => r.json())
    // .then(updatedPlant => {
        
    //     console.log(updatedPlant)
       
    //     pTagWithWaterLevel.textContent = `${updatedPlant.water_level}`
        
        
        
    // })

   
   
    
}

   

    if (event.target.matches(".add-plant-btn")) {  
          
      

      addPlantButton = () => event.target
      
       addPlantButton().disabled = true;
      
      
   
       
        
        const gardenCard = event.target.closest(".card")
        const plantFormDiv = gardenCard.querySelector("div[data-add-plant-form]")
        const cardEditingId = parseInt(gardenCard.id)
        console.log(cardEditingId)

        const addPlantForm = document.createElement("form")
        
        addPlantForm.innerHTML =
      
        `
        
        <form class="add-plant-form" data-form="${cardEditingId}">
                <input type="hidden" id="${cardEditingId}" name="gardenID" value="${cardEditingId}">
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
        <br>
              <input
            
                type="submit"
                name="submit"
                value="Plant"
                class="add-plant-submit"
              />
              <br>
              <br>
              <br>
            <button class="close-button"> close</button>
            </form>
      
                  
          ` 

          plantFormDiv.append(addPlantForm)
       
          const closeButton = addPlantForm.querySelector(".close-button")

        
          
            closeButton.addEventListener("click", (event)=>{
            
            console.log(event)

            addPlantForm.remove()
            
            addPlantButton().disabled = false
            // debugger

          })
        
        //   debugger

          plantFormPlantButton = addPlantForm.submit
        // plantFormDiv.append(addPlantForm)
          plantFormPlantButton.addEventListener("click", (event)=>{  event.preventDefault();
            //
            // debugger
              if(event.target.matches(".add-plant-submit")){

                let newPlantName = addPlantForm.name.value
                    console.log(newPlantName)
                let newPlantType = addPlantForm.plantType.value
                    console.log(newPlantType)
                let newPlantImage = addPlantForm.image.value
                    console.log(newPlantImage)

                   
                const bodyObj = {

                  name: newPlantName,
                  plant_type: newPlantType,
                  image: newPlantImage,
                  garden_id: cardEditingId,
                  water_level: 0

                }

                
                API.plantPostFetch(addPlantForm,bodyObj)
                // fetch(API.PLANT_DATABASE_URL, {
                //   method: "POST",
                //   headers: { "Content-Type": "application/json" },
                //   body: JSON.stringify(bodyObj),
                // })
                // .then(r => r.json())
                // .then(plant => {  
                //     console.log(plant)

                //     const newPlant = new Plant(plant);
                //     renderPlant(newPlant);
                //     addPlantForm.name.value = ""
                //     addPlantForm.plantType.value = ""
                //     addPlantForm.image.value = ""
                    
                // })
                
                debugger
              }


          })
        
      }

    })







})
