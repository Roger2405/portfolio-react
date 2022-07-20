import styles from'./App.module.scss'
import Cabecalho from '../components/Header';
import Main from '../components/Main';

function App() {
  return (
    <div className={styles.App}>
      <Cabecalho />
      <Main />
    </div>
  );
}

export default App;
