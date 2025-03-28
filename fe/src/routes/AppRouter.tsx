import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { ROUTES } from './routesConfig';
import Home from '../pages/Home/Home';
import RoomChatLayout from '../common-components/layout/roomChatLayout';

const AppRouter = () => {
    return (
        <Router>
            <Routes >
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
                <Route path="/" element={<RoomChatLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter; 