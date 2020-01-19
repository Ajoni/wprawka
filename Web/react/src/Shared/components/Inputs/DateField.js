import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DateField(props) {
    var hasError = false;
    var errorMsg = '';
    if (props.error) {
        hasError = props.error[`viewModel.${props.id}`] ? true : false;
        if (hasError)
            errorMsg = props.error[`viewModel.${props.id}`].join();
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar variant="inline" margin="normal" fullWidth
                    format="dd/MM/yyyy" id={props.id} label={props.label}
                    value={props.value} onChange={props.onChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    required={props.required}
                    error={hasError}
                    helperText={hasError ? errorMsg : ''}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}