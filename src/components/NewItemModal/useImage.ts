import { useState, useEffect } from "react";

export const useImage = () => {
	const [image, setImage] = useState<File>();
	const [preview, setPreview] = useState<string>();

	const handleImageURL = (e) => {
		if (!e.target.files) return;

		const file = e.target.files[0];

		if (file && file.type.substr(0, 5) === "image") {
			setImage(file);
		}
	};

	const handleRemoveImage = () => {
		setImage(undefined);
	};

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result as string);
			};
			reader.readAsDataURL(image);
		} else {
			setPreview(undefined);
		}
	}, [image]);

	return {
		preview,
		handleImageURL,
		handleRemoveImage,
	};
};
