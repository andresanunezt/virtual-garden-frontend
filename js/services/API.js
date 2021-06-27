class API{

 
    static API_DATABASE_URL = "http://localhost:3000/gardens"
    static PLANT_DATABASE_URL = "http://localhost:3000/plants"
    
    static fetchAllGardens() {

        fetch(this.API_DATABASE_URL).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray);
          
          
          
          fetchedArray.forEach(garden => {  
            
            console.log(garden) 

            const newGarden = new Garden(garden)
            renderGarden(newGarden)
            
         
          }) 
      
        })
    //     

  }


    static fetchAllPlants() {

      fetch(this.PLANT_DATABASE_URL).then(response => response.json())
      .then(fetchedArray => { console.log(fetchedArray);
        
        // renderPlant(samplePlant2);
        
        fetchedArray.forEach(plant => {  
          
          console.log(plant) 

          const newPlant = new Plant(plant)
          renderPlant(newPlant)
        
        }) 
    
      
      })

  }


  static gardenPostFetch(bodyObj) {

    fetch(API.API_DATABASE_URL, {
        
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(bodyObj),
    
    })
    .then(response => response.json())
    .then(post =>{ 
    
    const newGarden = new Garden(post);
    renderGarden(newGarden);
    // debugger

    console.log(post)
    
    }
    )
  }

  static plantPostFetch(addPlantForm,bodyObj) {

    fetch(this.PLANT_DATABASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyObj),
    })
    .then(r => r.json())
    .then(plant => {  
        console.log(plant)

        const newPlant = new Plant(plant);
        renderPlant(newPlant);
        addPlantForm.name.value = ""
        addPlantForm.plantType.value = ""
        addPlantForm.image.value = ""
        
    })

  }


  static deleteGardenFetch(id,gardenToDelete) {

    fetch(`${this.API_DATABASE_URL}/${id}`,{
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
      
      })
      .then(response => response.text())
      .then(gardenToDelete.remove())  


  }

  static deletePlantFetch(idNumber, plantToDeleteFrontend) {

    fetch(`${this.PLANT_DATABASE_URL}/${idNumber}`, {
            
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
      
  })
  .then(response => response.text())
  .then(

    
     
    
      plantToDeleteFrontend.remove()
      
  
      )    
    

  

  }

  // static plantPostFetch(bodyObj,addPlantForm) {
  
  //   fetch(API.PLANT_DATABASE_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(bodyObj),
  //   })
  // .then(r => r.json())
  // .then(plant => {  
  //       console.log(plant)

  //       const newPlant = new Plant(plant);
  //       renderPlant(newPlant);
  //       addPlantForm.name.value = ""
  //       addPlantForm.plantType.value = ""
  //       addPlantForm.image.value = ""
      
  //     })
  // }
static gardenLikesPatchFetch(id,bodyObj, pTagWithLikes) {
  
  fetch(`${this.API_DATABASE_URL}/${id}`, {
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


static plantWaterLevelPatchFetch(id, bodyObj, pTagWithWaterLevel) {

  fetch(`${this.PLANT_DATABASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObj),
})
.then(r => r.json())
.then(updatedPlant => {
    
    console.log(updatedPlant)
   
    pTagWithWaterLevel.textContent = `${updatedPlant.water_level}`
    
    
    
})
}

}

// API.fetchAllGardens()
// API.fetchAllPlants()
// renderGarden(sampleGarden);
// renderPlant(samplePlant);