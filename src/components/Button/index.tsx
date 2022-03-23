
import { ReactNode } from "react";
import "./style.scss";

interface ChildrenProps {
    children: ReactNode;
    
    
}

export function Button(props: ChildrenProps){
    return(
        <button className="button-login">{props.children}</button>
    )
}