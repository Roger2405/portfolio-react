import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo.svg';


export default function Cabecalho() {
    return (
        <header className={styles.Cabecalho}>
            <Logo className={styles.Cabecalho__logo} />
            <nav className='Cabecalho__nav'>
            </nav>

        </header >
    )
}