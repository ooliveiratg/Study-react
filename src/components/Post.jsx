 import styles from './Post.module.css'
 
 export function Post(){
    return (
        <article className={styles.post}>
            <header >
                <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/ooliveiratg.png" alt="" />
                <div className={styles.authorInfo}>
                <strong className="author">Thiago Oliveira</strong>
                <span className="authorInfo">Web Developer</span>
                </div>
                </div>
                    <time title='16 de fervereiro de 2025' datetime="2025-02-16"> Publicado a 1h</time>
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
        </article>
    );
 }