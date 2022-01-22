import React, { useState } from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const initialState = {
	name: "",
	email: "",
	birthDate: "",
	emailConsent: false,
};

const ContactForm = (props) => {

	const [contactPerson, setContactPerson] = useState(initialState);

	const changeHandler = (event) => {
		setContactPerson({
			...contactPerson,
			[event.target.name]: event.target.value
		});
	};


	const submitForm = (event) => {
		event.preventDefault();
		console.log(contactPerson);
	};

	const clearForm = (event) => {
		event.preventDefault();
		setContactPerson(initialState)
	};


	return (
		<>
			<Form onSubmit={submitForm} className="contact-form-container">
				<FormGroup>
					<Label for="name">Name</Label>
					<Input
						type="text"
						name="name"
						id="name"
						placeholder="enter your name"
						value={contactPerson.name}
						onChange={changeHandler}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="email">Email</Label>
					<Input
						type="email"
						name="email"
						id="email"
						placeholder="enter your email"
						value={contactPerson.email}
						onChange={changeHandler}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="birthDate">Date of Birth</Label>
					<Input
						type="date"
						name="birthDate"
						id="birthDate"
						placeholder="enter your Date of Birth"
						value={contactPerson.birthDate}
						onChange={changeHandler}
					/>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input 
							type="checkbox"
							name="emailConsent"
							id="emailConsent"
							onChange={changeHandler}
						/>
						I agree to be contacted via email.
					</Label>
				</FormGroup>
				<Button
					type="clear"
					className="contact-form-btn"
					onClick={clearForm}
				>
					Clear
				</Button>
				<Button
					type="submit"
					className="contact-form-btn"
				>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default ContactForm;