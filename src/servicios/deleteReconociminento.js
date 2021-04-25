import axios from "axios";
import { API_URL } from "./config";

export default async function deleteReconociminento({ id_reconocimiento}) {
    try {
        const { data } = await axios.delete(`${API_URL}/api/reconocimiento/${id_reconocimiento}`);
        return { data };
    } catch (error) {
        return { data: null };
    }
}