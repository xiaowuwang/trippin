import DS from 'ember-data';
import config from 'trippin/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
  namespace: config.DS.namespace,
});
