import React, { Component } from 'react';
import { getDefaultFormDataBySchema } from './formdata.init';

class ReactJsonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        getDefaultFormDataBySchema({ schema: this.props.schema })
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default ReactJsonForm;