import React from 'react';


module.exports = React.createClass({
    displayName: 'TestCreateClass',
    propTypes: {
        name: React.PropTypes.string.isRequired,
        title: React.PropTypes.string
    },
    render() {
        return <div>Test</div>;
    }
});
