import axios from "axios";
import { clearTokens, getAccessToken, getRefreshToken, saveTokens } from "../utils/token";

const instance = axios.create({
    baseURL: 'https://craxinno.onrender.com/api/v1/',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    async (config) => {
        const token = await getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshAccessToken();
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                clearTokens();
                console.log(refreshError);
                throw refreshError;
            }
        }
        return Promise.reject(error);
    }
);

const refreshAccessToken = async () => {
    try {
        const refreshToken = getRefreshToken();
        const response = await api.post("/refresh-token", { refreshToken });
        const { newAccessToken } = response.data;
        saveTokens(newAccessToken);
        return newAccessToken;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default instance;