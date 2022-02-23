import React from "react";

export default class SealightDiv extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            children: {},
            positionX: 0,
            positionY: 0,
            deltaStart: [0,0],

        };
    };

    render(){

        const drag = (e) => {
            this.setState({deltaStart: [e.screenX, e.screenY]});
        };

        const ondragEnd = (e) => {
            e.preventDefault();

            let relativeChange = [this.state.deltaStart[0] - e.screenX, this.state.deltaStart[1] - e.screenY];
            if (this.state.positionX-relativeChange[0] >= 0)
                {this.setState({positionX: this.state.positionX-relativeChange[0]}, ()=> {sendtoParent()});} else{ this.setState({positionX:0}, ()=> {sendtoParent()})};

            if (this.state.positionY-relativeChange[1] >= 0)
                {this.setState({positionY: this.state.positionY-relativeChange[1]}, ()=> {sendtoParent()});} else{ this.setState({positionY:0}, ()=> {sendtoParent()})};
        };

        const sendtoParent = () => {
            this.props.onDragEnd(this.state.id, this.state.positionX, this.state.positionY);
        };

        return (
            <div 
                id={`${this.state.id}Element`} 
                draggable='true' 
                onDragStart={drag} 
                onDragEnd={ondragEnd}
                onClick={sendtoParent}
                style={{
                    position: 'Absolute',

                    borderLeft: '0px',
                    borderRight: '0px',
                    borderTop: '0px',
                    borderBottom: '0px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(240, 248, 255)', 
                    borderRadius: '0%',

                    height:'110px', 
                    width: '110px', 

                    fontFamily: 'serif',
                    fontSize: '10px',
                    textAlign: 'center',
                    letterSpacing: '1px',
                    color: 'black',

                    opacity: 1,
                    zIndex: 1,
                    backgroundColor: 'rgb(250, 235, 215)', 
                    left: this.state.positionX, 
                    top: this.state.positionY}}
            >
                <section id={`${this.state.id}ElementTEXT`}>

                </section>
                <section id={`${this.state.id}Children`}>

                </section>
            </div>
        );
    };
};