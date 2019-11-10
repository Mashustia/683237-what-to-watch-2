import {films} from './mocks/films';

const initialState = {
  genre: `AllGenre`,
  films,
  filteredFilms: []
};

export function filmsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return Object.assign({}, state);
  }
}
//
// function isArtistAnswerCorrect(userAnswer, question) {
//   return userAnswer === question.id;
// }
//
// function isGenreAnswerCorrect(userAnswer, question) {
//   const wrongAnswers = [];
//   userAnswer.forEach((answer) => {
//     if (!question.answerIds.includes(answer)) {
//       wrongAnswers.push(answer);
//     }
//   });
//
//   return userAnswer.length === question.answerIds.length && wrongAnswers.length < 1;
// }
//
// const ActionCreator = {
//   netQuestion: () => ({
//     type: INCREMENT_MISTAKES,
//     payload: 1
//   }),
//   incrementMistake: (userAnswer, question, mistakes, maxMistakes) => {
//     let isAnswerCorrect = false;
//
//     switch (question.type) {
//       case `artist`:
//         isAnswerCorrect = isArtistAnswerCorrect(userAnswer, question);
//         break;
//       case `genre`:
//         isAnswerCorrect = isGenreAnswerCorrect(userAnswer, question);
//         break;
//     }
//
//     if (!isAnswerCorrect && mistakes + 1 >= maxMistakes) {
//       return {
//         type: NEW_GAME
//       };
//     }
//
//     return {
//       type: INCREMENT_MISTAKES,
//       payload: isAnswerCorrect ? 0 : 1
//     };
//   }
// };
