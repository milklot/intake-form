import * as yup from "yup";

const formSchema = yup.object().shape({
	name: yup.string().required("missing your name").min(1,"name cannot be blank").max(80 , "invalid name"),
	email: yup.string().email().required("please enter your email").max(80, "invalid email"),
	emailConsent: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
	birthDate: yup.string()
});

export default formSchema;