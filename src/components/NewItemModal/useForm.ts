import React, { useState } from "react";

export const useForm = () => {
	const initialValues = {
		id: Date.now(),
		name: "",
		category: "",
		quantity: 0,
		price: 0,
		image:
			"http://autosdutriomphe.fr/wp-content/uploads/2018/04/default-image.png",
		description: "",
	};

	const [values, setValues] = useState(initialValues);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleResetForm = () => {
		setValues(initialValues);
	};

	return { values, handleChange, handleResetForm };
};
