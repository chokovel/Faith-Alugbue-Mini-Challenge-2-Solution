const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

function morse(text) {
  if(MORSE_CODE[text]) return MORSE_CODE[text];
  let codeKey = "";
  let decodeStr = "";
  for(let i=0;i<text.length;i++) {
    if(text[i] != " ") {
      codeKey += text[i]; // same as codeKey = codeKey + text[i];
    }else {
      if(codeKey != " " && !MORSE_CODE[codeKey]){
        return "Please provide a morse string";
        
      }
      decodeStr += MORSE_CODE[codeKey] ? 
                   MORSE_CODE[codeKey] : 
                   decodeStr[decodeStr.length-1] != " " ? " ": "" ;
      codeKey = "";
    }
    
  }
  decodeStr += codeKey != "" ? MORSE_CODE[codeKey]: "";
  return decodeStr.trim();

}

module.exports = morse;
