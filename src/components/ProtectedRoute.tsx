import { Navigate, Outlet } from 'react-router-dom';

interface WrapperProps{
    isAuthenticated:boolean;
}

const ProtectedRoute = (props:WrapperProps)=>{
    if(props.isAuthenticated){
        return <Navigate to="/connexion" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;