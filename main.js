
let button = document.querySelectorAll("button"),
    input = document.querySelector("input"),
    numArray = [],
    charArray = [];


button.forEach(element => {
    element.onclick = () => {
        if (!isNaN(element.innerText)) {
            if (isNaN(input.value)) {
                input.value = '';
            }
            input.value = input.value + element.innerText;
        } else {
            if (!isNaN(input.value)) {
                numArray.push(input.value);
                input.value = element.innerText;
                if (element.innerText != '=') {
                    charArray.push(element.innerText);
                }
            }            
            if (element.innerText == '=') {
                if (charArray[charArray.length-1] == '+') {
                    input.value = (+numArray[0] + +numArray[1]);
                } else if (charArray[charArray.length-1] == '-') {
                    input.value = (numArray[0] - numArray[1]); 
                } else if(charArray[charArray.length-1] == '*') {
                    input.value = (numArray[0] * numArray[1]); 
                } else if(charArray[charArray.length-1] == '/') {
                    input.value = (numArray[0] / numArray[1]);
                }
                
                numArray = [];
                charArray = [];
            }
            
            if (element.innerText == 'C') {
                input.value = '';
                numArray = [];
                charArray = [];
            }
        }
        console.log(numArray);
        console.log(charArray);
    }
});

     

function moveBtn() {       
  setTimeout(function() {   
       
    button.forEach(element => {
        let randX = Math.random() * 800,
        randY = Math.random() * 750;
        element.style.transform = "translate(" + randX + "px," + randY + "px)";
        input.style.transform = "translate(" + randX + "px," + randY + "px)";
        console.log(randX, randY);
    });
    // button[0].style.transition = "2";
    moveBtn();                                 
  }, 2000)
}

moveBtn(); 