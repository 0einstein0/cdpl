import React from "react";
import * as styles from "./form-input.module.scss";

const FormInput = ({ label, type, name, value, placeholder, onChange, ...props }) => {
	const handleChange = (e) => {
		onChange && onChange(e.target.value);
	};

	return (
		<>
			{label && <label className={styles.formFieldLabel}>{label}</label>}
			<input
				type={type}
				name={name}
				className={`form-control ${styles.formField}`}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
				{...props}
			/>
		</>
	);
};

export default FormInput;
