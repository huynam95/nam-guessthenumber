import * as model from './model.js';
import againView from './views/againView.js';
import leftView from './views/leftView.js';
import rightHighScoreView from './views/rightHighScoreView.js';
import rightMessageView from './views/rightMessageView.js';
import rightScoreView from './views/rightScoreView.js';

/**
 * Take User's guess to model object, process how to render the guess to the console and control the score.
 * @param {number} userGuess User's guess from input
 * @returns {undefined}
 * @this {window}
 * @author Tran Huy Nam
 * @todo Refactoring some bad code
 */
const controlScore = function (userGuess) {
  model.addScore(userGuess);

  if (userGuess === model.state.secretNumber) {
    if (model.state.score > model.state.highScore) {
      model.addHighScore(model.state.score);
      rightHighScoreView.render(model.state);
    }
    rightMessageView.render(model.state);
    rightScoreView.render(model.state);
    document.querySelector('.guess').disabled = true;
    return;
  }

  if (model.state.score > 0) {
    model.minusScore();
    rightMessageView.render(model.state);
    rightScoreView.render(model.state);
  }
};

/**
 * Handling whenever User clicks again button
 * @param {undefined}
 * @returns {undefined}
 * @this {window}
 * @author Tran Huy Nam
 * @todo Refactoring some bad code
 */
const controlAgain = function () {
  document.querySelector('.guess').disabled = false;
  model.resetScore();
  rightMessageView.render(model.state);
  rightScoreView.render(model.state);
  model.generateSecretNum();
};

/**
 * Setup when the web just loaded
 * @param {undefined}
 * @returns {undefined}
 * @this {window}
 * @author Tran Huy Nam
 * @todo None
 */
const init = function () {
  model.generateSecretNum();
  rightHighScoreView.render(model.state);
  leftView.addHandlerGetResult(controlScore);
  againView.addHandlerAgain(controlAgain);
};

init();

// git init
// git config --global user.name huynam95
// git config --global user.email tranhuynam15@gmail.com

// git status
// git add -A
// git commit -m 'Initial commit'
// git status
// git reset -- hard HEAD
// git log
// git reset -- hard 46f81f7b82c809b1e60048ba019c3e8485bb9e02

// git branch
// git branch new-feature
// git checkout new-feature
// git merge new-feature
