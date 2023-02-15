// Function to display error message :
function displayError(elemId, errorMsg) {
    document.getElementById(elemId).innerHTML = errorMsg;
}

// Function to validate form : 
function submitForm() {
    var email = document.myForm.email.value;

    // Defining error variables with a default value
    var nameErr = emailErr = true;

    // Validate email
    if (email == "") {
        displayError("emailErr", "Email cannot be empty");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            displayError ("emailErr", "Check your email please");
        } else {
            displayError("emailErr", "");
            emailErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if (emailErr == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                        "Email: " + email + "\n";
    }
    alert(dataPreview);
};