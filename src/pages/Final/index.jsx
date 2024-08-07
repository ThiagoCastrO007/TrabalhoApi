import React from 'react';
import styles from './Final.module.css';

function Final() {
    const data = [
        {
            "fase": "Final",
            "dia": "SÁB",
            "data": "01/06/2024",
            "hora": "20:00",
            "grupo_mandante": "F1",
            "mandante": "Borussia Dortmund",
            "gols_mandante": "0",
            "gols_visitante": "2",
            "visitante": "Real Madrid",
            "grupo_visitante": "C1",
            "estadio": "Wembley"
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Final</h1>
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

function getLogo(grupo) {
    switch (grupo) {
        case "F1":
            return "https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png";
        case "C1":
            return "https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png";
        default:
            return "";
    }
}

export default Final;
