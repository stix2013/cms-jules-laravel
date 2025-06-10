// resources/js/Context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed or use fetch

const AuthContext = createContext({
    user: null,
    setUser: () => {},
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    isLoading: true,
    login: async () => {},
    register: async () => {},
    logout: async () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        setIsLoading(true);
        try {
            // Ensure CSRF cookie is set up for SPA
            await axios.get('/sanctum/csrf-cookie');
            const response = await axios.get('/api/user');
            setUser(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
            if (error.response && error.response.status !== 401) {
                console.error('Error fetching user:', error);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = async (credentials) => {
        setIsLoading(true);
        await axios.get('/sanctum/csrf-cookie'); // Ensure CSRF cookie
        await axios.post('/login', credentials);
        await fetchUser(); // Refresh user state
        setIsLoading(false);
    };

    const register = async (data) => {
        setIsLoading(true);
        await axios.get('/sanctum/csrf-cookie'); // Ensure CSRF cookie
        await axios.post('/register', data);
        await fetchUser(); // Refresh user state after registration
        setIsLoading(false);
    };

    const logout = async () => {
        setIsLoading(true);
        try {
            await axios.post('/logout');
        } catch (error) {
            console.error('Logout error:', error);
            // Still attempt to clear client-side state
        } finally {
            setUser(null);
            setIsAuthenticated(false);
            setIsLoading(false);
            // It's good practice to redirect to login or home after logout
            // This can be handled by the component calling logout using Inertia.visit
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, isLoading, login, register, logout, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
