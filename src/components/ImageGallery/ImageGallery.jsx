import './ImageGallery.css';
import { useState, useEffect } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

const ImageGallery = ({ imageName }) => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [pageCounter, setPageCounter] = useState(1);

  useEffect(() => {
    setStatus('pending');
    const KEY = '24505023-aa89cf58f0072335e9d83656d';
    fetch(
      `https://pixabay.com/api/?key=${KEY}&q=${imageName}&image_type=photo&page=${pageCounter}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error());
      })
      .then(images => {
        if (images.hits.length === 0) {
          alert(`Image with name ${imageName} not found`);
        }
        setImages(images.hits);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('reject');
      });
  }, [imageName, pageCounter]);

  const onNextClick = () => {
    setPageCounter(pageCounter + 1);
  };

  const onPreviousClick = () => {
    setPageCounter(pageCounter - 1);
  };

  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'reject') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved') {
    return (
      <>
        <ul className="gallery">
          {images.map(image => {
            return <ImageGalleryItem key={image.id} image={image} />;
          })}
        </ul>

        {images.length >= 20 && (
          <Button
            pageCounter={pageCounter}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
          />
        )}
      </>
    );
  }
};

export default ImageGallery;
