import cn from "classnames";
import styles from "./Container.module.sass";

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Container = ({ className, children }: Props) => {
    return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Container;
