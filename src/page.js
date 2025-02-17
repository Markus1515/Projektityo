import { useState } from "react";
import React from "react";
import TopoImage from "./Topo.png";
import { useNavigate } from "react-router-dom";



export const Header = () => (
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'}}>
        <img src={TopoImage} alt="logo" style={{width: '50px', height: 'auto', padding: 10}}/>
        <div style={{justifyContent: 'center', display: 'flex'}}>
          <h1 style={{color: "white"}}>Torpan Pojat - alkukauden analyysi</h1>
        </div>
    </div>
);

export const Footer = () => (
  <p style={{color: "white"}}>Copyright by MarkusRautasalo@Savonia</p>
);

export const RightSide = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3 style={{ color: "white", padding: 0 }}>Visualisoinnit</h3>
      <p style={{color: 'white'}}>Visualisoinneissa on kaaviota ja kuvia, jotka selkeyttävät tilastohavaintoja voittojen ja tappioiden suhteesta.
        Koripallopeleistä kertyy paljon dataa, joten olen keskittynyt merkittävimpiin havaintoihin tilastoista ja niihin kategoroihin, jotka koen olevan selkeitä indikaattoreita lopputuloksen suhteen.
        </p>
      <button style={{padding: 10, color: 'black', borderColor: 'white'}} onClick={() => navigate("/visualisoinnit")}>Avaa visualisoinnit</button>
    </div>
  );
};

export const Center = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h3 style={{color: "white", padding: 0}}>Analyysi</h3>
      <p style={{color: 'white'}}>Tästä pääset lukemaan analyysi -ja yhteenvetotekstin alkukaudesta. Kirjoituksessa avaan tekemiäni havaintoja ja tilastonostoja sekä kommentoi alkukauttamme yleisellä tasolla.</p>
      <button style={{padding: 10, color: 'black', borderColor: 'white'}} onClick={() => navigate("/sivu")}>Avaa analyysi</button>
    </div>
  );
};

export const LeftSide = () => (
  <div>
    <h3 style={{color: 'white', padding: 10, paddingBottom: 1, paddingTop: 4}}>Perustietoja alkukaudesta</h3>
    <p style={{color: 'white', padding: 10, paddingTop: 0}}>
      Joukkueeni pelaa miesten koripallon 1 A divisioonaa eli toiseksi korkeimmalla sarjatasolla Suomessa. Olemme pelanneet 10 peliä ja voittoja on kertynyt kuusi, tappiota neljä. Sarjassamme on 12 joukkuetta ja tällä hetkellä olemme neljäntenä.
      Kausi on siis lähtenyt ihan mallikkaasti käyntiin. <br></br><br></br>Tässä analyysissä tarkatellaan, miten peliemme tilastot ovat olleet yhteydessä pelien lopputuloksiin.
      Selkeyttämään tilastojen ja lopputulosten yhteyksiä, olen tehnyt Power BI -ohjelmalla visualisointeja peliemme datasta.
      </p>
  </div>
);

export const Page = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "120vh",
      gap: '10px',
      backgroundColor: 'cadetblue',
      margin: '10px'
    }}
  >
    <div
      style={{
        borderBottom: "3px solid white", 
      }}
    >
      <Header />
    </div>

    <div
      style={{
        flex: "1 0 auto",
        display: "flex",
        gap: '10px'
      }}
    >
      <div
        style={{
          flex: "40%",
          borderRight: "3px solid white", 
          display: "flex",
          gap: '5px',
          textAlign: 'left',
          paddingLeft: '5px'
        }}
      >
        <LeftSide />
      </div>
      <div
        style={{
          flex: "0 0 30%",
          display: "flex",
          textAlign: 'left',
          paddingLeft: '7px'
        }}
      >
        <Center />
      </div>
      <div
        style={{
          flex: "0 0 30%",
          borderLeft: "3px solid white", 
          display: "flex",
          textAlign: 'left',
          paddingLeft: '14px'
        }}
      >
        <RightSide />
      </div>
    </div>

    <div
      style={{
        flex: "0 0 10%",
        borderTop: "3px solid white", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Footer />
    </div>
  </div>
);