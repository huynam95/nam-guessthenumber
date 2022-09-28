import { SCORE } from './config.js';

export const state = {
  result: [],
  secretNumber: 0,
  score: SCORE,
  highScore: 0,
};

/**
 * Generate a number when web are loaded
 * @param {undefined}
 * @returns {undefined}
 * @this {model} model Object which imported to script.js
 * @author Tran Huy Nam
 * @todo None
 */
export const generateSecretNum = function () {
  state.secretNumber = Math.trunc(Math.random() * 20) + 1;
};

/**
 * Store every User's guess in state Object (model.state.result)
 * @param {number} userGuess
 * @returns {undefined}
 * @this {model} model Object which imported to script.js
 * @author Tran Huy Nam
 * @todo None
 */
export const addScore = function (userGuess) {
  state.result.push(userGuess);
};

/**
 * Store the highest score to state Object (model.state.highScore)
 * @param {number} highScore highScore from model.state.score
 * @returns {undefined}
 * @this {model} model Object which imported to script.js
 * @author Tran Huy Nam
 * @todo None
 */
export const addHighScore = function (highScore) {
  state.highScore = highScore;
};

/**
 * Reset the state Object (Except for the highScore)
 * @param {undefined}
 * @returns {undefined}
 * @this {model} model Object which imported to script.js
 * @author Tran Huy Nam
 * @todo None
 */
export const resetScore = function () {
  state.result = [];
  secretNumber = 0;
  state.score = SCORE;
};

/**
 * Reduce model.state.score by 1
 * @param {undefined}
 * @returns {undefined}
 * @this {model} model Object which imported to script.js
 * @author Tran Huy Nam
 * @todo None
 */
export const minusScore = function () {
  state.score--;
};
