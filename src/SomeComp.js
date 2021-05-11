import React from 'react';

class SomeComp extends React.Component {
    render() {
        const { someData } = this.props;
        return (
            <h2>I am a component. My data is {someData}</h2>
        );
    }
}

export default SomeComp;