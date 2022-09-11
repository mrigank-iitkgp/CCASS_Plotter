import React , { createContext , useContext , useState } from "react";

const StateContext = createContext();

const initialState = {
    chart: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu , setActiveMenu] = useState(true);
    // const [isClicked , setIsClicked] = useState(initialState)
    const [screenSize , setScreenSize] = useState(undefined)
    return (
        <StateContext.Provider
        value= {{ 
            activeMenu,
            setActiveMenu,
            screenSize, 
            setScreenSize
        }}
        >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);