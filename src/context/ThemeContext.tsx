"use client";

import React, { createContext, useEffect, useState, useCallback } from "react";

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { }
});

const getFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem('theme');
        return value || 'light'
    }
    return 'light'
}

export const ThemeContextProvider: React.FC<BaseFCProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(() => {
        return getFromLocalStorage();
    })

    const toggleTheme = (): void => setTheme((theme) => theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}