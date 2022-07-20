import styles from './Header.module.scss';
import Logo from 'assets/img/logo_r.png';


export default function Cabecalho() {
    return (
        <header className={styles.Cabecalho}>
            <img className={styles.Cabecalho__logo} src={Logo} />
            <nav className='Cabecalho__nav'>
            </nav>

        </header >
    )
}