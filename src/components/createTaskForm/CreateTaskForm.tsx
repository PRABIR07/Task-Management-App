import { FC, ReactElement } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';

export const CreateTaskForm: FC = (): ReactElement => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Typography mb={2} component="h2" variant="h6"  >
                Create Task
            </Typography>
            <Stack sx={{width:'100%'}} spacing={2}>
            <TextField id='title' label='Task Tiltle' placeholder='Task Title' variant='outlined' size='small' name='title' fullWidth />
            <TextField 
                id='description'
                label='Task Description'
                placeholder='Task Description'
                variant='outlined'
                size='small'
                name='description'
                fullWidth
                multiline
                rows={4}
                
            
            />
            </Stack>
        </Box>
    );
};
