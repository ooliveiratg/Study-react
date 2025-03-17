// biblioteca para formatar data
import {format, formatDistanceToNow} from 'date-fns';
// para pegar o idioma
import ptBR from 'date-fns/locale/pt-BR'
//  
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
 
 export function Post({author , published}){

    const publishedDateFormated = format(published,"d 'de' LLLL 'de' y",{
        locale:ptBR,
    })

    const publishedNow= formatDistanceToNow(published, {
        locale:ptBR,
        addSuffix:true,
    })
   
    return (
        <article className={styles.post}>
            <header >
                <div className={styles.author}>
                <Avatar hasBorder={true} src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                <strong className="author">{author.name}</strong>
                <span className="authorInfo">{author.role}</span>
                </div>
                </div>
                    <time title='' dateTime="2025-02-16"> 

                    {published.toString()}    
                    
                    </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <i>👉</i> <a href=""> github.com/ooliveiratg </a></p>
                <p>
                   <a href="">#novoprojeto</a>
                   <a href="">#nlw</a>
                   <a href="">#rocketseat</a>
                </p>

            </div>
            <form className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'/>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

           <div className={styles.commentList}>
                <Comment/>
           </div>
        </article>
    );
 }