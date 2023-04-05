import React from "react"
import headerStart from "../../assets/imgs/header_start.jpg"
import letsGo from "../../assets/imgs/lets_go.jpg"
import "./style.css"

const Header = () => {
    return(
        <>
            <div className='c_app_header'>
                <img className='c_app_header_img floating' src={headerStart} alt="Astronauta início cabeçalho" />
                <div className='c_app_header_content'>
                    <h1>Olá, tripulante espacial!</h1>
                    <h2>Venha ver como é divertido aprender!</h2>
                    <p> <em> Prepare-se para navegar nesta jornada do Universo do saber. </em> </p>
                </div>
            </div>
            <div className='c_section_about_router'>
            <div className="c_section_about_router_header">
            <h2>Rotas & Missões</h2>
            <h3>A nossa frota espacial possui <em>2 (duas)</em> rotas, com suas missões.</h3>
            <h2>Contamos com você!</h2>
            </div>
            <div className="c_section_about_router_description">
            <div className="c_section_router_count">
                <h3>Rota de contagem</h3>
                <p> <em> 1,2,3,4,5,6,7,8,9,10,11,12,13,14... São muitos números! </em> </p>
                <p>Para uma contagem perfeita, sabemos que podemos contar com você! Para isso, precisamos que clique no botão de contagem, a cada clique o número aumenta em forma sequencial. </p>
            </div>
            <div className="c_section_router_decision">
                <h3>Rota de Decisão: ímpar</h3>
                <p>Par ou ímpar? Se já teve essa dúvida ou se não entende o que isso significa, você precisa saber que um número pode ser classificado como par ou como ímpar. Os números pares são aqueles divisíveis por 2. Ou seja, se dividirmos um número por 2 e o resto da divisão for zero, trata-se de um número par. Um número é considerado ímpar se ele não for divisível por 2, isto é, se dividirmos esse número por 2 e ele deixar um resto igual a 1.
                <a href="https://escolakids.uol.com.br/matematica/par-ou-impar.htm" target='_blank' rel="noreferrer">Referência.</a>
                </p>
                <p>Vamos conseguir identificar rapidamente os números ímpares, mas, contamos com você para informar a lista de números.</p>
            </div>
            </div>
            <div className='c_section_about_router_end'>
            <p> <strong> Acesse as missões abaixo!</strong> Vamos nessa!</p>
            <img className='floating-2' src={letsGo} alt="Astronauta" width="70px" />
            </div>
        </div>
      </>
    )
}

export default Header