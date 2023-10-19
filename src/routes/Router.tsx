import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';
import { Surveys } from '../pages/Surveys';
import { Encuesta } from '../pages/Encuesta';
import { Login } from '../pages/Login';

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/login', element: <Login /> },
    { path: '/surveys', element: <Surveys /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/encuesta/:id', element: <Encuesta /> },
])
