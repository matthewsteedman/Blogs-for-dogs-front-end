// view blogs function
fetch("https://immense-bastion-09419.herokuapp.com/display-content/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    console.table(json);
    json.body.forEach((dog_table) => {
      console.table(dog_table);
      create_blog_item(dog_table);
      blog_modal(dog_table);
    });
  });

function create_blog_item(dog_table) {
  let dog = `
    <div class="blogs">
      <h1>${dog_table.dogname}</h1>
      <img src='${dog_table.imageurl}' alt=${dog_table.dogname}>
      <button type="button" onclick="toggle_modal(${dog_table.dogid})">View More</button>
    </div>`;
  console.table(dog);
  let blog_card = document.getElementById("blog-items");
  blog_card.innerHTML += dog;
}

function blog_modal(dog_table) {
  let dog_content = `
  <div class="modal" modal=${dog_table.dogid}>
    <img src= ${dog_table.imageurl} id="dog_image" alt=${dog_table.dogname} />
    <div class="data">
      <h1>Dog Name ${dog_table.dogname}</h1>
      <h4>Dog Type ${dog_table.dogtype}</h4>
      <h4>Dog Age ${dog_table.dogage}</h4>
      <h4>Dog weight ${dog_table.weight}</h4>
      <p>Dogscription ${dog_table.description}</p>
    </div>
    <p onclick='toggle_modal(${dog_table.dogid})' id="exit">X</p>
  </div>
  
  `;

  let body = document.getElementById("blog-content");
  body.innerHTML += dog_content;
}

function toggle_modal(dogid) {
  let modal = document.querySelectorAll(`[modal='${dogid}']`)[0];
  modal.classList.toggle("active");
}
