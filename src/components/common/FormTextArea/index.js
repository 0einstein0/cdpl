import React from "react";
import * as styles from "./form-textarea.module.scss";

const FormTextArea = ({ label, name, error, value, placeholder, onChange, ...props }) => {
	const handleChange = (e) => {
		onChange && onChange(e.target.value);
	};

	return (
		<>
			{label && <label className={styles.formFieldLabel}>{label}</label>}
			<textarea
				name={name}
				className={`form-control ${styles.formField} ${
					error === true ? "border border-danger" : ""
				}`}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
				rows={5}
				{...props}
			></textarea>
		</>
	);
};

export default FormTextArea;
