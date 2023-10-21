const users = [
    {
        email : "a@a.com",
       password : "aaa" 
    },
     {
        email : "b@b.com",
        password: "bbb" 
    }
    
]
function login(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    if (checkuser(email,password)!== -1){
        showMsg("success!" ,"you have successfully logged in.","success");
    }else{
        showMsg("error!","Wrong credentials." , "error");
    }
    


}
function register(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    if (!email || !password){
        showMsg("error" , "Please fill in all the required fields","error");
    }else if(checkuser(email)=== -1){
        var user = {email, password }
        users.push(user)
            showMsg("Success!" , "you have succesfully registered." , "success")
        
    }else{
        showMsg("Error" , "User already exists!","error")
    }

} 
const checkuser = (email,password) => {
    return users.findIndex(user => user.email === email && user.password === password)
}
const showMsg =(title , text , icon) => {
    Swal .fire({
        title , text , icon
    })
}