
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 
        font-[oswald]
        
        ">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-xl text-gray-600">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <p className="mt-2 text-gray-500">
                    It might have been removed, or you may have mistyped the URL.
                </p>
                <button
                    onClick={handleGoHome}
                    className="mt-6 px-6 py-2 bg-green-500 text-white text-lg rounded hover:bg-green-600 transition duration-300"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
};

export default NotFound;
