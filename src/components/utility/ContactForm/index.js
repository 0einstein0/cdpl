import React, { useState } from "react";
import "../../../scss/main.scss";
import { FormInput, FormTextArea } from "components/common";

const ContactForm = () => {
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [subject, setsubject] = useState("");
	const [message, setmessage] = useState("");
	const [isSending, setisSending] = useState(false);
	const [formSuccess, setformSuccess] = useState();
	return (
		<form className="px-4">
			<FormInput
				type="text"
				name="full-name"
				value={name}
				placeholder="Name*"
				onChange={setname}
				required
			/>
			<FormInput
				type="email"
				name="email-address"
				value={email}
				placeholder="Email*"
				onChange={setemail}
				required
			/>

			<FormInput
				type="text"
				name="subject"
				value={subject}
				placeholder="Subject*"
				onChange={setsubject}
				required
			/>

			<FormTextArea
				name="message"
				value={message}
				placeholder="Message*"
				onChange={setmessage}
				required
			/>

			<div className="mb-4">
				<button type="submit" className="formBtn text-white w-100">
					Send
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
