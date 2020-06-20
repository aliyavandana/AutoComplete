import React,{Component} from 'react';

class ToggleButton extends Component{
    state={
        toggled:false
    }
ToggleHandler=()=>{
    const Toggle=this.state.toggled
    this.setState({
toggled:!Toggle
    })
}

    render(){
        return(
            <div>
                <button onClick={this.ToggleHandler}>
                    Toogle
                </button>
        <p>{this.state.toggled && this.props.text}</p>
            </div>
        )
    }
}


export default ToggleButton