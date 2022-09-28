export default class View {
  _data;

  /**
   * Re-Render the HTML context to PARENT ELEMENT whatever in generateMarkup return
   * @param {Object} data Usually come from model.state Object
   * @returns {undefined}
   * @this {Object} View instance
   * @author Tran Huy Nam
   * @todo None
   */
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.textContent = markup;
  }
}
