import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

function Portfolio() {
    return (
        <div className={styles.container}>
            <div className="selectTitle">Choose a gallery</div>
            <div className="items">
                <Link href="/portfolio/illustrations" className="item">
                    <span className="title"> illustrations</span>
                </Link>
                <Link href="/portfolio/websites" className="item">
                    <span className="title"> illustrations</span>
                </Link>
                <Link href="/portfolio/applications" className="item">
                    <span className="title"> illustrations</span>
                </Link>
            </div>
        </div>
    );
}

export default Portfolio;
