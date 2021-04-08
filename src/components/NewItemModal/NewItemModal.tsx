import React from "react";
import type { iItemDetail } from "../../App";
import { useForm } from "./useForm";
import { VscClose } from "react-icons/vsc";
import { IoBagAddOutline } from "react-icons/io5";

interface NewItemModalProps {
	openModal: boolean;
	toggleModal: () => void;
	newItem: (newItem: iItemDetail) => void;
}

export function NewItemModal({
	openModal,
	toggleModal,
	newItem,
}: NewItemModalProps) {
	const { values, handleChange, handleResetForm } = useForm();

	// 폼 리셋후 모달 close
	const closeModal = () => {
		handleResetForm();
		toggleModal();
	};

	// 폼 input이 모두 입력된 경우 submit
	const addToInventory = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (values.name && values.category && values.amount) {
			newItem(values);
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
					<form className="new-item">
						<div className="new-item-info">
							<label htmlFor="name">Title</label>
							<input
								type="text"
								id="name"
								name="name"
								value={values.name}
								onChange={handleChange}
								placeholder="Title / Item Name"
								className="form-input"
							/>
						</div>
						<div className="new-item-info">
							<label htmlFor="category">Category</label>
							<select
								name="category"
								id="category"
								className="form-input"
								defaultValue={"default"}
								onChange={handleChange}
							>
								<option value="default" disabled hidden>
									-- what kind of item do you want to add ? --
								</option>
								<option value="fruit">Fruit</option>
								<option value="vegitable">Vegitable</option>
								<option value="dairy">Dairy Products</option>
								<option value="frozen">Frozen</option>
								<option value="etc">etc</option>
							</select>
						</div>
						<div className="new-item-info">
							<label htmlFor="amount">Amount</label>
							<input
								type="text"
								id="amount"
								name="amount"
								value={values.amount}
								onChange={handleChange}
								placeholder="How many do you want to sell?"
								className="form-input"
							/>
						</div>
						<div className="new-item-info">
							<label htmlFor="price">Price</label>
							<input
								type="text"
								id="price"
								name="price"
								value={values.price}
								onChange={handleChange}
								placeholder="How much do you charge for this item?"
								className="form-input"
							/>
						</div>
						<div className="new-item-info">
							<label htmlFor="description">Description</label>
							<textarea
								id="description"
								name="description"
								value={values.description}
								onChange={handleChange}
								placeholder="Please provide the details of your item."
								className="form-input"
							/>
						</div>
						<div className="new-item-info">
							<label htmlFor="image">Image</label>
							<input
								type="file"
								id="image"
								name="image"
								onChange={uploadImage}
							/>
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
