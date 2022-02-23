import React from "react";

export default class SealightDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
        };
    };

    render(){

        return (
            <div>
            <input
            type='date'
                id={`${this.state.id}Child`} 
                placeholder='password'
                style={{
                    position: 'Absolute',

                    borderLeft: '0px',
                    borderRight: '0px',
                    borderTop: '0px',
                    borderBottom: '0px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(240, 248, 255)', 
                    borderRadius: '0%',

                    height:'100px', 
                    width: '100px', 

                    fontFamily: 'inherit',
                    fontSize: '10px',
                    textAlign: 'center',
                    letterSpacing: '1px',
                    color: 'rgb(0,0,0)',

                    opacity: 1,
                    zIndex: 1,
                    backgroundColor: 'rgb(250, 235, 215)', 
                    left: '0px', 
                    top: '0px'}}
            >
            </input>
            <section id={`${this.state.id}ChildTEXT`}>Lorem ipsum</section>
            </div>
        );
    };
};