import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class NumberField extends Component {
    constructor(props) {
        super(props);
        this.handChange = this.handChange.bind(this);
        this.state = {  }
    }

    handChange ({floatValue}) {
        const {formData, onChange, $id} = this.props;
        if ( onChange === undefined ) return formData;
        onChange ( floatValue, $id);
    }

    render() { 
        const {schema:{title, mustFill}, formData, uiSchema, $id} = this.props;
        return ( 
            <div className="input-wrapper number-field">
                <span className="label">{title} :</span>
                {mustFill?<span className="must-fill">*</span>:null}
                <div className="input">
                    <NumberFormat
                        value= {formData}
                        onValueChange={this.handChange}
                        />
                </div>
            </div>
         );
    }
}
 
export default NumberField;