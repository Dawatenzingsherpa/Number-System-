document.querySelector('.js-binaryToDecimal')
  .addEventListener('click',()=>{
    let num = document.querySelector('input').value;
    binaryToDecimal(num);
  })

document.querySelector('.js-decimalToBinary')
  .addEventListener('click',()=>{
    let num = document.querySelector('input').value;
    decimalToBinary(num);
  })  

document.querySelector('.js-octalToDecimal')
  .addEventListener('click',()=>{
    let num = document.querySelector('input').value;
    octalToDecimal(num);
})
  
document.querySelector('.js-decimalToOctal')
  .addEventListener('click',()=>{
    let num = document.querySelector('input').value;
    decimalToOctal(num);
  })
  
document.querySelector('.js-HexaDecimalToDecimal')
  .addEventListener('click',()=>{
    let num = document.querySelector('input').value;
    hexaDecimalToDecimal(num);
  })
  
document.querySelector('.js-decimalToHexaDecimal')
.addEventListener('click',()=>{
  let num = document.querySelector('input').value;
  decimalToHexaDecimal(num);
})   

document.querySelector('.js-octalToBinary')
  .addEventListener('click',()=>{
    let num = document.querySelector('input').value;
    octalToBinary(num);
  })

document.querySelector('.js-hexaDecimalToBinary')
  .addEventListener('click',()=>{
    let num = document.querySelector('input').value;
    hexaDecimalToBinary(num);
  })

document.querySelector('.js-octalToHexaDecimal')
  .addEventListener('click',()=>{
    let num = document.querySelector('input').value;
    octalToHexaDecimal(num);
  })

document.querySelector('.js-hexaDecimalToOctal')
  .addEventListener('click',()=>{
    let num = document.querySelector('input').value;
    hexaDecimalToOctal(num);
  })  




function decimalToBinary(num){
  let conversion = '';
  let digits = String(num).split('');
 
  for(let i = 0; i < digits.length; i++){
    let digit = Number(alphaorNumber(digits[i]));
    if( digit > 10){
      alert('invalid Input')
    }
  }
  
  while(num > 0){
  let rem = num % 2;
  
  
  
  conversion = conversion + String(rem);
  
  num = Math.floor(num / 2);
  }
  conversion = conversion.split("").reverse().join('');
  document.querySelector('.js-result')
    .innerHTML = `Conversion :${conversion}`;
  inputToNull();
}




function binaryToDecimal(num){
  let digits = String(num).split("");
  
  let conversion = 0;
  for(let i = 0;i < digits.length;i++){
    let digit = Number(digits[digits.length-i-1]);
    if(digit < 2){
    conversion = conversion + (digit * (2 ** i));
    document.querySelector('.js-result')
      .innerHTML = `Conversion :${conversion}`;

    }else{
      alert('Invalid Input');
      break;
    }
  }
  inputToNull();
}



function decimalToOctal(num){
  let conversion = '';
  let digits = String(num).split('');
 
  for(let i = 0; i < digits.length; i++){
    let digit = Number(alphaorNumber(digits[i]));
    if( digit > 10){
      alert('invalid Input')
    }
  }
  
  while(num > 0){
  let rem = num % 8;
  conversion = conversion + String(rem);
  
  num = Math.floor(num / 8);
  }
  conversion = conversion.split("").reverse().join('');
   document.querySelector('.js-result')
    .innerHTML = `Conversion :${conversion}`;
    
    inputToNull();
    return conversion;
}



function octalToDecimal(num){
  let digits = String(num).split("");
  let conversion = 0;
  for(let i = 0;i < digits.length;i++){
    let digit = Number(digits[digits.length-i-1]);
    if(digit < 8){
    conversion = conversion + (digit * (8 ** i));
    
    document.querySelector('.js-result')
    .innerHTML = `Conversion :${conversion}`;
    }else{
      alert('Invalid Input');
      break;
    }
  }
  inputToNull();
  return conversion;
   
}




function decimalToHexaDecimal(num){
  let conversion = '';
  let digits = String(num).split('');
 
  for(let i = 0; i < digits.length; i++){
    let digit = Number(alphaorNumber(digits[i]));
    if( digit > 10){
      alert('invalid Input')
    }
  }
  
  while(num > 0){
    let rem = num % 16;
    rem = greaterThan9(rem);
    conversion = conversion + String(rem);
    num = Math.floor(num / 16);
  }
  conversion = conversion.split("").reverse().join('');
   document.querySelector('.js-result')
    .innerHTML = `Conversion :${conversion}`;
    
  inputToNull();
  return conversion;
}


function greaterThan9(rem){
  if(rem > 9){
    if(rem === 10){
      return 'A';
    }else if(rem === 11){
      return 'B';
    }else if(rem === 12){
      return 'C';
    }else if(rem === 13){
      return 'D';
    }else if(rem === 14){
      return 'E';
    }else if(rem === 15){
      return 'F';
    }
  }else{
    return rem;
  }
}




function hexaDecimalToDecimal(num){
  let digits = String(num).split("");
  let conversion = 0;
  for(let i = 0;i < digits.length;i++){
    let digit = (digits[digits.length-i-1]);
    digit = Number(alphaorNumber(digit));
    conversion = conversion + (digit * (16 ** i));
  }
   document.querySelector('.js-result')
    .innerHTML = `Conversion :${conversion}`;
  inputToNull();
  return conversion;
}


function alphaorNumber(digit){
  
  if(digit === 'A'){
    return '10';
  }else if(digit === 'B'){
    return '11';
  }else if(digit === 'C'){
    return '12';
  }else if(digit === 'D'){
    return '13';
  }else if(digit === 'E'){
    return '14';
  }else if(digit === 'F'){
    return '15';
  }else{
    return digit;
  }
}

function octalToBinary(num){
  let decimal = octalToDecimal(num);
  console.log(decimal);
  return decimalToBinary(decimal);
  
}


function hexaDecimalToBinary(num){
  let decimal = hexaDecimalToDecimal(num);
  return decimalToBinary(decimal);
}


function octalToHexaDecimal(num){
  let decimal = octalToDecimal(num);
  return decimalToHexaDecimal(decimal);
}


function hexaDecimalToOctal(num){
  let decimal = hexaDecimalToDecimal(num);
  return decimalToOctal(decimal);
}


function inputToNull(){
  document.querySelector('input')
    .addEventListener('click',()=>{
      document.querySelector('input')
        .value = '';
    })
 
}