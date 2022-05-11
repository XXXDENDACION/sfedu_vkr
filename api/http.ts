import axios from "axios";
import { API_URL } from "./constants";

const $api = axios.create({
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    baseURL: API_URL
});

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});

export default $api;