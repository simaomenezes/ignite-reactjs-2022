import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Post | Tryonn</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>12 de março de 2022</time>
                        <strong>Creat text to test for post</strong>
                        <p>News for test why posts, Creat text to test for post Creat text to test for post , Creat text to test for post</p>
                    </a>                    
                    <a>
                        <time>12 de março de 2022</time>
                        <strong>Creat text to test for post</strong>
                        <p>News for test why posts, Creat text to test for post Creat text to test for post , Creat text to test for post</p>
                    </a>                    
                    <a>
                        <time>12 de março de 2022</time>
                        <strong>Creat text to test for post</strong>
                        <p>News for test why posts, Creat text to test for post Creat text to test for post , Creat text to test for post</p>
                    </a>                    
                </div>
            </main>
        </>
    );
}