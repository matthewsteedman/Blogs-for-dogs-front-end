// var loadFile = function (event) {
//   var output = document.getElementById("output");
//   var fName = "blog_images/" + event.target.files[0].name; //None path with users selected file name
//   if (UrlExists(fName)) {
//     output.src = fName; //Do something like show image
//   } else {
//     alert("File not present"); // Do something to show file not in this path
//   }
// };

function create_blogs() {
  const inputs = document.getElementsByTagName("input");

  fetch("https://immense-bastion-09419.herokuapp.com/create-blog/", {
    method: "POST",
    body: JSON.stringify({
      dogname: inputs[0].value,
      dogtype: inputs[1].value,
      dogage: inputs[2].value,
      weight: inputs[3].value,
      imageurl: inputs[4].value,
      description: inputs[5].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Blog successfully created");
      window.location.href = "./view-blogs.html";
      console.log(json);
      document.getElementsById("create-blog.js");
    });
}
function redirect() {
  alert("Canceling blog");
  window.location.href = "./landing_page.html";
}
