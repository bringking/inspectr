import React from 'react';

const TestStatelessComponent = () => <div></div>;

TestStatelessComponent.defaultProps = {
    name: 'TestName',
    title: 'TestTitle'
};
TestStatelessComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
};


export default TestStatelessComponent;

