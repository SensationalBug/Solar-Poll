import Main from '../home/Main';
import Dashboard from '../home/Dashboard';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/admin', element: <Dashboard /> }
])
