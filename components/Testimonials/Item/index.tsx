import Image from "next/image";
import cn from "classnames";
import styles from "./Item.module.sass";

type Props = {
    className?: string;
    item: {
        id: string;
        name: string;
        role: string;
        avatarUrl: string;
        comment: string;
    };
};

const Item = ({ className, item }: Props) => (
    <div className={cn(styles.item, className)}>
        <blockquote className={styles.quote}>{item.comment}</blockquote>
        <div className={styles.details}>
            <div className={styles.avatar}>
                <Image
                    src={item.avatarUrl}
                    width={64}
                    height={64}
                    alt={item.name}
                />
            </div>
            <div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.role}>{item.role}</div>
            </div>
        </div>
    </div>
);

export default Item;
