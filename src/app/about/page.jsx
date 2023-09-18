import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Buttons/Button";

function page() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://img.freepik.com/free-photo/coworkers-team-working-brainstorming-concept_329181-12029.jpg?w=1380&t=st=1694777525~exp=1694778125~hmac=4f16da99a7ff290c20785abb14c195f5d8832d97d07cacbd684f9f3f907d4fb6"
                    alt="Image"
                    height={400}
                    width={1300}
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>
                        {" "}
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who are You ?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem sunt voluptates saepe, aliquam error beatae eum
                        similique praesentium perspiciatis adipisci ipsam
                        voluptatibus animi recusandae cumque tenetur in et, id
                        asperiores!
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem eveniet autem illum, cupiditate debitis
                        dignissimos animi vitae facere veniam veritatis natus at
                        optio, laborum ut numquam beatae aliquid quo! Odio.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We do ?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ad, harum. Expedita culpa voluptatem, molestiae
                        nisi fuga totam rem eum enim nesciunt consequatur!
                        <br />
                        <br /> - Dynamic Website
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile apps
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    );
}

export default page;
