// Importing the other helper functions needed for these helper functions
import { decoder } from "./decoder";
import { fetchQuestions } from "../api/fetchQuestions";

// Function that will check if all required field for the quiz have been filled out
export const handleSubmit = (category, difficulty, name, setErr, history, setQuestions) => {

    // Checks if any of the input fields is empty, and if so, thorws an error
    if(!category||!difficulty||!name) {
        setErr(true);
        return
    }

    // Calls for the funciton which will fetch the questions and forward the user to the page with the questions
    else {
        setErr(false);
        fetchQuestions(category, difficulty, setQuestions);
        history("/quiz")
    }
}

// Function that will check if the selected option is the correct option
export const handleSelect = (option, sel, corr) => {

    // Checks if an option is selected and if it is correct
    if(sel === option && sel === corr) return 'correct'

    // Checks if an option is selected and if it is incorrect
    else if(sel === option && sel !== corr) return 'wrong';

    // Checks which option is correct and marks it as such
    else if(option === corr) return 'correct'
}

// Function that handles what happens when the button is pressed
export const handleCheck = (option, setSelected, setScore, setErr, score, corr) => {

    setSelected(option);

    // Checks if the selected option is corret, and if so, increases the score by one
    if(option === corr) setScore(score + 1);
    setErr(false);
}

// Function that handles the event of pressing the button to get to the next question
export const handleNext = (currQues, selected, setCurrQues, setSelected, setErr, history) => {

    // Checks if the the current Question index is greater than 8 (if the 10th question was answered) and if yes, will forward the user to the reult page
    if(currQues > 8) history('/result');

    // Checks if an option was selected, and if yes, proceeds to the next question and removes the currently selected option
    else if(selected) {setCurrQues(currQues + 1); setSelected();}

    // Throws error if no option was selected
    else(setErr(true))
}

// Funciton that will shuffle the answers to the questions in an random order
export const handleSchuffle = (options) => {

    // Decoding all special encoded signs
    const answers = options.map(answer => decoder(answer))

    // Randomizing the answers list
    answers.sort(() => Math.random() - 0.5);
    return answers;
}