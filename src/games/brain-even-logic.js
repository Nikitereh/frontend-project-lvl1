import func from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const check = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => func(rules, check);

export default brainEven;
