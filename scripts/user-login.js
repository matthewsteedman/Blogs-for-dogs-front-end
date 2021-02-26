function login_user() {
  const input = document.getElementsByTagName("input");

  fetch("http://localhost:5000/login-user/", {
    method: "GET",
    body: JSON.stringify({
      username: input[0].value,
      password: input[1].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Successfully logged in");
      console.log(json);
    })
    .catch((e) => console.log(e));
}
