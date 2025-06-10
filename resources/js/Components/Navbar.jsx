// resources/js/Components/Navbar.jsx
import { Link, router } from '@inertiajs/react'; // Added router
import { useAuth } from '@/Context/AuthContext'; // Added useAuth

export default function Navbar() {
    const { user, isAuthenticated, logout, isLoading } = useAuth();

    const handleLogout = async () => {
        await logout(); // Call context logout
        router.visit(route('login')); // Redirect to login page after logout
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Left side links */}
                    <div className="flex space-x-4">
                        <Link href={route('home')} className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link href={route('about')} className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                        <Link href={route('products.index')} className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                    </div>

                    {/* Right side links - Auth dependent */}
                    <div className="flex items-center space-x-4">
                        {isLoading ? (
                            <span className="text-sm">Loading...</span>
                        ) : isAuthenticated && user ? (
                            <>
                                <span className="text-sm">Hi, {user.name}!</span>
                                <Link href={route('account.page')} className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">My Account</Link>
                                <button
                                    onClick={handleLogout}
                                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href={route('login')} className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                                <Link href={route('register')} className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
