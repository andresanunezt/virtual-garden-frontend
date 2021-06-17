document.addEventListener("click", (event)=>{ console.log(" Clicked on == ", event.target) }  )



// const API_DATABASE_URL = "http://localhost:3000/gardens";
// const API = new API;
// const newGardenForm = document.getElementById("add-garden-form");


document.addEventListener("DOMContentLoaded", function() {

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
        console.log("SHOW ME SUBMIT - IN THE FORM:  ", submit)
        
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

//
    
})


    

// const newGardenForm = document.querySelector("#add-garden-form");

// debugger

// newGardenForm.addEventListener("submit", event =>{ event.preventDefault();



// const name = event.target.name.value
// const location = event.target.location.value
// const gardenerName = event.target.gardener_name.value
// const submit = event.target.submit
// console.log("SHOW ME SUBMIT - IN THE FORM:  ", submit)

// fetch(API_DATABASE_URL, {

//   method: "POST",
//   headers: { "Content-Type": "application/json"},
//   body: JSON.stringify({

//         "name": name,
//         "image": location,
//         "gardenerName": gardenerName
      
          
//   })

// })
// .then(response => response.json())
// .then(post => renderGarden(post))



//   event.target.reset()
 

// })








  


