import AbstractView from './abstract-view.js';

/**
 * Абстрактный класс представления с состоянием
 */
export default class AbstractStatefulView extends AbstractView {
  /** @type {Object} Объект состояния */
  _state = {};

  /**
   * Метод для обновления состояния и перерисовки элемента
   * @param {Object} update Объект с обновлённой частью состояния
   */
  updateElement(update) {
    console.log('Updating element with', update);
    if (!update) {
      console.log('Update not provided, skipping updateElement');
      return;
    }

    this._setState(update);

    this.#rerenderElement();
  }

  /**
   * Метод для восстановления обработчиков после перерисовки элемента
   * @abstract
   */
  _restoreHandlers() {
    throw new Error('Abstract method not implemented: restoreHandlers');
    console.log('Restoring handlers');
  }

  /**
   * Метод для обновления состояния
   * @param {Object} update Объект с обновлённой частью состояния
   */
  _setState(update) {
    console.log('Current state before setState:', this._state);
    console.log('Applying update:', update);
    this._state = structuredClone({...this._state, ...update});
    console.log('New state after setState:', this._state);
  }

  /** Метод для перерисовки элемента */
  #rerenderElement() {
    const prevElement = this.element;
    const parent = prevElement.parentElement;
    console.log('Starting rerenderElement');
    console.log('prevElement:', prevElement);
    console.log('parent:', parent);
    if (!parent) {
      console.log('No parent found, aborting rerender');
      return;
    }
    this.removeElement();

    const newElement = this.element;
    console.log(newElement)
    parent.replaceChild(newElement, prevElement);
    console.log('Finished rerenderElement');
    this._restoreHandlers();
  }
}
