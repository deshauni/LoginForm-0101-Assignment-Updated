
function validatePassword(form){
    var password = form.password.value;
  var confirm_password = form.confirm_password.value;

  if(password != confirm_password) {
        alert ("Password did not match");
        return false;
    }
  else{
        alert("Congratulation, Account Created")
        return true;
    }
}