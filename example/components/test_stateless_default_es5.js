var React = require('react');

var TestStatelessComponent = function () {
    return <div></div>;
};

TestStatelessComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
};

module.exports = TestStatelessComponent;

