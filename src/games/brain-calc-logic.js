import gameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculator = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const generateData = () => {
  const number1 = getRandomNumber(1, 25);
  const number2 = getRandomNumber(1, 25);
  const randomOperator = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = `${calculator(number1, randomOperator, number2)}`;
  return [question, correctAnswer];
};

const brainCalc = () => gameLogic(gameRule, generateData);

export default brainCalc;
