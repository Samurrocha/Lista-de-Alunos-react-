import React, { useState } from "react";
import FirstComponent from "./FirstComponent";
import RelatorioALunos from "./RelatorioAlunos";

function CallComponent() {
    

    const [active,setActive] = useState(true)

    const mostrarDiv = () =>{

        setActive(!active)
    }



    return (


        <>
        

{active ?(

    <FirstComponent/>


):(
    

    <RelatorioALunos/>


)}

<button onClick={mostrarDiv}>mostra outro relatorio</button>


        
        
        </>
        


            

        
    )

}

export default CallComponent