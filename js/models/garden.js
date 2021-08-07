class Garden {
  static all = [];

  constructor({ id, name, likes, location, gardener_name }) {
    (this.id = id),
      (this.name = name),
      (this.gardenerName = gardener_name),
      (this.likes = likes),
      (this.location = location),
      this.renderGarden(),
      Garden.all.push(this);
  }

  makeACard = () => {
    return `
            <br>
            <h5> -------------------------------- </h5>
            <br>
            <h2 id="name" data-id="${this.id}">Garden Name: ${this.name}</h2>
            <h3 id="location"> Location: ${this.location} </h3>
            <h3> Gardener: ${this.gardenerName}</h3>
            <p>${this.likes} likes</p>
            <button data-id="${this.id}" class="like-btn"> I Like</button>
            <button data-id="${this.id}" class="delete-btn"> Delete </button>
            <br>
            <br>
            <br>
            <button data-id="${this.id}" class="add-plant-btn"> Add Plant to ${this.name} </button>
    
            <div data-add-plant-form="${this.id}" class="plant-container">  
             
            </div>
            
    
            <div data-garden="${this.id}" class="plant-container">  
            <h2> Plants: </h2>
          </div>
    
          
    `;
  };

  renderGarden = () => {
    const cardDiv = document.createElement("div");

    cardDiv.classList.add("card");

    cardDiv.setAttribute("data-id", this.id);

    cardDiv.id = this.id;

    cardDiv.innerHTML = this.makeACard();

    const collectionDiv = document.querySelector("#garden-collection");

    collectionDiv.append(cardDiv);

    // debugger
  };
}

// makeACard =(garden)=>{

//     return `
//         <br>
//         <h5> -------------------------------- </h5>
//         <br>
//         <h2 id="name" data-id="${garden.id}">Garden Name: ${garden.name}</h2>
//         <h3 id="location"> Location: ${garden.location} </h3>
//         <h3> Gardener: ${garden.gardenerName}</h3>
//         <p>${garden.likes} likes</p>
//         <button data-id="${garden.id}" class="like-btn"> I Like</button>
//         <button data-id="${garden.id}" class="delete-btn"> Delete </button>

//         <br>
//         <br>
//         <br>

//         <button data-id="${garden.id}" class="add-plant-btn"> Add Plant to ${garden.name} </button>

//         <div data-add-plant-form="${garden.id}" class="plant-container">

//         </div>

//         <div data-garden="${garden.id}" class="plant-container">
//         <h2> Plants: </h2>
//       </div>

// `

// }

// renderGarden =(garden)=> {

//     const cardDiv = document.createElement("div")

//     cardDiv.classList.add("card")

//     cardDiv.setAttribute("data-id", garden.id)

//     cardDiv.id = garden.id

//     cardDiv.innerHTML = makeACard(garden)
//     //  debugger
//     console.log(garden);

//     const collectionDiv = document.querySelector("#garden-collection");

//     collectionDiv.append(cardDiv);

//     // debugger

// }
