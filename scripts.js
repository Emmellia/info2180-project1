/* Add your JavaScript to this file */
"use strict";
window.onload=function(){
    let subscribeBtn=document.getElementsByTagName("button")[0];
    let message=document.getElementsByClassName("message")[0];
    let emailField=document.getElementById("email");

    subscribeBtn.addEventListener("click", function(e){
        e.preventDefault();
        let email=emailField.value;
        if(email===""){
            message.textContent="Please enter a valid email address";  }

        else{message.textContent= `Thank you! Your email address ${email} has been added to our mailing list!`;
            emailField.value= " ";
                }
    
    })

}