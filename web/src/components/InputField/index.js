import React from 'react';

import { FormGroup } from "./styles";

const InputField = (props) => {
    return (
        <FormGroup>
            <label htmlFor={props.id}> {props.label} </label>
            <input type={props.type}
                className="form-control"
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </FormGroup>
    )
}

export default InputField;