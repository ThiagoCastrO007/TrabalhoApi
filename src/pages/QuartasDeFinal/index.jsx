import React from 'react';
import styles from './Quartas.module.css';

function QuartasDeFinal() {
    const data = [
        {
            "fase": "Quartas(Placares Agregado)",
            "dia": "TER",
            "data": "16/04/2024",
            "hora": "20:00",
            "grupo_mandante": "H1",
            "mandante": "Barcelona",
            "gols_mandante": "4",
            "gols_visitante": "6",
            "visitante": "PSG",
            "grupo_visitante": "F2",
            "estadio": "Camp Nou"
        },
        {
            "fase": "Quartas(Placares Agregado)",
            "dia": "TER",
            "data": "16/04/2024",
            "hora": "20:00",
            "grupo_mandante": "F1",
            "mandante": "Borussia Dortmund",
            "gols_mandante": "5",
            "gols_visitante": "4",
            "visitante": "Atlético de Madrid",
            "grupo_visitante": "E1",
            "estadio": "Signal Iduna Park"
        },
        {
            "fase": "Quartas(Placares Agregado)",
            "dia": "QUA",
            "data": "17/04/2024",
            "hora": "20:00",
            "grupo_mandante": "A1",
            "mandante": "Bayern München",
            "gols_mandante": "3",
            "gols_visitante": "2",
            "visitante": "Arsenal",
            "grupo_visitante": "B1",
            "estadio": "Allianz Arena"
        },
        {
            "fase": "Quartas(Placares Agregado)",
            "dia": "QUA",
            "data": "17/04/2024",
            "hora": "20:00",
            "grupo_mandante": "G1",
            "mandante": "Manchester City",
            "gols_mandante": "4",
            "gols_visitante": "4",
            "visitante": "Real Madrid",
            "grupo_visitante": "C1",
            "estadio": "Etihad",
            "prorrogacao": "Sim",
            "penaltis": "Sim",
            "placar_penaltis": "3 - 4"
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Quartas de Final</h1>
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
        case "H1":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7kHgyd9GHcPpVcJ8FMmOjOQVk6JyHMq3Rw&s";
        case "F2":
            return  "https://logodownload.org/wp-content/uploads/2017/02/psg-logo-escudo-paris-saint-germain.png";
        case "F1":
            return "https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png";
        case "E1":
            return "https://upload.wikimedia.org/wikipedia/pt/1/19/AtleticoMadrid2017.png";
        case "A1":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/512px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png";
        case "B1":
            return "https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png";
        case "G1":
            return  "https://upload.wikimedia.org/wikipedia/pt/0/02/Manchester_City_Football_Club.png";
        case "C1":
            return "https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png";
        default:
            return "";
    }
}


export default QuartasDeFinal;
