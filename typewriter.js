const sentence = "hello lighthouse labs, this is moss learning timeout functions \n"; //input string with new line at the end
let delay = 0;   ///delay starts at 0

// looping through the sentence

for(let letter of sentence){
  setTimeout(() => {
    process.stdout.write(letter);  //prints all letters on same line

  }, delay);    //timer guided by delay variable
  delay += 50;  //delay adds 50ms for every loop cycle
}


