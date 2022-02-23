import React from "react";

export default class Layer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.id,

        };
    };

    render(){
        const clicked = () => {
            this.props.onClick(this.state.id);
        };

        return (
            <div id={this.state.id} className='layer'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <button onClick={clicked} style={{float:"right"}}>Layer: {this.state.id}</button>
            </div>
        );

    };
};