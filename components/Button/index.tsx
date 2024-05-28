import Link from "next/link";
import cn from "classnames";
import styles from "./Button.module.sass";
import Icon from "../Icon";

type Props = {
    className?: string;
    icon?: string;
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    themeBlue?: boolean;
    themeGreen?: boolean;
};

const Button = ({
    className,
    icon,
    href,
    onClick,
    children,
    themeBlue,
    themeGreen,
}: Props) => {
    const classNames = cn(styles.button, className, {
        [styles.themeBlue]: themeBlue,
        [styles.themeGreen]: themeGreen,
    });

    const Inner = () => (
        <>
            <span className={styles.inner}>
                {icon && (
                    <span className={styles.icon}>
                        <Icon name={icon} />
                    </span>
                )}
                <span className={styles.title}>{children}</span>
            </span>
            <span className={styles.glows}></span>
        </>
    );

    return href ? (
        <Link className={classNames} href={href}>
            <Inner />
        </Link>
    ) : (
        <button className={classNames} onClick={onClick}>
            <Inner />
        </button>
    );
};

export default Button;
