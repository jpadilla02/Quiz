export async function getQuestions(category) {
  const questions = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`
  ).then(results => results.json());
  return questions;
}
