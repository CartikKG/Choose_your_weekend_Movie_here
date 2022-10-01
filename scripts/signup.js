document.querySelector("form").addEventListener("submit", adduserdata);

function User(a, b, c, d) {
  this.name = a;
  this.email = b;
  this.contact = c;
  this.password = d;
}
let userdata = JSON.parse(localStorage.getItem("userdata")) || [];
function adduserdata() {
  console.log("kartik");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mob = document.getElementById("mob").value;
  let password = document.getElementById("password").value;
  let user = new User(name, email, mob, password);

  //   alluser.push(user);
  userdata.push(user);
  localStorage.setItem("userdata", JSON.stringify(userdata));
  window.open("./login.html");
}
