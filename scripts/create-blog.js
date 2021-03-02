function create_blogs() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://localhost:5000/create-blog/", {
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
      window.location.href = "./index.html";
      console.log(json);
      document.getElementsById("create-blog.js");
    });
}
