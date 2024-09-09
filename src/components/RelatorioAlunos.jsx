import React from "react"


const RelatorioALunos = () => {

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

    alunos.sort((a,b)=> a.aluno.localeCompare(b.aluno))

    return (

        <div>
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
                        {alunos.map((elemento, index) => (

                            <tr key={index}>
                                <td>{elemento.aluno}</td>
                                <td>{elemento.matrícula}</td>
                                <td>{elemento.nota}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    )

}

export default RelatorioALunos
