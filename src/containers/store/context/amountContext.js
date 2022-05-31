import { createContext, useState } from "react";


export const AmountContext = createContext({
    count: null,
    setCount: () => null,
})

export const AmountProvider = ({ children }) => {
    const[ count, setCount ] = useState(1);
    const value = { count, setCount };

    return<AmountContext.Provider value={value} >{children}</AmountContext.Provider>
};