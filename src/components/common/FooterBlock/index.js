import React from "react";
import * as styles from "./footer-block.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ButtonPrimary from "components/common/ButtonPrimary";
const FooterBlock = ({ icon, title, phone, email, btnText, blurb }) => {
	return (
		<div className=" row text-center mb-0 d-flex justify-content-center justify-content-sm-center mx-0">
			<div>
				{icon && <img src={icon} alt="cdpl_logo" className="img-fluid " style={{ width: "30%" }} />}
				<h2 className={styles.footerBlockTitle}>{title}</h2>
				{email && (
					<div>
						<a href={`mailto:${email}`} className="text-muted text-decoration-none">
							<FontAwesomeIcon icon={faEnvelope} /> <span className="ms-2">{email}</span>
						</a>
					</div>
				)}
				{phone && (
					<div>
						<a href={`tel:${phone}`} className="text-muted text-decoration-none">
							<FontAwesomeIcon icon={faPhone} /> <span className="ms-1">{phone}</span>
						</a>
					</div>
				)}
				<p className={styles.footerBlockBlurb}>{blurb}</p>
				{btnText && <ButtonPrimary title={btnText} />}
			</div>
		</div>
	);
};

export default FooterBlock;
