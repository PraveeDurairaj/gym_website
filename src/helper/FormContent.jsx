import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleModalShow = () => {
        setShow(!show);
    }
    return (
        <FormContext.Provider value={{ show, handleModalShow }}>
            {children}
        </FormContext.Provider>
    );
};