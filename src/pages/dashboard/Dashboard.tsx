import { Grid } from '@mui/material';
import { TaskArea } from '../../components/taskArea/TaskArea';
import { Sidebar } from '../../components/sidebar/Sidebar';

export const Dashboard= () => {
    return (
        <Grid container minHeight="100vh" p={0} m={0}>
            <TaskArea />
            <Sidebar />
        </Grid>
    );
};
