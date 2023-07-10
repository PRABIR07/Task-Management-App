import React, { useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export interface ITextField {
    disabled?: boolean;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
}

export const CreateTaskForm = ({}) => {
    const [date, setDate] = useState<Date | null>(null);
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Typography mb={2} component="h2" variant="h6">
                Create Task
            </Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TextField
                    id="title"
                    label="Task Tiltle"
                    placeholder="Task Title"
                    variant="outlined"
                    size="small"
                    name="title"
                    fullWidth
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    disabled={false}
                />
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
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    disabled={false}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Date"
                        inputFormat="dd/MM/yyyy"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Stack>
        </Box>
    );
};
