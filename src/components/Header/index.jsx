import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Champions League 23-24 (Mata Mata com Placares Agregados)</span>
            </Link>
            <nav>
                <Link to="/">Fase de Grupos</Link>
                <Link to="/OitavasDeFinal">Oitavas</Link>
                <Link to="/QuartasDeFinal">Quartas</Link>
                <Link to="/SemiFinal">Semi</Link>
                <Link to="/Final">Final</Link>
            </nav>
        </header>
    )    
}

export default Header

