import axios from "axios";
import { API_URL } from "./config";

export default async function getDocumento({ nombre_documento }) {
    console.log("en peticion", nombre_documento)
    try {
        const { data } = await axios.get(`${API_URL}/api/material/documento/${nombre_documento}`);

        return { data };
    } catch (error) {
        
        return { data: null };
    }
}