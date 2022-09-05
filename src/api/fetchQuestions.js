import axios from "axios";

// Function that will fetch the questions from the api and store it into the questions variable
export const fetchQuestions = async(category, difficulty, setQuestions) => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
    setQuestions(data.results)
}