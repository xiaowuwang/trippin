import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('register');
  this.route('login');

  this.route('user-profile', function() {
    this.route('trip-form');
  });
});

export default Router;
