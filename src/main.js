import { FilterView } from './view/filter-view.js';
import { InfoView } from './view/info-view.js';
import { BoardPresenter } from './presenter/board-presenter.js';
import { render, RenderPosition } from './render.js';

const siteHeader = document.querySelector('.page-header');
const tripEvents = document.querySelector('.trip-events');
const pageBodyContainer = siteHeader.querySelector('.trip-main');
const tripFilters = siteHeader.querySelector('.trip-controls__filters');
const boardPresenter = new BoardPresenter({container: tripEvents});

render(new InfoView(), pageBodyContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFilters);
boardPresenter.init();
