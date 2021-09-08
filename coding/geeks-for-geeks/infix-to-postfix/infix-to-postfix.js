const precedence = {
  '(': -1,
  '-': 0,
  '+': 0,
  '*': 1,
  '/': 1,
  '^': 2,
  ')': 3,
};

function infixToPostfix(input, expected) {
  let result = '';
  const operators = ['-', '+', '*', '/', '^'];
  const stack = [];
  expression = `(${input})`; // adding braces to take care of logical condition
  for (i = 0; i < expression.length; i++) {
    if (expression[i] === '(') {
      // ([operators.includes(expression[i])) {
      stack.push(expression[i]);
    } else if (expression[i] === ')') {
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        const char = stack.pop();
        result = `${result}${char !== '(' ? char : ''}`;
      }
      stack.pop(); // removing the start brace
    } else if (operators.includes(expression[i])) {
      while (
        stack.length > 0 &&
        precedence[stack[stack.length - 1]] > precedence[expression[i]]
        // stack[stack.length - 1] !== "("
      ) {
        const char = stack.pop();
        result = `${result}${char !== '(' ? char : ''}`;
      }
      stack.push(expression[i]);
    } else {
      result = `${result}${expression[i]}`;
      //   const operator = stack.length > 0 ? stack.pop() : "";
      //   result = `${result}${expression[i]}${operator === "(" ? "" : operator}`;
    }
    console.log({
      i,
      str: expression,
      c: expression[i],
      st: stack,
      res: result,
      exp: expected.slice(0, result.length),
    });
  }
  console.log({ input: expression, result: result });
  return result;
}

const test = (input, expected) => {
  const result = infixToPostfix(input, expected);
  if (result !== expected) {
    console.error(`Wrong output for test ${input}. Expected ${expected} and found ${result}`);
  } else {
    console.info(`Correct result for test ${input}`);
  }
};

test('x^y/(5*z)+2', 'xy^5z*/2+');
//Wrong output for test x^y/(5*z)+2. Expected xy^5z*/2+ and found xy^5z*2+
test('A+(B*C-(D/E^F)*G)*H', 'ABC*DEF^/G*-H*+');
//Wrong output for test A+(B*C-(D/E^F)*G)*H. Expected ABC*DEF^/G*-H*+ and found ABC*DEF^/G*H*
