import BlogList from '../../components/BlogList';
import BlogPost from '../../components/BlogPost';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Welcome to BlogApp</h1>
                <p className={styles.subtitle}>Discover interesting stories and ideas</p>
            </header>

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h2>Featured Story</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente culpa obcaecati provident a nihil qui autem optio commodi? Explicabo, quisquam excepturi consectetur est ut voluptas recusandae perspiciatis, modi repellendus quibusdam doloribus incidunt voluptates similique magnam dignissimos laboriosam adipisci obcaecati perferendis praesentium asperiores ab quia quo animi. Non itaque facere iste impedit fuga reiciendis veritatis quasi qui temporibus cum dicta mollitia exercitationem, quaerat dignissimos aut aliquid doloremque beatae voluptates ut maiores dolore. Aliquam eum quibusdam iusto nemo porro, ipsam molestiae, doloremque obcaecati dignissimos qui quaerat possimus eveniet amet corrupti! Amet voluptates nam esse itaque ea consequatur maiores rerum. Sint, maiores error!</p>
                    </div>
                    <div className={styles.heroImage}>
                        <img src="https://i.pinimg.com/736x/2e/7e/e5/2e7ee58125c4b42cc7387887eb350580.jpg" alt="Featured post" />
                    </div>
                </section>




                {/* Featured Posts Grid */}
                <section className={styles.featuredGrid}>
                    <div className={styles.gridItem}>
                        <img src="https://i.pinimg.com/originals/f5/36/01/f53601133f236d1cb167ac19f05a3d60.gif" alt="Blog post" />
                        <h3>Getting Started with Web Development</h3>
                        <p>Learn the fundamentals of modern web development...</p>
                    </div>
                    <div className={styles.gridItem}>
                        <img src="https://i.pinimg.com/736x/8c/14/96/8c14961f94aea51d7fdede5bed32961a.jpg" alt="Blog post" />
                        <h3>Design Principles</h3>
                        <p>Master the core principles of effective design...</p>
                    </div>
                    <div className={styles.gridItem}>
                        <img src="https://i.pinimg.com/736x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg" alt="Blog post" />
                        <h3>Tech Trends 2024</h3>
                        <p>Stay ahead with the latest technology trends...</p>
                    </div>
                    <div className={styles.gridItem}>
                        <img src="https://i.pinimg.com/736x/f4/78/07/f47807ddeb923c9a1c61cef3e0e732f8.jpg" alt="Blog post" />
                        <h3>Tech Trends 2024</h3>
                        <p>Stay ahead with the latest technology trends...</p>
                    </div>
                    <div className={styles.gridItem}>
                        <img src="https://i.pinimg.com/originals/6c/ec/43/6cec43366597fe72f85b8a81f9ecb455.gif" alt="Blog post" />
                        <h3>Tech Trends 2024</h3>
                        <p>Stay ahead with the latest technology trends...</p>
                    </div>
                    <div className={styles.gridItem}>
                        <img src="https://i.pinimg.com/736x/11/f7/86/11f78684a8b67b2e199aab82017653f6.jpg" alt="Blog post" />
                        <h3>Tech Trends 2024</h3>
                        <p>Stay ahead with the latest technology trends...</p>
                    </div>
                </section>

                {/* Blog Posts Cards */}
                <section className={styles.blogCards}>
                    <h2>Latest Posts</h2>
                    <div className={styles.cardsGrid}>
                       
                    </div>
                </section>
            </main>
            
        </div>
    );
}

export default Home;