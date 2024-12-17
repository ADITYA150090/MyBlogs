import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';
import PostDetails from './pages/PostDetails/PostDetails';
import Profile from './pages/Profile/Profile';

export const router = createBrowserRouter([{
        path: '/',
        element: < Home / >
    },
    {
        path: '/create',
        element: < CreatePost / >
    },
    {
        path: '/post/:id',
        element: < PostDetails / >
    },
    {
        path: '/profile',
        element: < Profile / >
    }
]);