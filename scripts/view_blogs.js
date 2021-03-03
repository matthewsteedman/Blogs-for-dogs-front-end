fetch("http://127.0.0.1:5000/display-content/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.body.forEach((dog_table) => {
      get_blogs(dog_table);
    });
  });

function get_blogs(dog_table) {
  let dog = `
    <div class="blogs">
    <h1>${dog_table.dogname}</h1>
    <img src='./images/${dog_table.imageurl}' alt=${dog_table.dogname}>
    <button id="view_more type="button" name="button" onclick="">View More</button>
    </div>`;
  let blog_card = document.getElementById("blog-items");
  blog_card.innerHTML += dog;
}
