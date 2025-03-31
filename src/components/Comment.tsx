import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface ContentProps {
    content:string
    onDeleteComment: (comment:string) => void
}

export function Comment({content,onDeleteComment}:ContentProps){
    //sempre passar o tipo no useState, nãofaz sentido passar useState("") se eu to pegando numbers
const [likeCount,setLikeCount] =useState(0)

//uso o props para puxar o conteudo = com o {comentario}
    function handleDeleteComment(){
        //uso uma função para mostrar internamente o conteudo do comentario que eu quero deletar
        console.log('deletar')
        //chamo as funções do "onClick" e a de mostrar o comentario
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ooliveiratg.png" alt={''} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Oliveira</strong>
                            <time title='16 de fervereiro de 2025' dateTime="2025-02-16"> Publicado a 1h atras</time>

                        </div>
                        <button onClick={handleDeleteComment} title='deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1) }>
                        <ThumbsUp/>
                        aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}  

