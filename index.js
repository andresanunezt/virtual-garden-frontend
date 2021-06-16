document.addEventListener("click", (event)=>{ console.log(" Clicked on == ", event.target) }  )



// const API_DATABASE_URL = "http://localhost:3000/gardens";
// const API = new API;



document.addEventListener("DOMContentLoaded", function(){

    API.fetchAllGardens()
    API.fetchAllPlants()
    renderGarden(sampleGarden);
    renderPlant(samplePlant);
    
}
)


