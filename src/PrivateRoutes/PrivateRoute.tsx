
import { useAppSelector } from '@/redux/hooks';
import { Navigate } from 'react-router-dom';

interface UserRouteProps {
     children: React.ReactNode;
   }
const PrivateRoute:React.FC<UserRouteProps>  = ({children}) => {
    const { auth } = useAppSelector((state) => state.userAuth);
     return auth ? children : <Navigate to="/login" />;
    
};

export default PrivateRoute;