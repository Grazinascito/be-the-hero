import { useEffect, useState } from "react";
import { initialValue } from "../context/register";

export function useRegisterProvider(){
    const [nameRegister, setNameRegister] = useState(initialValue.nameRegister);
    const [passWordRegister, setPassWordRegister] = useState(initialValue.passWordRegister);
    const [whatsAppRegister, setWhatsAppRegister] = useState(initialValue.whatsAppRegister);
    const [EmailRegister, setEmailRegister] = useState(initialValue.EmailRegister);
    const [estadoRegister, setEstadoRegister] = useState(initialValue.estadoRegister);
    const [cityRegister, setCityRegister] = useState(initialValue.cityRegister);

    async function handleRegisterInput(){
     
        const data = {
            nameRegister: nameRegister,
            EmailRegister: EmailRegister,
            passWordRegister:  passWordRegister,
            whatsAppRegister: whatsAppRegister,
            estadoRegister: estadoRegister,
            cityRegister: cityRegister
        }
    
        const response = await fetch("http://localhost:3333/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const responseData = await response.json();
        console.log(responseData)
    
    }

    useEffect(() => {
      handleRegisterInput()
    }, [])

    console.log("name", nameRegister)

    return{

        nameRegister, 
        setNameRegister,
        EmailRegister,
        setEmailRegister,
        passWordRegister,
        setPassWordRegister,
        whatsAppRegister,
        setWhatsAppRegister,
        estadoRegister,
        setEstadoRegister,
        cityRegister, 
        setCityRegister,
        handleRegisterInput
    }
}