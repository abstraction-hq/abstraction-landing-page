import cn from "classnames";
import styles from "./Socials.module.sass";
import Icon from "../Icon";
import { socials } from "@/constants/socials";

type Props = {
    className?: string;
    small?: boolean;
};

const Socials = ({ className, small }: Props) => (
    <ul className={cn(styles.socials, className, { [styles.small]: small })}>
        {socials.map((social) => (
            <li key={social.id}>
                <a href={social.url}>
                    <Icon name={social.icon} />
                </a>
            </li>
        ))}
    </ul>
);

export default Socials;
