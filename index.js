function calculate(str) {
    // const strArray = ... 
    strArray = str.split(" ");
    // let answer = ""  тоді не треба буде дублювати в switch answer = ""
      
    let answer;    
    const firstNumber = strArray[0].length;
    const secondNumber = strArray[2].length;
    switch (strArray[1]) {
      case "+":
        answer = strArray[0] + strArray[2];
        break;
      case "-":
        answer = "";
            // цикл `for` винеси в окрему функцію
        for( let i=0; i < firstNumber - secondNumber; i++) {
          answer = answer + ".";        
        }
        break;  
        case "*":
        answer = "";
            // цикл `for` винеси в окрему функцію
        for( let i=0; i < firstNumber * secondNumber; i++) {
          answer = answer + ".";        
        }
        break;  
        case "//":
        answer = ""; 
            // цикл `for` винеси в окрему функцію
        for( let i=0; i < Math.trunc(firstNumber / secondNumber); i++) {
          answer = answer + ".";        
        }
        break;  
    }    
    return answer;
  }
  
  //console.log(calculate("..... + ..............."));  

  function grid(number) {
    if (number < 0) {
        // не лишай консолів, ти маєш повертати якесь значення, консолі слугують лише як допоміжні методи, а ти тут нічого не повертаєш
      console.log(null);
      return
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";    
    let num;
    let string;
    for (let j = 0; j < number; j++) {
      string = alphabet[j];
      num = j;
      for(let i = 0; i < number - 1; i ++) {
        num++;
        if (num > 25) num = 0;
        string = string + ' ' + alphabet[num] ;
      }
        
      // те саме тут
      console.log(string);
    }       
      // і тут
      // ти маєш повернути масив масивів grid(3) --> [[a,b,c],[b,c,d],[c,d,e]]
    return
  }
  //grid(10);

  function isValidParentheses(string) {
    let answer;
    let stringArray = [];    
    for (let i = 0; i < string.length; i++) {
        // використовуй === замість ==
      if (string[i] == ')') {
        if (stringArray.slice(-1) == '(') stringArray.pop(); else stringArray.push(string[i]);
      } else stringArray.push(string[i]);      
    }
      // використовуй === замість ==
    if (stringArray.length == 0) answer = true; else answer = false;
    return answer;
}
console.log(isValidParentheses(")(()))")) ;
