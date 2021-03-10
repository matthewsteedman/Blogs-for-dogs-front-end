function sign_out() {
  alert("You have successfully Logged Out");
  window.localStorage.removeItem("current_userlogged");
  window.location.href = "./index.html";
}
