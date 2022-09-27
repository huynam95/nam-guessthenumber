import View from './view';

class leftView extends View {
  _parentElement = document.querySelector('.left');

  /**
   * Handling clicking "Check"
   * @param {function} handler a function that will be call after a click
   * @returns {undefined}
   * @this {Object} leftView Instance
   * @author Tran Huy Nam
   * @todo None
   */
  addHandlerGetResult(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.check');
      if (!btn) return;

      const userGuess = +document.querySelector('.guess').value;
      if (!userGuess) return;

      handler(userGuess);
    });
  }
}

export default new leftView();
