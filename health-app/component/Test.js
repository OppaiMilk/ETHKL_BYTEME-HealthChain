import React, { useState } from 'react';
import Modal from 'react-modal';

function MyComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Book Consultation</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="示例模态框"
      >
        <h2>这是一个模态框</h2>
        <button onClick={closeModal}>关闭模态框</button>
      </Modal>
    </div>
  );
}

export default MyComponent;