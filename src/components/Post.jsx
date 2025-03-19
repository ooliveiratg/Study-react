// biblioteca para formatar data
import {format, formatDistanceToNow} from 'date-fns';
// para pegar o idioma
import ptBR from 'date-fns/locale/pt-BR'
//  
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { Key } from 'phosphor-react';
import { useState } from 'react';
 


 export function Post({author , published, content}){
        //Estado

    const [comment,setComments] = useState(
        [
            'post muito bacana'
    
        ]
    )

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(published,"d 'de' LLLL 'de' HH:mm 'h'",{
        locale:ptBR,
    })

    const publishedNow= formatDistanceToNow(published, {
        locale:ptBR,
        addSuffix:true,
    })

    function newCommentChange (){
        setNewCommentText(event.target.value)
       
    }
   
    function CreateNewCommet(){
        event.preventDefault()

        // sempre retorna o elemento que está recebendo aquele evento
        // console.log(event.target)
        
        //imutabilidade
        setComments([...comment, newCommentText])
        //setComments([...comment,comment.length + 1]) serve para quando a pessoa escrever no textarea e clicar em enviar gera um comentario

        setNewCommentText(' ')
    }

    return (
        <article className=
        
        {styles.post}>
            <header >
                <div className={styles.author}>
                <Avatar hasBorder={true} src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                <strong className="author">{author.name}</strong>
                <span className="authorInfo">{author.role}</span>
                </div>
                </div>
                    <time title={publishedDateFormated} dateTime={published.toISOString()}> 

                    {publishedNow}    
                    
                    </time>
            </header>
            <div className={styles.content}>
               {content.map((line,id) => {
                
                if(line.type == 'paragraph'){
                    return(
                        <p key={line.content}>{line.content}</p>
                    )
                }else if(line.type == 'link'){
                    return(
                        <p key={line.content}><a href="https://github.com/ooliveiratg">{line.content}</a></p>
                    )
                }
               })}
            
            </div>
            <form onSubmit={CreateNewCommet} className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea 
                onChange={newCommentChange}
                name='comment'
                value={newCommentText}
                placeholder='Deixe seu comentário'/>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

           <div className={styles.commentList}>
               {comment.map((comment,index)=> {
                    return( 
                    
                    <Comment key={comment} content={comment}/>
                    )
               })}
               </div>
               </article>
    ) 
}

