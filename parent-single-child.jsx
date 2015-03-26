/**
 * @jsx React.DOM
 */
var React = require("react");
var Child = require("./child.jsx");

module.exports = React.createClass({
    render: function() {
        return <Child/>
    }
});