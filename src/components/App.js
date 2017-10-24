import React from 'react';
import Score from "./Score";
import Option from "./Option";
import Buttons from "./Buttons";

class App extends React.Component {
    render() {
        return (
            <div>
                <Score />
                <Option />
                <Buttons />
            </div>
        )
    }
}

export default App;