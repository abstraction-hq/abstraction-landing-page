import Image from "next/image";
import styles from "./Download.module.sass";
import Container from "../Container";
import Icon from "../Icon";
import { logos, links } from "@/constants/download";
import { Element } from "react-scroll";

type Props = {};

const Download = ({}: Props) => {
    return (
        <Element className={styles.download} name="download">
            <Container>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.logo}>
                            <Image
                                src="/images/xora.svg"
                                width={162}
                                height={56}
                                alt="Xora"
                            />
                        </div>
                        <div className={styles.text}>
                            Try it now for free on iOS, Android, PC, Web -
                            whatever your flavor, we’ve got you covered.
                        </div>
                        <ul className={styles.socials}>
                            {links.map((link) => (
                                <li key={link.id}>
                                    <a href={link.url}>
                                        <Icon name={link.icon} size={32} />
                                        <span className="icon-frame"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.preview}>
                            <div className={styles.screen}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <Image
                                    src="/images/screen.jpg"
                                    width={856}
                                    height={654}
                                    alt="Screen"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={styles.logos}>
                    {logos.map((logo) => (
                        <li key={logo.id}>
                            <Image
                                src={logo.url}
                                width={logo.width}
                                height={logo.height}
                                alt={logo.title}
                            />
                        </li>
                    ))}
                </ul>
            </Container>
        </Element>
    );
};

export default Download;
