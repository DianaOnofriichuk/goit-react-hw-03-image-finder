import './ImageGalleryItem.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <li onClick={toggleModal} className="gallery-item">
        <img
          className="gallery-image"
          src={image.webformatURL}
          alt={image.tags}
        />
      </li>

      {showModal && (
        <Modal toggleModal={toggleModal}>
          <img src={image.largeImageURL} alt={image.tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;
