import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import UIOverlay from './components/Gallery/UIOverlay';
import CustomCursor from './components/CustomCursor';

import Gallery from './pages/Gallery';
import Work from './pages/Work';
import GalleryAudio from './components/Gallery/GalleryAudio';
import { useState, useEffect } from 'react';

function App() {
  const [showUI, setShowUI] = useState(true);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key.toLowerCase() === 'h') {
        setShowUI((prev) => !prev);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <BrowserRouter>
      <CustomCursor />
      <Header showUI={showUI} />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Gallery />
              {showUI && <UIOverlay />}
            </>
          }
        />

        <Route path='/work' element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
