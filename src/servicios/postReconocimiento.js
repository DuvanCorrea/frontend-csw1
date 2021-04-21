import axios from "axios";
import { API_URL } from "./config";

export default async function postReconocimiento({ datos }) {
    try {
        const { data } = await axios.post(`${API_URL}/api/reconocimiento`, datos);
        return { data };
    } catch (error) {
        return { data: null };
    }
}