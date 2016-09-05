// create Image List
// import React
import React from 'react';
import ImageDetail from './image_detail';

// Create Image List component
const ImageList = (props) => {

  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image =>
    <ImageDetail key={image.title} image={image} />
  );

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// Export component
export default ImageList;
