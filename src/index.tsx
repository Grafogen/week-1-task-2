import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Game} from "./game/Game";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path:"/game",
        element: <Game/>,
    },
    {
        path:"/statistics",
        element:<div>Statistics</div>
    },
    {
        path:"/profile",
        element:<div>Profile</div>,
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
