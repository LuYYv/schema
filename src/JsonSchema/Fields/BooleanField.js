import React, { Component } from 'react';

class BooleanField extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {schema, formData, uiSchema, $id} = this.props;
        return ( 
            <div className={$id}>
                boolean
            </div>
         );
    }
}
 
export default NumberField;