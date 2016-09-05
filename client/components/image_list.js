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
  const RenderedImages = IMAGES.map(image =>
    return <ImageDetail key={image.title} image={image} />
  );

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// Export component
export default ImageList;
