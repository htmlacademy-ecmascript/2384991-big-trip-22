import AddEventButtonView from './view/add-event-button-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import HeaderInfoPresenter from './presenter/header-info-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './api-service/points-api-service.js';
import { render, RenderPosition } from './framework/render.js';
import { AUTORIZATION, END_POINT, UpdateType } from './const.js';

const siteHeader = document.querySelector('.page-header');
const tripEvents = document.querySelector('.trip-events');
const tripMain = siteHeader.querySelector('.trip-main');
const tripFilters = siteHeader.querySelector('.trip-controls__filters');

const pointsApiService = new PointsApiService(END_POINT, AUTORIZATION);
const pointsModel = new PointsModel({pointsApiService});
const filterModel = new FilterModel();

const boardPresenter = new BoardPresenter({container: tripEvents, pointsModel, filterModel, onNewPointDestroy: handleAddEventFormClose});
const filterPresenter = new FilterPresenter({filterContainer: tripFilters, filterModel, pointsModel});
new HeaderInfoPresenter({headerContainer: tripMain, pointsModel});

const addEventButtonComponent = new AddEventButtonView({onAddEventClick: handleAddEventButtonClick});

function handleAddEventFormClose() {
  addEventButtonComponent.element.disabled = false;
}

function handleAddEventButtonClick() {
  boardPresenter.createPoint();
  addEventButtonComponent.element.disabled = true;
}

pointsModel.addObserver((updateType) => {
  if (updateType === UpdateType.INIT) {
    addEventButtonComponent.element.disabled = false;
  } else if (updateType === UpdateType.ERROR) {
    addEventButtonComponent.element.disabled = true;
  }
});

boardPresenter.init();
filterPresenter.init();

pointsModel.init().finally(() => {
  render(addEventButtonComponent, tripMain, RenderPosition.BEFOREEND);
});
