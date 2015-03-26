/**
 * @jsx React.DOM
 */
var React = require("react");
var Child = require("./child.jsx");

module.exports = React.createClass({
    render: function() {
        var children = [];
        for(var i = 0; i < 100; i++)
            children.push(<Child key={i}/>);

        return (
            <div>{ children }</div>
        );
    }
});