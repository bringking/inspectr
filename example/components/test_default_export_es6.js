import React from 'react';


const TestComponent = class extends React.Component {
    render() {
        return <div></div>;
    }
};

TestComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
};

export default TestComponent;


