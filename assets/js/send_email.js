function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message_body = document.getElementById("message_body").value;
    var date = Date("December 17, 1995 03:24:00");
    var loading = document.getElementById("loading");
    var error_message = document.getElementById("error_message");
    var sent_message = document.getElementById("sent_message");

    if (name | email | subject | message_body === "") {
        error_message.innerHTML += "Kindly fill all the fields.";
        error_message.style.display = "block";
    } else {
        loading.style.display = "block";
        error_message.style.display = "none";
        sent_message.style.display = "none";
        Email.send({
            SecureToken: "8334dbd3-9ee0-4717-a6a1-980ac90acc59",
            To: "tarakimutech@outlook.com",
            From: "tarakimutech@outlook.com",
            Subject: subject,
            Body: "Email Subject: " + subject + "<br>" + "<br>" + "Client message is: " + message_body + "<br>" + "<br>" + "Client Email is: " + email + "<br>" + "<br>" + date,
        }).then(
            message => {
                loading.style.display = "none";
                if (message === "OK") {
                    sent_message.style.display = "block";
                } else {
                    error_message.innerHTML += message;
                    error_message.style.display = "block";
                };
            }
        );
    };
};