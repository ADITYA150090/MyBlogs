import styles from './CreatePost.module.css';

function CreatePost() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Create New Post</h1>
                <p className={styles.subtitle}>Share your thoughts with the world</p>
            </header>

            <main className={styles.main}>
                <form className={styles.form}>
                    <input 
                        type="text"
                        placeholder="Post Title"
                        className={styles.input}
                    />
                    <textarea 
                        placeholder="Write your post content..."
                        className={styles.textarea}
                    />
                    <button 
                        type="submit"
                        className={styles.button}
                    >
                        Publish Post
                    </button>
                </form>
            </main>
        </div>
    );
}

export default CreatePost;