import { Element } from "react-scroll";
import styles from "./Hero.module.sass";
import Container from "../Container";
import Caption from "../Caption";
import Button from "../Button";
import Image from "next/image";

type Props = {
    onLoadindComplete: () => void;
};

const Hero = ({ onLoadindComplete }: Props) => {
    return (
        <Element className={styles.hero} name="home">
            <Container>
                <div className={styles.inner}>
                    <Caption className={styles.caption}>Video editing</Caption>
                    <h1 className={styles.title}>Amazingly simple</h1>
                    <p className={styles.text}>
                        We designed XORA AI Video Editor to be an easy to use,
                        quick to learn and surprisingly powerful.
                    </p>
                    <Button icon="zap-fast">Try it now</Button>
                </div>
                <div className={styles.preview}>
                    <Image
                        src="/images/hero.png"
                        width={1230}
                        height={1230}
                        quality={100}
                        onLoadingComplete={onLoadindComplete}
                        alt="Hero"
                    />
                </div>
            </Container>
        </Element>
    );
};

export default Hero;
