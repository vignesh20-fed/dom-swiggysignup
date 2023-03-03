let form = document.querySelector('#function');
form.addEventListener('submit',function(e){
	e.preventDefault()
	let name = document.querySelector('#NAME').value;
	let  mail = document.querySelector('#MAIL').value;
	let phone = parseInt(document.querySelector('#PHONENUMBER').value);
	let pass = document.querySelector('#PASSWORD').value;
	let user = document.querySelector('#USER').value;
	let conform = document.querySelector('#CONFORMPASSWORD').value;
	let result = document.querySelector('#result');
    if(name ==="" ){
		result.innerHTML="Please Enter Your Name";
		result.style.color="white";
	}
	else if(mail===""){
			result.innerHTML="Please Enter Your Mail";
		    result.style.color="white";
	}
	else if((phone==="")||(isNaN(phone))){
		result.innerHTML="Please Enter Your Correct Phone Number";
		result.style.color="white";
	}
	else if(user ===""){
		result.innerHTML="Please Enter Your Correct User Name";
		result.style.color="white";
	}
	else if(pass === ""){
		result.innerHTML="Please Enter Your Password";
		result.style.color="white";	
	}
	else if(conform === ""){
		result.innerHTML="Please Enter Your Conform Password";
		result.style.color="white";	
	}
	else if(pass != conform){
		result.innerHTML="Please Enter Re-correct Password";
		result.style.color="white";	
	}
	else{
		result.innerHTML="Sign Up Sucessfull..........";
		result.style.color="white";
	}

});

