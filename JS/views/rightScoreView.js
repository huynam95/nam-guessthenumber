import View from './View.js';

class rightScoreView extends View {
  _parentElement = document.querySelector('.score');

  /**
   * Return the current score to the render method to render
   * @param {undefined}
   * @returns {number} curScore
   * @this {Object} rightScoreView instance
   * @author Tran Huy Nam
   * @todo None
   */
  _generateMarkup() {
    const curScore = this._data.score;
    return curScore;
  }
}

export default new rightScoreView();
