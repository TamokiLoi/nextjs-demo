import React, { Component } from 'react';

type StateType = {
    counter: number,
    visible: boolean
}

export default class LifeCycleClass extends Component<any, StateType> {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            visible: false
        }
        console.log('constructor');

    }

    componentDidMount() {
        console.log('didMount');
    }

    componentDidUpdate() {
        console.log('didUpdate', this.state.counter);
    }

    render() {
        console.log('render', this.state.counter);

        // console.log('props', this.props);
        // console.log('state', this.state);
        return (
            <div className="container">
                <h1>Play Ground - Life Cycle - Class</h1>
                <p>Counter: {this.state.counter}</p>
                <button
                    onClick={() => {
                        this.setState((preState) => {
                            return { counter: preState.counter + 1 }
                        })
                    }}
                >Counter Add
                </button>
            </div>
        )
    }
}