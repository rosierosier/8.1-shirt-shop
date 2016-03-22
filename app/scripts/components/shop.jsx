var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/cart');

console.log('Hello Shop Component');

var RouterMixin = {
  componentWillMount: function(){
    this.callback = (function(){
      this.forceUpdate();
    }).bind(this);
    this.props.router.on('route', this.callback);
  },
  componentWillUnmount: function(){
    this.props.router.off('route', this.callback);
  }
};

var ShopComponent = React.createClass({
  mixins: [RouterMixin],
  // handle: function(){
  //   this.props.router.navigate('cart', {
  //     trigger: true
  //   });
  // },
  render: function(){
    // var className = "animate-leave animate-leave-active";
    // if (this.props.router.current == "index") {
    //   className = "animate-enter animate-enter-active";
    // }
    return (
      <div>
        <div className={className}>
          in index,
          <a onClick={this.handle}>go to cart</a>
        </div>
        <div class="row">
          <div class="tshirt-list col-sm-4 col-xs-4">
            <div class="tshirt-image">
              <div id="image-1">
              </div>
              <h2>Pochacco</h2>
              <p>This t-shirt is so amazing that it will make you amazing when you wear it.</p>
              <div class="quantity">
                <label for="quantity"></label><input type="text" class="tshirt-quantity-input" id="quantity-input" placeholder="Qty"/>
              </div>
              <div class="size">
                <select class="form-control">
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div class="add-to-cart">
                <button type="button" class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="tshirt-list col-sm-4 col-xs-4">
            <div class="tshirt-image">
              <div id="image-2">
              </div>
              <h2>Keroppi</h2>
              <p>This t-shirt is so amazing that it will make you amazing when you wear it.</p>
              <div class="quantity">
                <label for="quantity"></label><input type="text" class="tshirt-quantity-input" id="quantity-input" placeholder="Qty"/>
              </div>
              <div class="size">
                <select class="form-control">
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div class="add-to-cart">
                <button type="button" class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="tshirt-list col-sm-4 col-xs-4">
            <div class="tshirt-image">
              <div id="image-3">
              </div>
              <h2>Hello Kitty!</h2>
              <p>This t-shirt is so amazing that it will make you amazing when you wear it.</p>
              <div class="quantity">
                <label for="quantity"></label><input type="text" class="tshirt-quantity-input" id="quantity-input" placeholder="Qty"/>
              </div>
              <div class="size">
                <select class="form-control">
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div class="add-to-cart">
                <button type="button" class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
    );
  }
});

var CartComponent = React.createClass({
  mixins: [RouterMixin],
  handle: function() {
    this.props.router.navigate('index', {
      trigger: true
    });
  },
  render: function(){
    var className = "animate-leave animate-leave-active";
    if (this.props.router.current == "cart") {
      className = "animate-enter animate-enter-active";
    }
    return (
      <div className={className}>
        in cart,
        <a onClick={this.handle}>go to index</a>
      </div>
    );
  }
});

var InterfaceComponent = React.createClass({
  mixins: [RouterMixin],
  render: function(){
    var router = this.props.router;
    return (
      <div>
        <ShopComponent router={router} />
        <CartComponent router={router} />
      </div>
    );
  }
});
