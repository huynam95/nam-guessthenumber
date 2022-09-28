import View from './View.js';

class rightMessageView extends View {
  _parentElement = document.querySelector('.message');

  /**
   * Display text messages and color background depend on situations
   * @param {undefined}
   * @returns text (Text that will be displayed on screen)
   * @this {Object} rightMessageView Instance
   * @author Tran Huy Nam
   * @todo Refactoring some bad code
   */
  _generateMarkup() {
    const curScore = this._data.score;
    const secretNumber = this._data.secretNumber;
    const curResult = this._data.result.at(-1);

    if (!curResult) {
      document.querySelector('.again').style.backgroundColor = '';
      document.querySelector('.again').style.color = 'black';

      document.querySelector('body').style.backgroundColor = '#222';

      document.querySelector('.number').textContent = '?';
      document.querySelector('.number').style.width = '15rem';

      document.querySelector('.guess').value = '';
      return `Start guessing...`;
    }

    if (curResult > 20 || curResult < 1) {
      if (curScore === 0) {
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        return `💥 You lost the game (X.X)`;
      }
      return `Your guess need to be between 1 and 20 !!`;
    }

    if (curScore === 0) {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      return `💥 You lost the game (X.X)`;
    }

    if (curResult > secretNumber) return `📈 Too high!`;

    if (curResult < secretNumber) return `📉 Too low`;

    if (curResult === secretNumber) {
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.again').style.backgroundColor = 'red';
      document.querySelector('.again').style.color = 'white';
      return `🎉 Correct Number!`;
    }
  }
}

export default new rightMessageView();
