import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

export const TaskTitleField = ({
    onChange = (e) => console.log(e),
    disabled = false,
}: ITextField) => {
    return (
        <TextField
            id="title"
            label="Task Tiltle"
            placeholder="Task Title"
            variant="outlined"
            size="small"
            name="title"
            fullWidth
            onChange={onChange}
            disabled={disabled}
        />
    );
};
