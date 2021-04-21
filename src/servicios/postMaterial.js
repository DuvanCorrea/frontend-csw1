import axios from "axios";
import { API_URL } from "./config";

export default async function postMaterial({ datos }) {
    try {
        const { data } = await axios.post(`${API_URL}/api/material`, datos);
        return { data };
    } catch (error) {
        return { data: null };
    }
}