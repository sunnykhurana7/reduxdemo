import React, { Component } from 'react';
import Counter from '../containers/Counter';
import UserInput from '../components/UserInput'
import Display from '../components/display'

class App extends Component {
    render(){
        return (
            <div>
                <Counter />
                <UserInput />
                <Display />
            </div>
        )
    }
}

export default App;