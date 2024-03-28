const form=document.getElementById("form");
const username=document.getElementById("name");
const mail=document.getElementById("mail");
const number=document.getElementById("number");
const password=document.getElementById("password");
const confirmp=document.getElementById("confirm");

form.addEventListener('submit',e =>{
    e.preventDefault();
    Validite();
});

function Validate(){
   const userval = username.value.trim();
   const mailval = mail.value.trim();
   const numberval = number.value.trim();
   const passwordval = password.value.trim();
   const confirmval = confirmp.value.trim();

   if(userval===''){
    setError(username,'Username cannot be empty');
   }
   else{
    setSuccess(username);
   }

   if(mailval===''){
    setError(mail,'E-mail connot be empty');
   }
   else if(!isEmail(mailval)){
    setError(mail,'Not a valid mail');
   }
   else{
    setSuccess(mail);
   }
   if(passwordval===''){
    setError(password,'Password cannot be empty');
   }
   else{
    setSuccess(password);
   }
   if(confirmval===''){
    setError(confirmp,'Password cannot be empty');
   }
   else if(passwordval !== confirmval){
    setError(confirmp,'Not matching password')
   }
   else{
    setSuccess(password);
   }

   function setError(input,mes){
    const control = input.parentElememt;
    const err = control.querySelector('small');
    control.className = 'form error';
    small.InnerText = message;
   }

   function isEmail(mail){
    return /^(([^<>()\[\]\\.,;:\@s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)| ("+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(( [a-zA-Z\-6-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
   }
}