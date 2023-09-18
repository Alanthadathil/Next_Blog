import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Buttons/Button";

function page() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let's Keep in Touch</h1>
            <div className="content">
                <div className="imgContainer">
                    <Image
                        src="https://img.freepik.com/free-photo/ai-generated-concept-human_23-2150688415.jpg?t=st=1695051884~exp=1695055484~hmac=ff617e93d35fe5e10336995e5bd8ce7e1b1a7d0c7c937f4521e7173304406fe3&w=740"
                        alt="Image"
                        className={styles.image}
                        height={600}
                        width={500}
                    />
                </div>
                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="name"
                        className={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="email"
                        className={styles.input}
                    />
                    <textarea
                        className={styles.textArea}
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="message"
                    ></textarea>
                    <Button url="#" text="Send" />
                </div>
            </div>
        </div>
    );
}

export default page;
