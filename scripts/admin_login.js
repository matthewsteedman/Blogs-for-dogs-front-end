function cancel_login() {
  alert("Cancelling Login");
  window.location.href = "./index.html";
}
function admin_log() {
  let inputs = document.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  if (username == "Admin" && password == "Admin") {
    alert("you have logged in");
    window.location.href = "./admin_home.html";
  } else {
    alert("invalid user");
  }
}
