function calculate(str) {
    // має бути const/let перед назвою
    strArray = str.split(" ");    
    let answer;    
    const firstNumber = strArray[0].length;
    const secondNumber = strArray[2].length;
    switch (strArray[1]) {
      case "+":
        answer = strArray[0] + strArray[2];
        break;
      case "-":
        answer = "";
        for( let i=0; i < firstNumber - secondNumber; i++) {
          answer = answer + ".";        
        }
        break;  
        case "*":
        answer = "";
        for( let i=0; i < firstNumber * secondNumber; i++) {
          answer = answer + ".";        
        }
        break;  
        case "//":
        answer = "";        
        for( let i=0; i < Math.trunc(firstNumber / secondNumber); i++) {
          answer = answer + ".";        
        }
        break;  
    }    
    return answer;
  }
  
  //console.log(calculate("..... + ..............."));  

  function grid(number) {
    // треба переробити, функція має повертати масив масивів [[a,b],[b,c]]
    // зараз в тебе функція взагалі нічого не повертає, консолі використовуються лише для того, щоб допомогати тобі дебажити
    if (number < 0) {
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
      console.log(string);
    }       
    return
  }
  //grid(10);

  function isValidParentheses(string) {
    let answer;
    let stringArray = [];    
    for (let i = 0; i < string.length; i++) {      
      if (string[i] == ')') {
        if (stringArray.slice(-1) == '(') stringArray.pop(); else stringArray.push(string[i]);
      } else stringArray.push(string[i]);      
    }    
      // використовуй === замість == 
    if (stringArray.length == 0) answer = true; else answer = false;
    return answer;
}
console.log(isValidParentheses(")(()))")) ;
