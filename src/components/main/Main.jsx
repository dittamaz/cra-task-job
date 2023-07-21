import style from './Main.module.css';
import { SeecersCard } from './SeecersCard';
import { PostsCard } from './PostsCard';

export function Main () {
    return (
        
        <main className={style.main}>
            <div className={style.job}>
                <div>
                    <h2> Suggested job seekers</h2>
                </div>
                <SeecersCard />
                <div>
                    <h2>Recent job posts</h2>
                </div>
                <PostsCard />
            </div>

        </main> 
    );
}

