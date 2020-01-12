import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

export default function InputField(props) {
    var hasError = false;
    var errorMsg = '';
    if (props.error) {
        hasError = props.error[`viewModel.${props.id}`] ? true : false;
        if(hasError)
            errorMsg = props.error[`viewModel.${props.id}`].join();
    }
    return (<FormControl required={props.required} fullWidth>
        <TextField value={props.value} onChange={props.onChange}
            autoFocus={props.autofocus} margin="dense" fullWidth
            id={props.id} label={props.label} type={props.type}
            error={hasError}
            required={props.required}
            helperText={hasError ? errorMsg :''}
        />
    </FormControl>
    );
}