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
      
      encrypt('hello!');
