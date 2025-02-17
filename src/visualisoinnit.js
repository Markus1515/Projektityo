import React from "react";
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

const ActionBar = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    gap: 268px;
`;

const Takaisin = styled.button`
    bordercolor: blue;
    padding: 10px;
    color: black;
    border-color: white;
`;

const Lisaa = styled.button`
    bordercolor: blue;
    padding: 10px;
    color: black;
    border-color: white;
`;

const Teksti = styled.p`
    color: white;
    margin: 0;
    flex: 1;
`;

const VisualContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    margin-top: 20px;
`;

const IframeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h4`
    color: white;
`;

// Sisältö
export const PowerBI = () => {
    const navigate = useNavigate();

    return (
        <Fullpage>
            <Header>
                <img src={TopoImage} alt="Topo-logo" style={{ width: '50px', height: 'auto', padding: 10 }} />
                <h2 style={{ color: 'white' }}>Visualisoinnit</h2>
            </Header>
            <ActionBar>
                <Takaisin onClick={() => navigate("/")}>Takaisin</Takaisin>
                <Teksti>Voit avata visualisoinnit koko sivun kokoiseksi oikeasta alakulmasta</Teksti>
                <Lisaa onClick={() => navigate("/visualisoinnit2")}>Lisää visualisointeja</Lisaa>
            </ActionBar>
            <VisualContainer>
                <IframeWrapper>
                    <Title>Tilastoja verrattuna muihin joukkueisiin</Title>
                    <iframe
                        title="ProjektiTyöKaikkiJoukkueet"
                        width="530"
                        height="310"
                        src="https://app.powerbi.com/view?r=eyJrIjoiZjcwMmQ1YjctMmVlOC00MTc2LWIzN2UtNWFkZDlkMmZmNGQxIiwidCI6ImI2ZDU2ODFiLTRhNDAtNGQzYS04ZTdiLTAzYTcwZDM5OTFiNiIsImMiOjh9"
                        frameBorder="0"
                        allowFullScreen={true}
                    ></iframe>
                </IframeWrapper>
                <IframeWrapper>
                    <Title>Kotietu</Title>
                    <iframe
                        title="ProjektityöKotietu"
                        width="530"
                        height="310"
                        src="https://app.powerbi.com/view?r=eyJrIjoiYjBmM2UwMjItZjAzOC00ZTE3LTg2ZjQtZDRmODExOWMzMzA4IiwidCI6ImI2ZDU2ODFiLTRhNDAtNGQzYS04ZTdiLTAzYTcwZDM5OTFiNiIsImMiOjh9"
                        frameBorder="0"
                        allowFullScreen={true}
                    ></iframe>
                </IframeWrapper>
            </VisualContainer>
        </Fullpage>
    );
};


