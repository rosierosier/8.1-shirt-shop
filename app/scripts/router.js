console.log('Hello Router!');

var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var RouterMixin = {
  componentWillMount: function(){
    this.callback = function(){
      this.forceUpdate();
    }.bind(this);
    this.props.router.on('route', this.callback);
  },
  componentWillUnmount: function(){
    this.props.router.off('route', this.callback);
  },
};

var TShirtComponent = React.createClass({
  mixins: [RouterMixin],
  render: function(){
    var className = "animate-leave animate-leave-active";
    if (this.props.router.current =="bar"){
      className = "animate-enter animate-enter-active";
    }
    return (
      <div className={className}>
        foo. <a href="#bar">Go To Bar</a>
      </div>
    );
  }
});

var BarComponent = React.createClass({
  mixins: [RouterMixin],
  render: function(){
    var className = "animate-leave animate-leave-active";
    if (this.props.router.current =="bar"){
      className = "animate-enter animate-enter-active";
    }
    return (
      <div className={className}>
        bar. <a href="#foo">Go To Foo</a>
      </div>
    );
  }
});

var AppComponent = React.createClass({
  mixins: [RouterMixin],
  render: function(){
    return (
      <div>
        <FooComponent router={this.props.router}/>
        <BarComponent router={this.props.router}/>
      </div>
    );
  }
});

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "foo(/:id)": "foo",
    "bar": "bar"
  },
  index: function(){
    console.log("index");
    this.current = "index";
  },
  foo: function(){
    console.log("foo");
    // ReactDOM.render(
    //   React.createElement(FooComponent),
    //   document.getElementById('app')
    // )
    this.current = "foo";
  },
  bar: function(){
    console.log("bar");
    // ReactDOM.render(
    //   React.createElement(BarComponent),
    //   document.getElementById('app')
    // )
    this.current = "bar";
  },
});

var router = new Router();

ReactDOM.render (
  //for use in js (not jsx)
  React.createElement(AppComponent, {router: router})
  //if using jsx
  // <AppComponent router={router} />
  document.getElementById('app')
);

Backbone.history.start();
