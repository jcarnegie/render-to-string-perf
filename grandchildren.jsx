/**
 * @jsx React.DOM
 */
var React = require("react");
var Parent = require("./parent.jsx");

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Parent/>
                <Parent/>
                <Parent/>
                <Parent/>
                <Parent/>
            </div>
        );
    }
});