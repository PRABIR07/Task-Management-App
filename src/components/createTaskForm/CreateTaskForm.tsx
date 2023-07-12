import { Box, Stack, Typography } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';

export const CreateTaskForm = () => {
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
                <TaskTitleField />
                <TaskDescriptionField />
                <TaskDateField />
                <Stack sx={{ width: '100%' }} spacing={2} direction="row">
                    <TaskSelectField/>
                    <TaskSelectField/>

                </Stack>
            </Stack>
        </Box>
    );
};
