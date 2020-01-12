import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function SelectField(props) {
    var hasError = false;
    var errorMsg = '';
    if (props.error) {
        hasError = props.error[`viewModel.${props.id}`] ? true : false;
        if (hasError)
            errorMsg = props.error[`viewModel.${props.id}`].join();
    }


    return (<FormControl required={props.required} error={hasError} fullWidth>

        <InputLabel id="{props.id}">{props.label}</InputLabel>
        <Select
            labelId={props.id} id={props.id}
            value={props.value} onChange={props.onChange}>
            {props.items.map((item, i) => (
                <MenuItem key={i} tabIndex={i} value={item.id}>{item.display}</MenuItem>))}
        </Select>
        {hasError && <FormHelperText>{hasError ? errorMsg : ''}</FormHelperText>}
    </FormControl>
    );
}