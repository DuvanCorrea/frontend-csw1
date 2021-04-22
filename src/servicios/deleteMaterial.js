import axios from "axios";
import { API_URL } from "./config";

export default async function deleteMaterial({ id_material }) {
    try {
        const { data } = await axios.delete(`${API_URL}/api/material/${id_material}`);
        return { data };
    } catch (error) {
        return { data: null };
    }
}