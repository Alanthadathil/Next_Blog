import Image from "next/image";
import style from "./page.module.css";
import Hero from "public/hero.jpg";

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <h1 className={style.title}>
                    Better design for your digital products.
                </h1>
                <p className={style.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                    cum ullam maiores
                </p>
                <button className={style.button}>See my works</button>
            </div>
            <div className={style.item}>
                <Image src={Hero} className={style.img} />
            </div>
        </div>
    );
}
