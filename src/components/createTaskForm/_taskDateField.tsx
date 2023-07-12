import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { IDateField } from './interfaces/IDateFieild';
import { TextField } from '@mui/material';


export const TaskDateField = ({
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
}: IDateField) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Date"
                inputFormat="dd/MM/yyyy"
                value={value}
                onChange={onChange}
                disabled={disabled}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};
