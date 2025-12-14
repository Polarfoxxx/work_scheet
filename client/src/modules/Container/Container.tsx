import React from "react";
import { createContext, Dispatch, SetStateAction } from "react";

type Type_for_provideDATA = {
    appColorTheme: "light" | "dark";
    isLogged: boolean;
    loginName: string
};

type Type_for_DATA_context = {
    provideDATA: Type_for_provideDATA;
    setProvideDATA: Dispatch<SetStateAction<Type_for_provideDATA>>;
};

const defaultProvideDATA: Type_for_provideDATA = {
    appColorTheme: "light",
    isLogged: false,
    loginName: ""
};

const Context = createContext<Type_for_DATA_context>({
    provideDATA: defaultProvideDATA,
    setProvideDATA: () => { },
})



const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [provideDATA, setProvideDATA] = React.useState<Type_for_provideDATA>(defaultProvideDATA);


    return (
        <div className="container">
            <Context.Provider value={{ provideDATA, setProvideDATA }}>
                {children}
            </Context.Provider>
        </div>
    );
}

const ContainerProvider = {
    Context,
    Container
}

export default ContainerProvider;