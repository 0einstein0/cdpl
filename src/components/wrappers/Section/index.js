import React from "react";
import Container from "../Container";
import * as styles from "./section.module.scss";

const Section = ({ bgImg, clr, title, description, children, id }) => {
	return (
		<section
			className={`container-fluid ${bgImg ? styles.heroBg : ""} 
				${clr ? styles.clrText : ""} `}
			id={id}
		>
			{title && (
				<h2
					className={`text-center text-capitalize ${
						description ? "mb-4" : `${styles.sectionTitle}`
					}`}
				>
					{title}
				</h2>
			)}
			{description && (
				<Container>
					<p className="float-left">{description}</p>
				</Container>
			)}
			{children}
		</section>
	);
};

export default Section;
