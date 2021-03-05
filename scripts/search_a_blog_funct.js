function search_blog() {
  const form = document.getElementById("search-form");
  const search = form.getElementsByTagName("input")[0].value;

  fetch("https://immense-bastion-09419.herokuapp.com/display-content/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log(search);
      let matched_data = json.filter((data) => {
        return data.dogname == search;
      });
      document.getElementById("blog-items").innerHTML = "";
      matched_data.forEach((blog) => create_blog(blog));
    });
}
