const maxSize = 100;
const breakNumber = 50;

for (
  let number = 1;
  number <= maxSize;
  number += 1
) {
  if (number === breakNumber) {
    break;
  }

  if (number % 2 === 0) {
    console.log(number, 'pair');

    continue;

    console.log('jajajajajajajajajja');
  }

  console.log(number, 'odd');
}

console.log('loop ended');

/**for (;;) {
    console.log('no me paran!!!');
}*/


