import React from "react";
import * as styles from "./section-title.module.scss";

const SectionTitle = ({
	title
}) => { return (
    <h2 id={styles.sectionTitle}>
      {title}
    </h2>
  );
};

export default SectionTitle;