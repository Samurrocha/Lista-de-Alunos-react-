import React from "react"


const relatorioALunos = () => {

    const alunos = [

        {
            aluno: "samuel",
            matrícula: "2314291027",
            nota: 10,
        },

        {
            aluno: "michael",
            matrícula: "2000291027",
            nota: 2,
        },


        {
            aluno: "luandra",
            matrícula: "23199873227",
            nota: 6,
        },

        {
            aluno: "jeronimo",
            matrícula: "20002227027",
            nota: 7,
        },

        {
            aluno: "larissa",
            matrícula: "22099484933",
            nota: 7
        }
    ]



    return (

        <div>


            <div id="container">

                <h1>Mostrar Relatorio de Usuarios</h1>

                <button type="submit" id="submit-button">Relatorio</button>

            </div>

            <div id="relatorio">
                <h1>RELATORIO</h1>

                <table>

                    <thead>

                        <tr>
                            <th>Nome</th>
                            <th>matrícula</th>
                            <th>nota Final</th>
                        </tr>

                    </thead>

                    <tbody id="tbody">
                        {alunos.map(elemento =()=>{

                            <tr>
                                <td>{elemento.aluno}</td>
                            </tr>
                        })}

                    </tbody>


                </table>

            </div>



        </div>

    )

}



export default ArrayComponent;