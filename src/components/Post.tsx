// biblioteca para formatar data
import {format, formatDistanceToNow} from 'date-fns';
// para pegar o idioma
import {ptBR} from 'date-fns/locale/pt-BR'
//  
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
 
interface Author {
    name:string;
    role:string;
    avatarUrl:string;
}

interface Content {
    type: 'paragraph' | 'link';
    content:string;
}

export interface PostType {
    id: number;
    author:Author;
    published: Date;
    content: Content[];
}

interface PostProps {
   post: PostType;
}



 export function Post({post}:PostProps){
        //Estado

    const [comment,setComments] = useState(
        [
            'post muito bacana'
    
        ]
    )

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(post.published,"d 'de' LLLL 'de' HH:mm 'h'",{
        locale:ptBR,
    })

    const publishedNow= formatDistanceToNow(post.published, {
        locale:ptBR,
        addSuffix:true,
    })

    function newCommentChange (event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
       
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('esse campo é obrigatório!')
    }
   
    function CreateNewCommet(event: FormEvent){
        event.preventDefault()

        // sempre retorna o elemento que está recebendo aquele evento
        // console.log(event.target)
        
        //imutabilidade
        setComments([...comment, newCommentText])
        //setComments([...comment,comment.length + 1]) serve para quando a pessoa escrever no textarea e clicar em enviar gera um comentario

        setNewCommentText(' ')
    }
    //imutabilidade => as variáveis não sofrem mutação, nós criamos um novo valor(um novo espaço na memoria)
    function deleteComment(commentToDelete:string){
       const commentsWhoutDeleteOne =  comment.filter(comment => {
        return(
            comment != commentToDelete
        )
        
       })
       setComments(commentsWhoutDeleteOne)
    }

    const isNewCommentEmpty = newCommentText.length == 0
   
    return (
        <article className=
        
        {styles.post}>
            <header >
                <div className={styles.author}>
                <Avatar  src={post.author.avatarUrl}/>
                <div className={styles.authorInfo}>
                <strong className="author">{post.author.name}</strong>
                <span className="authorInfo">{post.author.role}</span>
                </div>
                </div>
                    <time title={publishedDateFormated} dateTime={post.published.toISOString()}> 

                    {publishedNow}    
                    
                    </time>
            </header>
            <div className={styles.content}>
               {post.content.map(line => {
                
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
                placeholder='Deixe seu comentário'
                //chamada sempre que o texto do input é invalido
                onInvalid={handleNewCommentInvalid}
                
                
                />

                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer>
            </form>

           <div className={styles.commentList}>
               {comment.map(comment=> {
                    return( 
                    //comunicação entre componentes conteudo={comentario}
                        <Comment 
                         key={comment}
                         content={comment}
                         onDeleteComment={deleteComment}
                      />
                    )
               })}
               </div>
               </article>
    ) 
}



