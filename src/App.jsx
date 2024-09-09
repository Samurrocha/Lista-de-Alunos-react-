import { useState } from 'react'
import './App.css'
import RelatorioALunos from './components/RelatorioAlunos'
import FirstComponent from './components/FirstComponent'
import CallComponent from './components/CallComponent'


function App() {

    return(
        <>
       <FirstComponent/>
       <RelatorioALunos/>
       <CallComponent/>

        </>
    )

}

export default App
