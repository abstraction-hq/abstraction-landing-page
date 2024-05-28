import cn from "classnames";
import styles from "./Caption.module.sass";

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Caption = ({ className, children }: Props) => {
    return <div className={cn(styles.caption, className)}>{children}</div>;
};

export default Caption;
