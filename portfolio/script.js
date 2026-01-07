function validateForm(){
let n=document.getElementById("name").value;
let e=document.getElementById("email").value;
let m=document.getElementById("message").value;

if(n==""||e==""||m==""){
document.getElementById("error").innerHTML="All fields are required!";
return false;
}
alert("Message Sent Successfully!");
return true;
}
