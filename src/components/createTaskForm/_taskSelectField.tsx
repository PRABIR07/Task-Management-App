import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';

export const TaskSelectField = ({
    value = '',
    label = 'Select Box',
    name = 'select Box',
    items = [{ value: '', label: 'Add items' }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => console.log(e),
}: ISelectField) => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id={`${name}-id`}>{label}</InputLabel>
            <Select
                labelId={`${name}-id`}
                id={`${name}-id-select `}
                value={value}
                label={label}
                name={name}
                onChange={onChange}
            >
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
                <MenuItem value="30">Thirty</MenuItem>
            </Select>
        </FormControl>
    );
};
