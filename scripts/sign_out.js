function sign_out() {
  alert("You have successfully Logged Out");
  localStorage.removeItem("current_userlogged");
  window.location.href = "./User_login.html";
}
