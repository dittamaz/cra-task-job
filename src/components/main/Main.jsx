import style from './Main.module.css';
import { SeecerCard } from './SeecerCard';
import { PostCard } from './PostCard';

export function Main () {
    return (
        
        <main className={style.main}>
            <div>
                <div className={style.job}>
                    <div className={style.header}>
                        <h2> Suggested job seekers</h2>
                    </div>
                        <SeecerCard />
                        <SeecerCard />
                        <SeecerCard />
                    </div>
                <div className={style.job}>
                    <div className={style.header}>
                        <h2>Recent job posts</h2>
                    </div>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                </div>
            </div>

        </main> 
    );
}

