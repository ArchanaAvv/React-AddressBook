/** @jsx React.DOM */

var React = require('react');

var urlToContent = {
    "new": "Page under construction, Please come back",
    groups: "Page under construction, Please come back",
    settings: "Page Under Construction, Please come back"
};

var OtherPage = React.createClass({
    propTypes: {
        location: React.PropTypes.array.isRequired
    },
    render: function () {
        var title = urlToContent[this.props.location] || "Other";
        return <h2 className="win-h2" style={{marginLeft: "10px"}}>{title}</h2>
    }
});

module.exports = OtherPage;
