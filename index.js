// Set up:
//  Encode = shift the letter by a certain number (userKey) > we add user key to the index value
//  Decode = we subtract the userKey value 
// index values are 0-25 for 26 letters of the alphabet
// if we reach the end of the alphabet, we go back to "a" (and vice versa)
// all text inputs will be converted to lower case + output will also be lowercase
// any spaces or symbols other than [a-z] will remain unchanged in the output
//========================================================================================================

const alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];

// HTML:  onchange="applyCipher()"  >> attribute applied to both Radio Buttons + Key 
// function checks whether Encode has been checked or Decode >> flag
// we create an empty array > we loop thrhough the input text and apply codeLetter(which takes the letter, user key + flag) function to each letter
function applyCipher(){
  let inputText = document.getElementById("input").value.trim().toLowerCase()
  let encode = document.getElementById("encode");
  let userKey = document.getElementById("user-key").value;
  let outputText = [];
  let flag = true;

  if (encode.checked) {flag = true;} 
  else {flag = false;}

   for (let i = 0; i < inputText.length; i++){
    outputText.push(codeLetter(inputText[i], userKey, flag));
   }

   document.getElementById("output").value = outputText.join("");
};

// create functions that return index value of a letter + letter for each index value [a=0, b=1,...z=25]

function convertLetterToIndex(letter){   
    index = alphabet.indexOf(letter);
    return index;
}
function convertIndexToLetter(index){
    let letter = alphabet[index];
    return letter;
};

// create function that applies the userKey value to the index of the input letter based on whether we Encode(>> add) or Decode(>subtract)
function calculateNewIndex(letter, userKey, encode){
     
    // obtain index from the function argument (letter)
    let index = Number(convertLetterToIndex(letter));
  
    // if encode is selected, we increment index value by the value userKey  
    // if decode is selected we subtract the value of user Key (converted to Number) from the index
    if (encode) {index += Number(userKey);} 
    else {index -= Number(userKey);}  
    
    // a-z index values are 0-25 >> 
    // if the resulting index value exceeds 25, we need to subtract 26 to go back to the start of the alphabet / return to within 0-25 range
    // if we are decoding & subtract a userKey value higher than the index value so that we end up with a negative number, we add 26 to get 0-25
    if (index > 25) {index -= 26;} 
    else if (index < 0) {index += 26;}

    // function returns new index value (>> Number)
    return index;
  };

  //===========================================
  function codeLetter(letter, userKey, flag){
    // create RegEx for any non-letter characters  >> if they are present in the input string (=letter), they remain unchanged
    // otherwise we invoke functions to calculate new index and apply this to obtain new letter from the alphabet array
    let nonLetters = /[^a-z]/;

    if (nonLetters.test(letter)){return letter;} 
    else {
      let newIndex = calculateNewIndex(letter, userKey, flag);
      let newLetter = convertIndexToLetter(newIndex);
      return newLetter;
    }
  };