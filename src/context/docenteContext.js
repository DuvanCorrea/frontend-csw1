
import React, { createContext, useState } from "react";

const docenteContext = createContext([]);

export const DocenteProvider = ({ children }) => {

    // variables globales del contexto docentes
    // ----------------------------------------

    const [materiales, setMateriales] = useState([]);
    const [reconocminetos, setReconocimientos] = useState([]);
    const [docente, setDocente] = useState();
    const [material, setMaterial] = useState()
    const [docenteTemporal, setDocenteTemporal] = useState()


    // enviamos los valores a lo que este envolviendo el contexto 
    // para usarlo en cada uno
    // ----------------------------------------------------------
    return (
        <docenteContext.Provider
            value={{
                materiales,
                setMateriales,
                reconocminetos,
                setReconocimientos,
                docente,
                setDocente,
                material,
                setMaterial,
                docenteTemporal,
                setDocenteTemporal
            }}
        >
            {children}
        </docenteContext.Provider>
    );
};

export default docenteContext;