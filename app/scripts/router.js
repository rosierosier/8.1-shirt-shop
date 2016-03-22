console.log('Hello Router!');

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// var AppRouter = Backbone.Router.extend({
//     routes: {
//         "cart": "shoppingCart",
//         "*actions": "defaultRoute"
//         // Backbone will try to match the route above first
//     }
// });
// // Instantiate the router
// var newAppRouter = new AppRouter;
// newAppRouter.on('route:shoppingCart', function(){
//     console.log('routing to shopping cart');
// });
// newAppRouter.on('route:defaultRoute', function(actions){
//     console.log('default route');
// });
// // Start Backbone history a necessary step for bookmarkable URL's
// Backbone.history.start();

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "cart": "cart"
  },
  index: function(){
    console.log("index working");
    this.current = "index";
  },
  cart: function(){
    console.log('cart working');
    this.current = "cart";
  }
});
var router = new Router();

React.renderComponent(
  <InterfaceComponent router={router} />,
  document.body
);

Backbone.history.start();
