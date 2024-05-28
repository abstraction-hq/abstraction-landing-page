import Icon from "../Icon";
import styles from "./Subscribe.module.sass";

type Props = {};

const Subscribe = () => {
    return (
        <div className={styles.subscribe}>
            <h2 className={styles.title}>Subscribe</h2>
            <p className={styles.text}>
                Sign up to our newsletter for feature updates and our undying
                love.
            </p>
            <form className={styles.form}>
                <input
                    type="email"
                    placeholder="youremail@domain.com"
                    required
                />
                <button type="submit">
                    <Icon name="send" />
                </button>
            </form>
        </div>
    );
};

export default Subscribe;
