function forLoop(array) {
  for(let i = 0; i < 25; i++){
    if(i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(num) {
  let i = num
  while(i > 0){
    console.log(num);
    i--;
  }
  return 'done'
}

const doWhileLoop = i => {
  do {
    function incrementVariable() {
  i = i + 1;
  return i;
}
  console.log("I run once regardless.")
  } while (i < )
}