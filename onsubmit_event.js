function ValidationEvent() {
	//Storing Field Values In Variables
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var address = document.getElementById("address").value; 

	//Validation Expressions
	var emailCheck = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var alphaCheck = /^[A-Za-z]+$/;
	var alphaNumCheck = /^[0-9a-zA-Z]+$/;
	var numericCheck = /^[0-9]+$/;

	// Conditions
	if (firstName == '') {	
		alert("First Name is required");
		return false;
	} 
	else if (!firstName.match(alphaCheck)) {
        	alert("First Name must contain only letters.");
		return false;
        }
	else if (lastName.length == 0) {
		alert("Last Name is required.");
		return false;
	}
	else if (!lastName.match(alphaCheck)){
        	alert("Last Name must contain only letters.");
		return false;
        }
	else if (email == '') {
		alert("Email is required.");
		return false;
	}
	else if (!email.match(emailCheck)) {
		alert("Invalid Email Address!");
		return false;
	}
	else if (document.getElementById("male").checked == false && document.getElementById("female").checked == false) {
		alert("You must select a gender!");
		return false;
	}
	else if (phone.length != 10) {
		alert("The Phone Number must be at least 10 digits long");
		return false;	
	}
	else if (!phone.match(numericCheck)) {
        	alert("Phone Number can only contain numerical values");
		return false;
        }
	else if (address != '' && !address.match(alphaNumCheck)) {
		alert("Address can only contain numbers and letter");
		return false;
	}
	else {
		alert("Form was successfully validated on OnSubmit event.");
		return true;
	}
		
}

