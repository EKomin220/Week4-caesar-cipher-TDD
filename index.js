const alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];

function applyCipher(){
   let inputText = document.getElementById("input").value.trim().toLowerCase()
   let encode = document.getElementById("encode");
   let userKey = document.getElementById("user-key").value;
   let outputText = [];
   let encoding = true;

   if (encode.checked) {encoding = true;} 
   else {encoding = false;}

    for (let i = 0; i < inputText.length; i++){
      outputText.push(codeLetter(inputText[i], userKey, encoding));
    }

    document.getElementById("output").value = outputText.join("");
};


function calculateNewIndex(letter, userKey, encoding){
    let index = Number(alphabet.indexOf(letter));
  
    if (encoding) {index += Number(userKey);} 
    else {index -= Number(userKey);}  
    
    if (index > 25) {index -= 26;} 
    else if (index < 0) {index += 26;}

    return index;
};


function codeLetter(letter, userKey, encoding){
    let nonLetters = /[^a-z]/;

    if (nonLetters.test(letter)){return letter;} 
    else {
      let newIndex = calculateNewIndex(letter, userKey, encoding);
      let newLetter = alphabet[newIndex]
      return newLetter;
     }
};

  
module.exports = { applyCipher, calculateNewIndex, codeLetter };


   
