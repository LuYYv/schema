import React, { Component } from 'react';
import SchemaField from '../SchemaField';
import TitleField from '../TitleField';
import './style.scss';

/**
 * @constructor
 * @param {object} props.schema
 * @param {object} props.formData
 * @param {object} props.uiSchema
 * @param {string} props.$id  每个field的idPath 如a.b.c
 * @param {function} props.onChange  值域改变时调用
*/
class ObjectField extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 根据当前object的schema获取所有子节点的field
     * @return {array}  filed的数组
    */
    getChildField() {
        const {
            schema,
            $id
        } = this.props;
        let _view = [];
        //遍历所有子节点
        Object.keys(schema.properties).map(k => {
            let _idPath = `${$id}.${k}`;  //当前节点的path
            _view.push(
                <SchemaField
                    schema={schema.properties[k]}
                    $id={_idPath}
                    key={_idPath}
                />
            )
        })
        return _view;
    }

    /**
     * 获取object类型的title显示
     * @return {component}
    */
    getTitleField() {
        const { schema: { title } } = this.props;
        if (title == undefined) return null;
        let _titleView = (
            <TitleField
                title={title}
            />
        )
        return _titleView;
    }

    render() {
        return (
            <div className="object-field">
                {this.getTitleField()}
                {this.getChildField()}
            </div>
        );
    }
}

export default ObjectField;