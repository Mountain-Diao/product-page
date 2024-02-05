import axios from "axios";

const createHttpClient = (baseURL) => {
    const httpClient = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    httpClient.interceptors.request.use(
        (config) => {
            if (config.authType === "basic") {
                const { clientId, clientSecret } = config;
                config.headers.Authorization = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;
            } else if (config.authType === "bearer") {
                config.headers.Authorization = `Bearer ${cookiesHelper.getAccessToken()}`;
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return httpClient;
}

export default createHttpClient;
