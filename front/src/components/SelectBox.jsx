import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectBox = (props) => {

    return (
        <FormControl className={props.className}>
            <InputLabel >{props.label}</InputLabel>
            <Select
              value={props.value} required={props.required}
              onChange={(e) => props.select(e.target.value)}
            >
                {props.options.map((value) => {
                    return <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
};

export default SelectBox;