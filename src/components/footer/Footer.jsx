import React from "react";
import style from "./footer.module.css";
import Image from "next/image";

function Footer() {
    return (
        <div className={style.container}>
            <div>&#169;2023 Alan. All rights reserved.</div>
            <div>
                <Image src="linkedin.svg" width={15} height={15} alt="Alan" />
            </div>
            <div className={style.imgContainer}>
                <Image src="instagram.svg" width={15} height={15} alt="Alan" />
            </div>
            <div className={style.imgContainer}>
                <Image src="facebook.svg" width={15} height={15} alt="Alan" />
            </div>
        </div>
    );
}

export default Footer;
