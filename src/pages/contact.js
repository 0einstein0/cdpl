import React from "react";
import { Layout, Container } from "components/wrappers";
import SectionTitle from "components/shared/SectionTitle";
import ContactForm from "components/utility/ContactForm";
import { content } from "contents/contact";

const Contact = () => {
	return (
		<Layout pageTitle={content.pageTitle}>
			<Container small>
				<SectionTitle title={content.formTitle} />
				<p>{content.description}</p>
				<ContactForm />
			</Container>
		</Layout>
	);
};

export default Contact;
