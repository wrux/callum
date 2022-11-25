import { FC } from 'react';
import { PortableTextBlock } from '@portabletext/types';
import { Container, PortableText } from 'components';

interface TextBlockProps {
  content: PortableTextBlock;
}

const TextBlock: FC<TextBlockProps> = ({ content }) => (
  <Container className="my-6 md:my-8 lg:my-12">
    <PortableText value={content} />
  </Container>
);

export default TextBlock;
