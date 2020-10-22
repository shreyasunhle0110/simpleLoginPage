function validate()
 {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (!isformInvalid(username,password)){

        if (username == "Shreyas" && password == "Shreyas#123") {
            alert("Login successfully");
        }
        else {
            alert("Wrong credentials")
        }
    }

   
   
   
}

function isformInvalid(username,password)
{
    let flag = false;
   if (username === "")
   {
       alert("enter username");
       flag = true;
   }
   else if(password === "")
   {
       alert("enter password" );
       flag = true;
   }
   return flag;
}
