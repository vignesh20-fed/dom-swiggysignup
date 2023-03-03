let form = document.querySelector('#function');
form.addEventListener('submit',function(e){
	e.preventDefault()
	let name = document.querySelector('#NAME').value;
	let pass = document.querySelector('#PASSWORD').value;
	let result = document.querySelector('#result');
    if(name ==="" ){
		result.innerHTML="Please Enter Your Name";
		result.style.color="white";
	}
	else if(pass === ""){
		result.innerHTML="Please Enter Your Password";
		result.style.color="white";	
	}

	else{
		result.innerHTML="Login Sucessfull..........";
		result.style.color="white";
	}

});

