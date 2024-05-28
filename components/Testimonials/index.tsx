import Container from "../Container";
import styles from "./Testimonials.module.sass";
import Caption from "../Caption";
import Item from "./Item";
import { testimonials } from "@/constants/testimonials";

type Props = {};

const Testimonials = ({}: Props) => {
    const halfLength = Math.floor(testimonials.length / 2);

    return (
        <div className={styles.testimonials}>
            <Container className={styles.container}>
                <div className={styles.head}>
                    <Caption className={styles.caption}>Wall of love</Caption>
                    <h2 className={styles.title}>Words from our fans</h2>
                </div>
                <div className={styles.inner}>
                    <div className={styles.group}>
                        {testimonials.slice(0, halfLength).map((item) => (
                            <Item item={item} key={item.id} />
                        ))}
                    </div>
                    <div className={styles.group}>
                        {testimonials.slice(halfLength).map((item) => (
                            <Item
                                className={styles.item}
                                item={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;
