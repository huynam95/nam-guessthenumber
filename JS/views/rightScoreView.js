import View from './view';

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
    console.log(this, 'rightScoreView');
    const curScore = this._data.score;
    return curScore;
  }
}

export default new rightScoreView();
