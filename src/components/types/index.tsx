import ImageBlock from './ImageBlock';
import ImageGalleryBlock from './ImageGalleryBlock';
import TextBlock from './TextBlock';

const types = {
  imageBlock: ({ value }: any) => <ImageBlock {...value} />,
  imageGalleryBlock: ({ value }: any) => <ImageGalleryBlock {...value} />,
  textBlock: ({ value }: any) => <TextBlock {...value} />,
};

export default types;
