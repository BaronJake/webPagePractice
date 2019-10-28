function validateItems(){
  var name = document.forms["form"]["name"].value;
  var email = document.forms["form"]["email"].value;
  var phone = document.forms["form"]["phone"].value;
  if (name == "" || name.search("\d*")){
    alert("Name must be filled in with a string");
  }
  else if(email == "" || /\S+@\S+\.\S+/.test(email) == false){
    alert("Please enter a valid email address");
  }
  else if (phone == "" || isNaN(phone) || phone.length < 7){
    alert("Please enter a valid phone number");
  }
  else{
    alert("Thank you for the valid entry")
  }
}
