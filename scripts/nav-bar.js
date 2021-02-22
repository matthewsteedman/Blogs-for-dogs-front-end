function nav_btn_function() {
  // calling the link from the navbar
  const links = document.getElementById("nav-links");

  links.style.width == "0px"
    ? (links.style.width = "100vw")
    : (links.style.width = "0px");
}
