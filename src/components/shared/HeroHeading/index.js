import React from "react";
import * as styles from "./page-hero.module.scss";

const HeroHeading = ({ title }) => {
	return <h1 id={styles.pageHero}>{title}</h1>;
};

export default HeroHeading;
