import React from 'react';

import { FormGroup } from './styles';

const SelectField = (props) => {
    return (
        <FormGroup>
            <p>{props.label}</p>
            <select className="form-control" name={props.name} value={props.value} onChange={props.onChange}>
                <option value={0}>- Selecione -</option>
                {props.options}
            </select>
        </FormGroup>
    )
}

export default SelectField;