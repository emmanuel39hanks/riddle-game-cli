import prompts from 'prompts';
import { riddles } from './riddles';
import { showSpinner } from './animations';

async function askRiddle(riddle: { question: string; options: string[] }) {
  const response = await prompts({
    type: 'select',
    name: 'answer',
    message: riddle.question,
    choices: riddle.options.map(option => ({ title: option, value: option }))
  });

  return response.answer;
}

export async function runRiddles() {
  console.log("Welcome to the Riddle Game! Let's solve some riddles.\n");

  for (const riddle of riddles) {
    const userAnswer = await askRiddle(riddle);
    const isCorrect = userAnswer === riddle.answer;

    await showSpinner(`Checking answer for: ${userAnswer}`, isCorrect);
    console.log();
  }

  console.log("You've completed the riddles! Thanks for playing.");
}