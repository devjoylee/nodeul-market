import React from 'react';

interface NewItemModalProps {
  openModal: boolean;
  toggleModal: () => void;
}

export function NewItemModal({ openModal, toggleModal }: NewItemModalProps) {
  return (
    <>
      {openModal && (
        <div className="new-item">
          모달창
          <button onClick={() => toggleModal()}>닫기</button>
        </div>
      )}
    </>
  );
}
