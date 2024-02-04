import EditListView from '../view/edit-list-view.js';
import SortView from '../view/sort-view.js';
import NoPointView from '../view/no-point-view.js';
import LoadingView from '../view/loading-view.js';
import PointPresenter from './point-presenter.js';
import FormAddPresenter from './form-add-presenter.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';
import { render, RenderPosition, remove } from '../framework/render.js';
import { SortType, UpdateType, UserAction, FilterType, TimeLimit, BLANK_POINT } from '../const.js';
import { sortPointsByPrice, sortPointsByTime, sortPointsByDay } from '../utils/points.js';
import { filter } from '../utils/filters.js';

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;
  #filterModel = null;
  #onNewPointDestroy = null;

  #sortComponent = null;
  #noPointsComponent = null;
  #editListComponent = new EditListView();
  #loadingComponent = new LoadingView();

  #pointPresenters = new Map();
  #formAddPresenter = null;

  #currentSortType = SortType.DAY;
  #filterType = FilterType.EVERYTHING;
  #isLoading = true;
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  constructor({ container, pointsModel, filterModel, onNewPointDestroy }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#onNewPointDestroy = onNewPointDestroy;

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filtredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return filtredPoints.sort(sortPointsByDay);
      case SortType.PRICE:
        return filtredPoints.sort(sortPointsByPrice);
      case SortType.TIME:
        return filtredPoints.sort(sortPointsByTime);
    }

    return filtredPoints;
  }

  init() {
    this.#renderBoard();
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#formAddPresenter.init(BLANK_POINT);
  }

  #handleModeChange = () => {
    if (this.#formAddPresenter) {
      this.#formAddPresenter.destroy();
    }
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = async (actionType, updateType, updatedPoint) => {
    this.#uiBlocker.block();
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenters.get(updatedPoint.id).setSaving();
        try {
          await this.#pointsModel.updatePoint(updateType, updatedPoint);
        } catch(err) {
          this.#pointPresenters.get(updatedPoint.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#formAddPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, updatedPoint);
        } catch(err) {
          this.#formAddPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenters.get(updatedPoint.id).setDeleting();
        try {
          await this.#pointsModel.deletePoint(updateType, updatedPoint);
        } catch(err) {
          this.#pointPresenters.get(updatedPoint.id).setAborting();
        }
        break;
    }

    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderBoard();
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearBoard({resetRenderedPointCount: true});
    this.#renderBoard();
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(this.#sortComponent, this.#container, RenderPosition.AFTERBEGIN);
  }

  #renderEditList() {
    render(this.#editListComponent, this.#container);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      container: this.#editListComponent.element,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderFormAdd() {
    this.#formAddPresenter = new FormAddPresenter({
      pointListContainer: this.#editListComponent.element,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
      onDestroy: this.#onNewPointDestroy,
      allDestinations: this.#pointsModel.destinations,
      allOffers: this.#pointsModel.offers,
      pointsModel: this.#pointsModel,
      onNewPointDestroy: this.#onNewPointDestroy,
    });
  }

  #renderPoints(points) {
    points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#container);
  }

  #renderNoPoints() {
    this.#noPointsComponent = new NoPointView({
      filterType: this.#filterType,
    });

    render(this.#noPointsComponent, this.#container);
  }

  #clearBoard({resetSortType = false} = {}) {
    this.#formAddPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#noPointsComponent);
    remove(this.#loadingComponent);

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }

    if (this.#noPointsComponent) {
      remove(this.#noPointsComponent);
    }
  }

  #renderBoard() {
    this.#renderEditList();

    if(this.#isLoading) {
      this.#renderLoading();
      return;
    }

    const points = this.points;
    const pointCount = points.length;

    if (pointCount === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPoints(this.points);
    this.#renderFormAdd();
  }
}
