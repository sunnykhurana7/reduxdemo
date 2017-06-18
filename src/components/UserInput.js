import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getValue} from '../actions';

class UserInput extends Component {

    constructor(){
        super();
        this.state = {
            username:''
        }
    }


    getUsername = (e) => {
        this.setState({
            username:e.target.value
        })
    }

    updatevalue = () => {
        this.props.changeUserName(this.state.username);
    }

    render(){
        return (
            <div>
                <input type="text" name="username" onChange={(e)=>this.getUsername(e)}/>
                <input type="submit" value="click " onClick={()=>this.updatevalue()}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeUserName:(username)=>(
        dispatch(getValue(username))
    )
})


export default connect(null,mapDispatchToProps)(UserInput);