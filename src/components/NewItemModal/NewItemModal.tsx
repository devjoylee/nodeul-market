import React, { useRef, useState } from "react";
import type { iItemDetail } from "../../App";
import { useForm } from "./useForm";
import validate, { ErrorMessage } from "./validation";
import { VscClose } from "react-icons/vsc";
import { IoBagAddOutline } from "react-icons/io5";
import { useImage } from "./useImage";

interface NewItemModalProps {
	openModal: boolean;
	toggleModal: () => void;
	addToInventory: (newItem: iItemDetail) => void;
}

export function NewItemModal({
	openModal,
	toggleModal,
	addToInventory,
}: NewItemModalProps) {
	const { values, handleChange, handleResetForm } = useForm();
	const [errors, setErrors] = useState({} as ErrorMessage);

	const fileImageRef = useRef<HTMLInputElement>(null);

	const { preview, handleImageURL, handleRemoveImage } = useImage();

	// 폼 리셋후 모달 close
	const closeModal = () => {
		const select = document.getElementById("category") as HTMLSelectElement;

		select.selectedIndex = 0; // select option reset
		handleRemoveImage(); // image reset
		handleResetForm(); // form value reset
		setErrors({}); // error reset
		toggleModal(); // close modal
	};

	// 폼 input이 모두 입력된 경우 submit
	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const error = await validate(values);
		const hasInvaild = Object.keys(error).length;
		setErrors(error);

		// store the uploaded image
		if (preview) {
			values.image = preview;
		}

		// if all vaildation is passed, add to inventory
		if (!hasInvaild) {
			addToInventory(values);
			closeModal();
		}
	};

	const handleAddImage = (e) => {
		e.preventDefault();
		fileImageRef.current?.click();
	};

	return (
		<>
			<div className={openModal ? "modal modal-open" : "modal"}>
				<section className="modal__content">
					<button className="modal__closebtn" onClick={() => closeModal()}>
						<VscClose />
					</button>
					<h2 className="modal__title">- New Item -</h2>
					<form>
						<div className="form-item">
							<label htmlFor="name">Title</label>
							<div className="input-wrapper">
								<input
									type="text"
									id="name"
									name="name"
									value={values.name}
									onChange={handleChange}
									placeholder="Title / Item Name"
									className="item-input"
								/>
								{errors.name && <p className="error">{errors.name}</p>}
							</div>
						</div>
						<div className="form-item">
							<label htmlFor="category">Category</label>
							<div className="input-wrapper">
								<select
									name="category"
									id="category"
									className="item-input"
									defaultValue={"default"}
									onChange={handleChange}
								>
									<option value="default" disabled hidden>
										-- select an item group --
									</option>
									<option value="fruit">Fruit</option>
									<option value="dairy">Dairy Products</option>
									<option value="vegitable">Vegitable</option>
									<option value="frozen">Frozen</option>
									<option value="etc">etc</option>
								</select>
								{errors.category && <p className="error">{errors.category}</p>}
							</div>
						</div>
						<div className="form-item">
							<label htmlFor="quantity">Quantity</label>
							<div className="input-wrapper">
								<input
									type="number"
									id="quantity"
									name="quantity"
									value={values.quantity}
									onChange={handleChange}
									placeholder="Enter the number of items"
									className="item-input"
								/>
								{errors.quantity && <p className="error">{errors.quantity}</p>}
							</div>
						</div>
						<div className="form-item">
							<label htmlFor="price">
								Price <span className="optional">(optional)</span>
							</label>
							<div className="input-wrapper">
								<input
									type="number"
									id="price"
									name="price"
									value={values.price}
									onChange={handleChange}
									placeholder="Enter the cost of an item"
									className="item-input"
								/>
							</div>
						</div>
						<div className="form-item">
							<label htmlFor="description">
								Description <span className="optional">(optional)</span>
							</label>
							<div className="input-wrapper">
								<textarea
									id="description"
									name="description"
									value={values.description}
									onChange={handleChange}
									placeholder="Please provide the details of your item."
									className="item-input"
								/>
							</div>
						</div>
						<div className="form-item">
							<label htmlFor="image">
								Image <span className="optional">(optional)</span>
							</label>
							<div className="input-wrapper">
								<div className="preview-box">
									{preview ? (
										<img
											src={preview}
											alt="preview"
											onClick={() => {
												handleRemoveImage();
											}}
										/>
									) : (
										<button onClick={(e) => handleAddImage(e)}>+</button>
									)}
								</div>
								<input
									type="file"
									id="image"
									name="image"
									accept="image/*"
									ref={fileImageRef}
									onChange={(e) => {
										handleImageURL(e);
									}}
								/>
							</div>
						</div>
						<button
							type="submit"
							className="submit-btn btn"
							onClick={(e) => {
								handleSubmit(e);
							}}
						>
							<IoBagAddOutline />
							ADD TO INVENTORY
						</button>
					</form>
				</section>
				<div className="overlay" onClick={() => closeModal()}></div>
			</div>
		</>
	);
}
