import React from 'react';
import styles from './Semi.module.css';

function SemiFinal() {
    const data = [
        {
            "fase": "Semis(Placares Agregado)",
            "dia": "TER",
            "data": "07/05/2024",
            "hora": "20:00",
            "grupo_mandante": "F2",
            "mandante": "PSG",
            "gols_mandante": "0",
            "gols_visitante": "2",
            "visitante": "Borussia Dortmund",
            "grupo_visitante": "F1",
            "estadio": "Parc des Princes"
        },
        {
            "fase": "Semis(Placares Agregado)",
            "dia": "QUA",
            "data": "08/05/2024",
            "hora": "20:00",
            "grupo_mandante": "C1",
            "mandante": "Real Madrid",
            "gols_mandante": "4",
            "gols_visitante": "3",
            "visitante": "Bayern München",
            "grupo_visitante": "A1",
            "estadio": "Santiago Bernabéu"
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Semis Finais</h1>
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
        case "F2":
            return  "https://logodownload.org/wp-content/uploads/2017/02/psg-logo-escudo-paris-saint-germain.png";
        case "F1":
            return "https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png";
        case "C1":
            return "https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png";
        case "A1":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/512px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png";
        default:
            return "";
    }
}

export default SemiFinal;
