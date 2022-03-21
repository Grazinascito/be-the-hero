import { createContext, ReactNode, useContext } from "react";
import { useRegisterProvider } from "../hooks/useRegisterProvider";

interface ChildrenProps{
    children: ReactNode,
}


export const initialValue = {
    nameRegister: "",
    setNameRegister: () => {},
    EmailRegister: "",
    setEmailRegister: () => {},
    passWordRegister: "",
    setPassWordRegister: () => {},
    whatsAppRegister:"",
    setWhatsAppRegister: () => {},
    estadoRegister: "",
    setEstadoRegister: () => {},
    cityRegister: "",
    setCityRegister: () => {},
    handleRegisterInput: () => {},
       
}

type RegisterCreateContext = {
    nameRegister: string;
    setNameRegister: (newState: string) => void;
    EmailRegister: string,
    setEmailRegister: (newState: string) => void;
    passWordRegister: string;
    setPassWordRegister: (newState: string) => void;
    whatsAppRegister:string;
    setWhatsAppRegister: (newState: string) => void;
    estadoRegister: string;
    setEstadoRegister: (newState: string) => void;
    cityRegister: string;
    setCityRegister: (newState: string) => void;
    handleRegisterInput: () => void;

}

export const RegisterContext = createContext<RegisterCreateContext>(initialValue);

export function RegisterProvider({children}:ChildrenProps){
    const RegisterProvider = useRegisterProvider();

    return(
        <RegisterContext.Provider value={RegisterProvider}>
            {children}
        </RegisterContext.Provider>
    )
}

export function useRegisterContext(){
    return useContext(RegisterContext)  
}
