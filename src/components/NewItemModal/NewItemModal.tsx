import React, { useState } from "react";
import type { iItemDetail } from "../../App";
import { useForm } from "./useForm";
import validate, { ErrorMessage } from "./validation";
import { VscClose } from "react-icons/vsc";
import { IoBagAddOutline } from "react-icons/io5";

interface NewItemModalProps {
	openModal: boolean;
	toggleModal: () => void;
	getNewItem: (newItem: iItemDetail) => void;
}

export function NewItemModal({
	openModal,
	toggleModal,
	getNewItem,
}: NewItemModalProps) {
	const { values, handleChange, handleResetForm } = useForm();
	const [errors, setErrors] = useState({} as ErrorMessage);

	// 폼 리셋후 모달 close
	const closeModal = () => {
		handleResetForm();
		toggleModal();
	};

	// 폼 input이 모두 입력된 경우 submit
	const addToInventory = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const error = await validate(values);
		const hasInvaild = Object.keys(error).length;
		setErrors(error);
		console.log(errors);

		if (!hasInvaild) {
			getNewItem(values);
			closeModal();
		}
	};

	const uploadImage = () => {
		const imgInput = document.getElementById("image")! as HTMLInputElement;
		if (imgInput.files && imgInput.files[0]) {
			const reader = new FileReader();
			reader.onload = (e) => {
				console.log(e.target?.result);
			};
			reader.readAsDataURL(imgInput.files[0]);
			console.log(values.image);
		}
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
										-- what kind of item do you want to add ? --
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
							<label htmlFor="amount">Amount</label>
							<div className="input-wrapper">
								<input
									type="text"
									id="amount"
									name="amount"
									value={values.amount}
									onChange={handleChange}
									placeholder="How many do you want to sell?"
									className="item-input"
								/>
								{errors.amount && <p className="error">{errors.amount}</p>}
							</div>
						</div>
						<div className="form-item">
							<label htmlFor="price">
								Price <span className="optional">(optional)</span>
							</label>
							<div className="input-wrapper">
								<input
									type="text"
									id="price"
									name="price"
									value={values.price}
									onChange={handleChange}
									placeholder="How much do you charge for this item?"
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
								<input
									type="file"
									id="image"
									name="image"
									onChange={uploadImage}
								/>
							</div>
						</div>
						<button
							type="submit"
							className="submit-btn btn"
							onClick={(e) => {
								addToInventory(e);
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
