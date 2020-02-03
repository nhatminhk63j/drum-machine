import React, { Component } from 'react';
import DrumPad from '../components/DrumPad';

class PadBank extends Component {
    
    render() {
        let padBank;
        console.log(this.props);
        this.props.power ?
            padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
                return (
                    <DrumPad 
                        clipId={drumObj.id}
                        clip={drumObj.url}
                        keyTrigger={drumObj.keyTrigger}
                        keyCode={drumObj.keyCode}
                        updateDisplay={this.props.updateDisplay}
                        power={this.props.power} />
                )
            }) :
            padBank = this.props.currentPadBank.map((drumObj, index, padBankArr) => {
                return (
                    <DrumPad 
                        key={index}
                        clipId={drumObj.id}
                        clip='#'
                        keyTrigger={drumObj.keyTrigger}
                        keyCode={drumObj.keyCode}
                        updateDisplay={this.props.updateDisplay}
                        power={this.props.power} />
                )
            })

        return (
            <div className="pad-bank">
                {padBank}
            </div>
        );
    }
}

export default PadBank;