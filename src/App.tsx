import { ReactElement, FC } from 'react';
import { ThemeProvider, CssBaseline} from '@mui/material';
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/Dashboard';

const App: FC = (): ReactElement => {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Dashboard/>
        </ThemeProvider>
    );
};

export default App;
