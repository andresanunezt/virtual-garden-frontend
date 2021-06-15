class API {


  


 
    static API_DATABASE_URL = "http://localhost:3000/gardens"
    
    static fetchAllGardens() {

        fetch(this.API_DATABASE_URL).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray);
          
          
          fetchedArray.forEach(arrayObj => {  console.log(arrayObj) 

            renderGarden(arrayObj)
          
          }) 
      
        })

    }


}