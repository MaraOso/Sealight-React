import React from "react";
import { Link } from 'react-router-dom';
import Layer from "./Layer";
import SealightDiv from "./sealightDiv";
import SealightButton from "./Elements/Sealight_BUTTON";
import SealightIMG from "./Elements/Sealight_IMG";
import SealightURL from "./Elements/Sealight.URL";
import SealightProgress from "./Elements/Sealight_PROGRESS";
import reactDom from "react-dom";

//Data
import Colours from "./DataArrays/Colours";
import Styles from "./DataArrays/Styles";
import Fonts from "./DataArrays/Fonts";
import Alignment from "./DataArrays/Alignment";
import SealightINPUT from "./Elements/Sealight_INPUT";
import SealightPassword from "./Elements/Sealight_PASSWORD";
import SealightNumbers from "./Elements/Sealight_NUMBERS";
import SealightDate from "./Elements/Sealight_DATE";
import SealightTime from "./Elements/Sealight_TIME";
import SealightColour from "./Elements/Sealight_COLOUR";
import SealightCheck from "./Elements/Sealight_CHECK";
import SealightFile from "./Elements/Sealight_File";


export default class SealightApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            offsprings: {},
            current_target: '0',
            editing_target: '0Element',
            delete_disabled: false,


            intervalNum: 0,

            childID: 1,
            children: {0:'Present',},
            sideNav_View: 'none',
            attribute_View: 'none',
            input_View: 'none',
            element_View: 'none',
            tools_View: 'none',

            border_View: 'none',
            size_View: 'block',
            font_View: 'none',
            structure_View: 'none',

            borderLeft: 0,
            borderRight: 0,
            borderTop: 0,
            borderBottom: 0,
            borderStyle: 2,
            borderColor: 0, 
            borderRadius: 0,

            height: 100, 
            width: 100, 

            fontFamily: 0,
            fontSize: 10,
            textAlign: 0,
            letterSpacing: 1,
            color: 2,

            opacity: 1,
            zIndex: 1,
            backgroundColor: 1, 
            left: 0, 
            top: 0,

        };
    };

    render(){
        //let orderOfEvents = [];
        const intervals = [1, 10, 100];

        const showTools = () => {
            if (this.state.tools_View === 'none'){
                this.setState({tools_View: 'block'})}else{this.setState({tools_View: 'none'});
            }
        };

        const showLayers = () => {
            if (this.state.sideNav_View === 'none'){
                this.setState({sideNav_View: 'block'})}else{this.setState({sideNav_View: 'none'});
            }
        };

        const showElement = () => {
            if (this.state.element_View === 'none'){
                this.setState({element_View: 'block'})}else{this.setState({element_View: 'none'});
            }
        };

        const showInput = () => {
            if (this.state.input_View === 'none'){
                this.setState({input_View: 'block'})}else{this.setState({input_View: 'none'});
            }
        };

        const showAttributes = () => {
            if (this.state.attribute_View === 'none'){
                this.setState({attribute_View: 'block'})}else{this.setState({attribute_View: 'none'});
            }
        };

        const showBorder = () => {
            if (this.state.border_View === 'none'){
                this.setState({border_View: 'block'})}else{this.setState({border_View: 'none'});
            }
        };

        const showSize = () => {
            if (this.state.size_View === 'none'){
                this.setState({size_View: 'block'})}else{this.setState({size_View: 'none'});
            }
        };

        const showFont = () => {
            if (this.state.font_View === 'none'){
                this.setState({font_View: 'block'})}else{this.setState({font_View: 'none'});
            }
        };

        const showStructure = () => {
            if (this.state.structure_View === 'none'){
                this.setState({structure_View: 'block'})}else{this.setState({structure_View: 'none'});
            }
        };

        const addLayers = () => {
            this.setState({childID: this.state.childID + 1});
            this.setState({children: {...this.state.children, [this.state.childID] :'Present'}});
        };

        const deleteLayer = () => {
            this.setState({delete_disabled: true});
            this.setState({attribute_View: 'none'});
            this.setState({children:{...this.state.children, [this.state.current_target]: ''}});
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: ''}});
            this.setState({current_target: ''});
        };

        const layerActive = (e, x=this.state.left, y=this.state.top) => {
            //retrieveInfo();
            this.setState({delete_disabled: false})
            this.setState({current_target: e});
            this.setState({editing_target: e + 'Element'});
            this.setState({left: x, top: y}, ()=>{retrieveInfo()});
        };

        const childActive = (e) => {
            this.setState({editing_target: e}, ()=>{retrieveInfo()});
        };

        const findColor = (value) => {
            var x;
            for (x in Colours){
                if(Colours[x] === value){return parseInt(x)};
            };
        };

        const findStyle = (value) => {
            var x;
            for (x in Styles){
                if ((Styles[x]).toUpperCase() === (value).toUpperCase()){return parseInt(x)};
            }
        };

        const findFamily = (value) => {
            var x;
            for (x in Fonts){
                if ((Fonts[x]).toUpperCase() === (value).toUpperCase()){return parseInt(x)};
            }
        }

        const findAlign = (value) => {
            var x;
            for (x in Alignment){
                if ((Alignment[x]).toUpperCase() === (value).toUpperCase()){return parseInt(x)};
            }
        };

        const retrieveInfo = () => {
            this.setState({
                borderLeft: (getComputedStyle(document.getElementById(this.state.editing_target)).borderLeftWidth).slice(0,-2),
                borderRight: (getComputedStyle(document.getElementById(this.state.editing_target)).borderRightWidth).slice(0,-2),
                borderTop: (getComputedStyle(document.getElementById(this.state.editing_target)).borderTopWidth).slice(0,-2),
                borderBottom: (getComputedStyle(document.getElementById(this.state.editing_target)).borderBottomWidth).slice(0,-2),
                borderStyle: findStyle((getComputedStyle(document.getElementById(this.state.editing_target)).borderLeftStyle)),
                borderColor: findColor(getComputedStyle(document.getElementById(this.state.editing_target)).borderRightColor), 
                borderRadius: (getComputedStyle(document.getElementById(this.state.editing_target)).borderTopLeftRadius).slice(0,-1),
                height: (getComputedStyle(document.getElementById(this.state.editing_target)).height).slice(0,-2), 
                width: (getComputedStyle(document.getElementById(this.state.editing_target)).width).slice(0,-2), 

                fontFamily: findFamily(getComputedStyle(document.getElementById(this.state.editing_target)).fontFamily),
                fontSize: (getComputedStyle(document.getElementById(this.state.editing_target)).fontSize).slice(0,-2),
                textAlign: findAlign(getComputedStyle(document.getElementById(this.state.editing_target)).textAlign),
                letterSpacing: (getComputedStyle(document.getElementById(this.state.editing_target)).letterSpacing).slice(0,-2),
                color: findColor(getComputedStyle(document.getElementById(this.state.editing_target)).color),

                opacity: getComputedStyle(document.getElementById(this.state.editing_target)).opacity,
                zIndex: getComputedStyle(document.getElementById(this.state.editing_target)).zIndex,
                backgroundColor: findColor(getComputedStyle(document.getElementById(this.state.editing_target)).backgroundColor), 
                left: (getComputedStyle(document.getElementById(this.state.editing_target)).left).slice(0,-2), 
                top: (getComputedStyle(document.getElementById(this.state.editing_target)).top).slice(0,-2),
            }, ()=> {updateAttributes()})
        };

        const addElementBTN = () => {
            if (this.state.current_target){
            reactDom.render(<SealightButton id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };


        const addElementIMG = () => {
            if (this.state.current_target){
            reactDom.render(<SealightIMG id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementURL = () => {
            if (this.state.current_target){
            reactDom.render(<SealightURL id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementPROGRESS = () => {
            if (this.state.current_target){
            reactDom.render(<SealightProgress id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementINPUT = () => {
            if (this.state.current_target){
            reactDom.render(<SealightINPUT id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementPASSWORD = () => {
            if (this.state.current_target){
            reactDom.render(<SealightPassword id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementNUMBER = () => {
            if (this.state.current_target){
            reactDom.render(<SealightNumbers id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementDATE = () => {
            if (this.state.current_target){
            reactDom.render(<SealightDate id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementTIME = () => {
            if (this.state.current_target){
            reactDom.render(<SealightTime id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementCOLOR = () => {
            if (this.state.current_target){
            reactDom.render(<SealightColour id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementCHECK = () => {
            if (this.state.current_target){
            reactDom.render(<SealightCheck id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };

        const addElementFILE = () => {
            if (this.state.current_target){
            reactDom.render(<SealightFile id={this.state.current_target}/>, document.getElementById(`${this.state.current_target}Children`));
            this.setState({offsprings: {...this.state.offsprings, [`${this.state.current_target}Child`]: 'Present'}});};
        };


        const BORDER_Decrease_left = () => {
            if(this.state.borderLeft > 0){
            this.setState({borderLeft: parseInt(this.state.borderLeft) - (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes();})};
            if (this.state.borderLeft < 0){this.setState({borderLeft: 0}, ()=> {updateAttributes();});}
        }

        const BORDER_Increase_left = () => {
            this.setState({borderLeft: parseInt(this.state.borderLeft) + (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes();});
        }

        const BORDER_Decrease_right = () => {
            if(this.state.borderRight > 0){
            this.setState({borderRight: parseInt(this.state.borderRight) - (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});};
            if (this.state.borderRight < 0){this.setState({borderRight: 0}, ()=> {updateAttributes();});}

        }

        const BORDER_Increase_right = () => {
            this.setState({borderRight: parseInt(this.state.borderRight) + (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const BORDER_Decrease_top = () => {
            if(this.state.borderTop > 0){
            this.setState({borderTop: parseInt(this.state.borderTop) - (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});};
            if (this.state.borderTop < 0){this.setState({borderTop: 0}, ()=> {updateAttributes();});}
            //updateAttributes();
        }

        const BORDER_Increase_top = () => {
            this.setState({borderTop: parseInt(this.state.borderTop) + (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const BORDER_Decrease_bottom = () => {
            if(this.state.borderBottom > 0){
            this.setState({borderBottom: parseInt(this.state.borderBottom) - (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});};
            if (this.state.borderBottom < 0){this.setState({borderBottom: 0}, ()=> {updateAttributes();});}
            //updateAttributes();
        }

        const BORDER_Increase_bottom = () => {
            this.setState({borderBottom: parseInt(this.state.borderBottom) + (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const BORDER_Decrease_style = () => {
            if(this.state.borderStyle < 0){
            this.setState({borderStyle: Styles.length - 1}, ()=> {updateAttributes()});}else{this.setState({borderStyle: this.state.borderStyle - 1}, ()=> {updateAttributes()})}
            //updateAttributes();
        }

        const BORDER_Increase_style = () => {
            if (this.state.borderStyle > Styles.length - 1){this.setState({borderStyle: 0}, ()=> {updateAttributes()})}else{this.setState({borderStyle: this.state.borderStyle + 1}, ()=> {updateAttributes()})};
            //updateAttributes();
        }

        const BORDER_Decrease_curve = () => {
            if (this.state.borderRadius > 0){
                this.setState({borderRadius: parseInt(this.state.borderRadius) - 1}, ()=> {updateAttributes()});}
            //updateAttributes();
        }

        const BORDER_Increase_curve = () => {
            if (this.state.borderRadius < 100){
                this.setState({borderRadius: parseInt(this.state.borderRadius) + 1}, ()=> {updateAttributes()});}
            //updateAttributes();
        }

        const BORDER_Decrease_colour = () => {
            if(this.state.borderColor < 0){
            this.setState({borderColor: Colours.length - 1}, ()=> {updateAttributes()});}else{this.setState({borderColor: this.state.borderColor - 1}, ()=> {updateAttributes()})}
            //updateAttributes();
        }

        const BORDER_Increase_colour = () => {
            if (this.state.borderColor > Colours.length - 1){this.setState({borderColor: 0}, ()=> {updateAttributes()})}else{this.setState({borderColor: this.state.borderColor + 1}, ()=> {updateAttributes()})};
            //updateAttributes();
        }

        const SIZE_Decrease_height = () => {
            if(this.state.height > 0){
            this.setState({height: parseInt(this.state.height) - (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});};
            if (this.state.height < 0){this.setState({height: 0}, ()=> {updateAttributes();});}
            //updateAttributes();
        }

        const SIZE_Increase_height = () => {
            this.setState({height: parseInt(this.state.height) + (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const SIZE_Decrease_width = () => {
            if(this.state.width > 0){
            this.setState({width: parseInt(this.state.width) - (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});};
            if (this.state.width < 0){this.setState({width: 0}, ()=> {updateAttributes();});}
            //updateAttributes();
        }

        const SIZE_Increase_width = () => {
            this.setState({width: parseInt(this.state.width) + (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const FONT_Decrease_family = () => {
            if(this.state.fontFamily < 0){
            this.setState({fontFamily: Fonts.length - 1}, ()=> {updateAttributes()});}else{this.setState({fontFamily: this.state.fontFamily - 1}, ()=> {updateAttributes()})}
            //updateAttributes();
        }

        const FONT_Increase_family = () => {
            if (this.state.fontFamily > Fonts.length - 1){this.setState({fontFamily: 0}, ()=> {updateAttributes()})}else{this.setState({fontFamily: this.state.fontFamily + 1}, ()=> {updateAttributes()})};
            //updateAttributes();
        }

        const FONT_Decrease_size = () => {
            if(this.state.fontSize > 0){
            this.setState({fontSize: parseInt(this.state.fontSize) - 1}, ()=> {updateAttributes()});};
            //updateAttributes();
        }

        const FONT_Increase_size = () => {
            this.setState({fontSize: parseInt(this.state.fontSize) + 1}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const FONT_Decrease_colour = () => {
            if(this.state.color < 0){
            this.setState({color: Colours.length - 1}, ()=> {updateAttributes()});}else{this.setState({color: this.state.color - 1}, ()=> {updateAttributes()})}
            //updateAttributes();
        }

        const FONT_Increase_colour = () => {
            if (this.state.color > Colours.length - 1){this.setState({color: 0}, ()=> {updateAttributes()})}else{this.setState({color: this.state.color + 1}, ()=> {updateAttributes()})};
            //updateAttributes();
        }

        const FONT_decrease_space = () => {
            this.setState({letterSpacing: parseInt(this.state.letterSpacing) - 1}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const FONT_increase_space = () => {
            this.setState({letterSpacing: parseInt(this.state.letterSpacing) + 1}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const FONT_Decrease_alignment = () => {
            if(this.state.textAlign < 0){
            this.setState({textAlign: Alignment.length - 1}, ()=> {updateAttributes()});}else{this.setState({textAlign: this.state.textAlign - 1}, ()=> {updateAttributes()})}
            //updateAttributes();
        }

        const FONT_Increase_alignment = () => {
            if (this.state.textAlign > Alignment.length - 1){this.setState({textAlign: 0}, ()=> {updateAttributes()})}else{this.setState({textAlign: this.state.textAlign + 1}, ()=> {updateAttributes()})};
            //updateAttributes();
        }

        const STRUCTURE_decrease_zindex = () => {
            if (this.state.zIndex > 0){
            this.setState({zIndex: parseInt(this.state.zIndex) - 1}, ()=> {updateAttributes()});};
            //updateAttributes();
        }

        const STRUCTURE_increase_zindex = () => {
            this.setState({zIndex: parseInt(this.state.zIndex) + 1}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const STRUCTURE_decrease_opacity = () => {
            if (this.state.opacity > 0){
            this.setState({opacity: parseFloat(this.state.opacity) - .1}, ()=> {updateAttributes()});};
            //updateAttributes();
        }

        const STRUCTURE_increase_opacity = () => {
            if (this.state.opacity < 1){
            this.setState({opacity: parseFloat(this.state.opacity) + .1}, ()=> {updateAttributes()});};
            //updateAttributes();
        }

        const STRUCTURE_Decrease_colour = () => {
            if(this.state.backgroundColor < 0){
            this.setState({backgroundColor: Colours.length - 1}, ()=> {updateAttributes()});}else{this.setState({backgroundColor: this.state.backgroundColor - 1}, ()=> {updateAttributes()})}
            //updateAttributes();
        }

        const STRUCTURE_Increase_colour = () => {
            if (this.state.backgroundColor > Colours.length - 1){this.setState({backgroundColor: 0}, ()=> {updateAttributes()})}else{this.setState({backgroundColor: this.state.backgroundColor + 1}, ()=> {updateAttributes()})};
            //updateAttributes();
        }

        const STRUCTURE_Decrease_left = () => {
            if(this.state.left > 0){
            this.setState({left: parseInt(this.state.left) - (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});};
            if (this.state.left < 0){this.setState({left: 0}, ()=> {updateAttributes();});}
            //updateAttributes();
        }

        const STRUCTURE_Increase_left = () => {
            this.setState({left: parseInt(this.state.left) + (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const STRUCTURE_Decrease_top = () => {
            if(this.state.top > 0){
            this.setState({top: parseInt(this.state.top) - (1 * intervals[this.state.intervalNum])},()=> {updateAttributes()});};
            if (this.state.top < 0){this.setState({top: 0}, ()=> {updateAttributes();});}
            //updateAttributes();
        }

        const STRUCTURE_Increase_top = () => {
            this.setState({top: parseInt(this.state.top) + (1 * intervals[this.state.intervalNum])}, ()=> {updateAttributes()});
            //updateAttributes();
        }

        const insideText = (e) => {
            document.getElementById(`${this.state.editing_target}TEXT`).innerText = e.target.value;
        };

        const titleChange = (e) => {
            document.getElementById(`${this.state.editing_target}`).title = e.target.value;
        };

        const urlChange = (e) => {
            document.getElementById(`${this.state.editing_target}`).setAttribute('href', e.target.value);
        }

        const intervalChange = () => {
            if (this.state.intervalNum < 2){
            this.setState({intervalNum: this.state.intervalNum + 1})} else {this.setState({intervalNum: 0})};
        };

        const updateAttributes = () => {
            document.getElementById(`${this.state.editing_target}`).setAttribute('style', 
                    `border-left: ${this.state.borderLeft}px;
                    border-right: ${this.state.borderRight}px;
                    border-top: ${this.state.borderTop}px;
                    border-bottom: ${this.state.borderBottom}px;
                    border-style: ${Styles[this.state.borderStyle]};
                    border-color: ${Colours[this.state.borderColor]};
                    border-radius: ${this.state.borderRadius}%;

                    height:${this.state.height}px; 
                    width: ${this.state.width}px; 

                    font-family: ${Fonts[this.state.fontFamily]};
                    font-size: ${this.state.fontSize}px;
                    text-align: ${Alignment[this.state.textAlign]};
                    letter-spacing: ${this.state.letterSpacing}px;
                    color: ${Colours[this.state.color]};

                    opacity: ${this.state.opacity};
                    z-index: ${this.state.zIndex};
                    background-color: ${Colours[this.state.backgroundColor]}; 
                    left: ${this.state.left}px; 
                    top: ${this.state.top}px;
                    position: absolute;
                    overflow: auto`)

        };

        const copyPaste = () => {
            addLayers();
            this.setState({editing_target: `${this.state.childID}Element`}, () => {updateAttributes()}); 
        };

        const downloadToFile = (content, filename, contentType) => {
            const a = document.createElement('a');
            const file = new Blob([content], {type: contentType});
            
            a.href= URL.createObjectURL(file);
            a.download = filename;
            a.click();

            URL.revokeObjectURL(a.href);
        };

        function saveHTML(){
            const textArea = document.getElementById("work-space");
            downloadToFile(textArea.innerHTML, 'myWebPage.html', 'text/plain');
        }

        return (
            <div className='backsplash'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <section id='work-space' className='work-space'>
                    {Object.keys(this.state.children).map((key) => {
                                switch(this.state.children[key]){
                                    case 'Present':
                                        return (
                                            <SealightDiv onDragEnd={layerActive} id={key} key={key}/>)
                                    default:
                                        return null
                                }
                            })}
                </section>
                <section className='tool-bar'>
                    <ul className='tools'>
                        <li><Link title='Home' className='tool-links' to={`/`}>Sealight</Link></li>
                        <li><button onClick={showTools} title='Workshop Tools'><i className='fa fa-wrench'/></button></li>
                        <li><button onClick={showLayers} title='Layers'><i className='fa fa-clone'/></button></li>
                        <li><button disabled={this.state.delete_disabled} onClick={showInput} title='Input Info'><i className='fa fa-terminal'/></button></li>
                        <li><button disabled={this.state.delete_disabled} onClick={deleteLayer} title='Delete Layer'><i className='fa fa-trash'/></button>Active Layer: Layer({this.state.current_target})</li>
                        <li><button onClick={showElement} title='Add Element to Layer'><i className='fa fa-calendar-plus-o'/></button></li>
                        <li><button disabled={this.state.delete_disabled} onClick={showAttributes} title='Edit Attributes'><i className='fa fa-pencil-square-o'/></button>Currently Editing: ({this.state.editing_target})</li>
                    </ul>
                </section>
                <div style={{display: this.state.sideNav_View}}>
                    <section className='sidenav-layers' >
                        <section className='add-layers'>
                            <button onClick={addLayers}>Layers <i className='fa fa-plus-square'></i></button>
                        </section>
                        <section className='layers'>
                            {Object.keys(this.state.children).map((key) => {
                                switch(this.state.children[key]){
                                    case 'Present':
                                        return (
                                            <Layer onClick={layerActive} id={key} key={key}/>)
                                    default:
                                        return null
                                }
                            })}
                        </section>
                    </section>
                </div>
                <div style={{display: this.state.attribute_View}}>
                    <section className='attributes'>
                        <button onClick={intervalChange} className='attr-info'><i className='fa fa-plus'/>Interval: {intervals[this.state.intervalNum]}</button>
                        <button onClick={showBorder} className='attr-info'><i className='fa fa-stop-circle'/>Border</button>
                        <section style={{display: this.state.border_View}}>
                            <article className='attribute-btn'>
                                <button onClick={BORDER_Decrease_left} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-stop-circle'/>Left-Width</button>
                                <button onClick={BORDER_Increase_left} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={BORDER_Decrease_right} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-stop-circle'/>Right-Width</button>
                                <button onClick={BORDER_Increase_right} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={BORDER_Decrease_top} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-stop-circle'/>Top-Width</button>
                                <button onClick={BORDER_Increase_top} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={BORDER_Decrease_bottom} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-stop-circle'/>Bot-Width</button>
                                <button onClick={BORDER_Increase_bottom} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={BORDER_Decrease_style} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-stop-circle'/>Style</button>
                                <button onClick={BORDER_Increase_style} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={BORDER_Decrease_curve} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-stop-circle'/>Curve</button>
                                <button onClick={BORDER_Increase_curve} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={BORDER_Decrease_colour} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-stop-circle'/>Colour</button>
                                <button onClick={BORDER_Increase_colour} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                        </section>
                        <button onClick={showSize} className='attr-info'><i className='fa fa-arrows-alt'/>Size</button>
                        <section style={{display: this.state.size_View}}>
                            <article className='attribute-btn'>
                                <button onClick={SIZE_Decrease_height} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-arrows-v'/>Height</button>
                                <button onClick={SIZE_Increase_height} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={SIZE_Decrease_width} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-arrows-h'/>Width</button>
                                <button onClick={SIZE_Increase_width} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                        </section>
                        <button onClick={showFont} className='attr-info'><i className='fa fa-font'/>Font</button>
                        <section style={{display: this.state.font_View}}>
                            <article className='attribute-btn'>
                                <button onClick={FONT_Decrease_family} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-font'/>Family</button>
                                <button onClick={FONT_Increase_family} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={FONT_Decrease_size} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-font'/>Size</button>
                                <button onClick={FONT_Increase_size} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={FONT_Decrease_colour} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-font'/>Colour</button>
                                <button onClick={FONT_Increase_colour} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={FONT_decrease_space} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-font'/>Spacing</button>
                                <button onClick={FONT_increase_space} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={FONT_Decrease_alignment} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-font'/>Alignment</button>
                                <button onClick={FONT_Increase_alignment} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                        </section>
                        <button onClick={showStructure} className='attr-info'><i className='fa fa-bank'/>Structure</button>
                        <section style={{display: this.state.structure_View}}>
                            <article className='attribute-btn'>
                                <button onClick={STRUCTURE_decrease_zindex} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-bank'/>Z-Index</button>
                                <button onClick={STRUCTURE_increase_zindex} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={STRUCTURE_decrease_opacity} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-bank'/>Opacity</button>
                                <button onClick={STRUCTURE_increase_opacity} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={STRUCTURE_Decrease_colour} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-bank'/>BG Colour</button>
                                <button onClick={STRUCTURE_Increase_colour} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={STRUCTURE_Decrease_left} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-bank'/>Left</button>
                                <button onClick={STRUCTURE_Increase_left} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                            <article className='attribute-btn'>
                                <button onClick={STRUCTURE_Decrease_top} className='decrease'><i className='fa fa-minus-square-o'/></button>
                                <button className='attr-display'><i className='fa fa-bank'/>Top</button>
                                <button onClick={STRUCTURE_Increase_top} className='increase'><i className='fa fa-plus-square-o'/></button>
                            </article>
                        </section>
                    </section>
                </div>
                <div style={{display: this.state.input_View}}>
                    <section className='info-input'>
                        <textarea onChange={insideText} placeholder='Interior Text'/>
                        <input onChange={titleChange} placeholder='Input Title'/>
                        <input onChange={urlChange} placeholder='Input URL (if applicable)'/>
                    </section>
                </div>
                <div style={{display: this.state.element_View}}>
                    <section className='element-add'>
                        <button onClick={addElementCHECK}>Checkbox</button>
                        <button onClick={addElementCOLOR}>Colour</button>
                        <button onClick={addElementINPUT}>Input</button>
                        <button onClick={addElementBTN}>Button</button>
                        <button onClick={addElementDATE}>Date</button>
                        <button onClick={addElementURL}>Link</button>
                        <button onClick={addElementIMG}>Image</button>
                        <button onClick={addElementFILE}>File</button>
                        <button onClick={addElementPASSWORD}>Password</button>
                        <button onClick={addElementPROGRESS}>Progress</button>
                        <button onClick={addElementNUMBER}>Counter</button>
                        <button onClick={addElementTIME}>Time</button>
                    </section>
                </div>
                <div style={{display: this.state.sideNav_View}}>
                    <section className='child-layers'>
                        <section className='child-layer'>
                            {Object.keys(this.state.offsprings).map((key) => {
                                        switch(this.state.offsprings[key]){
                                            case 'Present':
                                                return (
                                                    <Layer onClick={childActive} id={key} key={key}/>)
                                            default:
                                                return null
                                        }
                                    })}
                        </section>
                    </section>
                </div>
                <div style={{display: this.state.tools_View}}>
                    <section className='toolset'>
                        <button onClick={copyPaste}><i className='fa fa-copy'/>Copy/Paste</button>
                        <button onClick={saveHTML}><i className='fa fa-save'/>Save File</button>
                    </section>
                </div>
                <div style={{}}>
                    <section>

                    </section>
                </div>
            </div>
        );

    };
};

    