import axios from "axios";
import { API_URL } from "./config";

export default async function postDocenteLogin({ credenciales }) {
    try {
        const { data } = await axios.post(`${API_URL}/api/docente/login`, credenciales);
        return { data };
    } catch (error) {
        return { data: null };
    }
}