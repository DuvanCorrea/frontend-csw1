import axios from "axios";
import { API_URL } from "./config";

export default async function getReconocimientos() {
    try {
        const { data } = await axios.get(`${API_URL}/api/reconocimiento`);
        return { data };
    } catch (error) {
        return { data: null };
    }
}