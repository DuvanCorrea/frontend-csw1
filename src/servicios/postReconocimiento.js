import axios from "axios";
import { API_URL } from "./config";

export default async function postReconocimiento({ reconocimiento }) {
    try {
        const { data } = await axios.post(`${API_URL}/api/reconocimiento`, reconocimiento);
        return { data };
    } catch (error) {
        return { data: null };
    }
}