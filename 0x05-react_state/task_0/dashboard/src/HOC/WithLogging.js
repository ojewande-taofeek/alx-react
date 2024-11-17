import React, { Component } from 'react';

export default function WithLogging(wrappedComp) {
    const name = wrappedComp.displayName || wrappedComp.name || "Component";
    return class extends Component {
        static displayName = `WithLogging(${name})`;
        componentDidMount() {
            console.log(`Component ${name} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${name} is going to unmount`);
        }
        render() {
            return <wrappedComp {...this.props} />;
        }
    }
}
