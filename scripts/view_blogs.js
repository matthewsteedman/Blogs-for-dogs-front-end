fetch("http://127.0.0.1:5000/display-content/")
  .then((response) => response.json())
  .then((data) => {
    console.table(data.body);
    user = data.body;
  });
