import { FC } from 'react';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import block from '~/components/block';
import types from '~/components/types';

const components = {
  block,
  types,
};

interface PortableTextProps {
  value: PortableTextBlock;
}

const PortableTextComponent: FC<PortableTextProps> = ({ value }) => (
  <PortableText value={value} components={components} />
);

export default PortableTextComponent;
