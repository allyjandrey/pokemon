import styles from './index.module.css'
import logo from '../../assets/Logo.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.div_container}>
                <img className={styles.img} src={logo} alt="Logo do pokémon" />
                <nav>
                    <a>Home</a>
                    <a>Pokedéx</a>
                    <a>Legendaries</a>
                    <a>Documentation</a>
                </nav>
            </div>
        </header>
    )
}