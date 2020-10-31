/* Add your JavaScript to this file */
"use strict";
window.onload=function(){
    let elements=document.getElementsByClassName("newsletter");
    let subscribeBtn=document.getElementsByTagName("button")[0];
    let message=document.getElementsByClassName("message")[0];
   

    subscribeBtn.addEventListener("click", function(e){
        e.preventDefault()
        let email=document.getElementById("email").value;
        console.log(email);
        message.textContent= `Thank you! Your email address ${email} has been added to our mailing list!`;
        console.log(message);
        if(email===""){
            message.textContent="Please enter a valid email address";
        }

    })

    



















}