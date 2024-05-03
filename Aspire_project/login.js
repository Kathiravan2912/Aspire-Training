
async function adminPage(){
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var usererrorMessage = document.getElementById('username-error-message');
    var passworderrorMessage = document.getElementById('password-error-message');
    if(username==="" && password===""){
        usererrorMessage.textContent = "Username required!"; 
        passworderrorMessage.textContent = "Password required!";
    }
    if(username ==="" && password!==""){
        usererrorMessage.textContent = "Username required!";
    }
    if(username !=="" && password===""){
        passworderrorMessage.textContent = "Password required!";
    }
    // if(password.length < 6){
    //     passworderrorMessage.textContent = "Above 6 characters of password required";
    // }
    if(username!=="" && password!==""){
        
        // let formData= {
        //     userName : username , 
        //     password : password
        // }
        // const result = await fetch("http://localhost:3001/sign_in", formData)
        // const resultJson = await result.json();

        // console.log(result);

        let formData= {
            userName: username,
            password: password
        };


        const result = await fetch("http://localhost:3001/sign_in", {
            method: 'POST', // specify the method
            headers: {
                'Content-Type': 'application/json' // specify the content type
            },
            body: JSON.stringify(formData) // convert data to JSON string
        });

        const resultJson = await result.json();
        console.log(resultJson);




        // window.location.href = 'home.html';
    }
}
