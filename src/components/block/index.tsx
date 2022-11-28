import { PortableTextBlockComponent } from '@portabletext/react';
import type { PortableTextBlockStyle } from '@portabletext/types';

const block: Record<
  PortableTextBlockStyle,
  PortableTextBlockComponent | undefined
> = {
  normal: ({ children }) => (
    <p className="my-2 md:my-3 c-p max-w-prose">{children}</p>
  ),
  h2: ({ children }) => (
    <h2 className="mt-6 mb-3 c-h2 md:mt-12 md:mb-6 max-w-prose">{children}</h2>
  ),
  h3: ({ children }) => <h3 className="c-h3 max-w-prose">{children}</h3>,
  h4: ({ children }) => <h4 className="c-h4 max-w-prose">{children}</h4>,
};

export default block;