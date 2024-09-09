import { useState } from 'react'
import FirstComponent from "./FirstComponent";
import RelatorioALunos from "./RelatorioAlunos";

function CallComponent() {


    const [active, setActive] = useState(true)

    const mostrarDiv = () => {

        setActive(!active)
    }



    return (


        <>


            {active ? (

                <div>
                    <FirstComponent />
                    <button className='button' onClick={mostrarDiv}>mostra outro relatorio</button>
                </div>
            ) : (
                <div>
                    <RelatorioALunos />

                    <button className='button' onClick={mostrarDiv}>mostrar Aluno criador</button>

                </div>
            )}





        </>






    )

}

export default CallComponent