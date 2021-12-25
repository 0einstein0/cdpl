import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as styles from "./buttons.module.scss";

const ButtonPrimary = ({ title, buttonLink }) => {
	return (
		<AnchorLink to={`${buttonLink ? buttonLink : "/contact"}`}>
			<button className={styles.btnPrimary}>{title}</button>
		</AnchorLink>
	);
};

export default ButtonPrimary;
