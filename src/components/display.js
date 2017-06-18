import React from 'react';
import {connect} from 'react-redux'

class Display extends  React.Component {
    render(){
        return (
            <div>
                <h3>{this.props.data}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state.data;
}

export default connect(mapStateToProps)(Display);





