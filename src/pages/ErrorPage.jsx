import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold text-gray-800 mb-4">404</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
                Oops! The page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
};
