const sentence = "hello there from lighthouse labs";

const printEachLetterWithDelay = function(sentence) {
  let time = 0;
  const step = 50;

  const printLetter = function(char) {
    setTimeout(() => process.stdout.write(char), time);
    time += step;
  };

  for (const char of sentence) {
    printLetter(char);
  }
};
printEachLetterWithDelay(sentence);
