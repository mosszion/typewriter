const sentence = "hello lighthouse labs, this is moss learning timeout functions \n";
let delay = 0;
// looping through the sentence
for(let letter of sentence){
  setTimeout(() => {
    process.stdout.write(letter);

  }, delay);
  delay += 50;
}


