class Plant {
  static all = [];

  constructor({ id, name, plant_type, image, garden_id, water_level }) {
    (this.id = id),
      (this.name = name),
      (this.plantType = plant_type),
      (this.image = image),
      (this.gardenID = garden_id),
      (this.waterLevel = water_level),
      this.renderPlant(),
      Plant.all.push(this);
  }

  makePlantCard = () => {
    return `
          <div class="plant-card-container" style="text-align:center">
          <h4 id="name" data-id="${this.id}" data-owner="${this.gardenID}"> Plant Name: ${this.name} </h4>
          <span class="img-container">
          <img src= "${this.image}" alt="plant class="image"" width="150" height="200" class="center">
          </span>
          <div class="overlay" text-align: center>
          <h4 id="plantType"> Plant Type: ${this.plantType} </h4>
          <h5> Water Level : </h5> <p>${this.waterLevel}</p>
          <button data-id="${this.id}" class="waterLevel-btn"> water+ </button>
          <button data-plant="${this.id}" data-id="${this.id}" class="dig-out-button"> dig out </button>
          </div>
          </div>
          
          `;
  };

  renderPlant = () => {
    const cardDiv = document.createElement("div");

    cardDiv.classList.add("plant-card");

    cardDiv.setAttribute("data-plant", this.id);

    cardDiv.setAttribute("data-owner", this.gardenID);

    cardDiv.id = this.id;

    cardDiv.innerHTML = this.makePlantCard();

    const plantIdNow = this.gardenID;

    const argumentForQS = "div[data-garden=" + `'${plantIdNow}'` + "]";

    const plantCollectionDiv = document.querySelector(argumentForQS);

    plantCollectionDiv.append(cardDiv);
  };
}

// makePlantCard = (plant) => {
//   return `
//         <div class="plant-card-container" style="text-align:center">
//         <h4 id="name" data-id="${plant.id}" data-owner="${plant.gardenID}"> Plant Name: ${plant.name} </h4>
//         <span class="img-container">
//         <img src= "${plant.image}" alt="plant class="image"" width="150" height="200" class="center">
//         </span>
//         <div class="overlay" text-align: center>
//         <h4 id="plantType"> Plant Type: ${plant.plantType} </h4>
//         <h5> Water Level : </h5> <p>${plant.waterLevel}</p>
//         <button data-id="${plant.id}" class="waterLevel-btn"> water+ </button>
//         <button data-plant="${plant.id}" data-id="${plant.id}" class="dig-out-button"> dig out </button>
//         </div>
//         </div>

//         `;
// };

// renderPlant = (plant) => {
//   const cardDiv = document.createElement("div");

//   cardDiv.classList.add("plant-card");

//   cardDiv.setAttribute("data-plant", plant.id);

//   cardDiv.setAttribute("data-owner", plant.gardenID);

//   cardDiv.id = plant.id;

//   cardDiv.innerHTML = makePlantCard(plant);

//   console.log(plant);

//   const plantIdNow = plant.gardenID;

//   const argumentForQS = "div[data-garden=" + `'${plantIdNow}'` + "]";

//   const plantCollectionDiv = document.querySelector(argumentForQS);

//   plantCollectionDiv.append(cardDiv);
// };
