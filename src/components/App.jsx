import { useState } from 'react';
import './App.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [imageName, setImageName] = useState('');

  const onSubmit = imageName => {
    setImageName(imageName);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={onSubmit}></Searchbar>
      <ImageGallery imageName={imageName}></ImageGallery>
    </div>
  );
};

export default App;
