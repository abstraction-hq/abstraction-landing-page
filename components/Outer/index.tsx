import styles from "./Outer.module.sass";

type Props = {
    children: React.ReactNode;
};

const Outer = ({ children }: Props) => (
    <div className={styles.outer}>{children}</div>
);

export default Outer;
