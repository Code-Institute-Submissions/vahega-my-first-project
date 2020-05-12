function sendMail(contactForm) {
console.log(contactForm.projectsummary);
 emailjs.send("gmail", "horizen", {
        "user_name": contactForm.name.value,
        "user_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
           
               },
             function(error) {
              console.log("FAILED", error);
             }
             );
             return false;  
}
