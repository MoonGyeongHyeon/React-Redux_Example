import React from 'react';
import { connect } from 'react-redux';

class Score extends React.Component {
    render() {
        return (
            <div>
                <h2>VALUE: {this.props.value}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counterReducer.value
    }
};

Score = connect(mapStateToProps)(Score);

export default Score;