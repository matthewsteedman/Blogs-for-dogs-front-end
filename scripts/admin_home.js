fetch("https://immense-bastion-09419.herokuapp.com/login-user/")
  .then((response) => response.json())
  .then((data) => {
    console.table(data.body);
    user = data.body;
    data.body.forEach((owner_table) => {
      console.table(owner_table);
      user_profile(owner_table);
    });
  });

function user_profile(owner_table) {
  let user = `
  <div class="users">
  <table style="width:100%">
    <tr>
        <th>Owner Id</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Username</th>
        <th>Age</th>
        <th>Email</th>
        <th>Password</th>
        <th>Delete</th>
    </tr>
    <tr data-id=${owner_table.Ownerid}>
        <td>${owner_table.Ownerid}</td>
        <td>${owner_table.Firstname}</td>
        <td>${owner_table.Lastname}</td>
        <td>${owner_table.Username}</td>
        <td>${owner_table.age}</td>
        <td>${owner_table.Email}</td>
        <td>${owner_table.Password}</td>
        <td><button type="button" onclick="delete_user(${owner_table.Ownerid})">Delete</button></td>
  </tr>
  </table>
  </div>
  `;
  console.table(user);
  let user_card = document.getElementById("users");
  user_card.innerHTML += user;
}
function delete_user(Ownerid) {
  if (confirm("Sure you want delete")) {
    fetch(`http://127.0.0.1:5000/delete_records/${Ownerid}/`, {
      method: "DELETE",
    });
  }
  console.log(Ownerid);
}
