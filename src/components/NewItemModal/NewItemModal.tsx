import React from "react";
import type { iItemDetail } from "../../App";
import { useForm } from "./useForm";

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
	const { values, handleChange, handleSubmit } = useForm();

	// 아이템 추가 버튼 클릭 시, 모달 닫히고 아이템 등록
	const addToInventory = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (values.name) {
			handleSubmit(e);
			newItem(values);
			toggleModal();
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
			{openModal && (
				<div className="modal">
					<section className="modal__content">
						<button onClick={() => toggleModal()}>닫기</button>
						<form className="new-item">
							<div className="new-item-info">
								<label htmlFor="name">상품명</label>
								<input
									type="text"
									id="name"
									name="name"
									value={values.name}
									onChange={handleChange}
									placeholder="상품명"
								/>
							</div>
							<div className="new-item-info">
								<label htmlFor="image">이미지</label>
								<input
									type="file"
									id="image"
									name="image"
									onChange={uploadImage}
								/>
							</div>
							<div className="new-item-info">
								<label htmlFor="category">카테고리</label>
								<input
									type="text"
									id="category"
									name="category"
									value={values.category}
									onChange={handleChange}
									placeholder="카테고리"
								/>
							</div>
							<div className="new-item-info">
								<label htmlFor="amount">수량</label>
								<input
									type="text"
									id="amount"
									name="amount"
									value={values.amount}
									onChange={handleChange}
								/>
							</div>
							<div className="new-item-info">
								<label htmlFor="price">가격</label>
								<input
									type="text"
									id="price"
									name="price"
									value={values.price}
									onChange={handleChange}
									placeholder="가격 입력(선택사항)"
								/>
							</div>
							<div className="new-item-info">
								<label htmlFor="description">상세내용</label>
								<textarea
									rows={5}
									id="description"
									name="description"
									value={values.description}
									onChange={handleChange}
									placeholder="내용을 입력해주세요"
								/>
							</div>
							<button
								type="submit"
								className="submit"
								onClick={(e) => {
									addToInventory(e);
								}}
							>
								아이템 추가
							</button>
						</form>
					</section>
					<div className="modal__overlay"></div>
				</div>
			)}
		</>
	);
}
