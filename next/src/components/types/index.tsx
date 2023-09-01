import ImageBlock from './ImageBlock';
import ImageGalleryBlock from './ImageGalleryBlock';
import InlineImagesBlock from './InlineImagesBlock';
import TextBlock from './TextBlock';

const types = {
  imageBlock: ({ value }: any) => <ImageBlock {...value} />,
  imageGalleryBlock: ({ value }: any) => <ImageGalleryBlock {...value} />,
  inlineImagesBlock: ({ value }: any) => <InlineImagesBlock {...value} />,
  textBlock: ({ value }: any) => <TextBlock {...value} />,
};

export default types;
