import { FC } from 'react';
import { PortableTextBlock } from '@portabletext/types';
import { Container, PortableText } from 'components';

interface TextBlockProps {
  content: PortableTextBlock;
}

const TextBlock: FC<TextBlockProps> = ({ content }) => (
  <Container>
    <PortableText value={content} />
  </Container>
);

export default TextBlock;
