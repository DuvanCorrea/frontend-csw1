
import React, { createContext, useState } from "react";

const docenteContext = createContext([]);

export const DocenteProvider = ({ children }) => {

    // variables globales del contexto docentes
    // ----------------------------------------

    const [materiales, setMateriales] = useState([]);
    const [reconocminetos, setReconocimiento] = useState([]);
    const [docente, setDocente] = useState();


    // enviamos los valores a lo que este envolviendo el contexto 
    // para usarlo en cada uno
    // ----------------------------------------------------------
    return (
        <docenteContext.Provider
            value={{
                materiales, setMateriales, reconocminetos, setReconocimiento, docente, setDocente
            }}
        >
            {children}
        </docenteContext.Provider>
    );
};

export default docenteContext;