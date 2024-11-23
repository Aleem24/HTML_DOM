// const text = document.getElementById("dom").innerHTML;
// let ans= prompt ("This first header is:");
// text = ans;




const validate(e){
    e.preventDefault();
    const email= document.getElementById("email").value;

    const password= document.getElementById("password").value;

    const age= document.getElementById("age").value;

      const msgBox = document.getElementById("msg");

    let message ="Please enter an Email";

      if (email ===""){
        message = "Please enter an Email";
        msgBox.style.color = "Orange";


      } else if(password ===""){
        message = "Please enter your password";
        msgBox.style.color = "Yellow";

        
      } else if (age ===""){
        message = "Age must be between 15 to 90";
        msgBox.style.color = "Violet";
      } else{
        message = "Login Successfull!!";
      };
      msgBox.innerText = message ;


}