import Header from '@/components/Header';
import BoasVindas from '@/components/Titulo';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header titulo="Bem-vindo ao site!" />
      <BoasVindas nome="João" />
    </div>
  );
}