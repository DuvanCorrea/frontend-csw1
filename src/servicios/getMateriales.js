import axios from "axios";
import { API_URL } from "./config";

export default async function getMateriales() {
    try {
        const { data } = await axios.get(`${API_URL}/api/material`);
        return { data };
    } catch (error) {
        return { data: null };
    }
}