import angular from 'angular';
import 'angular-ui-router';

import routesConfig from './routes';

import {main} from './app/main';
import {api} from './app/api.service';
import {navComponent} from './app/nav.component/nav';
import {homeComponent} from './app/home.component/home';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .factory('api', api)
  .component('app', main)
  .component('nav', navComponent)
  .component('home', homeComponent);
