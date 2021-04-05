import React from 'react';
import { useForm } from './useForm';

interface NewItemModalProps {
  openModal: boolean;
  toggleModal: () => void;
}

export function NewItemModal({ openModal, toggleModal }: NewItemModalProps) {
  const { values, handleChange, handleSubmit } = useForm();

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
                />
              </div>
              <button
                type="submit"
                className="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  toggleModal();
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
