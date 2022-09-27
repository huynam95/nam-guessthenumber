import View from './View.js';

class rightHighScoreView extends View {
  _parentElement = document.querySelector('.highscore');

  /**
   * Return the current highScore to the render method to render
   * @param {undefined}
   * @returns {number} curHighScore
   * @this {Object} rightHighScoreView instance
   * @author Tran Huy Nam
   * @todo None
   */
  _generateMarkup() {
    const curHighScore = this._data.highScore;
    return curHighScore;
  }
}

export default new rightHighScoreView();
