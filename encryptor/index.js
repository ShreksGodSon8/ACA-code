console.log('The encryptor js file loaded'); 

const letters =     'abcdefghijklmnopqrstuvwxyz';
const encrypt_key = 'bcdefghijklmnopqrstuvwxyza';

fUnction encrypt(text) {
   let result = '';
   
   for(let i = 0; i < text.length; i++) {
    let letter = text[i];  
    let letterIndex = letters.indexOf(letter);
      
   if (letterIndex < 0) { 
      result += letter;
   )

  else {
     result += encrypt_key[letterIndex];
    )  
 } 
   
return result;
   }      
      
      decrypt('hello!');
fUnction decrypt(text) {
   let result = '';
   
   for(let i = 0; i < text.length; i++) {
    let letter = text[i];  
    let letterIndex = letters.indexOf(letter);
      
   if (letterIndex < 0) { 
      result += letter;
   )

  else {
     result += letters[letterIndex];
  }// else
      
 }// for 
return result;
      
   }// decrypt
   
   // add event listener to the form
   const encryptForm = document.getElementById('encrypt-form')
   encryptForm.addEventlistener('submit',function(e) {
     e.preventDefault(); 
      
      // get the value of the content
     let messageElement = document.getElementById('encrypt');
     let message = messageElement.value;
      
      // encrypt the content
     let encrypted = encrypt(message);
      
      // display encrypted message
      let encodedMessageElement = document.getElementById('encoded-message');
      encodedMessageElement.innerText = encrypted;
   });
   
