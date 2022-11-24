import ImageBlock from './ImageBlock';
import TextBlock from './TextBlock';

const types = {
  imageBlock: ({ value }: any) => <ImageBlock {...value} />,
  textBlock: ({ value }: any) => <TextBlock {...value} />,
};

export default types;
