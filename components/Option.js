import React from 'react';
import { setDiff } from "../actions";
import { connect } from 'react-redux';

class Option extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            diff: '1'
        }
    }

    changeEvent(e) {
        let val = e.target.value;
        if (isNaN(val)) {
            return;
        }
        if (val === '') {
            val = '0';
        }

        this.setState({
            diff: val
        });
        this.props.changeValue(parseInt(val));
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.diff} onChange={this.changeEvent.bind(this)}/>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (value) => dispatch(setDiff(value))
    }
};

Option = connect(undefined, mapDispatchToProps)(Option);

export default Option;