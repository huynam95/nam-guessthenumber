import View from './View.js';

class againView extends View {
  _parentElement = document.querySelector('.again');

  /**
   * Handling clicking "Again"
   * @param {function} handler a function that will be call after a click
   * @returns {undefined}
   * @this {Object} againView Instance
   * @author Tran Huy Nam
   * @todo None
   */
  addHandlerAgain(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn');
      if (!btn) return;

      handler();
    });
  }
}

export default new againView();
