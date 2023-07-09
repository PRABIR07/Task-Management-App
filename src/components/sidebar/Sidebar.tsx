import Grid  from "@mui/material/Grid";
import { FC, ReactElement } from "react";
import { Profile } from "../profile/Profile";
import { CreateTaskForm } from "../createTaskForm/CreateTaskForm";
export const  Sidebar: FC = (): ReactElement =>{
    return(
         <Grid
                item
                md={4}
                sx={{
                    height: '100vh',
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    width: '100%',
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Profile  name="PK"/>
                <CreateTaskForm/>
            </Grid>
    )

}