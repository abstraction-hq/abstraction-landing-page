import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link as LinkScroll } from "react-scroll";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import cn from "classnames";
import styles from "./Header.module.sass";
import Container from "../Container";
import Icon from "../Icon";
import Socials from "../Socials";
import { navigation } from "@/constants/navigation";

const Header = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setScrolled(window.scrollY > 32);
    }, []);

    useScrollPosition(
        ({ currPos }) => setScrolled(currPos.y < -32),
        [scrolled]
    );

    const toggleMenu = () => {
        if (open) {
            setOpen(false);
            enablePageScroll();
        } else {
            setOpen(true);
            disablePageScroll();
        }
    };

    const closeMenu = () => {
        if (open) {
            setOpen(false);
            enablePageScroll();
        }
    };

    const NavLink = ({ index }: { index: number }) => (
        <LinkScroll
            onClick={closeMenu}
            activeClass={styles.active}
            to={navigation[index].element}
            offset={navigation[index].offset}
            spy
        >
            {navigation[index].title}
        </LinkScroll>
    );

    return (
        <header className={cn(styles.header, { [styles.scrolled]: scrolled })}>
            <Container className={styles.container}>
                <LinkScroll className={styles.logo} to="home">
                    <Image
                        src="/images/xora.svg"
                        width={162}
                        height={56}
                        alt="Xora"
                    />
                </LinkScroll>
                <div className={cn(styles.wrapper, { [styles.open]: open })}>
                    <div className={styles.inner}>
                        <nav className={styles.nav}>
                            <ul>
                                <li>
                                    <NavLink index={0} />
                                    <div className={styles.dot}></div>
                                    <NavLink index={1} />
                                </li>
                                <li>
                                    <NavLink index={2} />
                                    <div className={styles.dot}></div>
                                    <NavLink index={3} />
                                </li>
                            </ul>
                        </nav>
                        <Socials className={styles.socials} small />
                        <div className={styles.background}>
                            <Image
                                src="/images/bg-outlines.svg"
                                width={960}
                                height={380}
                                alt="Outlines"
                            />
                            <Image
                                src="/images/bg-outlines-fill.png"
                                width={960}
                                height={380}
                                alt="Fill"
                            />
                        </div>
                    </div>
                </div>
                <button
                    className={cn(styles.burger, { [styles.active]: open })}
                    onClick={toggleMenu}
                >
                    <Icon name="magic" />
                    <Icon name="close" />
                </button>
            </Container>
        </header>
    );
};

export default Header;
