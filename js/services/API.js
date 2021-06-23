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



  // static fetchMyPlants(){

    
  //   // const garden = document.getElementById(#data-owner)
    

  //   fetch(`${this.API_DATABASE_URL}/${gardenID}/plants`).then(response => response.json())
  //   .then(fetchedArray => { console.log(fetchedArray);
  
      

  //     fetchedArray.forEach(plant => {  console.log(plant) 
        
  //       const newPlant = new Prop(prop)
  //      renderPlant(newPlant)
      
  //   }) 
  
  //   })


}

// API.fetchAllGardens()
// API.fetchAllPlants()
// renderGarden(sampleGarden);
// renderPlant(samplePlant);