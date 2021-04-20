import axios from "axios";
import { API_URL } from "./config";

export default async function getDocente() {
    try {
        const { data } = await axios.get(`${API_URL}/api/docente`);
        return { data };
    } catch (error) {
        return { data: null };
    }
}