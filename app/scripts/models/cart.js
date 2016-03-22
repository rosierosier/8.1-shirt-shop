console.log('Hello Model!');

var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var SingleItem = Backbone.Model.extend({
  // idAttribute: '_id'
});

var ItemCollection = Backbone.Collection.extend({
  model: SingleItem,
  // url: 'http://tiny-lasagna-server.herokuapp.com/collections/rosieimageproject',
});

module.exports = {
  'SingleItem': SingleItem,
  'ItemCollection': ItemCollection
};
