import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';
import { Surveys } from '../pages/Surveys';
import { Encuesta } from '../pages/Encuesta';

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/surveys', element: <Surveys /> },
    { path: '/encuesta/:id', element: <Encuesta />},
])
