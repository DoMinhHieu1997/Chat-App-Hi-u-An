import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { ROUTES } from './routesConfig';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
            </Routes>
        </Router>
    );
};

export default AppRouter; 