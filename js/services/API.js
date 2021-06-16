class API{


  


 
    static API_DATABASE_URL = "http://localhost:3000/gardens"
    static PLANT_DATABASE_URL = "http://localhost:3000/plants"
    static fetchAllGardens() {

        fetch(this.API_DATABASE_URL).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray);
          
          renderGarden(sampleGarden);
          
          fetchedArray.forEach(garden => {  
            
            console.log(garden) 

            const newGarden = new Garden(garden)
            renderGarden(newGarden)
           
          
          }) 
      
        })

    }


    static fetchAllPlants() {

      fetch(this.PLANT_DATABASE_URL).then(response => response.json())
      .then(fetchedArray => { console.log(fetchedArray);
        
        // renderGarden(sampleGarden);
        
        fetchedArray.forEach(plant => {  
          
          console.log(plant) 

          const newPlant = new Plant(plant)
          renderPlant(newPlant)
        
        }) 
    
      })

  }


}

API.fetchAllGardens()
API.fetchAllPlants()
renderGarden(sampleGarden);