import React, { Component, createContext } from 'react';
const ThemeContext = React.createContext(false);
// Provider
const ThemeProvider = ({ children }) => {
    const [toggle, setToggle] = React.useState(false);
    const toggleFunction = () => {
        setToggle(!toggle);
        toggle ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    };
    return (
        <ThemeContext.Provider value={{ toggle, toggleFunction }}>
            {children}
        </ThemeContext.Provider>
    );
};
export { ThemeContext, ThemeProvider };
