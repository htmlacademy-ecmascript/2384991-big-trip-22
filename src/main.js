import FilterView from './view/filter-view.js';
import InfoView from './view/info-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import { render, RenderPosition } from './render.js';
import PointsModel from './model/points-model.js';

const siteHeader = document.querySelector('.page-header');
const tripEvents = document.querySelector('.trip-events');
const tripMain = siteHeader.querySelector('.trip-main');
const tripFilters = siteHeader.querySelector('.trip-controls__filters');
const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({container: tripEvents, pointsModel});

render(new InfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFilters);
boardPresenter.init();


