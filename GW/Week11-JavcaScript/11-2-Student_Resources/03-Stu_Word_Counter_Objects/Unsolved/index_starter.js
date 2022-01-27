// Initialize the function

sent = "I yam what I yam and always will be what I yam"
function countWords(sentence){
  // Convert string to an array of words

  var arr = sentence.split(" ")
  
  // An object to hold word frequency
  var freq = {}
  // Iterate through the array and count the occurrence of each word
  arr.forEach(function(word){
    if (word in freq){
      freq[word] += 1;
    }else{
      freq[word] = 1;
    }
  })

//  Call the function with the string as a parameter.
return freq;
}

console.log(countWords(sent))
