var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
changecolor()


function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

}


function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;

}
 
  
function changecolor() {
  if (currentNumber <0) {
    currentNumberWrapper.style.color ='red';
  } else { 
    currentNumberWrapper.style.color = 'black';
  }
   if (currentNumber === 0) {
    currentNumberWrapper.style.color = 'gray';
  }
}


