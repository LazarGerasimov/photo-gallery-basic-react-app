
import styles from './AddPhoto.module.css';

export const AddPhoto = () => {
    return (
        <div className={styles["log-form"]}>
            <h2>Upload your photo</h2>
            <form className={styles["register"]}>

                <input type="text" title="title" placeholder="title" />

                {/* <p className={styles["error"]} >
                    Title is required!
                </p> */}

                <input type="text" placeholder="description" />

                {/* <p className={styles["error"]} >
                    Description is required!
                </p > */}

                {/* <p className={styles["error"]} >
                    Description must be at least 10 symbols!
                </p > */}

                <input type="text" placeholder="price" />

                {/* <p className={styles["error"]} >
                    Price must be at least 5 GBP!
                </p > */}

                <input type="text" title="img" placeholder="imageUrl" />

                {/* <p className={styles["error"]} >
                    Image URL is required!
                </p > */}

                <button type="submit" className={styles["btn"]}>Upload</button>

            </form >
        </div >
    )
}