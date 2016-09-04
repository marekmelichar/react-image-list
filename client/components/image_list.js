// create Image List
// import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'Pen', link: 'http://dummyimage.com/600x400' },
  { title: 'Pine tree', link: 'http://dummyimage.com/600x400' },
  { title: 'Mug', link: 'http://dummyimage.com/600x400' }
];

// Create Image List component
const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image) {
    return <ImageDetail />
  });

  return (
    <ul>
      {RenderedImages}
    </ul>
  );
};

// Export component
export default ImageList;
