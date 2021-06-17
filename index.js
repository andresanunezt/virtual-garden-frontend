document.addEventListener("click", (event)=>{ console.log(" Clicked on == ", event.target) }  )



// const API_DATABASE_URL = "http://localhost:3000/gardens";
// const API = new API;
// const newGardenForm = document.getElementById("add-garden-form");


document.addEventListener("DOMContentLoaded", function() {

    API.fetchAllGardens()
    API.fetchAllPlants()
    renderGarden(sampleGarden);
    renderPlant(samplePlant);
    
   
   
     const newGardenForm = document.getElementById("add-garden-form");
    
     console.log(newGardenForm);

     // const newGardenForm = document.getElementById("add-garden-form");

// debugger

//
    
})


    
// const newGardenForm = document.getElementById("add-garden-form");

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








  
// debugger
// newGardenForm.addEventListener("submit", event =>{ event.preventDefault(); 
  
//     const name = event.target.name.value
//     const location = event.target.location.value
//     const gardenerName = event.target.submit
   


//     fetch(API_DATABASE_URL, {
  
//       method: "POST",
//       headers: { "Content-Type": "application/json"},
//       body: JSON.stringify({

//             "name": name,
//             "image": location,
//             "gardenerName": gardener_name
          
              
//       })
  
//     })
//     .then(response => response.json())
//     .then(post => renderGarden(post) )
   


//       event.target.reset()
     

// })  

