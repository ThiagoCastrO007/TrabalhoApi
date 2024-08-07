import styles from './FaseDeGrupos.module.css';

function FaseDeGrupos() {
    const dados = {
        'Grupo A': [
            { posicao: 1, urlEscudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/512px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png", time: 'Bayern de Munique', PTS: 16, JG: 6, V: 5, E: 1, D: 0, GF: 12, GT: 6, SG: 6 } ,
            { posicao: 2, urlEscudo: "https://logodownload.org/wp-content/uploads/2022/12/fc-copenhagen-logo-1.png", time: 'Copenhague', PTS: 8, JG: 6, V: 2, E: 2, D: 2, GF: 8, GT: 8, SG: 0 },
            { posicao: 3, urlEscudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galatasaray_Sports_Club_Logo.png/481px-Galatasaray_Sports_Club_Logo.png", time: 'Galatasaray', PTS: 5, JG: 6, V: 1, E: 2, D: 3, GF: 10, GT: 13, SG: -3 },
            { posicao: 4, urlEscudo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfG-TBDeqRMgkRz22Rr_VW5khjCKo1IcaSg&s", time: 'Manchester United', PTS: 4, JG: 6, V: 1, E: 1, D: 4, GF: 12, GT: 15, SG: -3 },
        ],
        'Grupo B': [
            { posicao: 1, urlEscudo: "https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png", time: 'Arsenal', PTS: 13, JG: 6, V: 4, E: 1, D: 1, GF: 16, GT: 4, SG: 12 },
            { posicao: 2, urlEscudo: "https://w7.pngwing.com/pngs/625/380/png-transparent-psv-eindhoven-eredivisie-al-wasl-f-c-netherlands-newcastle-united-f-c-ajax-text-sport-logo.png", time: 'PSV', PTS: 9, JG: 6, V: 2, E: 3, D: 1, GF: 8, GT: 10, SG: -2 },
            { posicao: 3, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/8/8d/RC_Lens.png", time: 'Lens', PTS: 8, JG: 6, V: 2, E: 2, D: 2, GF: 6, GT: 11, SG: -5 },
            { posicao: 4, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/c/cd/Sevilla_cf.png", time: 'Sevilla', PTS: 2, JG: 6, V: 0, E: 2, D: 4, GF: 7, GT: 12, SG: -5 },
        ],
        'Grupo C': [
            { posicao: 1, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png", time: 'Real Madrid', PTS: 18, JG: 6, V: 6, E: 0, D: 0, GF: 16, GT: 7, SG: 9 },
            { posicao: 2, urlEscudo: "https://logodownload.org/wp-content/uploads/2017/11/napoli-logo-escudo-1.png", time: 'Napoli', PTS: 10, JG: 6, V: 3, E: 1, D: 2, GF: 10, GT: 9, SG: 1 },
            { posicao: 3, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/f/f9/150px-Sporting_Clube_Braga.png", time: 'Braga', PTS: 4, JG: 6, V: 1, E: 1, D: 4, GF: 6, GT: 12, SG: -6 },
            { posicao: 4, urlEscudo: "https://logodetimes.com/times/fc-union-berlin/fc-union-berlin-4096.png"                , time: 'Union Berlin', PTS: 2, JG: 6, V: 0, E: 2, D: 4, GF: 6, GT: 10, SG: -4 },
        ],
        'Grupo D': [
            { posicao: 1, urlEscudo: "https://logodetimes.com/times/real-sociedad/logo-real-sociedad-256.png", time: 'Real Sociedad', PTS: 12, JG: 6, V: 3, E: 3, D: 0, GF: 7, GT: 2, SG: 5 },
            { posicao: 2, urlEscudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png", time: 'Inter de Milão', PTS: 12, JG: 6, V: 3, E: 3, D: 0, GF: 8, GT: 5, SG: 3 },
            { posicao: 3, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/7/77/SLBenfica3estrelas.png", time: 'Benfica', PTS: 4, JG: 6, V: 1, E: 1, D: 4, GF: 7, GT: 11, SG: -4 },
            { posicao: 4, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/2/24/Red_Bull_Salzburg.png", time: 'Salzburg', PTS: 4, JG: 6, V: 1, E: 1, D: 4, GF: 4, GT: 8, SG: -4 },
        ],
        'Grupo E': [
            { posicao: 1, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/1/19/AtleticoMadrid2017.png", time: 'Atlético de Madrid', PTS: 14, JG: 6, V: 4, E: 2, D: 0, GF: 17, GT: 6, SG: 11 },
            { posicao: 2, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/e/ed/SS_Lazio.png", time: 'Lazio', PTS: 10, JG: 6, V: 3, E: 1, D: 2, GF: 7, GT: 7, SG: 0 },
            { posicao: 3, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/0/03/Feyenoord.png", time: 'Feyenoord', PTS: 6, JG: 6, V: 2, E: 0, D: 4, GF: 9, GT: 10, SG: -1 },
            { posicao: 4, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/3/39/Celtic_FC_logo.png", time: 'Celtic', PTS: 4, JG: 6, V: 1, E: 1, D: 4, GF: 5, GT: 15, SG: -10 },
        ],
        'Grupo F': [
            { posicao: 1, urlEscudo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png", time: 'Borussia Dortmund', PTS: 11, JG: 6, V: 3, E: 2, D: 1, GF: 7, GT: 4, SG: 3 },
            { posicao: 2, urlEscudo: "https://logodownload.org/wp-content/uploads/2017/02/psg-logo-escudo-paris-saint-germain.png", time: 'PSG', PTS: 8, JG: 6, V: 2, E: 2, D: 2, GF: 9, GT: 8, SG: 1 },
            { posicao: 3, urlEscudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/AC_Milan.png/378px-AC_Milan.png", time: 'Milan', PTS: 8, JG: 6, V: 2, E: 2, D: 2, GF: 5, GT: 8, SG: -3 },
            { posicao: 4, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/2/25/Newcastle_United_Logo.png", time: 'Newcastle', PTS: 5, JG: 6, V: 1, E: 2, D: 3, GF: 6, GT: 7, SG: -1 },
        ],
        'Grupo G': [
            { posicao: 1, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/0/02/Manchester_City_Football_Club.png", time: 'Manchester City', PTS: 18, JG: 6, V: 6, E: 0, D: 0, GF: 18, GT: 7, SG: 11 },
            { posicao: 2, urlEscudo: "https://cdn.freebiesupply.com/logos/large/2x/red-bull-leipzig-logo-png-transparent.png", time: 'Leipzig', PTS: 12, JG: 6, V: 4, E: 0, D: 2, GF: 13, GT: 10, SG: 3 },
            { posicao: 3, urlEscudo: "https://logodownload.org/wp-content/uploads/2021/09/bsc-young-boys-logo.png", time: 'Young Boys', PTS: 4, JG: 6, V: 1, E: 1, D: 4, GF: 7, GT: 13, SG: -6 },
            { posicao: 4, urlEscudo: "https://logodownload.org/wp-content/uploads/2020/03/crvena-zvezda-logo-1.png", time: 'Estrela Vermelha', PTS: 1, JG: 6, V: 0, E: 1, D: 5, GF: 7, GT: 15, SG: -8 },
        ],
        'Grupo H': [
            { posicao: 1, urlEscudo: "https://logosmarcas.net/wp-content/uploads/2020/04/Barcelona-Logo.png", time: 'Barcelona', PTS: 12, JG: 6, V: 4, E: 0, D: 2, GF: 12, GT: 6, SG: 6 },
            { posicao: 2, urlEscudo: "https://logodownload.org/wp-content/uploads/2017/03/fc-porto-logo-1.png", time: 'Porto', PTS: 12, JG: 6, V: 4, E: 0, D: 2, GF: 15, GT: 8, SG: 7 },
            { posicao: 3, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/2/20/FC_Shakhtar_Donetsk.png", time: 'Shakhtar Donetsk', PTS: 9, JG: 6, V: 3, E: 0, D: 3, GF: 10, GT: 12, SG: -2 },
            { posicao: 4, urlEscudo: "https://upload.wikimedia.org/wikipedia/pt/8/8e/Royal_Antwerp_Football_Club.png", time: 'Antwerp', PTS: 3, JG: 6, V: 1, E: 0, D: 5, GF: 6, GT: 17, SG: -11 },
        ],
    };

    return (
        <div className={styles.container}>
            <h1>Classificação</h1>
            <div className={styles.grupos}>
                {Object.keys(dados).map((grupo, index) => (
                    <div key={index} className={styles.grupo}>
                        <h2>{grupo}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Posição</th>
                                    <th>Time</th>
                                    <th>PTS</th>
                                    <th>JG</th>
                                    <th>V</th>
                                    <th>E</th>
                                    <th>D</th>
                                    <th>GF</th>
                                    <th>GT</th>
                                    <th>SG</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dados[grupo].map((time, index) => (
                                    <tr key={index}>
                                        <td>{time.posicao}</td>
                                        <td><img src={time.urlEscudo} alt={`Escudo ${time.time}`} /> {time.time}</td>
                                        <td>{time.PTS}</td>
                                        <td>{time.JG}</td>
                                        <td>{time.V}</td>
                                        <td>{time.E}</td>
                                        <td>{time.D}</td>
                                        <td>{time.GF}</td>
                                        <td>{time.GT}</td>
                                        <td>{time.SG}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaseDeGrupos;
