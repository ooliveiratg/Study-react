import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ooliveiratg.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Oliveira</strong>
                            <time title='16 de fervereiro de 2025' dateTime="2025-02-16"> Publicado a 1h atras</time>

                        </div>
                        <button title='deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        aplaudir <span>18</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}