import React from 'react';

const TestCreateClass = React.createClass({
    displayName: 'TestCreateClass',
    propTypes: {
        name: React.PropTypes.string.isRequired,
        title: React.PropTypes.string
    },
    render() {
        return <div>Test</div>;
    }
});

export default TestCreateClass;

