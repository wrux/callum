import { PortableTextBlock } from '@portabletext/types';
import { FC } from 'react';

import { PortableText, Section } from '~/components';

interface TextBlockProps {
  content: PortableTextBlock;
}

const TextBlock: FC<TextBlockProps> = ({ content }) => (
  <Section>
    <div className="px-5 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 md:px-0">
      <PortableText value={content} />
    </div>
  </Section>
);

export default TextBlock;
