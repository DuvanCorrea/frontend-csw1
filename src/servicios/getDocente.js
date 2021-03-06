import axios from "axios";
import { API_URL } from "./config";

export default async function getDocente({ id_docente }) {
    try {
        const { data } = await axios.get(`${API_URL}/api/docente/${id_docente}`);
        return { data };
    } catch (error) {
        return { data: null };
    }
}