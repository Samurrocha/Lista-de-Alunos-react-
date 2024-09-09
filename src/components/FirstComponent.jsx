import React, { useState } from "react";

function FirstComponent() {

    // Definindo as variáveis
    const nome = "Samuel";
    const sobrenome = "Rodrigues";
    const matricula = "2314291027";
    const nomeProfessor = "Dr. Smith";
    const nomeDisciplina = "Construção de FrontEnd";


    return (

        <>

            <p><strong>Nome : </strong> {nome} {sobrenome}</p>
            <p><strong>Matrícula : </strong> {matricula}</p>
            <p><strong>Professor : </strong> {nomeProfessor}</p>
            <p><strong>Disciplina : </strong>{nomeDisciplina}</p>


            <button onClick={mostrar}>mostrar relatorio</button>

        </>
    )

}


export default FirstComponent;