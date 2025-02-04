import { createBrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

// Pages
import App from './pages/App.tsx';
import Login from './pages/Login.tsx';
import ModifyProfile from './pages/ModifyProfile.tsx';
import Profile from './pages/Profile.tsx';
import Radar from './pages/Radar.tsx';
import Register from './pages/Register.tsx';
import Search from './pages/Search.tsx';
import Slayder from './pages/Slayder.tsx';
import Layout from './pages/Layout.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

const getAccessToken= () =>{
    return Cookies.get('accessToken');
}

const isAuthenticated = () => {
    return !!getAccessToken();
}

const Router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children:[
                {
                    path: "/",
                    element: <App />
                },
                {
                    path: "/connexion",
                    element: <Login />
                },
                {
                    path:"/inscription",
                    element: <Register />
                },
                {
                    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
                    children: [
                        {
                            path: '/modifier-mon-profil',
                            element:<ModifyProfile />
                        },
                        {
                            path: '/profil',
                            element: <Profile />
                        },
                        {
                            path: 'radar',
                            element: <Radar />
                        }
                    ]
                },
                {
                    path:"*",
                    element: <p>404 Error - Nothing here...</p>
                }
            ]
        }
    ]
)

export default Router;