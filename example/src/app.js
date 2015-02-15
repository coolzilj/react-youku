var React = require('react'),
	ReactYouku = require('react-youku');

var App = React.createClass({
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
      <div>
  			<div style={style}>
  				<ReactYouku vid={this.state.vid} />
        </div>
        <form onSubmit={this._handleSubmit} >
          <input ref="vid" type="text" placeholder="id"/>
        </form>
      </div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
