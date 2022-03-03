import gameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const createProgression = (progressionStart, progressionStep, progressionLength) => {
  const arr = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const result = progressionStart + (i * progressionStep);
    arr.push(result);
  }
  return arr;
};

const generateData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 10);
  const randomLength = getRandomNumber(5, 10);

  const progression = createProgression(firstNumber, step, randomLength);
  const randomIndex = getRandomNumber(0, progression.length - 1);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const brainProgression = () => gameLogic(gameRule, generateData);

export default brainProgression;
