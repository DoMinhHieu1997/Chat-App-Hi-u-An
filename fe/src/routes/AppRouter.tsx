import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { ROUTES } from './routesConfig';
import Home from '../pages/Home/Home';

const AppRouter = () => {
    return (
        <Router>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
            </Routes>
        </Router>
    );
};

export default AppRouter; 