const names = ["Ada", "Brendan", "Ali"];

function writeCards(array, message) {
   let newArray = [];
   for (let i = 0; i < array.length; i++) {
      newArray.push(`Thank you, ${array[i]}, for the wonderful ${message} gift!`);
   }
   return newArray;
}

writeCards(names, "birthday");

function countDown(number) {
   let i = 0;
   while (i < number + 1) {
      console.log(number);
      number--;
   }
   return number;
}

countDown(10);
