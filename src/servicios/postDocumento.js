import axios from "axios";
import { API_URL } from "./config";

export default async function postDocumento({ id_material, material }) {
    try {
        const { data } = await axios.post(`${API_URL}/api/material/documento/${id_material}`, material);
        return { data };
    } catch (error) {
        return { data: null };
    }
}