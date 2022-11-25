var letter=document.querySelector('#letter');
			var capital = document.querySelector("#capital");
			var number=document.querySelector('#number');
			var length=document.querySelector('#length');
var error=document.querySelector('#msg');
			var mypassword=document.querySelector('#mypassword');
			
			
			
				//password confirmation
			var confirm=document.querySelector('#passwordconfirm');
			confirm.onkeyup = function(){
					if(mypassword.value != confirm.value){
					error.classList.remove("valid");
			error.classList.add("invalid");
		  } else {
			  	error.classList.remove("invalid");
			error.classList.add("valid");
		  }
			}
			// When the user starts to type something inside the password field
		mypassword.onkeyup = function() {
			
		  // Validate lowercase letters
		  var lowerCaseLetters = /[a-z]/g;
		  if(mypassword.value.match(lowerCaseLetters)) {
			letter.classList.remove("invalid");
			letter.classList.add("valid");
		  } else {
			letter.classList.remove("valid");
			letter.classList.add("invalid");
		}

		  // Validate capital letters
		  var upperCaseLetters = /[A-Z]/g;
		  if(mypassword.value.match(upperCaseLetters)) {
			capital.classList.remove("invalid");
			capital.classList.add("valid");
		  } else {
			capital.classList.remove("valid");
			capital.classList.add("invalid");
		  }
		  // Validate numbers
		  var numbers = /[0-9]/g;
		  if(mypassword.value.match(numbers)) {
			number.classList.remove("invalid");
			number.classList.add("valid");
		  } else {
			number.classList.remove("valid");
			number.classList.add("invalid");
		  }
		  // Validate length
		  if(mypassword.value.length >= 8) {
			length.classList.remove("invalid");
			length.classList.add("valid");
		  } else {
			length.classList.remove("valid");
			length.classList.add("invalid");
		  }
		
		}