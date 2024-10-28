
    let loginForm = document.getElementById("form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("name");
  let password = document.getElementById("password");
  let email = document.getElementById("email");

  if (username.value == "" || password.value == ""||email=="" ){
    alert("Ensure you input a value in all fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and email of ${email.value}`
    );

    username.value = "";
    password.value = "";
    email.value="";

  }
});

    function myFunction() {
      var x = document.getElementById(".menuid");
      if (x.className === "menu") {
        x.className += " responsive";
      } else {
        x.className = "menu";
      }
    }
    

