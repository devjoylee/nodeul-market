import { iItemDetail } from "../../App";

export type ErrorMessage = {
	name?: string;
	category?: string;
	amount?: string;
};

export default function validate(values: iItemDetail) {
	let errors: ErrorMessage = {};

	// name
	if (!values.name) {
		errors.name = "you should enter the item name.";
	}

	// category
	if (!values.category) {
		errors.category = "you should select a category.";
	}

	// amount
	if (!values.amount) {
		errors.amount = "you should put the number of items.";
	}

	return errors;
}
