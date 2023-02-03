// Importing the other helper functions needed for these helper functions
import { decoder } from "./decoder";

// Function that will check if the selected option is the correct option
export const handleSelect = (option, sel, corr) => {
  // Checks if an option is selected and if it is correct
  if (sel === option && sel === corr) return "correct";
  // Checks if an option is selected and if it is incorrect
  else if (sel === option && sel !== corr) return "wrong";
  // Checks which option is correct and marks it as such
  else if (option === corr) return "correct";
};

// Funciton that will shuffle the answers to the questions in an random order
export const handleSchuffle = (options) => {
  // Decoding all special encoded signs
  const answers = options.map((answer) => decoder(answer));

  // Randomizing the answers list
  answers.sort(() => Math.random() - 0.5);
  return answers;
};
