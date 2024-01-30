import InfoView from './view/info-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import { render, RenderPosition } from './framework/render.js';

const siteHeader = document.querySelector('.page-header');
const tripEvents = document.querySelector('.trip-events');
const tripMain = siteHeader.querySelector('.trip-main');
const tripFilters = siteHeader.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();
const filterModel = new FilterModel();

const boardPresenter = new BoardPresenter({container: tripEvents, pointsModel, filterModel});
const filterPresenter = new FilterPresenter({filterContainer: tripFilters, filterModel, pointsModel});

render(new InfoView(), tripMain, RenderPosition.AFTERBEGIN);

boardPresenter.init();
filterPresenter.init();
