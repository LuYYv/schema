export const schemaChecker = (schema) => {
    if(schema.type !== "object")
        throw `jsonschema root must be object`;
    itemsChecker(schema);
}


const itemsChecker = (schema) => {
    preChecker(schema);
    const {checker, props} = checkerMap[schema.type];
    if (checker == undefined || props == undefined) throw `type is unexpected at ${schema} `
    checker(schema, props);
}

//所有字段必须有的
const preChecker = (schema) => {
    if (schema.title == undefined || schema.type == undefined)
        throw `${schema} is uncompleted `
}


const checker = (schema, props) =>{
    Object.keys(schema).map( i=> {
        const type = props[i];
        if(type == undefined)
            throw `${i} is unexpected at ${schema}`;
        if(typeof schema[i] !== type)
            throw `${schema[i]} type error at ${schema}`;
    })
}

const objectChecker = (schema) => {
    checker(schema, objectProps);

    const {properties, require} = schema

    if(properties == undefined || JSON.stringify(properties)==="{}") 
        throw `properties error at ${schema}`;
    Object.keys(properties).map(i => {
        itemsChecker(properties[i]);
    })

    if(require) {
        Array.from(require).map( i=> {
            if (properties[i] == undefined) 
                throw `require ${i} at ${schema.title} is redundancy`
        })
    }
}

const objectProps = {
    title: "string",
    type: "string",
    properties: "object",
    require: "object"
}

const numberProps = {
    title: "string",
    type: "string",
    default: "number",
    length: "number"
}

const stringProps = {
    title: "string",
    type: "string",
    default: "string",
    length: "number"
}

const checkerMap = {
    object: {checker:objectChecker, props:objectProps},
    number: {checker, props:numberProps},
    string: {checker, props:stringProps}
}

