import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";


export const TaskDescriptionField = ({
    onChange = (e) => console.log(e),
    disabled = false,
}:ITextField) => {
    return (
        <TextField
            id="description"
            label="Task Description"
            placeholder="Task Description"
            variant="outlined"
            size="small"
            name="description"
            fullWidth
            multiline
            rows={4}
            onChange={onChange}
            disabled={disabled}
        />
    );
};