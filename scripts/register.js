// register function /
function create_user() {
  const inputs = document.getElementsByTagName("input");

  fetch("https://immense-bastion-09419.herokuapp.com/register-user/", {
    method: "POST",
    body: JSON.stringify({
      Firstname: inputs[0].value,
      Lastname: inputs[1].value,
      Username: inputs[2].value,
      age: inputs[3].value,
      email: inputs[4].value,
      Password: inputs[5].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Registeration successful");
      window.location.href = "./index.html";
      console.log(json);
      document.getElementById("register.js").reset();
    })
    .catch((e) => console.log(e));
}
// cancel function
function cancel_register() {
  window.location.href = "./landing_page.html";
  alert("Cancelling registration");
}
