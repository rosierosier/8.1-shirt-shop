console.log("Hello World!");
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var router = require('./router');
var models = require('./models/cart')
var Shop = require('./components/shop.jsx');

var ItemCollection = new models.ItemCollection();

// $(function(){
//   Backbone.history.start();
// });
var cartItems = JSON.parse(localStorage.getItem('shopping-cart') || [];

$('.btn-primary').click(function(e){
  e.preventDefault();
  var $button = $(this);
  //can put an id on each button
  var cartItem = {
    'shirt': $button.data('keroppi');
    'size': $button.closest('.tshirt-image').find('.size select');
    'quantity': $button.closest('.tshirt-image').find('.quantity input');
  }
  cartItems.push(cartItem);
  localStorage.setItem('shopping-cart', JSON.stringify(cartItem));
});

// var myShoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));


//for loop or map and print to screen
