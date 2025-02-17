import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopoImage from './Topo.png';

// Tyylit
const Header = styled.div`
    border-bottom: 3px solid white;
    flex: 0 0 10%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Fullpage = styled.div`
    background-color: cadetblue;
    height: 100vh;
    margin: 10px;
    gap: 10px;
`;

const Takaisin = styled.button`
    bordercolor: blue;
    padding: 1px;
    margin: 15px;
`;

const Teksti = styled.p`
    color: white;
    margin: 35px
`;

// Sisältö
export const Otsikko = () => {
    const navigate = useNavigate();

    return (
        <Fullpage>
            <Header>
                <img src={TopoImage} alt="Topo-logo" style={{width: '50px', height: 'auto', padding: 10}} />
                <h2 style={{color: 'white'}}>Alkukauden analyysi -ja yhteenvetoteksti</h2>
            </Header>
            <Takaisin button style={{padding: 10, color: 'black', borderColor: 'white'}} onClick={() => navigate("/")}>Takaisin</Takaisin>
            <Teksti><p>
                Peliemme datasta sain kattavaa tietoa tilastoista, jotka ovat yhteydessä peliemme lopputuloksiin. Tilastollisesti muihin sarjan joukkueisiin verrattuna olemme monessa merkittävässä kategoriassa keskiarvoa parempia.
                Ottelua kohden sarjan keskirvoihin verrattuna teemme enemmän pisteitä, päästämme vähemmän pisteitä ja annamme enemmän koriin johtaneita syöttöjä.
                Olemme erinomainen hyökkäyspään joukkue ja isoimmat ongelmamme ovat puolustuspäässä. Datasta merkittävä tilastohavainto on se ero, minkä verran pisteitä vastustaja meitä vastaan tekee voitoissamme ja tappioissamme.
                Peliä kohden vastustajamme tekee peleissä, jotka olemme hävinneet, 20 pistettä enemmän kuin peleissä, jotka olemme voittaneet. Ero on valtaisa!<br></br><br></br>
                Heittoprosenttien vaikutus pelien lopputuloksiin on selkeä. Voitetuissa peleissä olemme heittäneet paremmin kaikissa kategorioissa kuin tappiollisissa peleissä.
                Erityisen selkeä tämä ero on vapaaheittojen ja kahden pisteen heittojen välillä.
                Ne ovatkin yleensä niin sanottuja helppoja koreja, verrattuna kauempaa heitettyihin kolmen pisteen heittoihin. Positiivinen havainto on myös hyvät otteemme kotipeleissä.
                On tärkeää pystyä voittamaan kotipelejä, jotta joukkue saa siitä kollektiivista itseluottamusta. Olemme tähän mennessä voittaneet kotona neljä peliä viidestä.<br></br><br></br>
                Alkukausi on siis lähtenyt käyntiin lupaavasti, mutta on myös osa-alueita, joissa joukkueellamme on mahdollisuus parantaa. Tilastonostostoista saa selkeän kuvan, mitkä ovat joukkueemme vahvuudet ja heikkoudet.
                Näiden tunnistaminen on tärkeää, koska aina kannattaa pelata vahvuuksilla ja tehdä asioita, jotka ovat toimineet siihen asti. Heikkouksien tunnistaminen on ehkä jopa tärkeämpää, koska mitä pidemmälle kausi etenee,
                sitä enemmän joukkueet alkavat hyödyntämään toisten heikkouksia. Ne on siis tunnistettava itse ennen vastustajaa, jos haluaa pelata voitokkaasti keväällä pudotuspeleissä.               
                  </p></Teksti>
        </Fullpage>
    );
};


    