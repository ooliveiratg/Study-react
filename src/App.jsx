import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css'
import './global.css'

//Estado

const comments = [
  1,
  2,
  3,

 ]

export default function App(){
   // author:{avatar_url: "", name: "",role: }
    // publish:Date
    // contentPost: String

    const posts = [
      //um objeto dentro de um array para pegar cada post separado por indices
      {
        id:1,
        //criei o author como objeto para pegar a img de avatar e o nome
        author: {
          //url da img
          avatarUrl:"https://github.com/ooliveiratg.png",
          //nome
          name:"Thiago Oliveira",
          //cargo
          role:"Web Developer",

        },
        content: [
          { type:"paragraph", content: 'Fala galeraa 👋',},
          {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type:'link', content:'github.com/ooliveiratg'},
      
        ] ,
        published:new Date('2025-03-14 20:00')

      },

      

      {
        id:2,
        //criei o author como objeto para pegar a img de avatar e o nome
        author: {
          //url da img
          avatarUrl:"https://github.com/lucascorreaa.png",
          //nome
          name:"Professor Corrêa",
          //cargo
          role:"Professor ",

        },
        content: [
          { type:"paragraph", content: 'Fala galeraa 👋',},
          {type:'paragraph', content: 'Oi, pessoal! 👋Estava com umas consultas lentas e percebi que estava esquecendo de algo simples: indexação. Adicionei índices nas colunas mais usadas nas minhas consultas e, de repente, tudo ficou muito mais rápido! 🚀Se você também tem problemas com consultas lentas, vale a pena revisar os índices das suas colunas. Faz toda a diferença!Alguém mais já passou por isso? Tem alguma dica que ajudou a melhorar a performance? Compartilhem! 😎Abraços! 👨‍💻👩‍💻"'},
          {type:'link', content:'github.com/ooliveiratg'},
      
        ] ,
        published:new Date('2025-03-17 20:00')

      },
    ]
  return(
    <div>
      <Header/>

   <div className={styles.wrapper}>
      <Sidebar/>
    <main>
 
    {posts.map((post,id) => {
      return ( 
      <Post
      key={post.id}
      author = {post.author}
      content={post.content}
      published={post.published}

      />
      )
      })
    }
    </main>
    </div>
   </div>
  );
}