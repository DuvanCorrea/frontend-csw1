import axios from "axios";
import { API_URL } from "./config";

export default async function postDocenteLogin({ credenciales }) {

    const { data } = await axios.post(`${API_URL}/api/docente/login`, credenciales);

    return { data };
}