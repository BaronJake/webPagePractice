function coutingCharacters(stringToCount){
  console.log(stringToCount + " has " + stringToCount.length + " characters.");
}
function coutingCharacters2(stringToCount,characterToFind){
  var characterCount = 0;
  for (var characterPosition = 0;
    characterPosition < stringToCount.length;
     characterPosition++){
    if (stringToCount[characterPosition] == characterToFind){
      characterCount++;
    }
  }
  console.log("String to search in: " + stringToCount);
  console.log("characterToFind: " + characterToFind);
  console.log("Number of times the character appears:" + characterCount);
}

function countingCharacters3(str, search){
    var count = 0;
    var numChars = search.length;
    var lastIndex = str.length - numChars;

    for (var index = 0; index <= lastIndex; index++){
        var current = str.substring(index, index + numChars);
        if (current == search){
            count++;
        }
    }
    return count;
}
