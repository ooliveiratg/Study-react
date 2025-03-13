import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

export default function Bala(){
  return(
    <div>
      <Header/>

   <div className={styles.wrapper}>
      <Sidebar/>
    <main>
    <Post/>
    <Post/>
    </main>
    </div>
   </div>
  );
}
