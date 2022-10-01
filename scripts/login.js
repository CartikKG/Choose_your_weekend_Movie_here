document.querySelector("form").addEventListener("submit", login);

function User() {
  this.name = a;
  this.email = b;
  this.contact = c;
  this.password = d;
}
let userdata = JSON.parse(localStorage.getItem("userdata")) || [];
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let namee = "";
  let flag = false;

  userdata.forEach((element) => {
    if (element.email == email && element.password == password) {
      namee = element.name;
      flag = true;
    }
  });

  localStorage.setItem("userdata", JSON.stringify(userdata));
  localStorage.setItem("namee", JSON.stringify(namee));
  if (!flag) {
    alert("Invaild Credentials");
  } else {
    localStorage.setItem("flag", "true");
    localStorage.setItem("name", namee);
    window.open("./index.html");
    // window.open("../checkout&cartPage/CARTPAGE.html", "_self");
  }
}
