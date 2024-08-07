// OitavasDeFinal.jsx

import React from 'react';
import styles from './Oitavas.module.css';

function OitavasDeFinal() {
    const data = [
        {
            "fase": "Oitavas(Placares Agregado)",
            "dia": "TER",
            "data": "05/03/2024",
            "hora": "21:00",
            "grupo_mandante": "A1",
            "mandante": "Bayern de Munique",
            "gols_mandante": "3",
            "gols_visitante": "1",
            "visitante": "Lazio",
            "grupo_visitante": "E2",
            "local": "Allianz Arena"
        },
        {
            "fase": "Oitavas(Placares Agregado)",
            "dia": "TER",
            "data": "05/03/2024",
            "hora": "21:00",
            "grupo_mandante": "D1",
            "mandante": "Real Sociedad",
            "gols_mandante": "1",
            "gols_visitante": "4",
            "visitante": "PSG",
            "grupo_visitante": "F2",
            "estadio": "Anoeta"
        },
        {
            "fase": "Oitavas(Placares Agregado)",
            "dia": "QUA",
            "data": "06/03/2024",
            "hora": "21:00",
            "grupo_mandante": "G1",
            "mandante": "Manchester City",
            "gols_mandante": "6",
            "gols_visitante": "2",
            "visitante": "Copenhague",
            "grupo_visitante": "A2",
            "estadio": "Etihad"
        },
        {
            "fase": "Oitavas(Placares Agregado)",
            "dia": "QUA",
            "data": "06/03/2024",
            "hora": "21:00",
            "grupo_mandante": "C1",
            "mandante": "Real Madrid",
            "gols_mandante": "2",
            "gols_visitante": "1",
            "visitante": "RB Leipzing",
            "grupo_visitante": "G2",
            "estadio": "Santiago Bernabéu"
        },
        {
            "fase": "Oitavas(Placares Agregado)",
            "dia": "TER",
            "data": "12/03/2024",
            "hora": "21:00",
            "grupo_mandante": "B1",
            "mandante": "Arsenal",
            "gols_mandante": "1",
            "gols_visitante": "1",
            "visitante": "Porto",
            "grupo_visitante": "H2",
            "estadio": "Emirates",
            "prorrogacao": "Sim",
            "penaltis": "Sim",
            "placar_penaltis": "4 - 2"
        },
        {
            "fase": "Oitavas(Placares Agregado)",
            "dia": "TER",
            "data": "12/03/2024",
            "hora": "21:00",
            "grupo_mandante": "H1",
            "mandante": "Barcelona",
            "gols_mandante": "4",
            "gols_visitante": "2",
            "visitante": "Napoli",
            "grupo_visitante": "C2",
            "estadio": "Camp Nou"
        },
        {
            "fase": "Oitavas(Placares Agregado)",
            "dia": "QUA",
            "data": "13/03/2024",
            "hora": "21:00",
            "grupo_mandante": "E1",
            "mandante": "Atlético de Madrid",
            "gols_mandante": "2",
            "gols_visitante": "2",
            "visitante": "Inter de Milão",
            "grupo_visitante": "D2",
            "estadio": "Metropolitano",
            "prorrogacao": "Sim",
            "penaltis": "Sim",
            "placar_penaltis": "3 - 2"
        },
        {
            "fase": "Oitavas(Placares Agregado)",
            "dia": "QUA",
            "data": "13/03/2023",
            "hora": "21:00",
            "grupo_mandante": "F1",
            "mandante": "Borussia Dortmund",
            "gols_mandante": "3",
            "gols_visitante": "1",
            "visitante": "PSV",
            "grupo_visitante": "B2",
            "estadio": "Signal Iduna Park"
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Oitavas de Final</h1>
            <div className={styles.matches}>
                {data.map((match, index) => (
                    <div key={index} className={styles.match}>
                        <div className={styles.matchHeader}>
                            <span>{match.dia}</span>
                            <span>{match.data}</span>
                            <span>{match.hora}</span>
                        </div>
                        <div className={styles.teams}>
                            <div className={styles.team}>
                                <img src={getLogo(match.grupo_mandante)} alt={match.mandante} className={styles.teamLogo} />
                                <span className={styles.teamName}>{match.mandante}</span>
                                <span className={styles.score}>{match.gols_mandante}</span>
                            </div>
                            <div className={styles.vs}>vs</div>
                            <div className={styles.team}>
                                <img src={getLogo(match.grupo_visitante)} alt={match.visitante} className={styles.teamLogo} />
                                <span className={styles.teamName}>{match.visitante}</span>
                                <span className={styles.score}>{match.gols_visitante}</span>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <span>{match.estadio || match.local}</span>
                            {match.prorrogacao && <span>Prorrogação</span>}
                            {match.penaltis && <span>Penaltis: {match.placar_penaltis}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Função para obter o logo do time baseado no grupo
function getLogo(grupo) {
    switch (grupo) {
        case "A1":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/512px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png";
        case "E2":
            return "https://upload.wikimedia.org/wikipedia/pt/e/ed/SS_Lazio.png";
        case "D1":
            return "https://logodetimes.com/times/real-sociedad/logo-real-sociedad-256.png";
        case "F2":
            return  "https://logodownload.org/wp-content/uploads/2017/02/psg-logo-escudo-paris-saint-germain.png";
        case "G1":
            return  "https://upload.wikimedia.org/wikipedia/pt/0/02/Manchester_City_Football_Club.png";
        case "A2":
            return "https://logodownload.org/wp-content/uploads/2022/12/fc-copenhagen-logo-1.png";
        case "C1":
            return "https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png";
        case "G2":
            return "https://upload.wikimedia.org/wikipedia/pt/f/fd/RB_Leipzig.png";
        case "B1":
            return "https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png";
        case "H2":
            return "https://logodownload.org/wp-content/uploads/2017/03/fc-porto-logo-1.png";
        case "H1":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7kHgyd9GHcPpVcJ8FMmOjOQVk6JyHMq3Rw&s";
        case "C2":
            return "https://logodownload.org/wp-content/uploads/2017/11/napoli-logo-escudo-1.png";
        case "E1":
            return "https://upload.wikimedia.org/wikipedia/pt/1/19/AtleticoMadrid2017.png";
        case "D2":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png";
        case "F1":
            return "https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png";
        case "B2":
            return "https://w7.pngwing.com/pngs/625/380/png-transparent-psv-eindhoven-eredivisie-al-wasl-f-c-netherlands-newcastle-united-f-c-ajax-text-sport-logo.png";
        default:
            return "";
    }
}

export default OitavasDeFinal;
