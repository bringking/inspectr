import React from 'react';

export class TestComponent extends React.Component {
    render() {
        return <div></div>;
    }
}

TestComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
};

