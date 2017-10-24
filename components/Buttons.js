import React from 'react';
import { increment, decrement } from "../actions";
import {connect} from "react-redux";

class Buttons extends React.Component {

    onIncrement() {
        this.props.onIncrement();
    }

    onDecrement() {
        this.props.onDecrement();
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrement.bind(this)}>
                    +
                </button>
                <button onClick={this.onDecrement.bind(this)}>
                    -
                </button>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
};

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;