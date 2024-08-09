import React from 'react';
import './Home.css';

interface minhaProps {
    title: string;
    description: string;
}

function Home(props:minhaProps){
    return (
        <>
             <h1 className="titulo">H O M E</h1>
             <img src="https://wallpapers.com/images/high/neon-distorted-glitch-aesthetic-trippy-smiley-face-raqadeeczj97mvsg.webp" alt="Imagem Tela Inicial" className="img"/>
             <h2>{props.title}</h2>
             <p>{props.description}</p>
        </>
    );
}

export default Home;