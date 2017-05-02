import Ember from 'ember';
import _ from 'lodash';

export default Ember.Route.extend({
  model() {
    return _.countBy([6.1, 4.2, 6.3], Math.floor)[4];
  }
});
