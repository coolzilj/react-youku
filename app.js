require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var React = require('react'),
	ReactYouku = require('react-youku');

var App = React.createClass({displayName: "App",
  getInitialState: function() {
    return {
      vid: "XODkwNDA4Mjk2"
    };
  },

  _handleSubmit: function(e) {
    this.setState({vid: this.refs.vid.getDOMNode().value});
    e.preventDefault();
  },

	render: function() {
    var style = { height: 430 };

		return (
      React.createElement("div", null, 
  			React.createElement("div", {style: style}, 
  				React.createElement(ReactYouku, {vid: this.state.vid})
        ), 
        React.createElement("form", {onSubmit: this._handleSubmit}, 
          React.createElement("input", {ref: "vid", type: "text", placeholder: "id"})
        )
      )
		)
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-youku":undefined}]},{},[1]);
