import { PortableTextTextBlock } from 'sanity';

export function previewStructuredText(
  content: PortableTextTextBlock[]
): string | null {
  const firstBlock = content.find((block) => block._type === 'block');
  return (
    firstBlock?.children
      ?.filter((child) => child._type === 'span')
      ?.map((span) => span.text)
      ?.join('') || null
  );
}
