function evaluateExpression(expression) {
    // Remove spaces from the expression
    expression = expression.replace(/\s+/g, '');
  
    // Validate the expression to ensure it contains only numbers and basic operators
    if (!/^[-+]?(\d+|\d+[-+*/])*[\d]?$/.test(expression)) {
      throw new Error('Invalid characters in expression');
    }
  
    // Initialize result
    let result = 0;
    let currentNumber = '';
    let currentOperator = null;
    
    // Process the expression
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      if (!isNaN(char)) {
        currentNumber += char;
      } else {
        if (currentNumber) {
          const number = parseInt(currentNumber, 10);
          switch (currentOperator) {
            case '+':
              result += number;
              break;
            case '-':
              result -= number;
              break;
            case '*':
              result *= number;
              break;
            case '/':
              result = Math.floor(result / number);
              break;
            default:
              result = number;
              break;
          }
        }
        currentOperator = char;
        currentNumber = '';
      }
    }
  
    // Apply the last number if it exists
    if (currentNumber) {
      const number = parseInt(currentNumber, 10);
      switch (currentOperator) {
        case '+':
          result += number;
          break;
        case '-':
          result -= number;
          break;
        case '*':
          result *= number;
          break;
        case '/':
          result = Math.floor(result / number);
          break;
        default:
          result = number;
          break;
      }
    }
  
    return result;
  }
  
  module.exports = evaluateExpression;
  