let user;

fetch("https://immense-bastion-09419.herokuapp.com/login-user/")
  .then((response) => response.json())
  .then((data) => {
    console.table(data.body);
    user = data.body;
  });
function login_user() {
  let inputs = document.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  let log = user.filter((user) => {
    return user.Username == username && user.Password == password;
  });

  console.log(log);

  if (log.length > 0) {
    alert("You have Successfully Logged in ");
    window.location.href = "./index.html";
  } else {
    alert("Please enter a valid username and password");
  }
}
