import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Auth services
export const authService = {
    login: async (email, password) => {
        const response = await api.post('/auth/login', { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return {
            ...response.data,
            user: {
                ...response.data.user,
                // Convert 't' to true, everything else to false
                email_verified: response.data.user.email_verified === 't'
            }
        };
    },
    
    

    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
    },

    verifyEmail: async (token) => {
        try {
            const response = await api.get('/auth/verify-email', { 
                params: { token } 
            });
            return response.data;
        } catch (error) {
            console.error('Email verification error:', error);
            throw error;
        }
    },

    resendVerificationEmail: async (email) => {
        try {
            const response = await api.post('/auth/resend-verification', { email });
            return response.data;
        } catch (error) {
            console.error('Resend verification email error:', error);
            throw error;
        }
    }
    

};

// User services
export const userService = {
    getProfile: async () => {
        const response = await api.get('/users/profile');
        return response.data;
    },
  
    updateProfile: async (profileData) => {
        try {
            const response = await api.put('/users/profile', profileData);
            return response.data;
        } catch (error) {
            console.error('Update profile error', error);
            throw error;
        }
    },

    updatePassword: async (passwordData) => {
        try {
            const response = await api.put('/users/password', passwordData);
            return response.data;
        } catch (error) {
            console.error('Update password error', error);
            throw error;
        }
    }
};

// Exercise services
export const exerciseService = {
    getMuscleGroups: async () => {
        const response = await api.get('/exercises/muscle-groups');
        return response.data;
    },

    getMuscles: async (groupId) => {
        const response = await api.get(`/exercises/muscles/${groupId}`);
        return response.data;
    },

    getExercises: async (muscleId) => {
        const response = await api.get(`/exercises/by-muscle/${muscleId}`);
        return response.data;
    }
};

// Favorite services
export const favoriteService = {
    addFavorite: async (exerciseId) => {
        const response = await api.post('/favorites/add', { exerciseId });
        return response.data;
    },

    removeFavorite: async (exerciseId) => {
        const response = await api.delete('/favorites/remove', { data: { exerciseId } });
        return response.data;
    },

    getFavorites: async () => {
        const response = await api.get('/favorites');
        return response.data;
    }
};

export default api;
