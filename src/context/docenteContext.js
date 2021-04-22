
import React, { createContext, useState } from "react";

const docenteContext = createContext([]);

export const DocenteProvider = ({ children }) => {

    // variables globales del contexto docentes
    // ----------------------------------------

    const [materiales, setMateriales] = useState([]);
    const [reconocminetos, setReconocimientos] = useState([]);
    const [docente, setDocente] = useState();


    // enviamos los valores a lo que este envolviendo el contexto 
    // para usarlo en cada uno
    // ----------------------------------------------------------
    return (
        <docenteContext.Provider
            value={{
                materiales, setMateriales, reconocminetos, setReconocimientos, docente, setDocente
            }}
        >
            {children}
        </docenteContext.Provider>
    );
};

export default docenteContext;