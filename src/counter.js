import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    changeCounter(){
        this.setState({count: this.state.count + 1})
    }

    render(){
        return (
            <div onClick={this.changeCounter.bind(this)}>
                <h1>Countn: {this.state.count}</h1>
            </div>
            
        )
    }
}


